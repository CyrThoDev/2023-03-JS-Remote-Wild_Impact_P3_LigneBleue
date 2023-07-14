const AbstractManager = require("./AbstractManager");

class TutorialsManager extends AbstractManager {
  constructor() {
    super({ table: "tutorials" });
  }

  findAll(name) {
    let url = `select  * from ${this.table}`;
    const value = [];
    if (name) {
      url += ` where name like ? `;
      value.push(`%${name}%`);
    }
    return this.database.query(url, value);
  }

  find(id) {
    return this.database.query(
      `select * from ${this.table} as t
      inner join formations as f on t.formation_id=f.id 
      inner join images as i on t.image_id=i.id
      where t.id = ?`,
      [id]
    );
  }
}

module.exports = TutorialsManager;
