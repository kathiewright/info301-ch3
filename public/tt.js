/*    JavaScript 6th Edition
 *    Chapter 3
 *    Chapter case

 *    Tipton Turbines
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: tt.js
 */

//global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
   "Thursday", "Friday", "Saturday"];
var opponents = ["Lightning", "Combines", "Combines", 
    "Combines", "Lightning", "Lightning", "Lightning", 
    "Lightning", "Barn Raisers", "Barn Raisers", 
    "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters",
    "Sodbusters", "(off)", "River Riders", "River Riders", 
    "River Riders", "Big Dippers", "Big Dippers", 
    "Big Dippers", "(off)", "Sodbusters", "Sodbusters",
    "Sodbusters", "Combines", "Combines", "Combines", 
    "(off)", "(off)"];
var gameLocation = 
   ["away", "away", "away", "away", "home", "home", "home",
    "home", "home", "home", "home", "away", "away", "away",
    "away", "", "away", "away", "away", "away", "away",
    "away", "", "home", "home", "home", "home", "home",
    "home", "", ""]; 

//function to place daysOfWeek values in the header row cells  Ref:  pp 167-168
function addColumnHeaders() {
	var i = 0;         			// i is the counter
	while (i < 7) {     		// note that the last element is index # 6 
	//for each header element, assign the corresponding array value
	   	document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];	
		i++;			//increment the counter
	}
}

//function to place the day of the month value in the first p element
//within each table data cell that has an id    Ref:  pp 170-172
function addCalendarDates() {
	var i = 1;                  //initializes the calendar at 1 b/c days of the month
	var paragraphs = "";
	do {
		//match-up individual table cells by their ID
		var tableCell = document.getElementById("08-" + i);
		//within a table cell, identify all of the elements tagged as "p" (paragraph)
		paragraphs = tableCell.getElementsByTagName("p");
		//assign to the first paragraph element the current value of i
		paragraphs[0].innerHTML = i;
		//increment the counter
		i++;
	} while (i <= 31);
}

// same function with the switch to add away/home designation
function addGameInfo() {
	var paragraphs = "";  //initializes a string value
	for (var i = 0; i< 31; i++) {
		var date = i + 1;   //date will be one more than i index value
		//use the date to find the correct table cell-->note concatenation to match the Id value
		var tableCell = document.getElementById("08-" + date);
		//get the array of paragraph values within the specified table cell
		paragraphs = tableCell.getElementsByTagName("p");
		
		//add the switch decision structure   Ref:  pp 181-183
		switch (gameLocation [i]) {
		   case "away":
			   paragraphs[1].innerHTML = "@ ";
			   break;       
			case "home":
			   paragraphs[1].innerHTML = "vs ";
			   break;
		}
		
		//use compound assignment operator to add the opponent name
		paragraphs[1].innerHTML += opponents[i];   
	}
}

//function to populate the calendar with headers, opponents & locations
function setUpPage () {
	addColumnHeaders();
	addCalendarDates();
	addGameInfo();
}

//runs setUpPage() function when the page loads
window.addEventListener("load", setUpPage, false);
