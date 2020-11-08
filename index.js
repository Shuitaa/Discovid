
const Game = require('./src/Game');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("message", message => {

    if (message.content === "-d start") {
        const game = new Game(bot)
        game.newGame(message);
    }


})

bot.login('Nzc0NzUyMDU1OTUyNDA4NjA5.X6cWFA.3laWblbplA8f0pZVAnwieftMijI');