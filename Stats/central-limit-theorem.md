---
layout: default
title: Statistics (MATH 1342)
description: Probability Distributions and the Central Limit Theorem
---

Probability Distributions
===

If we're playing a game with dice, it's easy to understand what to expect from the roll of a single die - we can roll a 1, 2, 3, 4, 5, or 6, and all of those have an equal chance of happening.  But to understand more complicated situations, we'll need more complicated models.  The math used to model *randomness* or *uncertainty* is called Probability Theory.

When working with randomness, there are multiple possible outcomes, each with their own probability of occurring.  To represent these outcomes and their probabilities, we use a *probability distribution*.

probability distribution
: A **probability distribution**  is a table or graph that relates *all possible outcomes* and *their probabilities of occurring*.

> Note: The probabilities in a probability distribution should add up to 1 (or 100%).

When randomness is involved, we don't know the exact outcome we'll get in advance.  Since the outcome isn't known yet, we can give the outcome a *variable name*, like $$n$$, until it's determined.  We call this a *random variable*.

random variable
: A **random variable** is a variable that represents a set of random possible outcomes.

#### Example 1
 
If $$n$$ represents the number we'll get next time we roll a die, then $$n$$ could be 1, 2, 3, 4, 5, or 6.  Since the value of $$n$$ depends on some randomness, $$n$$ is a random variable.

We know all of the possible outcomes for the die roll, and we know how likely they are to occur.  Putting those together, we can write the *probability distribution for $$n$$*:

|------------------+---+---+---+---+---+---|
| Outcome of $$n$$:| 1 | 2 | 3 | 4 | 5 | 6 |
|------------------+---+---+---+---+---+---|
| Probability:     | $$\frac{1}{6}$$ | $$\frac{1}{6}$$ | $$\frac{1}{6}$$ | $$\frac{1}{6}$$ | $$\frac{1}{6}$$ | $$\frac{1}{6}$$ |
|------------------+---+---+---+---+---+---|

> Note: This represents the probability distribution of $$n$$ in the form of a table.  We could equivalently represent it as a bar graph.  See the graph below under "The Central Limit Theorem".

The probability $$\frac{1}{6} = 0.1\bar{6}$$ might be more commonly written as $$16.\bar{6} \%$$.  In other words, if we pick a specific number between 1 and 6 (like 3), there's close to a 17% chance that we'll roll it next time we roll the die.  That's true for all of these numbers - they're all equally likely.  This is an example of a ***uniform*** *probability distribution*.

uniform
: A probability distribution is called **uniform** when all of its outcomes are equally likely.

Examples of uniform probability distributions include things like flipping a fair coin or rolling a fair die.  Every possible outcome is equally likely to happen.

Not all probability distributions are uniform.  Sometimes, some outcomes are more likely than others.

#### Example 2
In the game of Yahtzee, you roll 5 dice.  In the "Chance" category, your score is simply the *total* that you roll with all 5 dice.  Here's the distribution of the possible scores for the "Chance" category - and how likely they are.  In other words, the graph below is the *probability distribution* of the scores you can get.  Try hovering over the bars in the graph for more info.  Which outcomes are the most likely?

<div>
    <canvas id="originalEx"/>
</div>

The shape of this probability distribution might seem familiar to you.  Let's explore the bell-curved shape of this example a bit more.

## The Central Limit Theorem

If we only roll a single die, then the chart looks pretty boring.  All of the outcomes are equally likely.  Below is its uniform probability distribution (in graph form).  You can see that each number has a $$16.\bar{6}\%$$ chance of being rolled.

<div>
    <canvas id="myChart"/>
</div>

<div>
    <form id="form1" onsubmit="return false;">
        Number of Dice:<br/>
        <input type="range" id="textBox" min="1" max="10" value="1"><br/>
        (minimum of 1, max of 10)
    </form>
</div>

Click on the slider above and use your arrow keys (or direct clicks) to change the number of dice that we're totalling.  What happens to the shape of the graph as the number of dice increases?

We quickly see a familiar pattern emerge.  The distribution gets closer and closer to a bell curve.  The bell curve arises so much in practice that it is called the *normal distribution*.

normal distribution
: A **normal distribution** is another (more technical) name for a bell curve.

> Note: There's much more to say here, but normal random variables have *infinitely* many possible outcomes, and we're going to focus on simpler random variables for now.



---

[Return to Previous Section](tbd)

[Continue to Next Section](tbd)

[Return to Table of Contents](00-index.html)

<script src="../Graphing Tools/chart.js">
</script>

<script src="../Graphing Tools/distributions.mjs"> // Functions for handling dice distributions
</script>

<script src="central-limit-theorem.js">// Creates local chart and handles events
</script>