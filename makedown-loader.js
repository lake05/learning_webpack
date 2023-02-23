var TurndownService = require("turndown");

function markDownHTMLLoader(content, map, meta) {
  const options = this.getOptions();
  const turndownService = new TurndownService(options);
  const md = turndownService.turndown(content);
  const code = `module.exports = ${JSON.stringify(md)}`;
  return code;
}

module.exports = markDownHTMLLoader;
