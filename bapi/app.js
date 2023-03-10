const express = require('express');
const cors = require('cors')
const  websiteData = require('./Data/DarensDeliciousDeserts.js')

const app = express();
app.use(cors())
const PORT = 3000;


app.get('/', (req, res) => {
    console.log()
    res.status(200);
    res.send(websiteData.getWebsiteData());
});
app.route('/menu')
    .get((req, res) => {
        res.status(200);
        res.send("This weeks menu")
    })
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running,and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);
