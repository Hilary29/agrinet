"use server"

export async function signUp(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const password = formData.get("password")

  // Basic form validation
  if (!name || !email || !password) {
    return { error: "All fields are required" }
  }

  try {
    const response = await fetch("http://localhost:4000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { error: errorData.message || "Registration failed" }
    }

    // Handle successful registration
    // You might want to automatically sign in the user here
    return { success: true }
  } catch (error) {
    console.error("Registration error:", error)

    if (error instanceof Error) {
      // Si c'est une erreur standard de JavaScript
      return { error: `An error occurred: ${error.message}` }
    } else if (typeof error === "string") {
      // Si l'erreur est une chaîne de caractères
      return { error: `An error occurred: ${error}` }
    } else if (error && typeof error === "object" && "message" in error) {
      // Si l'erreur est un objet avec une propriété 'message'
      return { error: `An error occurred: ${error.message}` }
    } else {
      // Pour tout autre type d'erreur
      return { error: "An unexpected error occurred" }
    }
  }
}

export async function signIn(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")

  // Basic form validation
  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  try {
    const response = await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { error: errorData.message || "Authentication failed" }
    }

    const data = await response.json()

    // Here you would typically save the token in a secure cookie
    // and set up any necessary client-side state

    return { success: true }
  } catch (error) {
    console.error("Authentication error:", error)

    if (error instanceof Error) {
      // Si c'est une erreur standard de JavaScript
      return { error: `An error occurred: ${error.message}` }
    } else if (typeof error === "string") {
      // Si l'erreur est une chaîne de caractères
      return { error: `An error occurred: ${error}` }
    } else if (error && typeof error === "object" && "message" in error) {
      // Si l'erreur est un objet avec une propriété 'message'
      return { error: `An error occurred: ${error.message}` }
    } else {
      // Pour tout autre type d'erreur
      return { error: "An unexpected error occurred" }
    }
  }
}

