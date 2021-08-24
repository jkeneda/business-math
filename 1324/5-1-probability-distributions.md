---
layout: default
title: [1324 - business algebra]
---

Probability Distributions
===

If we're playing a game with dice, it's easy to understand what to expect from the roll of a single die - it'll roll a 1, 2, 3, 4, 5, or 6, and all of those have an equal chance of happening.  But to understand more complicated situations, we'll need more complicated models.  The math used to model *randomness* or *uncertainty* is called Probability Theory.

#### Example 1 
In the game of Yahtzee, you roll 5 dice and try to achieve certain outcomes from your 5 resulting numbers (like "4 of a kind" or "Straight").  One of the outcome categories is "Chance", where your score is simply the total that you roll on all 5 dice.  Here's the distribution of the possible scores for the "Chance" category - and how likely they are.

<div>
    <canvas id="myChart"></canvas>
</div>

<div>
    <form id="form1" onsubmit="return false;">
        <input type="text" id="textBox" value="5d6">
        <!--<input type="button" id="refreshButton" value="Refresh Distribution">-->
        <input type="button" id="sampleButton" value="Roll">
    </form>
</div>
<div>
    <p id="log">
    </p>
    <p>
        Click the roll button to sample (i.e. "try the experiment once") from the distribution.  You can change the distribution (e.g. 2d6 means "roll two 6-sided dice", 10d10 means "roll ten 10-sided dice").  Your roll will be displayed above.
    </p>
</div>

---

[Return to Previous Section](tbd)

[Continue to Next Section](tbd)

[Return to Table of Contents](00-index.html)

<script src="../Graphing Tools/chart.js">
</script>

<script src="../Graphing Tools/distributions.mjs"> // Functions for handling dice distributions
</script>

<script src="5-1-probability-distributions.js">// Creates local chart and handles events
</script>