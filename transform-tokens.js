import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

const files = ["core", "dark", "light", "button"];
const configs = files.map((file) => {
  return {
    source: [
      "src/tokens/core.json",
      "src/tokens/dark.json",
      "src/tokens/light.json",
      `src/tokens/${file}.json`,
    ],
    platforms: {
      json: {
        transformGroup: "tokens-studio",
        buildPath: "build/",
        files: [
          {
            destination: `${file}.css`,
            format: "css/variables",
            filter: (token) => {
              return token.filePath.split(".json")[0] === `src/tokens/${file}`;
            },
          },
        ],
      },
    },
  };
});

configs.forEach((config) => {
  const sd = StyleDictionary.extend(config);

  sd.cleanAllPlatforms();
  sd.buildAllPlatforms();
});
