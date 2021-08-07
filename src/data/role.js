import { Role } from "../enums";

export const role = {
  [Role.DEVELOPER]: {
    name: "Developer",
    description: "The developer of the game.",
    symbol: "💻",
  },
  [Role.DESIGNER]: {
    name: "Designer",
    description: "The designer of the game.",
    symbol: "🎨",
  },
  [Role.DEVOPS]: {
    name: "DevOps",
    description: "The devops of the game.",
    symbol: "🤖",
  },
  [Role.VOLUNTEER]: {
    name: "Volunteer",
    description: "The volunteer of the game.",
    symbol: "🌿",
  },
  [Role.ENGINEER]: {
    name: "Engineer",
    description: "The engineer of the game.",
    symbol: "📐",
  },
  [Role.MANAGER]: {
    name: "Manager",
    description: "The manager of the game.",
    symbol: "📈",
  },
};
