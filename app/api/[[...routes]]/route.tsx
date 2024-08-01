/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  basePath: '/api',
  // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
  browserLocation: '/',
  imageOptions: {
    fonts: [
      {
        name: 'JetBrains Mono',
        source: 'google',
      },
    ],
  },
  title: 'NEW',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: "https://i.ibb.co/P9vkqdX/Women-Blockchain.jpg",
    intents: [
      <Button.Link href = 'https://airtable.com/appv5hy27BR5QodE0/shrkT0atg0fQXLNiX'>Register Here!</Button.Link>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
