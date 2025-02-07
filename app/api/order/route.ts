import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { NextRequest } from "next/server"

const userId = "9511e06c-c94b-48de-bbb0-d7ed39d3ca21"

export async function POST(request: NextRequest) {
  try {
    const headersList = headers()
    // A modifier lorsque les services vont communiquer
    // const userId = headersList.get("User-Id")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const response = await fetch("http://localhost:4002/api/orders/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Id": userId,
      }
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to create order" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}