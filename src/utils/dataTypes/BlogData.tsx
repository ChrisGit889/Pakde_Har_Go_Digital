interface BlogData {
    id: number,
    meta: {
        uploaded: string,
        updated: string,
    },
    blog: {
        title: string,
        description: string,
        category: string,
        story: string,
    },
    image: {
        data: string,
    },
};
export type { BlogData };