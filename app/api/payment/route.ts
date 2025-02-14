import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { NextRequest } from "next/server"
import { PAYMENT_ROUTE } from "@/config/routes"

export async function POST(request: NextRequest) {
  try {


    const body = await request.json()

    const response = await fetch(`${PAYMENT_ROUTE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to pay" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}