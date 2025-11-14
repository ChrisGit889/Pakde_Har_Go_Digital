'use client'

function route(endpoint: string) {
    return process.env.API_URL + endpoint;
}

export { route };