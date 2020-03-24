db.voos.find({
  $or: [
      { 'empresa.nome': 'DELTA AIRLINES', 'aeroportoOrigem.sigla': 'KJFK', 'aeroportoDestino.sigla': 'SBGR' },
      { 'empresa.nome': 'AMERICAN AIRLINES', 'aeroportoOrigem.sigla': 'KJFK', 'aeroportoDestino.sigla': 'SBGR' }
  ]
},
{
  '_id': 0,
  vooId: 1
}
).limit(1).pretty();
