'use client'

import { route } from "./utils";

function imgToData(data: Buffer, name: string) {
    return `data:image/${name.split('.')[name.split('.').length - 1]};base64,` + Buffer.from(data).toString("base64")
}

async function fetchProcess(ro: string, params: object, process: (res: Response) => Promise<void>) {
    return await fetch(await route(ro), params)
        .then(async (res) => {
            if (res.status == 200) {
                await process(res);
                return true;
            }
            throw Error('An error has occured!');
        })
        .catch((e) => {
            console.log(e);
            return false;
        });
}

export { route, imgToData, fetchProcess };