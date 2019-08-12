import request from 'supertest'
import initServer from '../helpers/initServer'

const app = initServer()

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')

    expect(response.statusCode).toBe(200)
  })
})