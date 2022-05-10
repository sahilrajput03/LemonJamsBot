const dotenv = require('dotenv');
dotenv.config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => ctx.reply('Welcome'));
bot.help(ctx => ctx.reply('Send me a sticker'));
bot.on('sticker', ctx => ctx.reply('👍'));

bot.command('hipster', Telegraf.reply('λ'));

// reply for message: hi
bot.hears('hi', ctx => ctx.reply('Hey there'));

// reply for command: /c1
bot.command('c1', ctx => {
    console.log(ctx.update.message); // see sampple output in the end of this file.
    return ctx.reply('fuck you');
});

bot.hears('message', ctx => {
    // resend existing file by file_id
    // ctx.replyWithSticker('123123jkbhj6b');

    // send file
    // ctx.replyWithVideo({ source: '/path/to/video.mp4' });

    // send stream
    // ctx.replyWithVideo({
    //     source: fs.createReadStream('/path/to/video.mp4'),
    // });

    // send buffer
    // ctx.replyWithVoice({
    //     source: Buffer.alloc(),
    // });

    // send url via Telegram server
    // ctx.replyWithPhoto('https://picsum.photos/200/300/');

    // pipe url content
    return ctx.replyWithPhoto({
        url: 'https://picsum.photos/200/300/?random',
        // filename: 'kitten.jpg',
    });
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Outptut of ctx.update.message
/* 
{
  message_id: 806,
  from: {
    id: 1097619859,
    is_bot: false,
    first_name: 'Nick Morris',
    username: 'usNick',
    language_code: 'en'
  },
  chat: {
    id: 1097619859,
    first_name: 'Nick Morris',
    username: 'usNick',
    type: 'private'
  },
  date: 1652115698,
  text: '/c1',
  entities: [ { offset: 0, length: 3, type: 'bot_command' } ]
}
*/
