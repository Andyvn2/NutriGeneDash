new Chart(document.getElementById("myChartRadar"),
  {
      "type":"radar",
      "data":
          {"labels":["Vitamin A","Vitamin E","Vitamin C","Vitamin K","Vitamin D","Vitamin B9","Vitamin B12"],
           "datasets":[
                        {"label":
                            "Last week",
                            "data":[65.14,59.12,90.1,81.0,56.01,55.0,40.0],
                            "fill":true,
                            "backgroundColor":"rgb(237, 247, 240, 0.5)",
                            "borderColor":"#42dd47",
                            "pointBackgroundColor":"rgb(41, 130, 56)",
                            "pointBorderColor":"#fff",
                            "pointHoverBackgroundColor":"#fff",
                            "pointHoverBorderColor":"rgb(255, 99, 132)"},
                        {"label":
                            "This Week",
                            "data":[0.0,0.0,0.0,100.0,62.5,57.14,50.0],
                            "fill":true,
                            "backgroundColor":"rgba(54, 162, 235, 0.2)",
                            "borderColor":"rgb(54, 162, 235)",
                            "pointBackgroundColor":"rgb(54, 162, 235)",
                            "pointBorderColor":"#fff",
                            "pointHoverBackgroundColor":"#fff",
                            "pointHoverBorderColor":"rgb(54, 162, 235)"}]},
            "options":{"elements":{"line":{"tension":0,"borderWidth":3}}}});






// DONUT CHART
var ctx = document.getElementById("myChartDoughtnut");
var data = {
    datasets: [{
        data: [10, 20, 30],"backgroundColor":["#42dd47","rgb(54, 162, 235)","rgb(75, 192, 192)"]
    }],
    
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Fats',
        'Proteins',
        'Carbs'
    ]
};
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: Chart.defaults.doughtnut
});







// RADIAL CHART
var myChart = new Chart(document.getElementById("myChart"),{
        "type":"polarArea",
        "data":{"labels":["B12","B6","B9", "Goal"],
                "datasets":
                      [{"label":"My First Dataset","data":[42,50,57,100],"backgroundColor":["#42dd47","rgb(75, 192, 192)","rgb(54, 162, 235)"]
      }]}});


// LINE CHARt

new Chart(document.getElementById("line-chart"),{
        type: 'line',
        data: {
          labels: ['Manganese', 'Creatine', 'Phosphatidyl Serine', 'Iron', 'Ketone', 'Citrate', 'N-Acetyl Cysteine', 'Omega 3', 'PtC', 'Retinol', 'Unsat Fatty Acids', 'H202'],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "rgb(75, 192, 192)",
            data: [0, 0, 0, 100, 0, 50, 57.14, 50, 100, 66.66, 100, 0],
            fill: false,
            pointRadius: 5,
            pointHoverRadius: 15,
            showLine: false // no line shown
          }]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: "Vitamin Score for Veronica Connelly (By Efficiency)"
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              pointStyle: 'circle'
            }
          }
        }
      })
    