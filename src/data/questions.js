const questions1 = [
  {
    type: "select",
    name: "request",
    message: "What would you like?",
    choices: [
      {
        title: "Add new contributor",
        value: "newContributor",
      },
      {
        title: "Generate new contributor list automatically",
        value: "newContributorList",
      },
      {
        title: "Generate new contributor list from contributors.json",
        value: "newContributorListFromJson",
      },
    ],
    initial: 1,
  },
];

const questions2 = [
  {
    type: "text",
    name: "name",
    message:
      "What is the name of the contributor? (Write as Firstname and Lastname. Ex: Mucahid Yazar)",
  },
  {
    type: "text",
    name: "email",
    message:
      "What is the email of the contributor? (Ex: mucahidyazar@gmail.com)",
  },
  {
    type: "multiselect",
    name: "abilties",
    message: "What is/are his/her job or abilities?",
    choices: [
      { title: "Developer", value: "developer", emoji: "💻" },
      { title: "Designer", value: "designer", emoji: "🎨" },
      { title: "Devops", value: "devops", emoji: "🤖" },
      { title: "Volunteer", value: "volunteer", emoji: "🌿" },
      { title: "Engineer", value: "engineer", emoji: "📐" },
      { title: "Manager", value: "manager", emoji: "📈" },
      { title: "Core Contributor", value: "core-contributor", emoji: "🥝" },
    ],
  },
];

const questions3 = [
  {
    type: "select",
    name: "newFile",
    message: "What do you want?",
    choices: [
      {
        title: "Generate CONTRIBUTOR.md on root",
        value: true,
      },
      {
        title: "Add contributor list to README.md",
        value: false,
      },
    ],
    initial: 1,
  },
];

export { questions1, questions2, questions3 };
