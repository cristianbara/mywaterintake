(function () {
    window.addEventListener('scroll', function (event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll('[data-type=\'parallax\']');
        for (i = 0, len = layers.length; i < len; i++) {
            /*if (window.CP.shouldStopExecution(1)) {
                break;
            }*/
            layer = layers[i];
            depth = layer.getAttribute('data-depth');
            movement = -(topDistance * depth);
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        }

        // make the contetn the same speed as last layer
        var contentDiv = document.getElementById('content');
        contentDiv.style['-webkit-transform'] = translate3d;
        contentDiv.style['-moz-transform'] = translate3d;
        contentDiv.style['-ms-transform'] = translate3d;
        contentDiv.style['-o-transform'] = translate3d;
        contentDiv.style.transform = translate3d;

        //window.CP.exitedLoop(1);
    });
}.call(this));

var myData = {
    labels: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", ],
    datasets: [
   /* {
      fillColor : "#a7a7a7",
      strokeColor : "#a7a7a7",
      pointColor : "#a7a7a7",
      pointStrokeColor : "#a7a7a7",
      data : [0,2,0,1,0,0,0,0, 0, 0 ,0 ,0]
    }, */
        {
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
}
var chartOptions = {
    // Boolean - If we should show the scale at all
    showScale: true,
    // Boolean - If we want to override with a hard coded scale
    scaleOverride: true,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: 5,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: 1,
    // Number - The scale starting value
    scaleStartValue: 0,
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - Whether the line is curved between points
    bezierCurve: true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.5,

    scaleShowValues: false,

    //Boolean - Whether to show a dot for each point
    pointDot: true,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 10,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 2,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 10,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 4,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,

};


var model = {
    currentNumber: 0,
    currentSeries: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}


angular.module('myWaterIntakeApp', ['ngStorage'])
    .controller('myWaterIntakeAppController', function ($scope, $localStorage) {
        var canvasContext = document.getElementById("canvas").getContext("2d");
        var myLineChart = new Chart(canvasContext).Line(myData, chartOptions);
        console.log(myLineChart);

        var updateChart = function (currentSeries) {
            console.log(myLineChart);

            for (i = 0; i < currentSeries.length; i++) {
                myLineChart.datasets[0].points[i].value = currentSeries[i];
            }

            myLineChart.update();
        };

        if ($localStorage.myWaterIntake) {
            $scope.model = $localStorage.myWaterIntake;
            updateChart($scope.model.currentSeries);

        } else {

            $scope.model = model;
            updateChart($scope.model.currentSeries);
        };
    
        $scope.showSubstract = false;

        $scope.addGlass = function () {
            $scope.model.currentNumber += 1;
             $scope.showSubstract = true;
            var date = new Date();
            var n = date.getHours();
            switch (n) {
            case 6:
                $scope.model.currentSeries[0] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 7:
                $scope.model.currentSeries[1] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 8:
                $scope.model.currentSeries[2] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 9:
                $scope.model.currentSeries[3] += 1;
                updateChart();
                break;
            case 10:
                $scope.model.currentSeries[4] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 11:
                $scope.model.currentSeries[5] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 12:
                $scope.model.currentSeries[6] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 13:
                $scope.model.currentSeries[7] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 14:
                $scope.model.currentSeries[8] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 15:
                $scope.model.currentSeries[9] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 16:
                $scope.model.currentSeries[10] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 17:
                $scope.model.currentSeries[11] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 18:
                $scope.model.currentSeries[12] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 19:
                $scope.model.currentSeries[13] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 20:
                $scope.model.currentSeries[14] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 21:
                $scope.model.currentSeries[15] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 22:
                $scope.model.currentSeries[16] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 23:
                $scope.model.currentSeries[17] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 0:
                $scope.model.currentSeries[18] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 1:
                $scope.model.currentSeries[19] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 2:
                $scope.model.currentSeries[20] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 3:
                $scope.model.currentSeries[21] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 4:
                $scope.model.currentSeries[22] += 1;
                updateChart($scope.model.currentSeries);
                break;
            case 5:
                $scope.model.currentSeries[23] += 1;
                updateChart($scope.model.currentSeries);
                break;
            };

            $localStorage.myWaterIntake = $scope.model;

        };

        $scope.substractGlass = function () {
            if ($scope.model.currentNumber > 0) {
                $scope.model.currentNumber -= 1;
                $scope.showSubstract = false;
            }

            var date = new Date();
            var n = date.getHours();
            switch (n) {
            case 6:
                if ($scope.model.currentSeries[0] > 0) {
                    $scope.model.currentSeries[0] -= 1;
                }

                updateChart($scope.model.currentSeries);
                break;
            case 7:
                if ($scope.model.currentSeries[1] > 0) {
                    $scope.model.currentSeries[1] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 8:
                if ($scope.model.currentSeries[2] > 0) {
                    $scope.model.currentSeries[2] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 9:
                if ($scope.model.currentSeries[3] > 0) {
                    $scope.model.currentSeries[3] -= 1;
                }
                updateChart();
                break;
            case 10:
                if ($scope.model.currentSeries[4] > 0) {
                    $scope.model.currentSeries[4] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 11:
                if ($scope.model.currentSeries[5] > 0) {
                    $scope.model.currentSeries[5] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 12:
                if ($scope.model.currentSeries[6] > 0) {
                    $scope.model.currentSeries[6] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 13:
                if ($scope.model.currentSeries[7] > 0) {
                    $scope.model.currentSeries[7] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 14:
                if ($scope.model.currentSeries[8] > 0) {
                    $scope.model.currentSeries[8] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 15:
                if ($scope.model.currentSeries[9] > 0) {
                    $scope.model.currentSeries[9] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 16:
                if ($scope.model.currentSeries[10] > 0) {
                    $scope.model.currentSeries[10] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 17:
                if ($scope.model.currentSeries[11] > 0) {
                    $scope.model.currentSeries[11] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 18:
                if ($scope.model.currentSeries[12] > 0) {
                    $scope.model.currentSeries[12] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 19:
                if ($scope.model.currentSeries[13] > 0) {
                    $scope.model.currentSeries[13] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 20:
                if ($scope.model.currentSeries[14] > 0) {
                    $scope.model.currentSeries[14] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 21:
                if ($scope.model.currentSeries[15] > 0) {
                    $scope.model.currentSeries[15] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 22:
                if ($scope.model.currentSeries[16] > 0) {
                    $scope.model.currentSeries[16] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 23:
                if ($scope.model.currentSeries[17] > 0) {
                    $scope.model.currentSeries[17] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 0:
                if ($scope.model.currentSeries[18] > 0) {
                    $scope.model.currentSeries[18] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 1:
                if ($scope.model.currentSeries[19] > 0) {
                    $scope.model.currentSeries[19] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 2:
                if ($scope.model.currentSeries[20] > 0) {
                    $scope.model.currentSeries[20] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 3:
                if ($scope.model.currentSeries[21] > 0) {
                    $scope.model.currentSeries[21] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 4:
                if ($scope.model.currentSeries[22] > 0) {
                    $scope.model.currentSeries[22] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            case 5:
                if ($scope.model.currentSeries[23] > 0) {
                    $scope.model.currentSeries[23] -= 1;
                }
                updateChart($scope.model.currentSeries);
                break;
            };

            $localStorage.myWaterIntake = $scope.model;

        };

        $scope.clearAllData = function () {
            $scope.model = model;
            $localStorage.myWaterIntake = model;
            updateChart($scope.model.currentSeries);

        }

    });