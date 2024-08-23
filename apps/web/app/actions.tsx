"use server";

import { cookies } from "next/headers";

export async function remove() {
  return cookies().getAll();
}
