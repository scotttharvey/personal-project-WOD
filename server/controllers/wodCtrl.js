var Wod = require("../models/wod.js")

module.exports = {
  getAllWods: function(req, res, next){
  Wod.find({}, function(err, ans){
    if(err){
      res.status(500).json(err);
    } else{
      res.status(200).json(ans)
    }
  })
},
  addWod: function(req, res, next){
    var wod = new Wod(req.body);
      wod.save(function(err, ans){
        if(err){
          res.status(500).json(err)
        } else{
          res.status(200).json(ans)
        }
      })
  },
  deleteWod: function(req, res, next){
    var id = req.params.id;
    Wod.findByIdAndRemove(id, req.body, function(err, ans){
      if(err){
        res.status(500).json(err)
      } else{
        res.status(200).json(ans)
      }
    })
  }
}
