export interface Product {
    id: number;
    name: string;
    img: string;
    rasa: string;
    desc: string;
    category: string;
    harga?: number;
  }

  export const masterProductList: Product[] = [
    { id: 1, name: 'Nasi Goreng Ayam', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi Nasi Goreng Ayam...', category: 'Nasi Goreng', harga: 25000 },
    { id: 2, name: 'Nasi Goreng Spesial', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi Nasi Goreng Spesial...', category: 'Nasi Goreng', harga: 28000 },
    { id: 3, name: 'Mie Goreng Tek-Tek', img: '/images/mie-goreng.jpg', rasa: 'Pedas / Sedang', desc: 'Deskripsi Mie Goreng...', category: 'Mie Goreng', harga: 22000 },
    { id: 4, name: 'Nasi Goreng Gila', img: '/images/Nasi_Goreng_Ayam.jpg', rasa: 'Pedas', desc: 'Deskripsi Nasi Goreng Gila...', category: 'Nasi Goreng', harga: 30000 },
    { id: 5, name: 'Es Teh Manis', img: '/images/es-teh.jpg', rasa: 'Manis', desc: 'Deskripsi Es Teh...', category: 'Minuman', harga: 8000 },
    { id: 6, name: 'Es Jeruk', img: '/images/es-jeruk.jpg', rasa: 'Manis / Asam', desc: 'Deskripsi Es Jeruk...', category: 'Minuman', harga: 10000 },
  ];
  
  export const categories = ['Nasi Goreng', 'Mie Goreng', 'Minuman'];