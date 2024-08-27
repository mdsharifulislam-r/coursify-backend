"use server";
import jwt from "jwt-simple";

import { cookies } from "next/headers";

export async function UpdateStudentInfo(e: FormData) {
  try {
    const dataObject = Object.fromEntries(e.entries());
    const obj = {
      ...dataObject,
    };
    const encryptData = jwt.encode(
      { from: "my-web", dataObject: obj },
      process.env.JWT_SECRET || ""
    );

    const token = cookies().get("token")?.value;

    const res = await fetch(`${process.env.BASE_URL}/student/update`, {
      method: "PUT",
      body: JSON.stringify({
        payload: encryptData,
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
      cache: "no-store",
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return {
      isOk: false,
    };
  }
}
