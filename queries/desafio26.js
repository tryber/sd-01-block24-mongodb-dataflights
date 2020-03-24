use dataFlights;
db.voos.findOne({
  $and: [
    {
      $nor: [
        { "empresa.nome": "GOL" },
        { "empresa.nome": "AZUL" }
      ]
    },
    { "litrosCombustivel": { $not: { $gt: 600 } } },
    { "litrosCombustivel": { $exists: true } }  
  ]
});
