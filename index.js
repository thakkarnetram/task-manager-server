// imports
const express = require('express')
const cors = require('cors')
const {initDb} = require('./src/utils/db-handler/mongoConnection')

// db connection
initDb()

// middleware stuff
const app = express();
app.use(express.json())
app.use(cors())

// routers
const authRoute = require('./src/routers/auth-routes/authRouter')
const actionRoute = require('./src/routers/action-routes/actionRouter')
app.use("/auth", authRoute);
app.use("/", actionRoute);

// Fire server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server fired up on PORT : ${PORT}`)
})
