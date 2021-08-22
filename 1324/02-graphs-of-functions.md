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

Unfortunately, the axis/function labels aren't rendering correctly if they involve math.  This seems to be a known issue with TikZJax.

<script type="text/tikz">
  \begin{tikzpicture}[domain=0:4] 
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$}; 
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$}; 
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$}; 
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = 0.05 \mathrm e^x$};
  \end{tikzpicture}
</script>
Graph of $$y = x$$, $$y = \frac{1}{20} e^x$$, and $$y = \sin{x}$$

---

[Continue to Next Section]

[Return to Table of Contents](00-index.html)

<script src="../Graphing Tools/chart.js">
</script>

<script src="02-graphs-of-functions.js">// Creates local chart and handles events
</script>