const { MongoClient } = require('mongodb');

// Remplacez les informations de connexion par celles de votre base de données Azure Cosmos DB
const uri = 'inpoll-jaune.azurewebsites.net';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndFetchData() {
  try {
    await client.connect();
    console.log('Connecté à la base de données');

    const database = client.db('nom_de_votre_base_de_donnees');
    const collection = database.collection('nom_de_votre_collection');

    // Exemple de requête de récupération de données
    const result = await collection.find({}).toArray();
    console.log('Données récupérées :', result);
  } finally {
    await client.close();
    console.log('Connexion fermée');
  }
}

// Appel de la fonction pour se connecter et récupérer des données
connectAndFetchData();
