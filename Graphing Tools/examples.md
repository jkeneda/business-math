---
layout: default
title: syntax for making pages
description: basically just for Jason and Morgan
---

In order to easily see the syntax differences, the general format for this page will be
```
code to put in the .md file here
```
[the corresponding website result here].

Basic Markdown
===

Each page of this site comes from a .md file in the [GitHub repository](https://github.com/jkeneda/business-math).  For example, the .md file for this syntax example page is in the Graphing Tools folder.  We're using something called kramdown to convert .md (Markdown) files to the .html sites.  To start contributing to pages, check out this kramdown [cheat sheet](https://aoterodelaroza.github.io/devnotes/kramdown-cheatsheet/), which tells you what the syntax should look like in the .md file and what it will become when the site is built.[^kramdown]  The cheat sheet and the following examples might be sufficient to get started.

``` markdown
#### Example 1
This is a **really** good example.
- I can make
- a grocery list
- if I want

Or link to [google](https://www.google.com/).
```
#### Example 1
This is a **really** good example.
- I can make
- a grocery list
- if I want

Or link to [google](https://www.google.com/).

---

LaTeX
===

LaTeX is also supported in the .md files by surrounding your TeX with double dollar signs.  You can put a line break before and after the \$\$ to get LaTeX's display math mode.  Otherwise, you get inline math.

``` latex
Let $$f(x) = e^x - \log{x} + \sin (x^3)$$.

Consider the following equation:

$$e = mc^2$$

Pretty great, huh?
```
Let $$f(x) = e^x - \log{x} + \sin (x^3)$$.

Consider the following equation:

$$e = mc^2$$

Pretty great, huh?

---

3 ways to include graphs
===

The 3 types of graphing utilities that are supported ([desmos](https://www.desmos.com), [TikZJax](https://github.com/kisonecat/tikzjax), and [Chart.js](https://www.chartjs.org/)) are ordered from least- to most-complicated to include in a page.

---

### desmos

Thankfully, [desmos](https://www.desmos.com) embedding is the easiest to use.  Press the play button next to the $$a = 1.27$$ below to see desmos's animation in action.

To add a desmos plot, just copy and paste the code in this box into your .md file.  Make sure to replace the desmos link below with the link to your (saved) desmos plot.  You can modify the iframe if you want to resize things.

``` html
<iframe src="https://www.desmos.com/calculator/fs3lx8gptb" style="min-height:400px" width="100%">
</iframe>
```

<iframe src="https://www.desmos.com/calculator/fs3lx8gptb" style="min-height:400px" width="100%">
</iframe>

Note: I noticed that if you interact with a desmos plot and then try to leave the page, it'll ask you to confirm that you want to leave (because desmos is worried that you haven't saved the graph or something).  I think we can disable the confirmation message, but we'll have to mess with it a bit.[^confirm]

---

### TikZJax

We can also do clean, static graphs with [TikZJax](https://github.com/kisonecat/tikzjax) (the syntax/functionality is basically TikZ).  Here are some examples I took from the TikZ wiki.  Note the `<script>` tags.

``` latex
<script type="text/tikz">
  \begin{tikzpicture}
    \draw(0,0) circle (0.5in);
    \draw[help lines] (-2,0) grid (2,4); 
    \draw[->] (-2.2,0) -- (2.2,0); 
    \draw[->] (0,0) -- (0,4.2); 
    \draw[green, thick, domain=-2:2] plot (\x, {4-\x*\x}); 
    \draw[domain=-2:2, samples=50] plot (\x, {1+cos(pi*\x r)});
  \end{tikzpicture}
</script>
```

<script type="text/tikz">
  \begin{tikzpicture}
    \draw(0,0) circle (0.5in);
    \draw[help lines] (-2,0) grid (2,4); 
    \draw[->] (-2.2,0) -- (2.2,0); 
    \draw[->] (0,0) -- (0,4.2); 
    \draw[green, thick, domain=-2:2] plot (\x, {4-\x*\x}); 
    \draw[domain=-2:2, samples=50] plot (\x, {1+cos(pi*\x r)});
  \end{tikzpicture}
</script>

Unfortunately, the axis/function labels in TikZJax aren't always rendering correctly if they involve LaTeX/math.  The letters are crowded unless you space them out manually (note the `\,` in the LaTeX for the labels below - that's just there to space out the $$f(x)$$, $$g(x)$$, and $$h(x)$$ correctly).  Plain text labels should be fine, though.  This seems to be a known issue with TikZJax.

TikZJax also doesn't support \usetikzlibrary or \usepackage, so it's somewhat limited.

``` latex
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
```

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

---

### Chart.js

For more interactive or animated charts, we can use Chart.js.  These plots are nice for discrete data sets. When plotting functions, users can hover over the specified data points to get more information, but the equation labels aren't especially pretty.  Chart.js is something I used in [probability distributions](../1324/5-1-probability-distributions.html) to get a bar graph representing the distribution of certain dice rolls.  It's more flexible than desmos, but it's also much harder to use.

About the code: the html here just puts the space for the graph on the page - it's the javascript in examples.js that actually makes the data and builds the plot.  So you'll have to check out the corresponding examples.js file or check out the [Chart.js documentation](https://www.chartjs.org/) for more info on making these plots.

``` html
<div>
    <canvas id="myChart"></canvas>
</div>
<!-- plus a bunch of other code in the corresponding .js file to actually build the chart -->
```

<div>
    <canvas id="myChart"></canvas>
</div>

---

To Do:
===

- We obviously need a lot of content.
- I'd like to have better interactivity.  In the first section of 1324, I have examples like the following, but the `<details>` element isn't very flexible.  We'd need to write our own (maybe with [jquery widgets](https://jqueryui.com/accordion/#collapsible)?) to improve things...

``` html
#### Practice: Is it a function?

Is this relation a function?

$$\{(1, 1), (2, 2), (3, 3), (4, 4)\}$$

<details>
<pre>
Yes, each input corresponds to just a single output.
</pre>
</details>
```
#### Practice: Is it a function?

Is this relation a function?

$$\{(1, 1), (2, 2), (3, 3), (4, 4)\}$$

<details>
<pre>
Yes, each input corresponds to just a single output.
</pre>
</details>

---

[Return to main page](../index.html)

[^kramdown]: You can also check out the [kramdown documentation](https://kramdown.gettalong.org/syntax.html), but I wouldn't recommend it unless you're looking for something specific.

[^confirm]: I tried running the following code once, but that doesn't quite work, because it's only loaded when the page loads and then desmos overwrites it.  But we could maybe run the following javascript on a loop, I think: `window.onbeforeunload = null;`  Might need to do the same for `window.close`.

<script src="chart.js">
</script>

<script src="chartjs-plugin-functions.js">
</script>

<script src="examples.js">// Creates local chart and handles events
</script>