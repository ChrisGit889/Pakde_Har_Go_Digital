'use server';

import { route } from "@/utils/utils";
import BeritaListSync from "./BeritaListSync";

//Komponen Async untuk merequest datanya
export default async function BeritaListAsync() {
  const data = await fetch(await route('/blog/list'), {
    method: 'GET'
  }).then((res) => {
    if (res.status == 200) {
      return res.json();
    } else {
      throw Error(JSON.stringify(res.json()));
    }
  }).catch((e) => {
    console.log(e);
    return false;
  })

  const list = data.data;

  return (<BeritaListSync data={list} />);
}