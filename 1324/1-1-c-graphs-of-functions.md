---
layout: default
title: [1324 - business algebra]
---

Graphs of Functions
===

This page hasn't fully been built yet.  It's just a demo of the different graphing/display techniques we can use on the site.  Note that all of this is happening in the students' browser - they don't have to download any software or sign in.  It's just a free blog format.

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

We can label the functions with TikZ, although the labels get messy sometimes.

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
Graph of $$y = x$$, $$y = \frac{1}{20} e^x$$, and $$y = \sin{x}$$ (above)

Lastly, desmos embedding seems to work just fine, and it still supports desmos's animation feature:

<iframe src="https://www.desmos.com/calculator/fs3lx8gptb" style="min-height:300px" width="100%"></iframe>

---

[Return to Previous Section](1-1-b-function-definitions.html)

[Continue to Next Section](1-2-linear-functions.html)

[Return to Table of Contents](00-index.html)

<script src="../Graphing Tools/chart.js">
</script>

<script src="../Graphing Tools/chartjs-plugin-functions.js">
</script>

<script src="1-1-c-graphs-of-functions.js">// Creates local chart and handles events
</script>