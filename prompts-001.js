const prompts = require("prompts");

const questions = [
  {
    type: "confirm",
    name: "dish",
    message: "Do you like pizza?",
  },
  {
    type: (prev) => (prev == "pizza" ? "text" : null),
    name: "topping",
    message: "Name a topping",
  },
];

(async () => {
  const response = await prompts(questions);
})();
