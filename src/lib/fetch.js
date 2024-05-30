export const data = await fetch("https://qftguxwmsqzradjlguhs.supabase.co/rest/v1/artist_cards", {
    method: "GET",
    headers: {
        apikey: "xxx",
    }
}).then(res => res.json())
.catch((error) => console.log(error))


