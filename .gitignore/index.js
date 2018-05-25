const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("reday", function() {
    bot.user.setGame(" tutobot, !help ");
    console.log("le Bot as bien été connecté,");
});
bot.login("NDQ5MzU0MDMzMDQwMzI2Njc5.Dejdeg.0t0U3ZSMB_0Z2-FaGPZ754dp_cM");
