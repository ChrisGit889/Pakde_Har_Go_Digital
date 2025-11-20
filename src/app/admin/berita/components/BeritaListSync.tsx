'use client'
import { useState } from 'react';
import Link from 'next/link';
import SuccessModal from './Successmodal';
import { useRouter } from 'next/navigation';
import { fetchBoolean, getToken } from '@/utils/utils';
import { BlogData } from '@/utils/dataTypes/BlogData';
import { Image } from 'react-bootstrap';

//Komponen Synchronus untuk membuat listnya
export default function BeritaListSync({ data }: { data: BlogData[] }) {
    const [show, setShow] = useState(false);
    const router = useRouter();

    const createHandleDeleteClick = (id: number) => {
        return async function () {
            console.log("Berita dihapus!");
            const tok = await getToken();
            const header = new Headers();
            header.append('Authorization', tok!);
            await fetchBoolean('/blog/' + id, {
                method: 'DELETE',
                headers: header,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            }).then((_res) => {
                setShow(true);
            });
        };
    }


    const redirectBackToBlogs = () => {
        setShow(false);
        router.refresh();
    }

    return (
        <>
            {data.map((berita) => {
                return (
                    < div key={berita.id.toString()} className="berita-card" >
                        <Image src={berita.image.data ? berita.image.data : '/images/placeholder.jpg'} alt={berita.blog.title} className="berita-card-image" />

                        <div className="berita-content">
                            <div className="berita-content-top">
                                <h3>{berita.blog.title}</h3>
                                <p>{berita.blog.description}</p>
                            </div>

                            <div className="berita-actions">
                                <Link href={`/admin/berita/edit?id=${berita.id}`} className="button-ubah">
                                    Edit
                                </Link>

                                <button
                                    className="button-delete"
                                    onClick={createHandleDeleteClick(berita.id)}
                                >
                                    Hapus
                                </button>

                                <Link href={`/admin/berita/detail?id=${berita.id}`} className="button-orange">
                                    Lihat Detail
                                </Link>
                            </div>
                        </div>
                    </div >
                )
            })
            }

            <SuccessModal
                isOpen={show}
                onClose={() => redirectBackToBlogs()}
                message="Berita Anda berhasil dihapus."
            />
        </>
    );
}