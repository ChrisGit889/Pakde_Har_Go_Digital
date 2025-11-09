'use client';
import React, { useState, useMemo } from 'react';
import DashboardLayout from '@/app/components/DashboardLayout'; 
import UlasanStats from '@/app/components/ulasan/UlasanStats';
import UlasanFilter from '@/app/components/ulasan/UlasanFilter';
import UlasanList from '@/app/components/ulasan/UlasanList';
import UlasanReplyModal from '@/app/components/ulasan/UlasanReply';
import './UlasanPage.css'; 

const masterUlasanList = [
  {
    id: 1, name: 'Budi Is Man', origin: 'Mahasiswa Untar', rating: 5,
    comment: 'Nasi Goreng Original di sini adalah yang terbaik...',
    productName: 'Nasi Goreng Ayam', productImage: '/images/Nasi_Goreng_Ayam.jpg',
    orderId: '251103SJSTAX6P', timestamp: '09/11/2025 07:39',
    reply: 'Terima kasih telah berbelanja di Toin Store!...',
    status: 'replied',
  },
  {
    id: 2, name: 'Santi Dewi', origin: 'Mahasiswi Binus', rating: 4,
    comment: 'Tempatnya nyaman, nasi gorengnya enak...',
    productName: 'Nasi Goreng Spesial', productImage: '/images/Nasi_Goreng_Ayam.jpg',
    orderId: '251103SJSTAX7Q', timestamp: '08/11/2025 12:30',
    reply: null,
    status: 'pending',
  },
  {
    id: 3, name: 'Ahmad Faisal', origin: 'Dosen UI', rating: 3,
    comment: 'Porsi besar, rasa otentik. Tapi kurang pedas.',
    productName: 'Nasi Goreng Gila', productImage: '/images/Nasi_Goreng_Ayam.jpg',
    orderId: '251103SJSTAX8R', timestamp: '07/11/2025 19:00',
    reply: null,
    status: 'pending',
  },
  {
    id: 4, name: 'Citra Kirana', origin: 'Karyawati', rating: 1,
    comment: 'LAMA BANGET!!! Nunggunya 1 jam.',
    productName: 'Nasi Goreng Ayam', productImage: '/images/Nasi_Goreng_Ayam.jpg',
    orderId: '251103SJSTAX9S', timestamp: '06/11/2025 20:15',
    reply: null,
    status: 'pending',
  }
];

type Ulasan = typeof masterUlasanList[0];

export default function UlasanPage() {
  const [activeStatus, setActiveStatus] = useState('semua');
  const [activeRating, setActiveRating] = useState(0); 
  const [replyingUlasan, setReplyingUlasan] = useState<Ulasan | null>(null);
  const stats = useMemo(() => {
    const diterima = masterUlasanList.length;
    const baik = masterUlasanList.filter(u => u.rating >= 4).length;
    const belumDibalas = masterUlasanList.filter(u => u.status === 'pending').length;
    const burukBelumDibalas = masterUlasanList.filter(u => u.status === 'pending' && u.rating < 3).length;

    return {
      diterima,
      tingkatBaik: `${Math.round((baik / diterima) * 100)}%`,
      belumDibalas, 
      burukBelumDibalas,
      baru: 0, 
    };
  }, [masterUlasanList]);

  const filteredUlasan = useMemo(() => {
    return masterUlasanList
      .filter(u => {
        if (activeStatus === 'semua') return true;
        return u.status === activeStatus;
      })
      .filter(u => {
        if (activeRating === 0) return true;
        return u.rating === activeRating;
      });
  }, [masterUlasanList, activeStatus, activeRating]);

  const handleBalasKirim = (balasan: string) => {
    if (!replyingUlasan) return;
    console.log(`Balasan untuk ${replyingUlasan.id}: ${balasan}`);
    const ulasanIndex = masterUlasanList.findIndex(u => u.id === replyingUlasan.id);
    if (ulasanIndex > -1) {
      masterUlasanList[ulasanIndex].reply = balasan;
      masterUlasanList[ulasanIndex].status = 'replied';
    }
    
    setReplyingUlasan(null);
  };

  return (
    <DashboardLayout>
      <div className="ulasan-container">        
        <h1 className="ulasan-page-title">Penilaian Toko</h1>
        <UlasanStats stats={stats} />
        
        <UlasanFilter 
          counts={{
            semua: masterUlasanList.length,
            pending: stats.belumDibalas,
            replied: masterUlasanList.length - stats.belumDibalas,
          }}
          onStatusChange={setActiveStatus}
          onRatingChange={setActiveRating}
        />

        <UlasanList 
          ulasanList={filteredUlasan}
          onBalasClick={(ulasan: Ulasan) => setReplyingUlasan(ulasan)}
        />

        <UlasanReplyModal 
          ulasan={replyingUlasan}
          onClose={() => setReplyingUlasan(null)}
          onKirim={handleBalasKirim}
        />
      </div>
    </DashboardLayout>
  );
}