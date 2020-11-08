const Player = require('./Player');
const Round = require('./Round');

module.exports =  class Game {

    constructor(bot) {
        this.client = bot;
        this.players = [];
        this.numberOfPlayer = 0;
        this.roundCount = 0;
   
    }

     newGame(message) {

        this.newGameAnnouncer(message);

        this.client.on("message", message => {

            const channelId = message.channel.id;
            const user = message.author;
            const channel = this.client.channels.cache.get(channelId);


            if (message.content === "-d play"){
                this.numberOfPlayer++
                if(this.numberOfPlayer === 1 )
                    channel.send(`<@${user.id}> a rejoint la partie ! Il y a ${this.numberOfPlayer} joueur`);
                else
                    channel.send(`<@${user.id}> a rejoint la partie ! Il y a ${this.numberOfPlayer} joueurs`);

                this.players.push(user);

            }

            if (message.content === "-d go"){
                Player.randomDm(this.players);          
                Round.endRound(channel,this.roundCount);
          
            }

        })

    }

    newGameAnnouncer(message) {
        const channelId = message.channel.id;
        const user = message.author;
        const channel = this.client.channels.cache.get(channelId);

        channel.send(`<@${user.id}> a commencé une nouvelle partie de Discovid ! Faîtes -d play pour vous inscrire à la partie !`);
    }

}