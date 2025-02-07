import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { NextRequest } from "next/server"

const userId = "9511e06c-c94b-48de-bbb0-d7ed39d3ca21"

export async function GET() {
  try {
    const headersList = headers()
    // A modifier lorsque les services vont communiquer
    // const userId = headersList.get("User-Id")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const response = await fetch("http://localhost:4002/api/cart", {
      headers: {
        "User-Id": userId,
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch cart" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const headersList = headers()
    // A modifier lorsque les services vont communiquer
    // const userId = headersList.get("User-Id")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const body = await request.json()
    const { productId, quantity, unitPrice } = body

    if (!productId || quantity === undefined || unitPrice === undefined) {
      return NextResponse.json({ error: "Product ID, quantity, and unit price are required" }, { status: 400 })
    }

    const response = await fetch("http://localhost:4002/api/cart/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Id": userId,
      },
      body: JSON.stringify({ productId, quantity, unitPrice })
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to add item to cart" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const headersList = headers()
    // A modifier lorsque les services vont communiquer
    // const userId = headersList.get("User-Id")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const url = new URL(request.url)
    const pathSegments = url.pathname.split("/")
    const action = pathSegments[pathSegments.length - 2]
    const productId = pathSegments.pop()

    if (action === "clear") {
      const response = await fetch("http://localhost:4002/api/cart/clear", {
        method: "DELETE",
        headers: {
          "User-Id": userId,
        },
      })

      if (response.status === 404) {
        return NextResponse.json({ error: "Cart not found" }, { status: 404 })
      }

      if (!response.ok) {
        return NextResponse.json({ error: "Failed to clear cart" }, { status: response.status })
      }

      return NextResponse.json({ message: "Cart cleared successfully" })
    }

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    const response = await fetch(`http://localhost:4002/api/cart/items/${productId}`, {
      method: "DELETE",
      headers: {
        "User-Id": userId,
      },
    })

    if (response.status === 404) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 })
    }

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to remove item from cart" }, { status: response.status })
    }

    return NextResponse.json({ message: "Item removed successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
