const express = require('express');
const {
  graphqlHTTP
} = require('express-graphql');
const {
  buildSchema
} = require('graphql');

const app = express()

let forumData = [{
  id: "1",
  title: "cara belajar",
  desc: "bagaimana cara belajar yang baik?"
}, {
  id: "2",
  title: "apa sekarang",
  desc: "sekarang harus belajar apa"
}, {
  id: "3",
  title: "mulai dari mana",
  desc: "saya bingung mulai dari mana"
}, ]

let schema = buildSchema(`
  type Forum{
    id: ID,
    title: String,
    desc: String
  }

  type Query{
    forums: [Forum]
  }
`)

let resolvers = {
  forums: () => forumData
}


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(4000, () => console.log('berhasil berjalan'))