/*
CODING CHALLENGE 1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass /
height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's?
true").
GOOD LUCK 😀
*/

var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


/*
CODING CHALLENGE 2
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

var teamJohn = (100 + 120 + 94) / 3;
var teamMike = (100 + 94 + 120) / 3;
var teamMary = (94 + 120 + 100) / 3;
var teamDraw = (teamJohn + teamMary + teamMike) / 3;

// console.log(teamJohn, teamMike, teamMary);

// teamJohn > teamMike ? console.log('John\'s team is the winner, with an average of ' + teamJohn + ' points') :
//    console.log('Mike\'s team is the winner, with an average of ' + teamMike + ' points');

// if (teamJohn > teamMike) {
//    console.log('John\'s team is the winner, with an average of ' + teamJohn + ' points');
// } else if (teamMike > teamJohn) {
//    console.log('Mike\'s team is the winner, with an average of ' + teamJohn + ' points');
// } else {
//    console.log('It\s a draw! both teams have ' + teamMike + ' points.');
// }

if (teamJohn > teamMike && teamJohn > teamMary) {
   console.log('John\'s team is the winner, with an average of ' + teamJohn + ' points');
} else if (teamMike > teamJohn && teamMike > teamMary) {
   console.log('Mike\'s team is the winner, with an average of ' + teamMike + ' points');
} else if (teamMary > teamJohn && teamMary > teamMike) {
   console.log('Mary\'s team is the winner, with an average of ' + teamMary + ' points');
} else {
   console.log('It\s a draw! two, or all three teams have an average of' + teamDraw + ' points.');
}

/*
CODING CHALLENGE 3
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

function tipCalc(bill) {
   var percentage;
   if (bill < 50) {
      percentage = .2;
   } else if (bill >= 50 && bill < 200) {
      percentage = .15;
   } else {
      percentage = .1;
   }
   return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];


console.log(bills, tips, total);