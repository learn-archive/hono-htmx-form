import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

import { renderer, ExampleComponent, FormComponent } from './components'

const app = new Hono()

app.get('*', renderer)

// Pages
app.get('/', async (c) => {
  return c.render(
    <div>
      <ExampleComponent />
      <br />
      <FormComponent />
    </div>
  )
})

// Requests
app.get('/example', async (c) => {
  return c.text('Hello !')
})

app.post(
  '/contact',
  zValidator('form',
    z.object({
      email: z.string(),
      firstName: z.string(),
      lastName: z.string(),
    })
  ),
  async (c) => {
    // const data = await c.req.formData()
    const body = await c.req.parseBody()
    console.log(body)
    return c.json(body)
  }
)

export default app
