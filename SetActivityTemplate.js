const activities_list = [
    `Bot Utilities Devs Center`,
    `Dev By Léa🍡#9999`,
    `+help`
  ];
  
  dr.on("ready", () => {
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
      dr.user.setActivity(activities_list[index], {
        status: "online",
        type: "STREAMING",
        url: "https://twitch.tv/satuurnes"
      });
    }, 2000);
    console.log(
      `${dr.user.username} connecté ${dr.users.cache.size} utilisateurs !`
    );
  }); 
