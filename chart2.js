google.charts.setOnLoadCallback(energyDonutChart);

function drawBasic(freshData) {
  freshData.reverse();
  freshData.unshift(["Year", "Billion BTUs"])
  
  var data = google.visualization.arrayToDataTable(freshData)