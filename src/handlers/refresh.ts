import { Composer } from 'telegraf';
// import { skip } from '../tgcalls';
// this handler is copied via skip.ts file ~Sahil
export const refreshHandler = Composer.command('refresh', ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }
    console.log('got into refresh hander..');

    ctx.reply("Count to 5 and I'll be up again.!!");
    // I dont' know why but it seems to only work with setTimeout somehow else it creates restart loop for 3-4 times loop atleast!
    setTimeout(() => {
        process.exit();
    }, 1000);
});
