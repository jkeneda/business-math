---
layout: default
title: [1324 - business algebra]
---

Graphs of Functions
===

For interactive or animated graphs, we can use Chart.js.  These graphs are nice because users can hover over the data points to get more information.

<div>
    <canvas id="myChart"></canvas>
</div>

Or we can do clean, general graphs with TikZJax:

<script type="text/tikz">
  \begin{tikzpicture}
    \draw (0,0) circle (0.5in);
    \draw [help lines] (-2,0) grid (2,4); 
    \draw [->] (-2.2,0) -- (2.2,0); 
    \draw [->] (0,0) -- (0,4.2); 
    \draw [green, thick, domain=-2:2] plot (\x, {4-\x*\x}); 
    \draw [domain=-2:2, samples=50] plot (\x, {1+cos(pi*\x r)});
  \end{tikzpicture}
</script>

[Continue to Next Section]

[Return to Table of Contents](00-index.html)

<script src="../Graphing Tools/chart.js">
</script>

<script src="02-graphs-of-functions.js">// Creates local chart and handles events
</script>