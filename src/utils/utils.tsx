"use server"

import { cookies } from "next/headers";

function route(endpoint: string) {
    return process.env.API_URL + endpoint;
}

async function login(username: string, password: string): Promise<Number | string> {
    "use server"

    const data = await fetch(route('/auth/signin'), {
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        }
    }).then(res => {
        if (res.status == 200) return res.json();
        throw Error(JSON.stringify(res.json()));
    }).catch((e) => e);
    if (data) {
        if (data.token) {
            const cookieStore = await cookies();
            cookieStore.set('Auth-Token', data.token, {
                httpOnly: true,
            });
            return 1;
        }
    }
    return data;
}

async function authenticate(): Promise<boolean> {
    const token = await getToken();
    if (token == null) return false;
    const data = await fetch(route(`/auth/verify?token=${token}`), {
        method: 'GET'
    }).then(res => {
        if (res.status == 200) return res.json();
        throw Error(JSON.stringify(res.json()));
    }).catch((e) => e);

    if (data) return true;
    return false;
}

async function getToken(): Promise<string | null> {
    "use server"
    const cookieStore = await cookies();
    if (cookieStore.has('Auth-Token')) {
        let cookie = cookieStore.get('Auth-Token');
        let val = cookie?.value || '';
        return val;
    }
    return null;
}

async function logout(): Promise<void> {
    const cookieStore = await cookies();
    if (cookieStore.has('Auth-Token')) cookieStore.delete('Auth-Token');
}

export { route, login, getToken, authenticate, logout };