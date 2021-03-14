grabData()

function processCalls(err, data)
{
    console.log(data)
}


function grabData()
{
    db = require("./database.js")
    db.runQuery("SELECT TOP 5 * FROM DISPCALL WHERE DATETIMEDISP > @dateTime",processCalls);
}

