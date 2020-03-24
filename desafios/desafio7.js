db.voos.find({}, { '_id': 0, vooId: true }).limit(2).skip(10).pretty();
