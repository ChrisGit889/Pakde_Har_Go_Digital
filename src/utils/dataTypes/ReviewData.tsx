interface Review {
    id: number,
    user: {
        name: string,
        email: string,
        phoneNo: string,
        details: string,
    },
    review: {
        rating: number,
        description: string,
        highlighted: boolean,
    }
}

interface ReviewData {
    offset: number,
    limit: number,
    data: Review[],
}

export type { ReviewData, Review };