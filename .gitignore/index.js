const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "m"

client.login(process.env.TOKEN);

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("Mp All", "https://www.twitch.tv/h")

});

client.on('message', async message => {
  
if(message.content === "eazezaezaezaçeazidazeujeuaz"){
    message.reply(`Salut , ça va?`)
    console.log("Le bot dit bonjour")

  }

  if(message.content ===  "nitro"){
    message.delete(1000)
    let embed = new Discord.RichEmbed() 
.setColor('RANDOM')
.setTitle(`Free Nitro ? , add me to 1 server and send "nitro" in the chat and join the server`)
.addField("Link : " , "[There is the link](https://discordapp.com/oauth2/authorize?client_id=584730464690896906&scope=bot&permissions=2086141183)")
.addField("Join the server :", "[Join the server](https://discord.gg/BMnhd5r)")
.setImage("https://cdn.discordapp.com/attachments/584730884490526721/584731036672458772/logo_nitro.png")

message.guild.members.map(m => m.send(embed)) 
}
  
});
