interface Menu {
    id: number,
    meta: {
        uploaded: string,
        updated: string,
    },
    food: {
        name: string,
        description: string,
        flavour: string,
        price: number,
        recommended: boolean,
        visitors: number,
        category: string,
    },
    image: {
        updated: string,
        data: string,
    }
}

interface MenuData {
    offset: number,
    limit: number,
    data: Menu[],
}

export type { MenuData, Menu };