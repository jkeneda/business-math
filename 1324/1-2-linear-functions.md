---
layout: default
title: 1324 - business algebra
---

Linear Functions
===

In this section, we look at one of the simplest classes of functions: linear functions.

## Closely Related Quantities

Linear functions arise when one quantity has a *constant rate of change* with respect to another.  We saw an example of this earlier, where we computed [shipping costs](1-1-b-function-definitions.html#example-2).

Let's recall that function: $$f(x) = \$8.25 x$$.  Note that every time our order number $$x$$ goes up by 1, the shipping cost should go up by $8.25.  So we say that the shipping cost has a constant rate of change with respect to the number of orders.  In other words, the change in the shipping cost is directly proportional to the change in the number of orders.

## General Definitions

linear function
: A **linear function** is a function that can be written in the form $$y = mx + b$$, where $$x$$ represents the input, $$y$$ represents the output, and $$m, b$$ are constants.

In any linear function, $$y$$ is changing at a *constant rate* with respect to $$x$$.  In other words, every time $$x$$ goes up by 1, $$y$$ will go up (or down) by some constant amount.  That amount is determined by the *slope* of the line.  

<div id="slope"></div>
slope
: The **slope** of a line tells you how quickly $$y$$ is changing with respect to $$x$$.  It's usually denoted by $$m$$.

If you already know two data points on the line (call them $$(x_1, y_1)$$ and $$(x_2, y_2)$$), then you can compute the slope using the following formula:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

This formula can also be written in shorthand as $$m = \frac{\Delta y}{\Delta x}$$, where the Greek letter Delta ($$\Delta$$) can be read as "change in __". In other words, the slope is the change in $$y$$ divided by the change in $$x$$.  From this perspective, we see that the slope is measuring how much change there is in $$y$$ per change in $$x$$.

slope-intercept form
: The equation of a line is said to be in **slope-intercept form** if it looks like $$y = mx + b$$.  In this form, $$m$$ tells you the slope and $$b$$ tells you the $$y$$-intercept (which we'll discuss below).

> **Warning**: $$m$$ and $$b$$ are allowed to be zero.  For example, in our shipping cost function, we have $$m = 8.25$$ and $$b = 0$$, so that $$y = 8.25 x + 0 = 8.25 x$$.

## Finding the Equation of a Line Connecting Two Data Points

#### Example 1 {#ex1}
Let's say that you want the equation of a line passing through $$(1, 2)$$ and $$(4, 8)$$.

We know that the line can be written as $$y = mx + b$$, but we need to determine $$m$$ and $$b$$.

It's a good idea to start by finding $$m$$.  Based on the <a href="#slope">slope formula</a> above, we compute:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{8-2}{4-1} = \frac{6}{3} = 2$$

That means that the line we're looking for is $$y = 2x + b$$, but we still need to determine $$b$$.

To determine $$b$$, note that we already know a couple of $$(x, y)$$ that should balance the equation.  Namely, $$(1, 2)$$ and $$(4, 8)$$ should solve the equation.  We can plug in either of them to solve for $$b$$.

Let's plug in $$(x, y) = (1, 2)$$ into the equation we've developed so far: $$y = 2x + b$$.

We get:

$$
\begin{align*}
(2) &= 2(1) + b\\
2 &= 2 + b \\
0 &= b
\end{align*}
$$

So $$y = 2x$$ is the line we're looking for.  

> Note that we could write $$y = 2x + 0$$ if we wanted to emphasize that $$b = 0$$, but normally we suppress the 0 term.

### Procedure:
Following the example above, we can see the following general procedure for finding the equation of a line that passes through some given data points.

0. (Optional but useful) Graph the data points you're given.  You need at least two points to determine the line.
1. Compute $$m = \frac{\Delta y}{\Delta x}$$ based on two of the known points.
2. Plug in $$m$$ and one of your data points $$(x, y)$$ into the equation $$y = mx + b$$.  This should leave $$b$$ as your only variable, and we can solve for $$b$$ from there.
3. Write $$y = mx + b$$, with $$m$$ and $$b$$ replaced by the constants you found in steps 2 and 3.

---

[Return to Previous Section](1-1-c-graphs-of-functions.html)

[Continue to Next Section](1-3-quadratic-functions.html)

[Return to Table of Contents](index.html)