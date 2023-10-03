const {MongoClient} = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';

const client = new MongoClient (MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function main() {
    await client.connect();

    const db = client.db(DB_NAME);
    db.collection('<COLLECTION_NAME>')

    console.log('Mongo conectado com sucesso!');
}

main()
    .then(() => console.log('Conexão estabelecida'))
    .catch((err) => {
        if (err) {
            console.error(err);
            return;
        }
        client.close();
        console.log('Conexão finalizada');
    });