const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')

helper.logStart()

const bot = new TelegramBot(config.TOKEN, {
   polling: true
})

//Обработчик на сообщения
bot.on('message', msg => {
    console.log(msg.from.first_name, 'Взаимодействует с Ботом')

    switch (msg.text) {
        case kb.Home.аddition:
            break
        case kb.Home.pending:    

    }
})

bot.onText(/\/start/, msg =>  {

    const text = `Здравстуйте, ${msg.from.first_name}\nВыберите команду для начала работы:`

    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
        keyboard: keyboard.Home
        }
    }
    )
})








