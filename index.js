const express = require('express');
const keepAlive = require('./keepalive');
const config = require('./config.json')
const token = config.token
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

client.on('ready', () => {
        console.log('hi')
});

client.on("message", async msg => {
  if (msg.content == '!ping') {
		msg.channel.send('pong')
	}
})

client.on("ready", async () => {
      setInterval(() => {
       			 let a = client.channels.cache.get("id")
			 let b = client.channels.cache.get("id")
			 let c = client.channels.cache.get("id")
			 let d = client.channels.cache.get("id")  


       			 a.send("!d bump")
	      		await new Promise(resolve => setTimeout(resolve, 5000));
			 b.send("!d bump")
	      		await new Promise(resolve => setTimeout(resolve, 5000));
			 c.send("!d bump")
	      		await new Promise(resolve => setTimeout(resolve, 5000));
			 d.send("!d bump") 
	      		await new Promise(resolve => setTimeout(resolve, 5000));
      }, 5000)
})

client.login(token)
