// // Desafio 29 - Conte quantos voos
// da empresa GOL
// cujo campo natureza possua valor igual a Doméstica
// // e insira na coleção resumoVoos
// um documento com os campos: empresa (nome da empresa)
// e totalVoosDomesticos (o total retornado anteriormente).

/*
db.voos.count(
  {
    'empresa.nome': 'GOL',
    'natureza': 'Doméstica'
  }
)

db.resumoVoos.insertOne(
  {
    'empresa': 'GOL',
    'totalVoosDomesticos': 25805
  }
)
*/
