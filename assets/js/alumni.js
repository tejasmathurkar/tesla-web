fetch('https://docs.google.com/spreadsheets/d/1DY_S6--3NFUUbRT6khkRj_FGSk7EJmDWQY9xdlrC4XM/edit?usp=drivesdk').then(function (res) {
    if (!res.ok) throw new Error("fetch failed");
    return res.arrayBuffer();
     })
     .then(function (ab) {
    var data = new Uint8Array(ab);
    var workbook = XLSX.read(data, {
        type: "array"
    });
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];

    var _JsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    console.log(_JsonData); 
   });