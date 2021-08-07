import fs from "fs";
import { readBetweenTags, writeToFile } from "./utils";

const contributorsMD = fs.readFileSync("contributors.md", "utf8");

readBetweenTags(contributorsMD, "CONTRIBUTORS-GENERATOR-CORE-MEMBERS");
