const positionModel = require("../models/position.js");

module.exports = {
  addPosition(req, res) {
    const { company, position, salary, address } = req.body;
    
    positionModel.addPosition(company, position, salary, address, (err) => {
      res.json({
        ret: true,
        data: {
          inserted: !err
        }
      })
    })
  },
  getPositionList(req, res) {
    const { page, size } = req.query;
    let totalPage = 0 ;
    positionModel.getPosition({}, (result) => {
      if(result && result !== "error"){
          totalPage = Math.ceil(result.length / size )
          //console.log("页数为" + totalPage);  
          positionModel.getPositionByPage(page, size, (result) => {
            res.json({
              ret: true,
              data: {
                list: result,
                totalPage: totalPage
              }
            })
          })
      }
    })
  }
}