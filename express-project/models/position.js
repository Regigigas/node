var mongoose = require('../utils/database.js')

var Position = mongoose.model('position', {
  company: String,
  position: String,
  salary: String,
  address: String
});

module.exports = {
  addPosition(company, position, salary, address, cb) {
    var position = new Position({company, position, salary, address});
    
    position.save(function (err) {
      console.log(err);
      cb(err)
    })
  },
  getPosition(params, cb) {
    Position.find(params).then((result) => {
      cb(result);
      console.log("xxxxxxxxxxxxxxxxxxx")
    }).catch(() => {
      cb("error");
    })
  },
  getPositionByPage(page, size, cb) {
    let _size = parseInt(size, 10),
        _page = parseInt(page, 10);
    Position.find({}).limit(_size).skip((_page - 1) * _size).then((result) => {
      cb(result)
    }).catch(() => {
      cb('error')
    })
  }
}