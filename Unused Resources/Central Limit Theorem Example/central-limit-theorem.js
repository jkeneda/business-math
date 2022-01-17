// Must load Chart.js and distributions.mjs before this will work

// Chart.defaults.scales[x].min = 1; // Doesn't work here.

var originalEx = makeNormalizedChart('originalEx', '5d6');
    originalEx.config.data.datasets[0].label = "Total for a Roll of 5 Dice"
    // originalEx.config.options.scales.xAxis.ticks.min = 1; Doesn't work yet either
    originalEx.update();

var myChart = makeNormalizedChart('myChart', document.getElementById('textBox').value + "d6"); // Initialize chart
    myChart.data = makeData(normalizeDice(textToDice(document.getElementById('textBox').value + "d6")), "Total for " + document.getElementById('textBox').value + pluralize(document.getElementById('textBox').value));
    myChart.update();

function pluralize (number) {
    if (Number(number) > 1) {
        return " dice"
    } else {
        return " die"
    }
}

// Refresh event handling
function updateChart (myChart) {
    myChart.data = makeData(normalizeDice(textToDice(document.getElementById('textBox').value + "d6")), "Total for " + document.getElementById('textBox').value + pluralize(document.getElementById('textBox').value));
    myChart.update();
}

// Sample event handling
const diceSelect = document.getElementById('textBox');
diceSelect.addEventListener('change', () => {updateChart(myChart);});

// Form submission event handling
const form1 = document.getElementById('form1');
form1.addEventListener('submit', function () {updateChart(myChart);});