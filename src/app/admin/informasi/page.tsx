'use client';
import React, { useState } from 'react'; 
import DashboardLayout from '@/app/components/DashboardLayout'; 
import InfoAlamat from '@/app/components/informasi/InfoAlamat';
import InfoJamOperasional from '@/app/components/informasi/InfoJamOperasional';
import InfoKontak from '@/app/components/informasi/InfoKontak';
import AlamatModal from '@/app/components/informasi/Alamat';
import JamModal from '@/app/components/informasi/Jam';
import KontakModal from '@/app/components/informasi/Kontak';
import './InformasiPage.css'; 

const dummyAlamat1 = { id: 1, namaToko: 'Nasi Goreng Pakde Har', alamat: 'Sebelah Alfa-X S.Parman, Jl. Taman S. Parman, RT.7/RW.8, Grogol...'};
const dummyAlamat2 = { id: 2, namaToko: 'Nasi Goreng Pakde Har', alamat: 'Alamat 2...'};
const dummyJamKerja = { senin: '07:00 - 22:00', selasa: '07:00 - 22:00' };
const dummyJamLibur = { sabtu: 'Tutup', minggu: 'Tutup' };
const dummyKontak = '08123456789';

type AlamatData = typeof dummyAlamat1;
type JamData = typeof dummyJamKerja | typeof dummyJamLibur;

export default function InformasiPage() {
  const [alamatModal, setAlamatModal] = useState<{ isOpen: boolean, data: AlamatData | null }>({ isOpen: false, data: null });
  const [jamModal, setJamModal] = useState<{ isOpen: boolean, mode: string, data: JamData | null }>({ isOpen: false, mode: '', data: null });
  const [kontakModal, setKontakModal] = useState<{ isOpen: boolean, data: string | null }>({ isOpen: false, data: null });
  const handleOpenAlamatModal = (data: AlamatData | null = null) => {
    setAlamatModal({ isOpen: true, data: data });
  };
  const handleOpenJamModal = (mode: string, data: JamData) => {
    setJamModal({ isOpen: true, mode: mode, data: data });
  };
  const handleOpenKontakModal = (data: string) => {
    setKontakModal({ isOpen: true, data: data });
  };

  return (
    <DashboardLayout>
      <h1 className="page-title">Pengaturan Informasi</h1>
      <div className="informasi-container">
        <InfoAlamat 
          alamat1={dummyAlamat1} 
          alamat2={dummyAlamat2}
          onTambah={() => handleOpenAlamatModal(null)}
          onUbah={handleOpenAlamatModal}
        />
        
        <div className="info-row">
          <InfoJamOperasional 
            jamKerja={dummyJamKerja}
            jamLibur={dummyJamLibur}
            onUbahJamKerja={() => handleOpenJamModal('kerja', dummyJamKerja)}
            onUbahJamLibur={() => handleOpenJamModal('libur', dummyJamLibur)}
          />
          <InfoKontak 
            kontak={dummyKontak}
            onUbah={() => handleOpenKontakModal(dummyKontak)}
          />
        </div>
      </div>

      <AlamatModal 
        isOpen={alamatModal.isOpen}
        onClose={() => setAlamatModal({ isOpen: false, data: null })}
        alamatData={alamatModal.data}
      />
      <JamModal 
        isOpen={jamModal.isOpen}
        onClose={() => setJamModal({ isOpen: false, mode: '', data: null })}
        mode={jamModal.mode}
        jamData={jamModal.data}
      />
      <KontakModal 
        isOpen={kontakModal.isOpen}
        onClose={() => setKontakModal({ isOpen: false, data: null })}
        kontakData={kontakModal.data}
      />
    </DashboardLayout>
  );
}