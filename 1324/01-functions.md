---
layout: default
title: [1324 - business algebra]
---
$$\usepackage{amsthm}$$

Relations and Functions
===

In this section, we introduce *relations* and *functions*, which are used to model relationships between two sets.

## Relations

It's very important in mathematics to have clear, unambiguous definitions for our terms.  In these notes, definitions will look like this:

relation
: (informal) A **relation** has a set of inputs and a set of outputs.  For each input, the relation returns *at least one* output.

#### Example 1
People and their pets:

|--------|------|
| Person | Pets |
| :---:  | :---: |
| Jill  | Jack |
|       | Lola |
|       | Stevie |
| Josh | Curie |
| Kenzie | Ellie |
|       | Josie |
|       | Lux |
| Sheyleah | Mittens |
|------|------|

We can interpret the above table as a relation if we think of the person as the "input" and their pets as the "outputs".  For example, the input *Jill* produces the outputs *Jack*, *Lola*, and *Stevie*.  The input *Josh* produces Josh's only pet, *Curie*.


#### Example 2
Total medals per country in the Tokyo 2020 Olympic Games:

|---------|--------|
| Country | Medals |
| :---:   |  :---: |
| USA     | 113    |
| China   | 88     |
| Russia  | 71     |
| Great Britain | 65 |
| Japan | 58 |
| Australia | 46 |
| Italy | 40 |
| Germany | 37 |
| Netherlands | 36 |
| France | 33 |
|---------|--------|

The above table represents a relation if we think of the country as the "input" and its number of medals as the "output".

Before we discuss the types of relations that will be useful in business algebra, we need to make some formal definitions of the sets and types of relations we'll be using.

### Sets

Every relation has a *set* of inputs and a *set* of outputs.  A relation represents a connection between two sets.  But what are these sets?

set
: A **set** is a collection of objects (usually called the *elements* of the set).  In this class, those elements can be basically anything: names, countries, images, text, or (most typically) numbers.

#### Example 3
The set of Jill's pets from Example 1 (above) could be written like $$\{\text{Jack}, \text{Lola}, \text{Stevie}\}$$.  If a set is made up of just a few elements, we can use a comma-separated list of the elements - surrounded with curly braces - to denote the whole set.

#### Example 4
Often, we want to work with sets of numbers.  For example, if we wanted to work with the **integers**, we could write $$\{..., -3, -2, -1, 0, 1, 2, 3, 4, ...\}$$.  But this quickly becomes irritating to write, so we have a few abbreviations for common sets.

|-----------|-------------------|
| Shorthand | Corresponding Set |
|:-----------:|:-------------------:|
| $$\mathbb{Z}$$ | $$\{..., -3, -2, -1, 0, 1, 2, 3, ...\}$$ |
| $$\mathbb{R}$$ | all real numbers (like $$0, -0.\overline{333}, \pi, \frac{5}{7}, \sqrt{2}$$, etc.) |
|------|-------|

### Domains and Ranges

To better analyze relations, we have terminology to separate the set of "inputs" from the set of "outputs".

domain
: The **domain** of a relation is its set of inputs.  It is sometimes denoted $$D$$ for short.

range
: The **range** of a relation is its set of outputs.  It is sometimes denoted $$R$$ for short.

#### Example 5
Let's return to the Olympic medals example.  If we look at the relation determined by the top 3 countries by medal count, we get:

|---------|--------|
| Country | Medals |
| :---:   |  :---: |
| USA     | 113    |
| China   | 88     |
| Russia  | 71     |
|---------|--------|

The *domain* of this relation is $$D = \{\text{USA}, \text{China}, \text{Russia}\}$$, and the *range* of this relation is $$R = \{113, 88, 71\}$$.

#### Remark about Set Notation
Sets don't care about the order of their elements, and they ignore repeated elements.  So all of the following sets are identical:

$$\{113, 88, 71\} = \{71, 88, 113\} = \{71, 71, 88, 88, 88, 113\}$$

Any of these would be valid answers to "What's the range of the relation above?", but the first one is the most obvious/simple to write, so we usually just go with that one.

