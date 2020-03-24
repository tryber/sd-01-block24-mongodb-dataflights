db.voos.find({
  $nor: [
    { pais: 'BRASIL' },
  ]
}).count();
