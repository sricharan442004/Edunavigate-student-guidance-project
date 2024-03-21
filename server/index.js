var Express = require("express")
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors")
const multer = require('multer');
const { default: mongoose } = require("mongoose");
const cron = require('node-cron') // For date and time updates

var app = Express()
app.use(cors())
app.use(Express.json())
app.use(Express.json({ limit: '50mb' }));
app.use(Express.urlencoded({ limit: '50mb', extended: true }));

var CONNECTION_STRING = "mongodb://localhost:27017/"
var DATABASE = "mernproject"
var database

var url = '/api/mernproject/'

app.listen(5038, ()=>{
    MongoClient.connect(CONNECTION_STRING, (error, client)=>{
        database = client.db(DATABASE);
        console.log("MongoDB Connected Successfully")
    })
})

app.get(url+'GetschoolsList', (request, response)=>{
    database.collection("schools").find({}).toArray((error, result)=>{
        response.send(result);
    });
})

app.get(url+'GetCoursesAfter10', (request, response)=>{
    database.collection("courseafter10").find({}).toArray((error, result)=>{
        response.send(result)
    })
})

app.get(url+'GetCoursesAfter12', (request, response)=>{
    database.collection("coursesafter12").find({}).toArray((error, result)=>{
        response.send(result)
    })
})

app.get(url+'GetCoursesPG', (request, response)=>{
    database.collection("coursesafterug").find({}).toArray((error, result)=>{
        response.send(result)
    })
})

app.get(url+'GetExams', (request, response)=>{
    database.collection('exams').find({}).toArray((error, result)=>{
        response.send(result)
    })
})

app.get(url+'GetInternships', (request, response)=>{
    database.collection('internships').find({}).toArray((error, result)=>{
        response.send(result)
    })
})

mongoose.connect(CONNECTION_STRING+"mernproject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
})

const WebinarSchema = new mongoose.Schema({
    image: String,
    name: String,
    topic: String,
    date: String,
    time: String,
    url: String,
})

const Webinar = mongoose.model("webinars", WebinarSchema)

const storage = multer.diskStorage({
    destination: function(request, file, cb){
        cb(null, "A:/KLUH/YEAR 2/EVEN SEM/MERN/React JS/Project/client/src/assets")
    },
    filename: function(request, file, cb){
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({storage: storage})

app.post(url+"upload-webinar", upload.single("image"), async(request, response)=>{
    try{
        const {name,topic, date, time, url} = request.body
        const imageName = request.file.filename

        await Webinar.create({
            name: name,
            topic: topic,
            date: date,
            time: time,
            image: imageName,
            url: url,
        })
        console.log("Webinar details uploaded to MongoDB")
        response.json({status: 'OK'})
    } catch(error){
        console.error("Error uploading", error)
        response.status(500).json({status: 'error', message: 'Failed to upload'})
    }
})

app.get(url+'get-webinars', (request, response)=>{
    database.collection('webinars').find({}).toArray((error, result)=>{
        response.send(result)
    })
})

app.get(url+'test', (request, response)=>{
    database.collection("test").find({}).toArray((error, result)=>{
        response.send(result);
    });
})

app.get(url+'stock', (request, response)=>{
    database.collection('stock').find({}).toArray((error, result)=>{
        response.send(result)
    })
})
