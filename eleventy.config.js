import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/posts/*/assets/*", { mode: "html-relative" });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
}

export const config = {
  dir: { input: "src" }
}
