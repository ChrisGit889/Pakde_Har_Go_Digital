'use client';
import DashboardLayout from '@/app/components/DashboardLayout'; 
import InfoAlamat from '@/app/components/informasi/InfoAlamat';
import InfoJamOperasional from '@/app/components/informasi/InfoJamOperasional';
import InfoKontak from '@/app/components/informasi/InfoKontak';
import './InformasiPage.css'; 

export default function InformasiPage() {
  return (
    <DashboardLayout>
      <h1 className="page-title">Pengaturan Informasi</h1>
      <div className="informasi-container">
        <InfoAlamat />
        <div className="info-row">
          <InfoJamOperasional />
          <InfoKontak />
        </div>
      </div>
    </DashboardLayout>
  );
}