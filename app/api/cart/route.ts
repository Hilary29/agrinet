import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { NextRequest } from "next/server"
import { cartRoutes } from "@/config/routes"

const userId = "9511e06c-c94b-48de-bbb0-d7ed39d3ca21"



export async function GET() {
  try {
    const headersList = headers()
    // A modifier lorsque les services vont communiquer
    // const userId = headersList.get("User-Id")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const response = await fetch(cartRoutes.cart, {
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

    const response = await fetch(cartRoutes.cartItems, {
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
    const headersList = headers();
    // A modifier lorsque les services vont communiquer
    // const userId = headersList.get("User-Id");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const { productId } = await request.json(); // Récupérer productId du corps de la requête

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const response = await fetch(`${cartRoutes.cartItems}/${productId}`, {
      method: "DELETE",
      headers: {
        "User-Id": userId,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to delete item from cart" }, { status: response.status });
    }

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}