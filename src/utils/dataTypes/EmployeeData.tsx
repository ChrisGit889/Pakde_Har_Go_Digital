interface Employee {
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
}

interface EmployeeData {
    data: Employee[],
}

export type { EmployeeData, Employee };