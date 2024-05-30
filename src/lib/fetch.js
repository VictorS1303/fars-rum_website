export const data = await fetch("https://qftguxwmsqzradjlguhs.supabase.co/rest/v1/artist_cards", {
    method: "GET",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmdGd1eHdtc3F6cmFkamxndWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NDIwOTUsImV4cCI6MjAzMTExODA5NX0.uglTx3133whZEgoLakBYoMK3mGTNGEB5OWvUO1H1AWY",
    }
}).then(res => res.json())
.catch((error) => console.log(error))


