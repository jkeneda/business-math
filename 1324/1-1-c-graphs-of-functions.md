---
layout: default
title: 1324 - business algebra
---

Graphs of Functions
===

In this section, we'll see how to graphically represent functions.

## Graphs of Discrete Relations {#discrete-graphs}

We've defined a relation as a set of ordered pairs $$(x, y)$$.  For example, we can define a relation $$r = \{(1,3), (2, 1), (3, 5)\}$$.  When the inputs and outputs are real numbers (like in $$r$$), we can represent the same relation using a graph in the $$xy$$-plane.

<div id="calculator1" style="width: 60%; height: 300px; margin-left: auto; margin-right: auto;">
</div>

This graph depicts the relation $$\{(1,3), (2, 1), (3, 5)\}$$.  You can click on the points to see their coordinates.  Consider the point $$(x, y) = (2, 1)$$, which is pictured in blue.  You can recover its $$x$$-value by squashing it onto the horizontal ($$x$$-)axis.  You can recover its $$y$$-value by squashing it onto the vertical ($$y$$-)axis.

> Stop here and investigate the graph until you're comfortable translating between a data point $$(x, y)$$ and its corresponding point on the $$xy$$-plane.

## Graphs of Functions Defined by Equations {#equation-graphs}

We can also graph functions that are defined by equations.  Recall that an equation like $$y = x^2$$ is interpreted as a function by thinking of $$x$$ as the input and $$y$$ as the corresponding output.  The graph of this function consists of all $$(x, y)$$ that satisfy the equation.

<div id="calculator2" style="width: 60%; height: 300px; margin-left: auto; margin-right: auto;">
</div>

The graph above is a graph of $$y = x^2$$.  It includes points like $$(-1, 1)$$ and $$(2, 4)$$, because those are $$(x, y)$$ pairs that satisfy the equation.  

We could generate more points like this by choosing an arbitrary $$x$$-value and then plugging it into the equation to find its corresponding $$y$$.  For example, if you plug in $$x = 3$$, you get $$y = 3^2 = 9$$, so the point $$(3, 9)$$ would also be part of this graph.

---

[Return to Previous Section](1-1-b-function-definitions.html)

[Continue to Next Section](1-2-linear-functions.html)

[Return to Table of Contents](index.html)

<script src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>

<script src="1-1-c-graphs-of-functions.js">// Populates Desmos graphs
</script>