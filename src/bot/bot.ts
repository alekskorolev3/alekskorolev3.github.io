import { Telegraf } from 'telegraf'
import { adminMiddleware } from './middlewares/admin'
import { mainKeyboard } from './keyboards/main'
import { requestsHandler } from './handlers/requests'
import 'dotenv'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(adminMiddleware)

bot.start((ctx) => {
    ctx.reply('Админка', mainKeyboard)
})

requestsHandler(bot)

bot.launch()
