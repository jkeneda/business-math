---
layout: default
title: jQuery Testing
description: Interactivity for questions
---

<link href="jquery-ui/jquery-ui.css" rel="stylesheet">

<!-- Accordion -->
<h2 class="demoHeaders">Accordion</h2>
<div id="accordion">
	<h3>First</h3>
	<div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
	<h3>Second</h3>
	<div>Phasellus mattis tincidunt nibh.</div>
	<h3>Third</h3>
	<div>Nam dui erat, auctor a, dignissim quis.</div>
</div>

<!-- Autocomplete -->
<h2 class="demoHeaders">Autocomplete</h2>
<div>
	<input id="autocomplete" title="type &quot;a&quot;">
</div>

<!-- Button -->
<h2 class="demoHeaders">Button</h2>
<button id="button">A button element</button>
<button id="button-icon">An icon-only button</button>

<!-- Checkboxradio -->
<h2 class="demoHeaders">Checkboxradio</h2>
<form style="margin-top: 1em;">
	<div id="radioset">
		<input type="radio" id="radio1" name="radio"><label for="radio1">Choice 1</label>
		<input type="radio" id="radio2" name="radio" checked="checked"><label for="radio2">Choice 2</label>
		<input type="radio" id="radio3" name="radio"><label for="radio3">Choice 3</label>
	</div>
</form>

<!-- Controlgroup -->
<h2 class="demoHeaders">Controlgroup</h2>
<fieldset>
	<legend>Rental Car</legend>
	<div id="controlgroup">
		<select id="car-type">
			<option>Compact car</option>
			<option>Midsize car</option>
			<option>Full size car</option>
			<option>SUV</option>
			<option>Luxury</option>
			<option>Truck</option>
			<option>Van</option>
		</select>
		<label for="transmission-standard">Standard</label>
		<input type="radio" name="transmission" id="transmission-standard">
		<label for="transmission-automatic">Automatic</label>
		<input type="radio" name="transmission" id="transmission-automatic">
		<label for="insurance">Insurance</label>
		<input type="checkbox" name="insurance" id="insurance">
		<label for="horizontal-spinner" class="ui-controlgroup-label"># of cars</label>
		<input id="horizontal-spinner" class="ui-spinner-input">
		<button>Book Now!</button>
	</div>
</fieldset>

<!-- Tabs -->
<h2 class="demoHeaders">Tabs</h2>
<div id="tabs">
	<ul>
		<li><a href="#tabs-1">First</a></li>
		<li><a href="#tabs-2">Second</a></li>
		<li><a href="#tabs-3">Third</a></li>
	</ul>
	<div id="tabs-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
	<div id="tabs-2">Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</div>
	<div id="tabs-3">Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</div>
</div>

<h2 class="demoHeaders">Dialog</h2>
<p>
	<button id="dialog-link" class="ui-button ui-corner-all ui-widget">
		<span class="ui-icon ui-icon-newwin"></span>Open Dialog
	</button>
</p>

<!-- ui-dialog -->
<div id="dialog" title="Dialog Title">
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<!-- Tooltip -->
<h2 class="demoHeaders">Tooltip</h2>
<p id="tooltip">
	<a href="#" title="That&apos;s what this widget is">Tooltips</a> can be attached to any element. When you hover
the element with your mouse, the title attribute is displayed in a little box next to the element, just like a native tooltip.
</p>

Colors: Text is #606c71
Headers are #159957 (green)
#155997 (blue) in between 157779  
#157977 (neutral)

<script src="jquery-ui/external/jquery/jquery.js"></script>
<script src="jquery-ui/jquery-ui.js"></script>
<script>
$( "#accordion" ).accordion();

var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});

$( "#button" ).button();
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});

$( "#radioset" ).buttonset();

$( "#controlgroup" ).controlgroup();

$( "#tabs" ).tabs();

$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});

$( "#datepicker" ).datepicker({
	inline: true
});

$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});

$( "#progressbar" ).progressbar({
	value: 20
});

$( "#spinner" ).spinner();

$( "#menu" ).menu();

$( "#tooltip" ).tooltip();

$( "#selectmenu" ).selectmenu();

// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
</script>