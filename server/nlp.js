const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'] });
// Adds the utterances and intents for the NLP
manager.addDocument('en', 'give me a joke', 'greetings.joke');

// Train also the NLG
manager.addAnswer('en', 'greetings.joke', 'here is a joke');

// Train and save the model.
manager.train();
manager.save();

module.exports = manager;
