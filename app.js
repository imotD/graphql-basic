const express = require('express');
const {
  graphqlHTTP
} = require('express-graphql');
const {
  buildSchema
} = require('graphql');

const app = express()

let schema = buildSchema(`
  type Query{
    hello: String
  }
`)

let root = {
  hello: () => 'Hello World'
}


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4000, () => console.log('berhasil berjalan'))