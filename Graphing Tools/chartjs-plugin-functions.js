// Requires chart.js to be loaded first
// Thanks to tektiv at https://stackoverflow.com/questions/40086575/chart-js-draw-mathematical-function for the original plugin idea

// To do: define range(...) for the x-value labels

Chart.register({ // Registers a global plugin.  Maybe work on making it easier to turn on and off later.
    id: 'function-maker',
    beforeInit: function(chart) {
        var data = chart.config.data;
        for (var i = 0; i < data.datasets.length; i++) {
            for (var j = 0; j < data.labels.length; j++) {
            	var fct = data.datasets[i].function,
                	x = data.labels[j],
                	y = fct(x);
                data.datasets[i].data.push(y);
            }
        }
    }
});