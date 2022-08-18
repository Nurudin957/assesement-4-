const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getHealth, getGoals, deleteGoals, createGoals, updateGoals } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/health", getHealth);

app.get('/api/goals', getGoals)
app.delete('/api/goals/:id', deleteGoals)
app.post('/api/gols', createGoals)
app.put('/api/goals/:id', updateGoals)


//////////////////////////////////////////////////////////////////////////////////////////////////////////


// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// const { getFortune } = require('./controller')

// app.get("/api/fortune", getFortune);











app.listen(4000, () => console.log("Server running on 4000"));
