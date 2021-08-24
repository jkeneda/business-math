---
layout: default
title: [1324 - business algebra]
---

Graphs of Functions
===

For interactive or animated graphs, we can use Chart.js.  These graphs are nice because users can hover over the data points to get more information, but the equation labels aren't especially pretty.

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

Unfortunately, the axis/function labels in TikZJax aren't rendering correctly if they involve LaTeX/math.  The letters are crowded unless you space them out manually.  Plain text should be fine, though.  This seems to be a known issue with TikZJax.

<script type="text/tikz">
  \begin{tikzpicture}[domain=0:4] 
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$}; 
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$y$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f\,\,(x)$}; 
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$h\,\,(x)$}; 
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$g\,\,(x)$};
  \end{tikzpicture}
</script>
Graph of $$y = x$$, $$y = \frac{1}{20} e^x$$, and $$y = \sin{x}$$

Lastly, Desmos embedding seems to work just fine:

<iframe src="https://www.desmos.com/calculator/fs3lx8gptb" style="min-height:300px" width="100%"></iframe>
<script>
  // When using an embedded Desmos plot, the page normally displays an alert when the user tries to leave.  This script disables that alert.
  window.onbeforeunload = null;
</script>

---

[Continue to Next Section]

[Return to Table of Contents](00-index.html)

<script src="../Graphing Tools/chart.js">
</script>

<script src="../Graphing Tools/chartjs-plugin-functions.js">
</script>

<script src="02-graphs-of-functions.js">// Creates local chart and handles events
</script>