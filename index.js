const Discord = require('discord.js'); 
const bot = new Discord.Client(); 


bot.on('message', function(message){
    if (message.content === "-d play"){
    const channel = message.channel
    const members = channel.members
        members.forEach(member => {
            member.send("votre mot est: contamination");
        });
   
    }

})

bot.login('Nzc0NzUyMDU1OTUyNDA4NjA5.X6cWFA.XrXjYOpIEL-OLFzcUNx3p44AXmE');