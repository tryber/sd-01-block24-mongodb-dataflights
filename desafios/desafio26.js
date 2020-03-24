use dataFlights;
db.voos.find({ $and: [{ litrosCombustivel: { $lte: 600}}, { $nor: [{"empresa.nome": "GOL"}, {"empresa.nome": "AZUL"}]}, { litrosCombustivel: { $exists: true}}]}).limit(1);
