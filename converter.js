// Primeiro, inclua a biblioteca SheetJS no seu projeto
// Em seguida, use o seguinte código para converter JSON em XLSX:

var XLSX = require('xlsx');
const tabela = require('./resultados.json');

var json = tabela;

var ws = XLSX.utils.json_to_sheet(json);
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

XLSX.writeFile(wb, 'output.xlsx');
