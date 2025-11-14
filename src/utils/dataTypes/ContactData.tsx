interface ContactsData {
    addresses: {
        name: string,
        address: string,
    }[],
    schedule: {
        mon: string,
        tue: string,
        wed: string,
        thu: string,
        fri: string,
        sat: string,
        sun: string,
    },
    phoneNumbers: string[],
    emails: string[],
};

export type { ContactsData };