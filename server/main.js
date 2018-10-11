// Configure app
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

// API routes
const router = express.Router();

// Middleware
router.use((req, res, next) => {
	console.log('Making request');
	next();
});

//Load NLP
const nlpManager = require('./nlp');

router.get('/', (req, res) => {
	nlpManager.process('en', 'I have to go').then(nlpRes => {
		const number = Math.floor(100 * Math.random());
		// console.log(nlpRes);
		res.json({
			number,
			answer: nlpRes.answer
		});
	});
});

// START THE SERVER
app.use('/api', router);
app.listen(port);
console.log(`Starting server on port ${ port }`);
