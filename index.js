const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://pravatkumargupta:YIGMDN8aLJPdQuSd@cluster0.ft1ib.mongodb.net/project2?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("Hey Pravat, Go ahead ! MongoDB_connected"))
    .catch(err => console.log(err))
app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
