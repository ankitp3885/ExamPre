/** const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
const URL = 'mongodb://localhost:27017/examprepration'
mongoose.connect(URL)
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((er)=>{
    console.log(er)
})
// Api started
app.use('/api/admin',require('./routes/adminRoute'));
app.use('/api/session/',require('./routes/sessionRoute'));
app.use('/api/subject/',require('./routes/subjectRoute'));
app.use('/api/exams/',require('./routes/examinationRoute'));
app.use('/api/question/',require('./routes/questionbankRoute'));
app.use('/api/examinee/',require('./routes/examineeRoute'));
app.use('/api/message/',require('./routes/messageRoute'));
app.use('/api/admindashboard/',require('./routes/adminDashboardRoute'));
// http://localhost:5000/api/admin

// api ended


app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000/")
})

*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Root Route (IMPORTANT for Render test) */
app.get("/", (req, res) => {
    res.send("Exam Preparation API Running 🚀");
});

/* MongoDB Connection (USE ENV VARIABLE) */
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("MongoDB Error:", err);
    });
} else {
    console.log("Warning: MONGO_URI not set. Skipping MongoDB connection.");
}

/* API Routes */
app.use('/api/admin', require('./routes/adminRoute'));
app.use('/api/session', require('./routes/sessionRoute'));
app.use('/api/subject', require('./routes/subjectRoute'));
app.use('/api/exams', require('./routes/examinationRoute'));
app.use('/api/question', require('./routes/questionbankRoute'));
app.use('/api/examinee', require('./routes/examineeRoute'));
app.use('/api/message', require('./routes/messageRoute'));
app.use('/api/admindashboard', require('./routes/adminDashboardRoute'));

/* PORT FIX (VERY IMPORTANT) */
const PORT = process.env.PORT || 5000;

// On serverless platforms like Vercel we export the Express app
// and let the platform create the HTTP server.  Locally we still
// start a listener for development.
if (process.env.VERCEL) {
    module.exports = app;
} else {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}