use dataFlights;
db.voos.find({ $nor: [{ 'aeroportoDestino.pais': 'ESTADOS UNIDOS' }] }).count();
