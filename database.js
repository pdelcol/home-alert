function Database() {
    var fs = require('fs'), ini = require('ini')
    var iniFile = ini.parse(fs.readFileSync('./config.ini', 'utf-8'))

    this.config = {
        user: iniFile.database.username,
        password: iniFile.database.password,
        server: iniFile.database.server,
        database: iniFile.database.database
    };
    this.runQuery = runQuery;
}

function runQuery(query, callback)
{
    console.log(query);
    var sql = require("mssql")
    sql.connect(this.config, function(){
        var request = new sql.Request();
        request.addParameter('datetime', TYPES.DateTime, Date.now())
        console.log()
        request.query(query, function(err,recordset){
            return callback(err,recordset);
        })
    });

}

module.exports = new Database();