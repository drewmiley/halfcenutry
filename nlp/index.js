const nlpManager = require('../server/nlp');
nlpManager.process('en', 'I have to go').then(console.log);
