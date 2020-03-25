// // Desafio 26 - Retorne o primeiro voo
// em que litrosCombustivel não seja maior do que 600
// e a empresa não seja GOL ou AZUL,
// e o campo litrosCombustivel exista.

/*

db.voos.find({
  $and: [
    {
      $nor: [
        {
          'litrosCombustivel': {
            $gt: 600
          }
        },
        {
          'empresa.nome': {
            $nin: ['GOL', 'AZUL']
          }
        }
      ]
    },
    {
      'litrosCombustivel': {
        $exists: 1
      }
    }
  ]
}).limit(1)

*/
