// Function that renders a line chart to display the Drought information
function renderLineDrought(dataD, labelsD) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    Chart.defaults.global.defaultFontColor = 'white';
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsD,
            datasets: [{
                label: 'Drought',
                data: dataD,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }]
        },
        options: {
            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            }
        }
    });
}

// Function that redners a line chart to display the Earthquake information
function renderLineEarthquake(dataE, labelsE) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    Chart.defaults.global.defaultFontColor = 'white';
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsE,
            datasets: [{
                label: 'Earthquake',
                data: dataE,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }]
        },
        options: {
            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            }
        }
    });
}

function renderLineFlood(dataF, labelsF) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    Chart.defaults.global.defaultFontColor = 'white';
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsF,
            datasets: [{
                label: 'Flood',
                data: dataF,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }]
        },
        options: {

            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            }
        }
    });
}

function renderLineLandSlide(dataL, labelsL) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    Chart.defaults.global.defaultFontColor = 'white';
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsL,
            datasets: [{
                label: 'Land Slide',
                data: dataL,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }]
        },
        options: {
            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            }
        }
    });
}

function renderLineMMD(dataMMD, labelsMMD) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    Chart.defaults.global.defaultFontColor = 'white';
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsMMD,
            datasets: [{
                label: 'Massive Movement (Dry)',
                data: dataMMD,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }]
        },
        options: {
            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            }
        }
    });
}


function renderLineVolcan(dataV, labelsV) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    Chart.defaults.global.defaultFontColor = 'white';
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsV,
            datasets: [{
                label: 'Volcanic Activity',
                data: dataV,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }]
        },
        options: {
            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            }
        }
    });
}

function renderLineWildFire(dataW, labelsW) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    Chart.defaults.global.defaultFontColor = 'white';
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsW,
            datasets: [{
                label: 'Wild Fire',
                data: dataW,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }]
        },
        options: {

            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            }
        }
    });
}


// Function that renders a chart to display the Extreme Temperature
// and Extreme Weather information
function renderLineExtreme(dataEX, dataEXT, labelsEX) {
    function drawChart(document, data) {
        if (myChart != null) {
            myChart.destroy();
        }
    }
    var ctx = document.getElementById("myChart").getContext('2d');
    ctx.canvas.width = 1350;
    ctx.canvas.height = 550;
    if (window.bar != undefined) {
        window.bar.destroy();
    }
    window.bar = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelsEX,
            datasets: [{
                label: 'Extreme Temperature',
                data: dataEXT,
                borderColor: 'rgba(0,153,255,0.2)',
                backgroundColor: 'rgba(0,153,255,0.2)',
            }, {
                label: 'Extreme Weather',
                data: dataEX,
                borderColor: 'rgba(255,0,0,0.2)',
                backgroundColor: 'rgba(255,0,0,0.2)',
            }]
        },
        options: {
            scales: {

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }]
            },

            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
            }
        }

    });


}

// Function that pushes the correct data into the chart
// using FOR loops to push specific entries from phpymadmin into the chart
function getChartDataDrought() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataD = [];
            for (var i = 119; i < 159; i++) {
                dataD.push(result[i].Deaths);

            }
            var labelsD = [];
            for (var i = 119; i < 159; i++) {
                labelsD.push(result[i].Year);

            }

            renderLineDrought(dataD, labelsD);
        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}

function getChartDataVolcan() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataV = [];
            for (var i = 643; i < 697; i++) {
                dataV.push(result[i].Deaths);

            }

            var labelsV = [];
            for (var i = 643; i < 697; i++) {
                labelsV.push(result[i].Year);

            }



            renderLineVolcan(dataV, labelsV);
        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}



function getChartDataMMD() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataMMD = [];
            for (var i = 610; i < 642; i++) {
                dataMMD.push(result[i].Deaths);

            }
            var labelsMMD = [];
            for (var i = 610; i < 642; i++) {
                labelsMMD.push(result[i].Year);

            }

            renderLineMMD(dataMMD, labelsMMD);
        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}

// Function that pushes the correct data into the chart
// using FOR loops to push specific entries from phpymadmin into the chart
function getChartDataLandSlide() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataL = [];
            for (var i = 530; i < 609; i++) {
                dataL.push(result[i].Deaths);

            }
            var labelsL = [];
            for (var i = 530; i < 609; i++) {
                labelsL.push(result[i].Year);

            }

            renderLineLandSlide(dataL, labelsL);
        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}

// Function that pushes the correct data into the chart
// using FOR loops to push specific entries from phpymadmin into the chart
function getChartDataEarthquake() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataE = [];
            for (var i = 160; i < 271; i++) {
                dataE.push(result[i].Deaths);

            }
            var labelsE = [];
            for (var i = 160; i < 271; i++) {
                labelsE.push(result[i].Year);

            }

            renderLineEarthquake(dataE, labelsE);

        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}

// Function that pushes the correct data into the chart
// using FOR loops to push specific entries from phpymadmin into the chart
function getChartDataExtreme() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataEXT = [];
            for (var i = 272; i < 300; i++) {
                dataEXT.push(result[i].Deaths);

            }

            var dataEX = [];
            for (var i = 328; i < 356; i++) {
                dataEX.push(result[i].Deaths);

            }
            var labelsEX = [];
            for (var i = 119; i < 159; i++) {
                labelsEX.push(result[i].Year);

            }

            renderLineExtreme(dataEX, dataEXT, labelsEX);
        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}


// Function that pushes the correct data into the chart
// using FOR loops to push specific entries from phpymadmin into the chart
function getChartDataFlood() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataF = [];
            for (var i = 440; i < 529; i++) {
                dataF.push(result[i].Deaths);

            }
            var labelsF = [];
            for (var i = 440; i < 529; i++) {
                labelsF.push(result[i].Year);

            }

            renderLineFlood(dataF, labelsF);
        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}

function getChartDataWildFire() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(result) {
            $("#loadingMessage").html("");

            var dataW = [];
            for (var i = 699; i < 746; i++) {
                dataW.push(result[i].Deaths);

            }
            var labelsW = [];
            for (var i = 699; i < 746; i++) {
                labelsW.push(result[i].Year);

            }

            renderLineWildFire(dataW, labelsW);
        },
        error: function(err) {
            $("#loadingMessage").html("Error");
        }
    });
}


// These are functions that makes the canvas on which the charts get renderd
// show or hide on button press
function ToggleDiv1(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    getChartDataDrought();

}

function ToggleDiv2(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';

    getChartDataEarthquake();

}

function ToggleDiv3(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    getChartDataExtreme();

}

function ToggleDiv4(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    getChartDataFlood();

}

function ToggleDiv5(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    getChartDataLandSlide();

}

function ToggleDiv6(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    getChartDataMMD();

}

function ToggleDiv7(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    getChartDataVolcan();

}

function ToggleDiv8(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    getChartDataWildFire();

}

function getAllDisasters() {
    $.ajax({
        url: '/disasters',
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function(data) {
            createDisTable(data);
            console.log("Hello!")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR + '\n' + textStatus + '\n' + errorThrown);
        }
    });
}

function createDisTable(disasters) {
    var strResult = '<div class="col-md-12">' +
        '<table class="table table-bordered table-hover">' +
        '<thead>' +
        '<tr>' +
        '<th>Entity</th>' +
        '<th>Year</th>' +
        '<th>Death</th>' +
        '<th>&nbsp;</th>' +
        '<th>&nbsp;</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';
    $.each(disasters, function(index, disasters) {
        strResult += "<tr><td>" + disasters.Entity + "</td><td> " + disasters.Year + "</td><td>" + disasters.Death + "</td><td>";
        strResult += "</td></tr>";
    });
    strResult += "</tbody></table>";
    $("#alldisasters").html(strResult);
}
