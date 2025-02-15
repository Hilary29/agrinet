

export function send_request_handler(
    method: "axios||fetch", url: string, type: string, bodyData) {
    const response = await fetch(url, {
        method: type,
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: bodyData,
    });
}


const response = await fetch("http://localhost:8000/api/v1/create-product", {
    method: "POST",
    headers: {
        'Authorization': `Bearer ${token}`
    },
    body: formDataToSend,
})
