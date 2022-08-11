import type { Config } from "@jest/types";
import { defaults } from "jest-config";

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  };
};
