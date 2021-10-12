async function SendToBack(data) {
    const response = await fetch('', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}
export default SendToBack