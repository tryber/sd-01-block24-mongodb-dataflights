use dataFlights;
db.voos.deleteMany({ $and: [{ 'empresa.nome': 'AZUL' }, { litrosCombustivel: { $lt: 400 } }] });

// resposta → { "acknowledged" : true, "deletedCount" : 538 }
