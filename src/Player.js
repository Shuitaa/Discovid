module.exports = class Player {

   static randomDm(players) {

        const randNumber = Math.floor(Math.random() * players.length);

        players[randNumber].send("Vous êtes l'infecté ! Votre mot est jtm laulau");
        

    }

}