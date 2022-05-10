# LemonJamsBot

Forked from: https://github.com/tgcallsjs/LemonJamsBot

**Another fork of tscallsjs** (performace exactly same as my `LemonJamsBot` fork) found @ https://github.com/kshubham506/vcplayerbot, user+bot with radio servce in group: https://t.me/voicechatsupport

**Updated list @ https://github.com/tgcalls/awesome-tgcalls**

**What does this do?** https://github.com/tgcallsjs/tgcalls

```bash
# Usage
Add "Nick morris" and bot "Bruno" to the group.
# We have added below values of Nick Morris i.e., numbber `9478917***` number.
API_ID
API_HASH
STRING_SESSION
# and BOT_TOKEN for the bot `Bruno`, so bot works here as a notifier for the updates we and interaction in the group and the user is controlled to stream music in the call in the group/channel.


## Usage:
Add bot and user(94789**) to any group/channel.
Start a call in the group/channel.
Now you can use below commands to use:
/play ytsearch:my song here
/play https://www.youtube.com/watch?v=i4A5ZWrJxi4
/skip
/resume
/refresh
#FYI: I implemented /refresh to make program exit and since I have created a servcie with `systemd` it would make it re-run again.
```

Also check, `./example1-telegraf.js`, its a sample program of using `telegraf` - a modern api for delaing with telegram api.

## Setup

-   Install youtube-dl and ffmpeg.
-   Fill out the `.env`
    -   Get `STRING_SESSION` with `npx tgsession`
    -   Copy `example.env` to `.env`
    -   Put in your information
-   Start the bot
    -   Install dependencies from npm
        ```shell
        $ npm install
        ```
    -   Build TypeScript
        ```shell
        $ npm run build
        ```
    -   Run the bot
        ```shell
        $ npm start
        ```

```bash
# how does ytsearch works actually?
youtube-dl "ytsearch:Queen"
```
