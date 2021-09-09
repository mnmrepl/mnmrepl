const { Collection, Client } = require('discord.js')
const client = new Client({ intents: 32767 })
const server = require('./server.js')
const mongoose = require('mongoose');
mongoose.connect(process.env['mongo'], { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('Connected to the database.'));

const prefix = process.env['prefix']

const token = process.env['token']

module.exports = client;

require(`./handler`)(client)
require('./handler/slashcommands')

client.commands = new Collection()
client.aliases = new Collection()
client.slashcommands = new Collection()

client.on('ready', () => {
  console.log('i am online')
})

client.login(token)
