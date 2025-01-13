import { NextResponse } from 'next/server'

const API_BASE_URL = 'https://api.airfranceklm.com'

export async function POST(request: Request) {
  const apiKey = process.env.KLM_API_KEY
  const apiSecret = process.env.KLM_API_SECRET

  if (!apiKey || !apiSecret) {
    console.error('API credentials are missing. KLM_API_KEY:', !!apiKey, 'KLM_API_SECRET:', !!apiSecret)
    return NextResponse.json({ error: 'API configuration error: Missing credentials' }, { status: 500 })
  }

  try {
    const { origin, destination, date } = await request.json()

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Api-Key': apiKey,
      'Api-Secret': apiSecret,
    })

    const apiEndpoint = `${API_BASE_URL}/opendata/flightoffers`
    console.log('Sending request to KLM API with params:', { origin, destination, date })
    console.log('API Endpoint:', apiEndpoint)

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        commercialCabin: "ECONOMY",
        passengers: [
          {
            type: "ADT"
          }
        ],
        requestedConnections: [
          {
            departureDate: date,
            origin: origin,
            destination: destination
          }
        ]
      }),
    })

    console.log('KLM API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('KLM API error response:', errorText)
      return NextResponse.json({ 
        error: `API request failed: ${response.status} ${response.statusText}`, 
        details: errorText 
      }, { status: response.status })
    }

    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Unexpected content type:', contentType)
      const text = await response.text()
      console.error('Response body:', text)
      return NextResponse.json({ 
        error: 'Unexpected response format', 
        details: text 
      }, { status: 500 })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 })
  }
}
