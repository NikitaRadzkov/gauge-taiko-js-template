/* globals gauge, beforeSuite, afterSuite */
const path = require("path");
const { openBrowser, closeBrowser, screenshot } = require("taiko");

const headless = process.env.headless_chrome.toLowerCase() === "true";

beforeSuite(async () => {
  await openBrowser({
    headless,
  });
});

afterSuite(async () => {
  await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async () => {
  const screenshotFilePath = path.join(process.env.gauge_screenshots_dir, `screenshot-${process.hrtime.bigint()}.png`);

  await screenshot({
    path: screenshotFilePath,
  });
  return path.basename(screenshotFilePath);
};
