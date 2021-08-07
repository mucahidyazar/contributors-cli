import { contributionType as contributionTypes } from "./contribution-type";
import { role as roles } from "./role";

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
    name: "username",
    message: "What is the username of the contributor's github? (Ex: test123)",
  },
  {
    type: "text",
    name: "email",
    message: "What is the email of the contributor? (Ex: test@example.com)",
  },
  {
    type: "text",
    name: "website",
    message: "What is the website of the contributor? (Ex: mucahid.dev)",
  },
  {
    type: "confirm",
    name: "coreMember",
    message: "Is he/she a core member?",
  },
  {
    type: "multiselect",
    name: "roles",
    message: "What is/are his/her job or role?",
    choices: () =>
      Object.entries(roles).map(([key, role]) => ({
        id: key,
        title: role.name,
        value: key,
        emoji: role.symbol,
      })),
  },
  {
    type: "multiselect",
    name: "contributionTypes",
    message: "What type contribution has he had?",
    choices: () =>
      Object.entries(contributionTypes).map(([key, role]) => ({
        id: key,
        title: role.name,
        value: key,
        emoji: role.symbol,
      })),
  },
  {
    type: "select",
    name: "file",
    message: "Which file do you want to use?",
    choices: [
      { title: "Readme.md", value: "readme" },
      { title: "Contributors.md", value: "contributors" },
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
  {
    type: "confirm",
    name: "isSplitted",
    message: "Do you want to split as Core Team and All Contributors?",
  },
];

const readmeTitlePrompt = [
  {
    type: "multiselect",
    name: "abilties",
    message: "Which options do you want in your README.md?",
    choices: [
      { title: "Installation", value: "installation" },
      { title: "Documentation", value: "documentation" },
      { title: "Faq", value: "faq" },
      { title: "Links", value: "links" },
      { title: "Contributing", value: "contributing" },
      { title: "Contributors", value: "contributors" },
      { title: "Contact", value: "Contact" },
      { title: "Licence", value: "licence" },
    ],
  },
];

export { questions1, questions2, questions3 };
