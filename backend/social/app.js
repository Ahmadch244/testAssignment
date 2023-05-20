const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const {router} = require('./router/route.js');

const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('./db/knexFile.js');

// Initialize Knex with the configuration
const knex = Knex(knexConfig.development);

// Bind the Knex instance to the Objection's Model
Model.knex(knex);


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

/** api routes */
app.use('/api', router);

app.use('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});



app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});