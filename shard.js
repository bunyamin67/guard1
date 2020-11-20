const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require("express");
const app = express();
const http = require("http");
const coderlab = new Discord.ShardingManager("./bot.js", {
  totalShards: 1,
  token: "NzcyMjE5Njc3MDY1NDc4MTU1.X53fng.PK4KufzI_E6DdCvNALMtPhvANTU"
});

coderlab.spawn();

coderlab.on("launch", shard => {
  console.log(`${shard.id} id.`);

});

setTimeout(() => {
  coderlab.broadcastEval("process.exit()");
}, 21600000);
