// // Desafio 15 - Utilizando os operadores lógicos, conte os documentos
// em que o campos aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e 

/*
  db.voos.count( { $nor: [ { 'aeroportoDestino.pais': 'EUROPA' }, { 'aeroportoDestino.pais': 'ÁSIA' }, { 'aeroportoDestino.pais': 'OCEANIA' } ] } )
*/
