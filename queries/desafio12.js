use dataFlights;
db.voos.find( 
  { "empresa.nome": "GOL", "ano": 2017 },
  {
    vooId: 1, "empresa.nome": 1, "aeroportoOrigem.nome": 1,
    "aerportoDestino.nome": 1, "mes": 1, "ano": 1
  }).limit(10).pretty(); 