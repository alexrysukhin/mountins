let express = require('express');
let app = express();
let mongoose = require('mongoose');
let mongoUrl = "mongodb://localhost:27017/usersdb";
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = require('./middleware/uploadPicture');



const Blog = require('./models/Blog');


const aboutRouter = require('./routes/aboutRouter');
const blogRouter = require('./routes/blogRouter');
const worksRouter = require('./routes/worksRouter');
const welcomeRouter = require('./routes/welcomeRouter');
const adminRouter = require('./routes/adminRouter');


mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('MongoDB connected.'))
	.catch((err) => console.log(`${err.name}: ${err.message}`));



// Blog.deleteOne({ title: "Названьеце" }, function (err, result) {
// 	mongoose.disconnect();

// 	if (err) return console.log(err);
// 	console.log(result);
// });


app.set('views', './views');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
// app.use(multer({ storage: upload.storage }).single('filedata'))

// const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use('/admin', adminRouter);
app.use('/welcome', welcomeRouter);
app.use('/works', worksRouter);
app.use('/blog', blogRouter);
app.use('/', aboutRouter);




app.listen(3000, () => {
	console.log('Server started at 3000 port.');
});