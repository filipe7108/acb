const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"
const admprefix = "@!"
const ytdl = require('ytdl-core');

client.on("ready", () => {
  console.log(`Em funcionamento!!!! total de ${client.channels.size} Canais, em ${client.guilds.size} servers, um total de ${client.users.size} usuarios.`)
})
  , client.on('ready', () => {
    client.user.setGame('Digite !help |VTeste|')
  })


  , client.login("MzgwMDUyMjM3MjgxNTI1NzYw.DOy-3w.wi5p6Y8hprXTYNHH_dTmyvwBUc4")

  client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    if (!message.content.startsWith(admprefix)) return;
  
    const user = message.mentions.users.first() || message.author;

    if (message.content.startsWith(admprefix + "setgame")) {
      message.delete("!setgame")
      const stg = "!setgame "
      var stgargs = message.content.substring(stg.length);
      client.user.setGame(stgargs)
      console.log("Game mudado para " + stgargs)
    }
  
    if (message.content.startsWith(admprefix + "say")) {
      message.delete("!say")
      const say = "!say "
      var sayargs = message.content.substring(say.length);
      message.channel.sendMessage(sayargs)
    }
  },
client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.channel.type !== 'text') return;
  if (!message.content.startsWith(prefix)) return;

  const user = message.mentions.users.first() || message.author;

  if (message.content.startsWith(prefix + "ping")) {
    message.delete(prefix + "ping")
    message.channel.sendMessage(`Estou a funcionar corretamente! Sirvo num total de ${client.guilds.size} servidores!`)
  }

  if (message.content.startsWith(prefix + "oi")) {
    message.delete(prefix + "oi")
    message.channel.sendMessage(`Olá ${message.author}!`)
  }

  if (message.content.startsWith(prefix + "tchau")) {
    message.delete(prefix + "tchau")
    message.channel.sendMessage(`Até mais ${message.author}`)
  }

  if (message.content.startsWith(prefix)) {
    if (message.content.startsWith(prefix + "help")) {
      message.delete(prefix + "help")
      message.channel.sendMessage("Olá, sou o Bot António Costa!")
      message.channel.sendMessage(`Eu enviei os meus comandos para o seu privado, ${message.author}`)
      message.author.sendMessage(`${message.author} Comandos do António Costa:`)
      message.author.sendMessage("V0.1 `!ping`")
      message.author.sendMessage("V0.1 `!oi`")
      message.author.sendMessage("V0.1 `!tchau`")
      message.author.sendMessage("V0.2 `!help`")
      message.author.sendMessage("V0.2 `!69`")
      message.author.sendMessage("V0.4 `!antonio`")
      message.author.sendMessage("V0.4 `!passos`")
      message.author.sendMessage("V0.5 `!hate @user`")
      message.author.sendMessage("V0.6 `!ata`")
      message.author.sendMessage("V0.8 `!vaisefuder`")
      message.author.sendMessage("V0.9 `!paodequeijo`")
      message.author.sendMessage("V0.9 `!kai1`")
      message.author.sendMessage("V0.9 `!kai2`")
      message.author.sendMessage("V0.9 `!megakai`")
      message.author.sendMessage("V1 `!cookie`")
      message.author.sendMessage("V1.1 `!safadinho`")
      message.author.sendMessage("V1.1 `!avatar`")
      message.author.sendMessage("V1.3 `!ttprofile`")
      message.author.sendMessage("V1.3 `!igprofile`")
      message.author.sendMessage(`Obrigado por usar o AntónioCostaBot, ${message.author}`)
    }

    if (message.content.startsWith(prefix + "69")) {
      message.channel.sendMessage(`Adoro! Você quer, ${message.author}?`)
    }

    if (message.content.startsWith(prefix + "antonio")) {
      message.channel.sendMessage("Sou eu!")
      message.channel.sendFile('cost!nb.png')
    }
    if (message.content.startsWith(prefix + "passos")) {
      message.delete(prefix + "passos")
      message.channel.sendMessage("Odeio esse fedelho do PSD")
      message.channel.sendFile('passos.png')
    }

    if (message.content.startsWith(prefix + "hate")) {
      message.delete(prefix + "hate")
      message.channel.sendMessage(`Pela minha experiência, digo que ${message.author} odeia ${user}!`)
      message.channel.sendFile('espantada14.png')
    }

    if (message.content.startsWith(prefix + "ata")) {
      message.delete(prefix + "ata")
      message.channel.sendMessage("a t a")
      message.channel.sendFile("unknown.png")
    }

    if (message.content.startsWith(prefix + "vaisefuder")) {
      message.channel.sendMessage("Me obriga")
      message.channel.sendFile("images.png")
    }

    if (message.content.startsWith(prefix + "paodequeijo")) {
      message.channel.sendMessage("Eu sei! É uma delicia!")
      message.channel.sendFile("Pao-de-Queijo.png")
    }


    if (message.content.startsWith(prefix + "kai1")) {
      message.delete(prefix + "kai1")
      message.channel.sendMessage("Kawaii")
      message.channel.sendFile("download.png")
      message.channel.sendFile("download2.png")
      message.channel.sendFile("download3.png")
    }

    if (message.content.startsWith(prefix + "kai2")) {
      message.delete(prefix + "kai2")
      message.channel.sendMessage("Kawaii")
      message.channel.sendFile("download4.png")
      message.channel.sendFile("download5.png")
      message.channel.sendFile("download6.png")
    }

    if (message.content.startsWith(prefix + "megakai")) {
      message.delete(prefix + "megakai")
      message.channel.sendMessage("Kawaii")
      message.channel.sendFile("download7.png")
    }

    if (message.content.startsWith(prefix + "wtf")) {
      message.delete(prefix + "wtf")
      message.channel.sendMessage('wtf ur doing')
      message.channel.sendFile('d6f.png')
    }

    if (message.content.startsWith(prefix + "avatar")) { //V1.1 - avatar - VERSÃO FINAL
      message.delete(prefix + "avatar")
      message.channel.sendMessage(`Avatar de ${user}`)
      message.channel.sendMessage(`${user.avatarURL}`)
    }

    if (message.content.startsWith(prefix + "cookie")) { //V1.1 - cookie - VERSÃO FINAL
      message.delete(prefix + "cookie")
      message.channel.sendFile('cookie.png')
      message.channel.sendMessage(`${message.author}`)
      message.channel.sendMessage(`deu uma cookie a ${user}!`)
    }

    if (message.content.startsWith(prefix + "safadinho")) { //V1.1 - safadinho - VERSÃO FINAL
      message.channel.sendFile("safadinho.png")
      message.delete(prefix + "safadinho")
    }

    if (message.content.startsWith("," + "NULL1"))  //V1.3 - help (novo) - DESCONTINUADO
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          }
          , title: "**Comandos do AntónioCostaBot**",
          description: "Olá, este bot foi criado apenas por entretenimento, não vai ser algo muito complexo. Segue-se abaixo os meus comandos!",
          fields: [{
            name: "Comandos",
            value: "!ping",


          },
          ]
          , timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© AntonioCostaBotV1.2"
          }
        }
      })
  }

  if (message.content.startsWith(prefix + "wiki")) { //V1.3 - wiki - VERSÃO FINAL
    const wiki = "!wiki "
    var args = message.content.substring(wiki.length);

    message.channel.sendMessage("http://pt.wikipedia.org/wiki/" + args)
  }

  if (message.content.startsWith(prefix + "ttprofile")) { //V1.3 - ttprofile - VERSÃO FINAL
    message.delete(prefix + "ttprofile")
    const ttpr = "!ttprofile "
    var args = message.content.substring(ttpr.length);

    message.channel.sendMessage("http://twitter.com/" + args)
  }

  if (message.content.startsWith(prefix + "igprofile")) { //V1.3 - igprofile - VERSÃO FINAL
    message.delete(prefix + "igprofile")
    const igpr = "!igprofile "
    var args = message.content.substring(igpr.length);

    message.channel.sendMessage("http://instagram.com/" + args)
  }

  if (message.content.startsWith(prefix + "8ball")) {
    var message_options = [
      "Sim",
      "Não",
      "Eh... pergunte-me isso mais tarde",
      "Com certeza, hihihi",
      "Negativo",
      "Estou em dúvida sobre isso...",
      "Talvez...Quem sabe",
      "Porque não?",
    ]
    var random_index = Math.floor(Math.random() * message_options.length)
    var chosen_message = message_options[random_index]

    message.channel.sendMessage(`${message.author} ` + chosen_message)
  }

}))