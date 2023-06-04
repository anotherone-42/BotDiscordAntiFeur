const {Client, GatewayIntentBits, EmbedBuilder} = require('discord.js');
const {token, prefix} = require ('./config.json');

const client = new Client 
({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.on('ready', () => {
    console.log("salute");
    client.user.setStatus("online");
    client.user.setActivity("à contrer la blague du 'feur'");
});

const exampleEmbed = new EmbedBuilder()
.setColor(0xe510db)
.setTitle('Bot anti-blague "feur"')
.setDescription("J'ai créé ce petit bot, pour mettre fin au règne de la terreur que nous impose la blague du 'quoi ?' -Feur \n aucune commande à display, il ne sert qu'à contrer une blague trop répandue \n (sauf le '&coffee' pcq faut pas déconner, le café c'est chouette");

client.on("messageCreate", message => {

    switch(message){

        case (message.content.toLowerCase()==="feur"):
        message.reply("ouge"); 
        break;

        case (message.content.toLowerCase()==="feur !"):
        message.reply("ouge");
        break;

        case (message.content.toLowerCase()==="gorge"):
        message.reply("profonde");
        break;

        case (message.content.toLowerCase()==="bril"):
        message.reply("ça veut dire 'lunettes' en néerlandais");
        break;
    
        case (message.content.toLowerCase()==="frere"):
        message.reply("Jacques");
        break;

        case (message.content.toUpperCase()==="frère"):
        message.reply("Jacques");
        break;
    }
})

client.on("messageCreate", message=>{
    if(message.content=== prefix+"help"){
        message.channel.send({embeds: [exampleEmbed]});
    }
})

client.on("messageCreate", message=>{
    if(message.content=== prefix+"coffee"){
        message.channel.send(" ‎ ‎ ‎ ‎  (   (   \n  " +   " ‎ ‎ ‎ ‎ )   )\n  " + String("\.\\_\\_\\_\\_\\_\\_\\.\n") + "  |              |  ]\n" + "  \\            /\n" + "    \`-----'")
    }
});

client.login(token);
