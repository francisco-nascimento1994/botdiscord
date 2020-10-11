const discord = require("discord.js");
const react = require("./react.js");
const bot = new discord.Client();
const bot1 = new discord.Client();

const token = "";

const testes = bot.setMaxListeners(999);
 var tpp = 0
 var number = 0
 var serverstatus=1
 var picar = 0
 const talkedRecently = new Set();
 var sv="server on";
 

//log
bot.login(token)
//react ao coração
bot.on('message', msg => {
	if (msg.content.includes('❤️')||msg.content.includes("<3")) {
		msg.react('❤️');
	}
})

//comandos
bot.on("message",msg => {

  if(msg.content === "!comandos")
    msg.channel.send("```!love @nomedapessoa, !odio @nomedapessoa, !staff, !status, !roleta, !regras, !servidor, !vip, !sv, !ip```")
})
//bot on
bot.on("message",msg => {

  if(msg.content === "!boton"){
    msg.channel.send("```Estou online ! ✔️  \n\nFaz !comandos para ver a lista de comandos disponiveis! 👈```")
  msg.delete();
  }
})
//!kick
bot.on("message",msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
      msg.react("🏓")
      
      } else if (msg.content.startsWith('!kick')) {
        if (msg.mentions.users.size) {
          const taggedUser = msg.mentions.users.first();
          msg.reply(`quer kickar o ${taggedUser.username} :joy: :joy: `);
        } else {
          msg.reply('```nome invalido!```');
        }
      }
})    

//numero random function
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }
var cont1= between
  

//!love
bot.on("message",msg => {
    if (msg.content === 'ping') {
        ;
      
      } else if (msg.content.startsWith('!love')) {
        if (msg.mentions.users.size) {
          const taggedUser = msg.mentions.users.first();
          msg.reply(`Sente ${between(1, 100)}% de amor por ${taggedUser.username} :heart_eyes: :heart_eyes:`);
          msg.react('❤️');
        } else {
          msg.reply('```nome invalido!```');
        }
      }
})  
//!odio
bot.on("message",msg => {
    if (msg.content === 'ping') {
        ;
      
      } else if (msg.content.startsWith('!odio')) {
        if (msg.mentions.users.size) {
          const taggedUser = msg.mentions.users.first();
          msg.reply(`Sente ${between(1, 100)}% de odio por ${taggedUser.username} :face_with_symbols_over_mouth:  :face_with_symbols_over_mouth: `);
          msg.react('🤬');
        } else {
          msg.reply('```nome invalido!```');
        }
      }
})  
//reagir ao server on
bot.on('message', async message => {
	if (message.content === 'https://media.discordapp.net/attachments/729240701082271758/740682377642115172/f1.gif') {
    serverstatus=1
    console.log("rs")
		try {
			await message.react('❤️');
			await message.react('👌');
			await message.react('✨')
      await message.react('✔️')
      await message.react('🔥')
      await message.react('🇴')
      await message.react('🇳')
		} catch (error) {
			console.error('um dos emojis deu erro.');
		}
	}
})

//!ajuda
bot.on("message",msg=>{
  if(msg.content==="!ajuda")
  if (talkedRecently.has(msg.author.id))
  msg.channel.send("Tens de esperar 30 segundos entre cada comando, por favor nao spamar comandos !!");
 else { 
   msg.reply("Fala com um dos nossos Staff's ou, deixa um ticket com detalhes do teu problema <#729468650972643418> 🖐️🖐️ ")
talkedRecently.add(msg.author.id);
setTimeout(() => {
  talkedRecently.delete(msg.author.id);
}, 30000);}
})
//ola
bot.on("message",msg=>{
if(msg.content.includes("boas")||msg.content.includes("olá")||msg.content.includes("bom dia")||msg.content.includes("boa tarde")||msg.content.includes("boa noite"))
    msg.reply("Ola :clap:")
})
//ola kokas
bot.on("message",msg=>{
if(msg.content.includes("bicho feio")||msg.content.includes("bichos feios"))
    msg.reply("Ola bicho lindo :clap:")
})
//roleta----------------
bot.on("message",msg => {
  if(msg.content === "!roleta"&&number==0)
  if (talkedRecently.has(msg.author.id))
  msg.channel.send("Tens de esperar 30 segundos entre cada comando, por favor nao spamar comandos !!");
  else { 
      msg.react("🎱")
      msg.reply("Digite um numero de 1 a 100")
      number=1
      talkedRecently.add(msg.author.id);
setTimeout(() => {
  talkedRecently.delete(msg.author.id);
}, 30000);}
})
bot.on("message",msg => {      
   if(msg.content>0&&msg.content<=100&&number== 1){
  msg.reply(`Girou a roleta e saiu o número da sorte ${between(1, 100)} :8ball: :game_die:`);
      number=0
   }
})
bot.on("message",msg => {      
   if(msg.content>0&&msg.content<=100&&cont1==msg.content&&number==1){
  msg.reply(`Saiu te a sorte grande !!! :8ball: :game_die:`);
      
   }
})
//----------------------

//msg react cara rir
bot.on("message",msg=>{
  if(msg.content.includes("😂")||msg.content.includes("ahaha")||msg.content==="lol"||msg.content.startsWith("rir"))
  msg.react("😂")
  
})
 //!staff
bot.on("message",msg=>{
if(msg.content==="!staff"){
  
  const exampleEmbed = {
    color: 0x0099ff,
    title: 'Contamos com os melhores!',
    url: 'https://discord.gg/gx8n8A',
    author: {
      name: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    //description: 'Some description here',
    thumbnail: {
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    fields: [
      //{
        //name: 'Regular field title',
        //value: 'Some value here',
      //},
      {
        name: '\u200b',
        value: '\u200b',
        inline: false,
      },
      {
        name: 'Claudino',
        color: 0x0099ff,
        value: '```md\n#Dono```',
        inline: true,
      },
      {
        name: 'Davuela',
        color: 0x0099ff,
        value: 'Fundador',
        inline: true,
      },
      {
        name: '0voKynder     ',
        color: 0x0099ff,
        value: 'Fundador',
        inline: true,
      },
      {
        name: 'Brilhante',
        color: 0x0099ff,
        value: 'Staff',
        inline: true,
      },
      {
        name: 'cunha12',
        color: 0x0099ff,
        value: 'Staff',
        inline: true,
      },
      {
        name: 'Resende27',
        color: 0x0099ff,
        value: 'Staff',
        inline: true,
      },
      {
        name: 'Daniel',
        color: 0x0099ff,
        value: 'Staff',
        inline: true,
      },
      {
        name: 'Migusta',
        color: 0x0099ff,
        value: 'Staff',
        inline: true,
      },
      {
        name: 'Dias',
        color: 0x0099ff,
        value: 'configurador de discord',
        inline: true,
      },
      {
        name: 'Semskillcfg',
        color: 0x0099ff,
        value: 'configurador de discord',
        inline: true,
      },
      
    ],
    image: {
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    timestamp: new Date(),
    footer: {
      text: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
  };
  
  msg.channel.send({ embed: exampleEmbed });
  msg.delete();
}

});
//reply candidaturas
bot.on("message", msg => {
  if(msg.content.includes("Nome:")||msg.content.includes("ID:")){

  msg.react("✔️")
  msg.react("🛑")
  msg.reply("Se a tua candidatura For aprovada o responsavel vai colocar um ✔️ se for rejeitada vai colocar 🛑\n(reagir apena se for responsavel pelas candidaturas!)")
  }
})
//!servidor
bot.on("message",msg =>{
if(msg.content==="!servidor")
msg.reply(`já somos ${bot.users.cache.size} players no discord!\ncontamos com ${bot.channels.cache.size} canais de chat e voz.\nJunta-te a nós!`)

})

//mensagem descrição do bot
bot.on("ready",() => {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  
let activities = [
  `ultimo update ${hours}:${mins}:${secs}`,
  `Pátria Portuguesa RP`,
  `${bot.users.cache.size} pessoas`,
  `No discord!`,
  `!comandos`
],
i = 0;   
setInterval(()=> bot.user.setActivity(`${activities[i++ %activities.length]}`,{
  type: "PLAYING"
}), 5000);
bot.user
.setStatus("online")
.catch(console.log);
  
});
//!regras
bot.on("message",msg=>{
  if(msg.content==="!regras"){
    const exampleEmbed = {
      color: 0x0099ff,
      title: 'Importante #REGRAS#',
      description:"```xl\n'Para quem não sabe, temos uma aba que se chama Regras,\nnela contem varias salas com:'```",
      url: 'https://discord.gg/gx8n8A',
      author: {
        name: 'Pátria Portuguesa RP',
        icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
        url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
      //description: 'Some description here',
      thumbnail: {
        url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
      fields: [
        //{
          //name: 'Regular field title',
          //value: 'Some value here',
        //},
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Discord',
          value: '```cs\n#Regras do discord```',
          inline: true,
        },
        {
          name: 'Server',
          value: '```cs\n#Regras do servidor```',
          inline: true,
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Autoridade',
          value: '```fix\nRegras da PSP/GNR```',
          inline: false,
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Serviços',
          value: '```md\n#Regras de serviços```',
          inline: true,
        },
        {
          name: 'Organizações',
          value: '```md\n#Regras de Organizações```',
          inline: true,
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Saude',
          value: "```xl\n'Regras do INEM'```",
          inline: true,
        },
        {
          name: 'Assaltos',
          value: "```xl\n'Regras para os assaltos'```",
          inline: true,
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'E também..',
          value: '```cs\n#Safe e redzones```',
          inline: false,
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'por isso..',
          value: '```md\n[TODOS E SEM EXCEÇÃO](têm de saber as nossas regras, lê para nao sofreres penalizações!!)```',
          inline: false,
        },
        
        

        
        
      ],
      image: {
        url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
      timestamp: new Date(),
      footer: {
        text: 'Pátria Portuguesa RP',
        icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
    };
    
    msg.reply({ embed: exampleEmbed });
    msg.react('✔️')
  }
  
})
//!vip
  bot.on("message",msg=>{
    if(msg.content==="!vip"){
      const exampleEmbed = {
        color: 0x0099ff,
        title: '------------------Sistema de VIP------------------',
        url: 'https://discord.gg/gx8n8A',
        author: {
          name: 'Pátria Portuguesa RP',
          icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
          url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
        },
        //description: 'Some description here',
        thumbnail: {
          url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
        },
        fields: [
          //{
            //name: 'Regular field title',
            //value: 'Some value here',
          //},
          //{
            //name: '\u200b',
            //value: '\u200b',
            //inline: false,
          //},
          {
            name: "---------------------------------------------------------------",
            value: "```xl\n'VIP TICKETS 🏅- Escolhe um dos bilhetes para ganhares dinheiro, casas ou carros!\n[+INFO passa o cursor nos tickets em baixo e conhece as vantagens de cada TIER VIP]```",
            inline: false,
          },
          {
            name: "Para além dos beneficios in game..",
            value: "```xl\n'Vais ter também uma tag no discord exclusiva com o tier do teu vip!\nObrigado e bons RP´s ✔️```",
            inline: false,
          }
          
        
        ],
        image: {
          url: 'https://media.discordapp.net/attachments/727173165255491596/740300655813591262/Webp.net-gifmaker.gif',
        },
        timestamp: new Date(),
        footer: {
          text: 'Pátria Portuguesa RP',
          icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
        },
      };
      
      msg.channel.send({ embed: exampleEmbed });
      msg.channel.send("Bons RP's !!")
      msg.delete();
        } 
});
//react bons rps
    bot.on("message",msg=>{
      if(msg.content==="Bons RP's !!"){
        msg.react('❤️')
        msg.react('👌')
        msg.react('✨')
        msg.react('✔️')
      }    
})
//!say
bot.on('message', message => {
  if(message.content.startsWith("!say")) {
  let perms = message.member.permissions;
let has_kick = perms.has("KICK_MEMBERS");
if(!has_kick===true) return message.reply("Não podes utilizar esse comando")
  if(message.content.startsWith("!say")) {
      if (message.mentions.channels.size == 0) {
          message.reply("esse canal nao existe");
      }
      else {
          let targetChannel = message.mentions.channels.first();
          const args = message.content.split(" ").slice(2);
          let saytext = args.join(" ");
          targetChannel.send(saytext);
          message.delete();
      }
}}})
//ping
bot.on('messageUpdate', (oldMessage, newMessage) => {

  if (oldMessage.content === 'Pinging...') {

      var oldMessageTimestamp = oldMessage.createdTimestamp;
      var newMessageTimestamp = newMessage.editedTimestamp;

      newMessage.edit(`ping ${Math.floor(newMessageTimestamp - oldMessageTimestamp)} ms!`);
  }
});
//ping
bot.on('message', message => {

  if (message.content === `ping`) {

      message.channel.send('Pinging...').then(message => {

          message.edit('ping milliseconds!');
      })
  }
});

require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
client.login(token);
const guildInvites = new Map();
const userCreatedPolls = new Map();
//contador
client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on('ready', () => {

    client.guilds.cache.forEach(guild => {
        guild.fetchInvites()
            .then(invites => guildInvites.set(guild.id, invites))
            .catch(err => console.log(err));
    });
});

client.on('guildMemberAdd', async member => {
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try {
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
        const embed = `${member.user.tag} é o membro numero ${member.guild.memberCount} a entrar.`
            //.setDescription(`${member.user.tag} é o membro numero ${member.guild.memberCount} a entrar.`)
            //.setTimestamp()
            //.setTitle(`${usedInvite.url}`);
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.id === '746872227252797571');
        if(welcomeChannel) {
            welcomeChannel.send(embed).catch(err => console.log(err));
        }
    }
    catch(err) {
        console.log(err);
    }
});

//votacao
client.on('message', async message => {
  if(message.author.bot) return;
  if(message.content.toLowerCase() === '!criarvotacao') {
      if(userCreatedPolls.has(message.author.id)) {
          message.channel.send("Já existe uma votação em curso.");
          return;
      }
      message.channel.send("colocar opções. Max 5. Escreve feito para terminar.");
      let filter = m => {
          if(m.author.id === message.author.id) {
              if(m.content.toLowerCase() === 'feito') collector.stop();
              else return true;
          }
          else return false;
      }
      let collector = message.channel.createMessageCollector(filter, { maxMatches: 5 });
      let pollOptions = await getPollOptions(collector);
      if(pollOptions.length < 2) {
          message.channel.send("opções insuficientes, tem de conter pelo menos 2!");
          return;
      }
      let embed = `criar votação com\n ${pollOptions.join("\n")}`;
      //embed.setTitle("Votação");
      //embed.setDescription(pollOptions.join("\n"));
      let confirm = await message.channel.send(embed);
      
      await confirm.react('✅');
      await confirm.react('❎');

      let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
      let reaction = (await confirm.awaitReactions(reactionFilter, { max: 1 })).first();
      if(reaction.emoji.name === '✅') {
          message.channel.send("votação vai começar em 5 segundos.");
          await delay(5000);
          message.channel.send("Vota agora!");
          let userVotes = new Map();
          let pollTally = new discord.Collection(pollOptions.map(o => [o, 0]));
          let pollFilter = m => !m.bot;
          let voteCollector = message.channel.createMessageCollector(pollFilter, {
              time: 99999999
          });
          userCreatedPolls.set(message.author.id, voteCollector);
          await processPollResults(voteCollector, pollOptions, userVotes, pollTally);
          let max = Math.max(...pollTally.array());
          console.log(pollTally.entries());
          let entries = [...pollTally.entries()];
          let winners = [];
          //let embed = new discord.RichEmbed();
          let desc = '';
          entries.forEach(entry => entry[1] === max ? winners.push(entry[0]) : null);
          entries.forEach(entry => desc  += entry[0] + " recebeu " + entry[1] + " voto(s)\n");
          message.channel.send(desc);

          if(winners.length === 1) {
              message.channel.send(winners[0] + " ganhou!");
          }
          else {
              message.channel.send("Empate!");
          }
      }   
      else if(reaction.emoji.name === '❎') {
          message.channel.send("Votação cancelada.");
      }
  }
  else if(message.content.toLowerCase() === '!pararvotacao') {
      if(userCreatedPolls.has(message.author.id)) {
          console.log("Parando a votação.");
          userCreatedPolls.get(message.author.id).stop();
          userCreatedPolls.delete(message.author.id);
      }
      else {
          message.channel.send("Não tens nenhuma votação em curso.");
      }
  }
});

function processPollResults(voteCollector, pollOptions, userVotes, pollTally) {
  return new Promise((resolve, reject) => {
      voteCollector.on('collect', msg => {
          let option = msg.content.toLowerCase();
          if(!userVotes.has(msg.author.id) && pollOptions.includes(option)) {
              userVotes.set(msg.author.id, msg.content);
              let voteCount = pollTally.get(option);
              pollTally.set(option, ++voteCount);
          }
      });
      voteCollector.on('end', collected => {
          console.log("Collected " + collected.size + " votes.");
          resolve(collected);
      })
  });
}

function getPollOptions(collector) {
  return new Promise((resolve, reject) => {
      collector.on('end', collected => resolve(collected.map(m => m.content.toLowerCase())));
  });
}

function delay(time) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve();
      }, time)
  })
}
//apagar comando
bot.on("message",msg=>{
  if(msg.content==="!criarvotacao"||msg.content==="!pararvotacao")
  msg.delete();
})

invite = "https://discord.gg/cbWUedQ";
bot.on('message', message =>{
  if (message.author.bot) return;
else if (message.channel.type == 'dm')
message.channel.send(invite); 

});

//bot xd
bot.on('message',msg =>{
  if(msg.author.bot) return
  if(msg.content.includes("bot"))
  msg.reply("bot ? alguem me chamou ? 🖐️👀")
})
//!eventos
bot.on('message',msg =>{
  if(msg.author.bot) return
  if(msg.content==="!eventos"){
  msg.delete();
  msg.reply("Sala <#739641288684732426>🖐️🖐️")
}})
//kokas
bot.on('message',msg=>{
  if(msg.author.bot) return
  if(msg.content.includes("kokas")){
  msg.channel.send("https://tenor.com/view/kermit-the-frog-drive-driving-gif-3965525")
  msg.react("🐸");
  }
})
 //!entrada
bot.on("message",msg=>{
  if(!msg.author.bot&&msg.channel.id==="757821007120695316"||msg.channel.id==="757831102428741733"||msg.channel.id==="757831236902453327"||msg.channel.id==="760191911046414347"||msg.channel.id==="738917870901264422")
  if(msg.content==="!entrada"){
    horas = new Date().getHours()
    minutos = new Date().getMinutes()
    segundos = new Date().getSeconds()
    dia = new Date().getTimezoneOffset
  talkedRecently.add(msg.author.id)
  const exampleEmbed = {
    color: 0x0099ff,
    title: 'Sistema de entradas e saidas da Pátria Portuguesa',
    url: 'https://discord.gg/gx8n8A',
    author: {
      name: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    thumbnail: {
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    fields: [
      {
        name: '\u200b',
        value: '\u200b',
        inline: false,
      },
      {
        name: "```Nome:```",
        color: 0x0099ff,
        value: "<@"+msg.author.id+"> ",
        inline: true,
      },
      {
        name: "```Entrada:```",
        color: 0x0099ff,
        value:  horas +" horas e "+minutos+" minutos",
        inline: true,
      },
      
      
    ],
    image: {
      url: '',
    },
    timestamp: dia,
    footer: {
      text: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
  };
  
  msg.channel.send({ embed: exampleEmbed });
  msg.delete();
}

});
 //!saida
 bot.on("message",msg=>{
  if(!msg.author.bot&&msg.channel.id==="757821007120695316"||msg.channel.id==="757831102428741733"||msg.channel.id==="757831236902453327"||msg.channel.id==="760191911046414347"||msg.channel.id==="738917870901264422")
  if(msg.content==="!saida"){
    horas = new Date().getHours()
    minutos = new Date().getMinutes()
    dia = new Date().getTimezoneOffset
  talkedRecently.add(msg.author.id)
  const exampleEmbed = {
    color: 0x0099ff,
    title: 'Sistema de entradas e saidas da Pátria Portuguesa',
    url: 'https://discord.gg/gx8n8A',
    author: {
      name: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    thumbnail: {
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    fields: [
      {
        name: '\u200b',
        value: '\u200b',
        inline: false,
      },
      {
        name: "```Nome:```",
        color: 0x0099ff,
        value: "<@"+msg.author.id+"> ",
        inline: true,
      },
      {
        name: "```Saida:```",
        color: 0x0099ff,
        value:  horas +" horas e "+minutos+" minutos",
        inline: true,
      },
      
      
    ],
    image: {
      url: '',
    },
    timestamp: dia,
    footer: {
      text: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
  };
  
  msg.channel.send({ embed: exampleEmbed });
  msg.delete();
}

});
//!ip
bot.on("message",msg=>{
  if(msg.content==="!ip"){
  const exampleEmbed = {
    color: 0x0099ff,
    title: 'e8rp9p',
    url: 'https://patria-portuguesa-rp.webnode.pt',
    author: {
      name: 'IP',
      icon_url: '',
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    thumbnail: {
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    fields: [
      {
        name: '\u200b',
        value: '\u200b',
        inline: false,
      },
      
    ],
    image: {
      url: '',
    },
    timestamp: new Date(),
    footer: {
      text: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
  };
  
  msg.channel.send({ embed: exampleEmbed });
  msg.delete();
}

});
//site
bot.on("message",msg=>{
  if(msg.content==="!site"){
  const exampleEmbed = {
    color: 0x0099ff,
    title: 'Carrega aqui para ires para o nosso site !',
    url: 'https://patria-portuguesa-rp.webnode.pt',
    author: {
      name: 'Site official da Pátria Portuguesa RP',
      icon_url: '',
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    thumbnail: {
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    fields: [
      {
        name: '\u200b',
        value: '\u200b',
        inline: false,
      },
      
    ],
    image: {
      url: '',
    },
    timestamp: new Date(),
    footer: {
      text: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
  };
  
  msg.channel.send({ embed: exampleEmbed });
  msg.delete();
}

});
//!serveroff
bot.on("message",msg=>{
  if(msg.content==="!serveroff"){
    serverstatus=0
  const exampleEmbed = {
    color: 0x0099ff,
    title: 'Servidor off',
    url: 'https://patria-portuguesa-rp.webnode.pt',
    author: {
      name: 'Status do servidor:',
      icon_url: '',
      url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
    thumbnail: {
      url: 'https://cdn.discordapp.com/attachments/747879490092269683/758047757733855242/ppp-negative.png',
    },
    fields: [
      {
        name: '\u200b',
        value: '\u200b',
        inline: false,
      },
      
    ],
    image: {
      url: '',
    },
    timestamp: new Date(),
    footer: {
      text: 'Pátria Portuguesa RP',
      icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
    },
  };
  
  msg.channel.send({ embed: exampleEmbed });
  msg.delete();
}

});

//!sv on
bot.on("message",msg=>{
  if(msg.content==="!sv"&&serverstatus==1){
    const exampleEmbed = {
      color: 0x0099ff,
      title: 'O Servidor está on',
      url: 'https://patria-portuguesa-rp.webnode.pt',
      author: {
        name: 'Status do servidor:',
        icon_url: '',
        url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
      thumbnail: {
        url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
      fields: [
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        
      ],
      image: {
        url: '',
      },
      timestamp: new Date(),
      footer: {
        text: 'Pátria Portuguesa RP',
        icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
    };
    
    msg.channel.send({ embed: exampleEmbed });
    msg.delete();
  }
  
  });


  //!sv off
bot.on("message",msg=>{
  if(msg.content==="!sv"&&serverstatus==0){
    const exampleEmbed = {
      color: 0x0099ff,
      title: 'O Servidor está off',
      url: 'https://patria-portuguesa-rp.webnode.pt',
      author: {
        name: 'Status do servidor:',
        icon_url: '',
        url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/747879490092269683/758047757733855242/ppp-negative.png',
      },
      fields: [
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        
      ],
      image: {
        url: '',
      },
      timestamp: new Date(),
      footer: {
        text: 'Pátria Portuguesa RP',
        icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
      },
    };
    
    msg.channel.send({ embed: exampleEmbed });
    msg.delete();
  }
  
  });
//!ponto 
  bot.on("message",msg =>{
    if(msg.content==="!ponto")
    msg.reply("será que quiseste dizer !entrada ou !saida ?")
  })


//!candon
bot.on('message', message => {
  if(message.content.startsWith("!candon")) {
  let perms = message.member.permissions;
let has_kick = perms.has("KICK_MEMBERS");
if(!has_kick===true) return message.reply("Não podes utilizar esse comando")
  if(message.content.startsWith("!candon")) {
      if (message.mentions.channels.size == 0) {
          message.reply("esse canal nao existe");
      }
      else {
          let targetChannel = message.mentions.channels.first();
          const args = message.content.split(" ").slice(2);
          let saytext = args.join(" ");
          const exampleEmbed = {
            color: 0x0099ff,
            title: saytext,
            url: 'https://patria-portuguesa-rp.webnode.pt',
            author: {
              name: 'Candidaturas abertas para :',
              icon_url: '',
              url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
            thumbnail: {
              url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
            fields: [
              {
                name: '\u200b',
                value: '<@&732448697593495615>',
                inline: false,
              },
              
            ],
            image: {
              url: '',
            },
            timestamp: new Date(),
            footer: {
              text: 'Pátria Portuguesa RP',
              icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
          };
          
          message.channel.send({ embed: exampleEmbed });
          message.delete();
        }
}}})


//!dartag
bot.on('message', message => {
  if(message.content.startsWith("!dartag")) {
          const args = message.content.split(" ").slice(1);
          let saytext = args.join(" ");
          talkedRecently.add(message.author.id)
          const exampleEmbed = {
            color: 0x0099ff,
            title: saytext,
            url: 'https://patria-portuguesa-rp.webnode.pt',
            author: {
              name: 'Pedir tags :',
              icon_url: '',
              url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
            thumbnail: {
              url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
            fields: [
              {
                name: '\u200b',
                value: "<@"+message.author.id+">",
                inline: false,
              },
              {
                name: '\u200b',
                value: '<@&729454345967370302> <@&729454989097042011> <@&729454912974618694>',
                inline: false,
              },
              
            ],
            image: {
              url: '',
            },
            timestamp: new Date(),
            footer: {
              text: 'Pátria Portuguesa RP',
              icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
          };
          message.react("✔️")
          message.react("🛑")
          message.channel.send({ embed: exampleEmbed });
          message.delete();
        }
        
})

//!tirartag
bot.on('message', message => {
  if(message.content.startsWith("!tirartag")) {
          const args = message.content.split(" ").slice(1);
          let saytext = args.join(" ");
          talkedRecently.add(message.author.id)
          const exampleEmbed = {
            color: 0x0099ff,
            title: saytext,
            url: 'https://patria-portuguesa-rp.webnode.pt',
            author: {
              name: 'Tirar tags : ',
              icon_url: '',
              url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
            thumbnail: {
              url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
            fields: [
              {
                name: '\u200b',
                value: "<@"+message.author.id+">",
                inline: false,
              },
              {
                name: '\u200b',
                value: '<@&729454345967370302> <@&729454989097042011> <@&729454912974618694>',
                inline: false,
              },
              
            ],
            image: {
              url: '',
            },
            timestamp: new Date(),
            footer: {
              text: 'Pátria Portuguesa RP',
              icon_url: 'https://media.discordapp.net/attachments/729240701082271758/740677083465777192/f1.png',
            },
          };
          message.react("✔️")
          message.react("🛑")
          message.channel.send({ embed: exampleEmbed });
          message.delete();
        }
})

//reagir aos tickets
bot.on("message",msg =>{
  if (msg.content.includes("Bem vindo !")){
  msg.channel.send('```Descreve bem o teu problema para nós staff te ajudarmos da melhor maneira possivel!```')
  msg.channel.send('<@&729454345967370302> <@&729454989097042011> <@&729454912974618694>')
  }
})
//apagar mensagem
bot.on("message",msg =>{
  if(msg.author.bot) return
  if(msg.channel.id==="747552705911980092")
  if (!msg.content.includes("!tirartag")||!msg.content.includes("!dartag")){
  msg.delete();
  msg.channel.send("Usa !dartag ou !tirartag")
  .then(msg => {
    msg.delete({ timeout: 3000 })
  })
  .catch(console.error);
  }
})



//Import some packages needed
const moment = require('moment');
const tz = require('moment-timezone');
const chalk = require('chalk');


const { timezone, format, clockchannel, updateinterval, token2} = require('./config.js');

//'ready' event
bot.once('ready', () => {
  //init time
  const timeNow = moment().tz(timezone).format(format);
  //define clockChannel
  const clockChannel = bot.channels.cache.get(clockchannel);
  //initial update
  clockChannel.edit({ name: `🕒 ${timeNow}` }, 'Clock update')
    .catch(console.error);
  //set the interval
  setInterval(() => {
    const timeNowUpdate = moment().tz(timezone).format(format);
    clockChannel.edit({ name: `🕒 ${timeNowUpdate}` }, 'Clock update')
      .catch(console.error);
  }, updateinterval);
  //tells if it is ready
	console.log(chalk.greenBright("[READY]"), `Logged in as ${bot.user.tag} (${bot.user.id}) at ${moment().format("DD MMMM YYYY, HH:mm:ss")}`);
});
