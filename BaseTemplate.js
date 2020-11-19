const discord = require('discord.js');
const client = new discord.Client();
const prefix = 'p!'

client.on("ready", () => {
    console.log("disponible")
    const TimerActivity = [
      "/help",
      `${br.guilds.cache.size}  serveurs !`,
      "DEV BY  Léa🍡#9999 !",
      "Coder",
    ];
    setInterval(() => {
      const index = Math.floor(Math.random() * (TimerActivity.length));
      client.user.setActivity(TimerActivity[index]);
    }, 10000 );
    });

client.login('ton prefix ici')
