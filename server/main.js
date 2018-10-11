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

router.get('/', (req, res) => {
	const number = Math.floor(100 * Math.random());
	res.json({ number });
});

// START THE SERVER
app.use('/api', router);
app.listen(port);
console.log(`Starting server on port ${ port }`);
