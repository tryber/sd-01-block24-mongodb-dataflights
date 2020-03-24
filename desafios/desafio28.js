db.voos.deleteMany(
  {
    'empresa.nome': 'GOL'
  },
  {

    $or: [
      { 'passageiros.pagos': { $gte: 5 } },
      { 'passageiros.pagos': { $lte: 10 } }
    ]
  });

  // resposta → { "acknowledged" : true, "deletedCount" : 29993 }
