interface EmployeeData {
    data: {
        id: number,
        profile: {
            name: string,
            role: string,
            description: string,
        },
        image: {
            name: string,
            updated: string,
            data: Buffer,
        }
    }[],
}

export type { EmployeeData };