const questions1: any = [
  {
    type: 'select',
    name: 'request',
    message: 'What would you like?',
    choices: [
      {
        title: 'Generate new contributor list automatically',
        value: 'newContributorList',
      },
      {
        title: 'Generate new contributor list from contributors.json',
        value: 'newContributorListFromJson',
      },
    ],
    initial: 1,
  },
];

const questions2: any = [
  {
    type: 'select',
    name: 'newFile',
    message: 'What do you want?',
    choices: [
      {
        title: 'Generate CONTRIBUTOR.md on root',
        value: true,
      },
      {
        title: 'Add contributor list to README.md',
        value: false,
      },
    ],
    initial: 1,
  },
  {
    type: 'confirm',
    name: 'isSplitted',
    message: 'Do you want to split as Core Team and All Contributors?',
  },
];

export { questions1, questions2 };
