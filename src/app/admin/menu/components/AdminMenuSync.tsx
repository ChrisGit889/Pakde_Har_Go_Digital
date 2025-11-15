'use client'

import AdminMenuTopbar from "./AdminMenuTopbar";
import MenuFilterTabs from "./MenuFilterTabs";
import ProductGrid from "./ProductGrid";
import '../MenuPage.css';
import { useMemo, useState } from "react";
import { MenuData } from '@/utils/dataTypes/MenuData'
import { Category, CategoryData } from "@/utils/dataTypes/CategoryData";
import AddCategory from "./AddCategory";
import { useRouter } from "next/navigation";

export default function AdminMenuSync({ data, categories }: {
    data: MenuData,
    categories: CategoryData
}) {
    const router = useRouter();

    const [activeCategory, setActiveCategory] = useState<Category>(categories.data[0]);
    const [show, setShow] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const filteredProducts = useMemo(() => {
        let toReturn;
        if (activeCategory.name === 'Semua') {
            toReturn = data.data;
        } else {
            toReturn = data.data.filter(product => product.food.category === activeCategory.name);
        }
        return toReturn.filter(product => RegExp(search).test(product.food.name));
    }, [activeCategory, data.data, search]);

    const onClose = () => {
        router.refresh();
    }

    const onSearch = (str: string) => {
        setSearch(str);
    }

    return (
        <>
            <div className="menu-page-container">
                <AdminMenuTopbar onAddCategoryClick={() => setShow(true)} search={search} setSearch={onSearch} />
                <MenuFilterTabs
                    categories={categories}
                    active={activeCategory}
                    onChange={setActiveCategory}
                />
                <ProductGrid
                    menu={filteredProducts}
                />
            </div>
            <AddCategory
                show={show}
                onClose={() => { setShow(false); onClose(); }}
            />
        </>
    )
}