const express = require('express');
const ngrok = require('@ngrok/ngrok');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.listen(9000, async () => {
	const listener = await ngrok.connect({
		port: 9000,
		authtoken_from_env: true,
		domain: process.env.NGROK_DOMAIN
	})

	console.log(listener.url());
});