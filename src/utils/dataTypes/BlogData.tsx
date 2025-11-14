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
        name: string,
        data: Buffer,
    },
};
export type { BlogData };