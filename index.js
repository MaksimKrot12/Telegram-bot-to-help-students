const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://MaksimKa:12345@practismongodb.vfkpc.mongodb.net/?retryWrites=true&w=majority&appName=PractisMongoDB') 

const start = async () => {
    try {
        await client.connect()
        console.log('Соединение установлено')
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        users.insertOne( {name: 'Maksim', age: 21 })
        const user = await users.findOne({name: 'ulbi tv'})
        console.log(user)
    } catch (e) {
          console.log(e)
    }
}

start()