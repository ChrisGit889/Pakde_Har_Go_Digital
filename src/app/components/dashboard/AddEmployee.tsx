'use client';
import { useState, useEffect } from 'react';
import { fetchData, getToken } from '@/utils/utils';
import { Image } from 'react-bootstrap';
import { toBase64 } from '@/utils/clientUtils';
import '../adminMenu/AdminMenu.css';

interface Employee {
  id: number;
  image: { data: string };
  profile: {
    name: string;
    role: string;
    description: string;
  };
}

interface AddEmployeeProps {
  show: boolean;
  onClose: () => void;
  editData: Employee | null;
}

export default function AddEmployee({ show, onClose, editData }: AddEmployeeProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (show) {
      if (editData) {
        setName(editData.profile.name);
        setRole(editData.profile.role);
        setDescription(editData.profile.description);
        setPreviewUrl(editData.image?.data || null);
      } else {
        setName('');
        setRole('');
        setDescription('');
        setPreviewUrl(null);
        setFile(null);
      }
    }
  }, [show, editData]);

  if (!show) return null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempFile = event.target.files?.[0];
    if (tempFile) {
      setPreviewUrl(URL.createObjectURL(tempFile));
      setFile(tempFile);
    }
  };

  const handleSubmit = async () => {
    if (!name || !role || !description) {
      alert('Mohon lengkapi semua data.');
      return;
    }
    setIsSubmitting(true);

    try {
      const tok = await getToken();
      const headers = new Headers();
      headers.append('Authorization', tok!.toString());
      headers.append('Content-Type', 'application/json');
      const bodyData: { name: string; role: string; description: string; image?: { data: string } } = {
        name,
        role,
        description
      };
      
      if (file) {
        const fileData = await toBase64(file);
        bodyData.image = { data: fileData };
      }

      const url = editData ? `/employee/${editData.id}` : '/employee';
      const method = editData ? 'PUT' : 'POST';

      await fetchData(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(bodyData)
      });

      onClose();
    } catch (error) {
      console.error("Gagal menyimpan", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{editData ? 'Edit Karyawan' : 'Tambah Karyawan'}</h3>
        
        <div style={{textAlign: 'center', marginBottom: '15px'}}>
             <label htmlFor="empImageUpload" className="image-uploader-box" style={{margin: '0 auto'}}>
                  {previewUrl ? (
                    <Image src={previewUrl} alt="Preview" className="image-preview" />
                  ) : (
                    <span style={{fontSize: '2rem', color: '#ccc'}}>+</span>
                  )}
             </label>
             <input type="file" id="empImageUpload" style={{display:'none'}} onChange={handleFileChange}/>
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