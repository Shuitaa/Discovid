module.exports = class Round {

      constructor() {
         this.roundCount = 0;
      }
 
    static endRound(channel,roundCount){

       setInterval(function(){ 
            roundCount++;
           channel.send(`Tour ${roundCount}. Qui choisissez-vous d'éliminer ?`);
       }, 90000); 

    }
 }