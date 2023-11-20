import express, { json } from 'express';
import cors from 'cors';
import blogs, { filter } from './api/blogsData.json';
const port = process.env.PORT || 5000;

const app = express()
// middleware
app.use(cors())
app.use(json())

app.get('/', (req, res) => {
  res.send("Blog server is running!")
});

app.get('/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
  const blog = filter(b => b.id === id);
  // console.log(blog)
  res.send(blog)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})