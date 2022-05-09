# LemonJamsBot

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
