var ctx = document.getElementById("myChart");
var data = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
        label: "f(x) = x",
        function: function(x) { return x },
        borderColor: "rgba(75, 192, 192, 1)",
        data: [], // Requires empty array for y-values, generated by function-maker plugin
        fill: false
    },
    {
        label: "f(x) = x²",
        function: function(x) { return x*x },
        borderColor: "rgba(153, 102, 255, 1)",
        data: [],
        fill: false
    },
    {
        label: "f(x) = x * log(x)",
        function: function(x) { return x*Math.log(x) },
        borderColor: "rgba(255, 206, 86, 1)",
        data: [],
        fill: false
    }]
};

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});