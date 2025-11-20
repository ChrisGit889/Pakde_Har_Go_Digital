interface EmployeeData {
    data: {
        id: number,
        profile: {
            name: string,
            role: string,
            description: string,
        },
        image: {
            updated: string,
            data: string,
        }
    }[],
}

export type { EmployeeData };