'use client';
import { useEffect, useState } from 'react';
import { fetchBoolean, fetchData, getToken } from '@/utils/utils';
import { Image } from 'react-bootstrap';
import { toBase64 } from '@/utils/clientUtils';
import '../../menu/components/AdminMenu.css';
import { Employee } from '@/utils/dataTypes/EmployeeData';

export default function AddEmployee({ show, onClose, editData }: { show: boolean, onClose: () => void, editData: Employee | null, }) {

  const [name, setName] = useState(editData ? editData.profile.name : '');
  const [role, setRole] = useState(editData ? editData.profile.role : '');
  const [description, setDescription] = useState(editData ? editData.profile.description : '');
  const [previewUrl, setPreviewUrl] = useState<string | null>(editData ? editData.image.data : null);

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(
    () => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(editData ? editData.profile.name : '');
      setRole(editData ? editData.profile.role : '');
      setDescription(editData ? editData.profile.description : '');
      setPreviewUrl(editData ? editData.image.data : null);
    }, [editData]
  );
  if (!show) return null;



  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempFile = event.target.files?.[0];
    if (tempFile) {
      setPreviewUrl(URL.createObjectURL(tempFile));
      setFile(tempFile);
    }
  };

  const handleSubmit = async () => {
    if (!(name && role && description)) {
      alert('Mohon lengkapi semua data.');
      return;
    }
    setIsSubmitting(true);

    const tok = await getToken();
    let headers = new Headers();
    let id;
    headers.append('Authorization', tok!.toString());
    headers.append('Content-Type', 'application/json');

    let res2 = false;
    let res1 = true;
    if (editData) {
      if ((editData.image.data == null ? true : previewUrl != editData.image.data) && file != undefined) {
        const fileData: string = await toBase64(file);
        res1 = await fetchBoolean('/employee/' + editData.id + '/image', {
          method: 'PUT',
          body: JSON.stringify({ data: fileData }),
          headers: headers,
        });
      }
      res2 = await fetchBoolean('/employee/' + editData.id, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
          name: name,
          role: role,
          description: description
        })
      });
    } else {
      res2 = await fetchData('/employee', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          name, role, description
        })
      }).then((res) => {
        if (res.employeeId) {
          id = res.employeeId;
          return true;
        }
        return false;
      });

      if (res2 && file) {
        const fileData = await toBase64(file);
        headers = new Headers();
        headers.append('Authorization', tok!.toString());
        headers.append('Content-Type', 'application/json');
        res1 = await fetchBoolean('/employee/' + id + '/image', {
          method: 'PUT',
          body: JSON.stringify({ data: fileData }),
          headers: headers,
        }).then((res) => res);
      }
      else {
        await fetchBoolean('/employee/' + id, {
          method: 'DELETE',
          headers: headers,
        }).then((res) => res);
      }
    }
    if (!(res1 && res2)) alert("Terjadi kesalahan saat menyimpan data.");
    else onClose();
    setIsSubmitting(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{editData ? 'Edit Karyawan' : 'Tambah Karyawan'}</h3>

        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <label htmlFor="empImageUpload" className="image-uploader-box" style={{ margin: '0 auto' }}>
            {previewUrl ? (
              <Image src={previewUrl} alt="Preview" width={400} className="image-preview" />
            ) : (
              <span style={{ fontSize: '2rem', color: '#ccc' }}>+</span>
            )}
          </label>
          <input type="file" id="empImageUpload" style={{ display: 'none' }} onChange={handleFileChange} />
        </div>

        <input type="text" className="modal-input" placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" className="modal-input" placeholder="Jabatan (Role)" value={role} onChange={(e) => setRole(e.target.value)} />
        <textarea className="modal-input" rows={4} placeholder="Deskripsi singkat..." value={description} onChange={(e) => setDescription(e.target.value)} />

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>Batal</button>
          <button className="modal-button green" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Menyimpan...' : 'Simpan'}
          </button>
        </div>
      </div>
    </div>
  );
}