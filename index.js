const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

// Ses kanalı ID'sini buraya yazın
const voiceChannelID = "795056971413192764"; // Örnek: "123456789012345678"

bot.on("ready", async () => {
    console.log(`Logged in as ${bot.user.username}`);

    try {
        // Botu belirtilen ses kanalına bağla
        await bot.joinVoiceChannel(voiceChannelID);
        console.log(`Bot ${voiceChannelID} ID'li ses kanalına bağlandı.`);
    } catch (error) {
        console.error("Ses kanalına bağlanırken hata oluştu:", error);
    }
});

bot.on("error", (err) => {
    console.error(err); // or your preferred logger
});

bot.connect();
