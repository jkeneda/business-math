---
layout: default
title: [1324 - business algebra]
---

Functions Defined by Algebraic Expressions
===

So far, we've been describing functions by just making a large list of their inputs and their outputs, either in the form of a table/picture or as a list of ordered pairs.  But when you're working with numerical functions, there's often a simple formula that describes how to produce the output from a given input.

#### Example 1
Suppose a farmer wants to build a square pen.  They're interested in knowing how many acres the pen will enclose based on the length of its sides.  One way to answer that question is by making a table of possible side lengths and the corresponding pen area:

|-------------|-----------------------------|
| Side Length | Pen Area |
|:-----------:|:---------------------------:|
| 50 yards | 2500 sqare yards (0.52 acres)  |
| 60 yards | 3600 square yards (0.74 acres) |
| 70 yards | 4900 square yards (1.01 acres) |
| 80 yards | 6400 square yards (1.32 acres) |
| 90 yards | 8100 square yards (1.67 acres) |
| 100 yards | 10,000 square yards (2.07 acres) |
|----------|--------------------------------|

This table might be helpful, but it's missing a lot of information.  What if they want to know about a side length of 65 yards?  Or 200 yards?

Instead of working with tables like this, it's much more efficient to use an algebraic expression to represent the *relationship* between the input and the output.  If we make a square pen whose sides are $$x$$ yards long, then the area of the pen will be $$x*x = x^2$$ square yards (hence the name of the expression: "$$x$$ squared").

To represent this relationship compactly, we can write something like:

$$y = x^2$$

or

$$A(x) = x^2 \text{ square yards},$$

where the input is thought of as "$$x$$ yards", and the output is measured in square yards.

Note, by the way, that one acre is 4,840 square yards.  So if we want the output to be measured in acres instead, all we have to do is take our original outputs and convert them to acres by multiplying by the conversion rate $$\frac{1 \text{ acre}}{4,840 \text{ square yards}}$$:

$$\require{cancel}A^*(x) = x^2 \cancel{\text{ square yards}} * \frac{1 \text{ acre}}{4,840 \cancel{\text{ square yards}}} = \frac{x^2}{4,840} \text{ acres}.$$

So the functions $$A$$ and $$A^*$$ will take any side length $$x$$ (in yards) and produce the corresponding pen area (in square yards and acres, respectively).

## Function Notation

To elaborate on the notation in the last example, let's look at the ingredients that we'll be using to define functions by formulas/equations.

---

[Return to Previous Section](1-1-a-relations-and-functions.html)

[Continue to Next Section](1-2-graphs-of-functions.html)

[Return to Table of Contents](00-index.html)