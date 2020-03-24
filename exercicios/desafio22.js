db.voos.find({"rtk": {$not: { $exists: true}}}, {"vooId": 1});
