const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work_experience', (req, res, next) => {
	res.sendfile("assets/work_experience.json");
});

app.get('/skill', (req, res, next) => {
	res.sendfile("assets/skill.json");
});

app.get('/interests', (req, res, next) => {
	res.sendfile("assets/interests.json");
});
  
app.get('/certifications', (req, res, next) => {
	res.sendfile("assets/certifications.json");
});

app.get('/proxy_size', (req, res, next) => {
	res.sendfile("assets/proxy_size.json");
});
  
app.get('/dev_hours', (req, res, next) => {
	res.sendfile("assets/dev_hours.json");
});
  
app.listen(port,  () => 
	console.log('listening on port ' + port
));
