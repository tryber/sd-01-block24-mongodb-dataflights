db.voos.find({
  litrosCombustivel: { $lt: 600 },
  $nor: [
    { 'empresa.nome': 'AZUL' },
    { 'empresa.nome': 'GOL' }
  ],
  litrosCombustivel: { $exists: true }
},
  {
    '_id': 0,
    vooId: 1,
    litrosCombustivel: 1
  }
).limit(1).pretty();
