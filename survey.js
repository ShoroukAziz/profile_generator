const survey = {
  name: {
    order: 1,
    question: "What\'s your name? Nicknames are also acceptable :)",
    before: "",
    after: ""
  },

  activity: {
    order: 3,
    question: 'What\'s an activity you like doing?',
    before: "while",
    after: ","

  },
  music: {
    order: 2,
    question: 'What do you listen to while doing that?',
    before: "loves listening to",
    after: ""
  },
  meal: {
    order: 5,
    question: 'Which meal is your favourite (eg: dinner, brunch, etc.)',
    before: "for",
    after: ", "
  },
  food: {
    order: 4,
    question: 'What\'s your favourite thing to eat for that meal?',
    before: "devouring",
    after: ""
  },
  sport: {
    order: 6,
    question: 'Which sport is your absolute favourite?',
    before: "believes",
    after: "is the only true sport, "
  },
  superPower: {
    order: 7,
    question: 'What is your superpower? In a few words, tell us what you are amazing at!',
    before: "and is a super ninja at",
    after: "."
  }
};


const generateProfile = survey => {

  let profile = "";
  for (categoryKey of Object.keys(survey).sort((a, b) => survey[a].order - survey[b].order)) {
    category = survey[categoryKey]
    profile += `${category.before} ${category.ans} ${category.after}`;
  }
  console.log(profile);

};


const goOverTheSurvey = survey => {

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const categories = Object.keys(survey);


  let i = 0;

  const askAQuestion = () => {
    console.log(`question number ${i + 1}`);


    rl.question(survey[categories[i]].question + '\n', (answer) => {
      survey[categories[i]].ans = answer;
      i++;
      if (i < categories.length) {
        askAQuestion();
      }
      else {
        rl.close();
        generateProfile(survey);
      }

    });

  }

  askAQuestion();

}

goOverTheSurvey(survey)