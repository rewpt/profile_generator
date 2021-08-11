const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userName;
let activity;
let music;
let meal;
let eats;
let sport;
let superpower;

const blogWriter = function(userName, activity, music, meal, eats, sport, superpower) {
  console.log(`${userName} is a ${activity} fanatic. You can usually hear them pumping ${music} before getting ready to play ${sport}. They never miss a ${meal} when ${eats} is being served. If you're lucky you might see them using their ${superpower} superpower!`);
};

rl.question(`What's your name? Nicknames are also acceptable :)\n`, (answer) => {
  console.log(`Thank you for your name`);
  userName = answer;
  rl.question('What is your favourite activity?\n', (answer) => {
    console.log(`Thank you for your activity`);
    activity = answer;
    rl.question('What is your favourite music?\n', (answer) => {
      console.log(`Thank you for your music`);
      music = answer;
      rl.question('What is your favourite meal (breakfast, brunch, lunch, dinner)?\n', (answer) => {
        console.log(`Thank you for your meal`);
        meal = answer;
        rl.question('What is your favourite thing to eat for that meal?\n', (answer) => {
          console.log(`Thank you for your favourite food`);
          eats = answer;
          rl.question('What is your favourite sport?\n', (answer) => {
            console.log(`Thank you for your favourite sport`);
            sport = answer;
            rl.question('What is your super power?\n', (answer) => {
              console.log(`Thank you for your super power!`);
              superpower = answer;
              blogWriter(userName, activity, music, meal, eats, sport, superpower);
              rl.close();
            });
          });
        });
      });
    });
  });
});


