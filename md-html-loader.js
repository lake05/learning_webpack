const { marked } = require("marked");

function markDownLoader(content, map, meta) {
  const options = this.getOptions();
  const html = marked(content, options);
  return html;
}

module.exports = markDownLoader;
