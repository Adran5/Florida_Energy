google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(getData);
google.charts.setOnLoadCallback(energyDonutChart);

        
  
function drawBasic(freshData) {
  freshData.reverse();
  freshData.unshift(["Year", "Billion BTUs"])
  
  var data = google.visualization.arrayToDataTable(freshData)
//  var data = google.visualization.arrayToDataTable([
//    ['Year', 'Renewable Energy', 'Energy Consumed'],
//    ['1969', 51489, 153032],
//    ['1970', 51035, 171346],
//    ['1971', 49968, 188564],
//    ['1972', 54389, 209665],
//    ['1973', 56250, 237104],
//    ['1974', 52429, 235482],
//    ['1975', 50007, 242096],
//    ['1976', 56507, 252408],
//    ['1977', 59953, 270767],
//    ['1978', 65357, 289031],
//    ['1979', 69419, 295551],
//    ['1980', 90049, 309694],
//    ['1981', 83117, 317921],
//    ['1982', 104674, 315744],
//    ['1983', 91705, 329216],
//    ['1984', 108740, 353246],
//    ['1985', 110698, 379307],
//    ['1986', 116356, 398095],
//    ['1987', 107606, 417862],
//    ['1988', 113802, 444382],
//    ['1989', 232261, 472473],
//    ['1990', 198986, 489741],
//    ['1991', 212955, 499299],
//    ['1992', 230779, 501598],
//    ['1993', 217028, 521176],
//    ['1994', 215563, 544365],
//    ['1995', 220211, 571483],
//    ['1996', 240343, 586291],
//    ['1997', 231308, 597240],
//    ['1998', 205485, 639254],
//    ['1999', 204114, 638966],
//    ['2000', 194952, 668216],
//    ['2001', 158038, 684966],
//    ['2002', 174327, 718136],
//    ['2003', 188473, 741696],
//    ['2004', 179462, 745810],
//    ['2005', 183175, 767622],
//    ['2006', 185564, 778685],
//    ['2007', 190489, 788461],
//    ['2008', 195232, 771702],
//    ['2009', 213642, 766848],
//    ['2010', 223518, 788887],
//    ['2011', 222956, 768009],
//    ['2012', 220020, 752941],
//    ['2013', 229666, 757189],
//    ['2014', 226863, 771379],
//    ['2015', 234192, 803865],
//  ]);

  var options = {
    title: 'Florida Renewable Production',
    titleTextStyle: {
      color: '#57BC90',
      fontSize: 16,
      bold: true,
      italic: true
    },
  
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#57BC90', '#77C9D4'],
  };
					
  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      
    chart.draw(data, options);
  }

        let testData
        
        function getData(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "https://api.eia.gov/series/?api_key=09ff2cc0d2403f08c3e56ac318c19126&series_id=SEDS.REPRB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
          
          let theActualData = JSON.parse(request.response).series[0].data
          
          //call function to draw the chart
          drawBasic(theActualData)
          
          //console.log to see how data is formated in DOM
          console.log("response from server is: ", JSON.parse(request.response))
        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }

//ToDo:
//Add input button for year so that date can be updated.

function energyDonutChart() {
  var data = google.visualization.arrayToDataTable([
    ['Energy', 'Consumption'],
    ['Renewable Energy', 234192],
    ['Energy Consumed', 536673]
  ]);

  var options = {
    title: 'Energy Comparision in 2015',
    titleTextStyle: {
      color: '#57BC90',
      fontSize: 16,
      bold: true,
      italic: true
    },
      legend: { position: 'none' },
      pieHole: 0.4,
      colors: ['#57BC90', '#77C9D4'],
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }