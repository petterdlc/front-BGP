import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Network, DataSet, Node, Edge, IdType } from 'vis';
import Swal from 'sweetalert2'


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  public nodes: Node;
  public edges: Edge;
  public network : Network;



    ngOnInit(){

      Swal.fire({
        title: 'Anomalia!',
        text: 'Port flap detectado en el router 1',
        icon: 'error',
        confirmButtonText: 'OK'
      })

      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          datasets: [{
              borderColor: "#6bd098",
              backgroundColor: "#6bd098",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
            },
            {
              borderColor: "#f17e5d",
              backgroundColor: "#f17e5d",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
            },
            {
              borderColor: "#fcc468",
              backgroundColor: "#fcc468",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });


      this.canvas = document.getElementById("chartEmail");
      this.ctx = this.canvas.getContext("2d");
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [342, 480, 530, 120]
          }]
        },

        options: {

          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });

      var speedCanvas = document.getElementById("speedChart");

      var dataFirst = {
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var dataSecond = {
        data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      };

      var speedData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [dataFirst, dataSecond]
      };

      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      });  

      var endpointNetwork = [
        {
          name: 'T-GYE\n1.1.1.2',
          tipo: "router",
          id: 1,
          interfaces:[
            {
              id:2,
              label: "197.10.1.0/30",
              up: true
            },
            {
              id:3,
              label: "197.10.3.0/30",
              up: false
            },
            {
              id:4,
              label: "197.10.2.0/30",
              up: true
            },
            {
              id:6,
              label: "10.10.1.0/30",
              up: true
            }
          ]
        },
        {
          name: 'T-UIO\n1.1.1.1',
          tipo: "router",
          id: 2,
          interfaces:[
            {
              id:1,
              label: "197.10.1.0/30",
              up: true
            },
            {
              id:4,
              label: "197.10.4.0/30",
              up: true
            }
          ]
        },
        {
          name: 'T-CUE\n1.1.1.4',
          tipo: "router",
          id: 3,
          interfaces:[
            {
              id:1,
              label: "197.10.3.0/30",
              up: false
            },
            {
              id:4,
              label: "197.10.5.0/30",
              up: true
            }
          ]
        },
        {
          name: 'T-ESM\n1.1.1.3',
          tipo: "router",
          id: 4,
          interfaces:[
            {
              id:1,
              label: "197.10.2.0/30",
              up: true
            },
            {
              id:2,
              label: "197.10.4.0/30",
              up: true
            },
            {
              id:3,
              label: "197.10.5.0/30",
              up: true
            }
          ]
        },
        {
          name: 'INTERNET',
          tipo: "cloud",
          id: 5,
          interfaces:[
            {
              id:6,
              label: "",
              up: true
            }
          ]
        },
        {
          name: 'ISP1\nAS-65001\n10.10.10.10',
          tipo: "router",
          id: 6,
          interfaces:[
            {
              id:1,
              label: "10.10.1.0/30",
              up: true
            },
            {
              id:5,
              label: "",
              up: true
            },
            {
              id:7,
              label: "",
              up: true
            }
          ]
        },
        {
          name: 'Switch1',
          tipo: "switch2",
          id: 7,
          interfaces:[
            {
              id:6,
              label: "-",
              up: true
            },
            {
              id:8,
              label: "192.168.1.0/24",
              up: true
            }
          ]
        },
        {
          name: 'Monitoring  Server\n192.168.1.100',
          tipo: "pc",
          id: 8,
          interfaces:[
            {
              id:7,
              label: "192.168.1.0/24"
              ,
              up: true
            }
          ]
        }
      ];

      var jsonNodes = [];
      var jsonEdges = [];
      var pos = [[450,-20],[210,150],[690,150],[450,310],[210,-300],[450,-300],[670,-300],[1000,-300]];
      var labelsEdge  = [];

      var url= "https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/";


      for(var i = 0; i < endpointNetwork.length; i++) {
        var obj = endpointNetwork[i];
        var urlJ = url + obj["tipo"] +".jpg";
        jsonNodes.push({id: obj["id"], label: obj["name"], shape: "image", image: urlJ, x: pos[i][0], y: pos[i][1]});
        var interfaces = obj["interfaces"];
        for(var j = 0; j < interfaces.length; j++) {
          var int = interfaces[j];
          if(!labelsEdge.includes(int["label"])){
            if(int["up"]){
              jsonEdges.push({from: obj["id"], to: int["id"], color:{color:'#39FF14'}, label: int["label"]});
              labelsEdge.push(int["label"]);
            }
            else{
              jsonEdges.push({from: obj["id"], to: int["id"], color:{color:'#ff0000'}, label: int["label"]});
              labelsEdge.push(int["label"]);
            }
          }      
        }
      }

      var nodes = new DataSet(jsonNodes);
      var edges = new DataSet(jsonEdges);

      var nodes2 = new DataSet([
        {id: 1, label: 'T-GYE\n1.1.1.2',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/router.jpg", x: 450, y: -20},
        {id: 2, label: 'T-UIO\n1.1.1.1',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/router.jpg", x: 210, y: 150},
        {id: 3, label: 'T-CUE\n1.1.1.4',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/router.jpg", x: 690, y: 150},
        {id: 4, label: 'T-ESM\n1.1.1.3',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/router.jpg", x: 450, y: 310},
        {id: 5, label: 'INTERNET',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/cloud.jpg", x: 210, y: -300},
        {id: 6, label: 'ISP1\nAS-65001\n10.10.10.10',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/router.jpg", x: 450, y: -300},
        {id: 7, label: 'Switch1',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/switch2.jpg", x: 670, y: -300},
        {id: 8, label: 'Monitoring  Server\n192.168.1.100',shape:"image",image:"https://raw.githubusercontent.com/petterdlc/front-BGP/master/src/assets/img/pc.jpg", x: 1000, y: -300}
    ]);

      // create an array with edges
      var edges2 = new DataSet([
        {from: 1, to: 3, color:{color:'#ff0000'}, label:"197.10.3.0/30"},
        {from: 1, to: 2, label:"197.10.1.0/30"},
        {from: 1, to: 4, label:"197.10.2.0/30"},
        {from: 2, to: 4, label:"197.10.4.0/30"},
        {from: 3, to: 4, label:"197.10.5.0/30"},
        {from: 1, to: 6, label:"10.10.1.0/30"},
        {from: 5, to: 6},
        {from: 6, to: 7},
        {from: 7, to: 8, label:"192.168.1.0/24"}
      ]);
     // create a network
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var width = 1100;
    var height = 1000;
    var options = {
        width: width + 'px',
        height: height + 'px',
        nodes: {
            shape: 'dot'
        },
        edges: {
            smooth: false
        },
        physics: false,
        interaction: {
            dragNodes: true,// do not allow dragging nodes
            zoomView: false, // do not allow zooming
            dragView: true  // do not allow dragging
        }
    };
    var network = new Network(container, data, options);



    
    /**fetch("https://espol-smart-ac-control.herokuapp.com/ac_stats/ac1")
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })**/
    } 
}
