use dataFlights;
db.voos.deleteMany({ $and: [{ "empresa.nome": "AZUL" }, { "litrosCombustivel": { $lt: 400 } }] });

// Deletado 538 Registros
