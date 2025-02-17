import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { NextRequest } from "next/server"
import { ressourcesRoutes } from "@/config/routes"

export async function GET(request: NextRequest) {
  try {
    const headersList = headers()
    // A modifier lorsque les services vont communiquer
    // const userId = headersList.get("User-Id")

    const body = await request.json()
    const { productId } = body

    const response = await fetch(`${ressourcesRoutes.ressourceState}/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to get traceability" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}