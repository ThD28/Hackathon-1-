const AbstractManager = require("./AbstractManager");

class Hackathon1Manager extends AbstractManager {
  constructor() {
    super({ table: "Travel" });
  }

  insert(Travel) {
    return this.connection.query(
      `insert into ${this.table} (Name, Country, City, Message, Img) values (?, ?, ?, ?, ?)`,
      [Travel.Name, Travel.Country, Travel.City, Travel.Message, Travel.Img]
    );
  }

  update(Travel) {
    return this.connection.query(
      `update ${this.table} set Name = ?, Country = ?, City = ?, Message = ?, Imng = ? where id = ?`,
      [
        Travel.Name,
        Travel.Country,
        Travel.City,
        Travel.Message,
        Travel.Img,
        Travel.id,
      ]
    );
  }
}

module.exports = Hackathon1Manager;
