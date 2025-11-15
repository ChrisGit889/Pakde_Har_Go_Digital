interface Category {
    name: string,
    description: string,
};

interface CategoryData {
    data: Category[]
}

export type { CategoryData, Category };

