import express from 'express'

const initServer = () => {
  const app = express()
  const port = process.env.API_PORT || 3000

  app.get('/', (req, res) => {
    res.send('Hello from server!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });

  return app
}

export default initServer
