import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    try {
        const headersList = headers()
        // A modifier lorsque les services vont communiquer
        // const userId = headersList.get("User-Id")
    
        const body = await request.json()
        const { productId } = body
    
        const response = await fetch(`http://localhost:4002/api/v2/resource/states/${productId}`, {
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