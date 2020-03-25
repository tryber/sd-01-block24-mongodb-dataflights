// // Desafio 20 - Retorne o vooId, mes e ano
// do primeiro voo
// com mais 7000 passageiros pagos.

/*
  db.voos.find({ 'passageiros.pagos': { $gt: 7000 } }, { vooId: 1, mes: 1, ano: 1, _id: 0}).limit(1).pretty()
*/
