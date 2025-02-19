"use server"

import { redirect } from "next/navigation"

export async function redirectToTarget() {
  const targetUrl = "https://example.com" // Replace with your desired URL
  redirect(targetUrl)
}

