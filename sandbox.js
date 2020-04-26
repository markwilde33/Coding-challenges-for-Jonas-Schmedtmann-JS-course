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

// var massMark = 78; // kg
// var heightMark = 1.69; // meters
// var massJohn = 92;
// var heightJohn = 1.95;
// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// var markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

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

// var teamJohn = (100 + 120 + 94) / 3;
// var teamMike = (100 + 94 + 120) / 3;
// var teamMary = (94 + 120 + 100) / 3;
// var teamDraw = (teamJohn + teamMary + teamMike) / 3;

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

// if (teamJohn > teamMike && teamJohn > teamMary) {
//   console.log(
//     "John's team is the winner, with an average of " + teamJohn + " points"
//   );
// } else if (teamMike > teamJohn && teamMike > teamMary) {
//   console.log(
//     "Mike's team is the winner, with an average of " + teamMike + " points"
//   );
// } else if (teamMary > teamJohn && teamMary > teamMike) {
//   console.log(
//     "Mary's team is the winner, with an average of " + teamMary + " points"
//   );
// } else {
//   console.log(
//     "Its a draw! two, or all three teams have an average of" +
//       teamDraw +
//       " points."
//   );
// }

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

// use an if/else statement
// function tipCalc(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
// var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // console.log(bills, tips, total);

// var bills = [124, 48, 268];
// function calculateTip(bill) {
//   switch (true) {
//     case bill < 50:
//       return bill * 0.2;
//     case bill < 200:
//       return bill * 0.15;
//     default:
//       return bill * 0.1;
//   }
// }
// // use a switch statement
// var tips = [],
//   fullBill = [];
// tips.push(calculateTip(bills[0]));
// tips.push(calculateTip(bills[1]));
// tips.push(calculateTip(bills[2]));

// fullBill.push(tips[0] + bills[0]);
// fullBill.push(tips[1] + bills[1]);
// fullBill.push(tips[2] + bills[2]);

// console.log(bills);
// console.log(tips);
// console.log(fullBill);

/*
CODING CHALLENGE 4
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

// console.log(BMIMark, BMIJohn);
// var markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

// var mark = {
//   fullName: "Mark Jones",
//   mass: 78, // kg
//   height: 1.69, // meters
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// var john = {
//   fullName: "John Owen",
//   mass: 92, // kg
//   height: 1.95, // meters
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);
// console.log(john["bmi"], mark["bmi"]);

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(mark["fullName"] + " has the highest BMI, it is " + mark["bmi"]);
// } else if (john["bmi"] > mark["bmi"]) {
//   console.log(john["fullName"] + " has the highest BMI, it is " + john["bmi"]);
// } else {
//   console.log(
//     "It's a draw " +
//       mark["fullName"] +
//       " and " +
//       john["fullName"] +
//       " have the same BMI."
//   );
// }

/*
 CODING CHALLENGE 5

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/

// var john = {
//   fullName: "John Smith",
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function () {
//     this.tips = [];
//     this.total = [];

//     for (var i = 0; i < this.bills.length; i++) {
//       var percentage;
//       var bill = this.bills[i];

//       // get the tipping percentages
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }

//       // add results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.total[i] = bill + bill * percentage;
//     }
//   },
// };

// john.calcTips();
// console.log(john);

/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

// var mark = {
//   fullName: "Mark Jones",
//   bills: [77, 475, 110, 45],
//   calcTips: function () {
//     this.tips = [];
//     this.total = [];

//     for (var i = 0; i < this.bills.length; i++) {
//       var percentage;
//       var bill = this.bills[i];

//       // get the tipping percentages
//       if (bill < 100) {
//         percentage = 0.2;
//       } else if (bill >= 100 && bill < 300) {
//         percentage = 0.1;
//       } else {
//         percentage = 0.25;
//       }

//       // add results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.total[i] = bill + bill * percentage;
//     }
//   },
// };

// mark.calcTips();
// console.log(mark);

// getAverage = function (tips) {
//   var total = 0;
//   for (var i = 0; i < tips.length; i++) {
//     total = total + tips[i];
//   }
//   return total / tips.length;
// };

// john.average = getAverage(john.tips);
// mark.average = getAverage(mark.tips);
// console.log(john, mark);

// if (john.average > mark.average) {
//   console.log(
//     john.fullName +
//       "'s family pays higher tips, with an average of $" +
//       john.average
//   );
// } else if (mark.average > john.average) {
//   console.log(
//     mark.fullName +
//       "'s family pays higher tips, with an average of $" +
//       mark.average
//   );
// } else {
//   console.log("It's a draw!");
// }

/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// (function () {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);

//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ": " + this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function (ans) {
//     if (ans === this.correct) {
//       console.log("thats right!");
//     } else {
//       console.log("thats not right, hard luck");
//     }
//   };

//   var q1 = new Question(
//     "What color is blue?",
//     ["blue", "black", "purple", "green"],
//     0
//   );
//   var q2 = new Question(
//     "What do you call bread?",
//     ["bread", "brack", "bovine", "botato"],
//     0
//   );
//   var q3 = new Question(
//     "Who does number 2 work for?",
//     ["her", "him", "them", "everyone"],
//     3
//   );

//   var questions = [q1, q2, q3];

//   var questNum = Math.floor(Math.random() * questions.length);

//   questions[questNum].displayQuestion();

//   var answer = parseInt(prompt("Please select the correct answer"));

//   questions[questNum].checkAnswer(answer);
// })();

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };
  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. Try again :)");
      sc = callback(false);
    }

    this.displayScore(sc);
  };
  Question.prototype.displayScore = function (score) {
    console.log("Your current score is: " + score);
    console.log("------------------------------");
  };

  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );
  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal", "Jonas"],
    2
  );
  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    2
  );

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = prompt("Please select the correct answer.");
    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    }
  }

  nextQuestion();
})();
