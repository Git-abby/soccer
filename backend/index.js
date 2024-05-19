import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/soccerDb')


//Body Parser
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

//cors
app.use(cors())

// routes(app)

app.get('/', (req, res) =>{
    res.send(`Our Application is running at port ${PORT}`)
})

app.listen(PORT, () =>
    console.log(`Your soccer server is running on port ${PORT}`)
)