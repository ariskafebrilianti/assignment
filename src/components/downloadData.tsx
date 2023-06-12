/* eslint-disable @typescript-eslint/no-unused-vars */
/*function downloadJSON() {
  var table = document.getElementById('formGrade');
  var data = [];

  var rows = table.getElementsByTagName('tr');

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var rowData = [];

    var cells = row.getElementsByTagName('td');

    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      rowData.push(cell.innerText);
    }

    data.push(rowData);
  }

  var jsonData = JSON.stringify(data);

  var blob = new Blob([jsonData], { type: 'application/json' });
  var url = URL.createObjectURL(blob);

  var link = document.createElement('a');
  link.href = url;
  link.download = 'data.json';

  link.click();

  URL.revokeObjectURL(url);
}*/