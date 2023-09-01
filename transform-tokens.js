import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ["src/tokens/**/*.json"],
  platforms: {
    json: {
      transformGroup: "tokens-studio",
      buildPath: "build/",
      files: [
        {
          destination: "tokens.json",
          format: "json/flat",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
