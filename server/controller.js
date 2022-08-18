module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, You're a smart cookie", "You're JavaScript skills are stellar", "You're the best", "Most beautiful person."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way", "Adventure can be real happiness", "An inch of time is an inch of gold.", "Believe it can be done.", "Dont just think, act!"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getHealth: (req, res) => {
        const health = ["A fresh start will put you on your way", "Adventure can be real happiness", "An inch of time is an inch of gold.", "Believe it can be done.", "Dont just think, act!"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * health.length);
        let randomHealth = health[randomIndex];
      
        res.status(200).send(randomHealth);
    },

        const goals = require('./db.json');

    getGoals: (req, res) => {
        res.status(200).send(movies)
    },
    deleteGoals: (req, res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        goals.splice(index, 1);
        res.status(200).send(goals)
    },
    createGoals: (req, res) => {
        // console.log(req, body)
        const{title, timeline } = req.body:
    }

}







    
