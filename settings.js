const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium https://t.me/barzankedip2
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'TEFKjmZ93v8OOA5': 'Your Key', // 👉 login TEFKjmZ93v8OOA5 to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "7943831993:AAGQgxGIPIF_DNCFPaUQTEgVZnRtKLZMxXM" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "BARZAN_BUG" //your bot name
global.OWNER_NAME = "BARZAN NOT SEPUH" //your name
global.OWNER_NUMBER = "6289652413966" //your telegram number
global.OWNER = ["https://t.me/zeeoneofc", "https://t.me/zeeone_ofc"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
