const { resolve } = require("path");
const { statSync } = require("fs");

class BoundlesizeWebpackPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    const { sizeLimit } = this.options;
    // compiler.hooks.compile.tap("BundleSizePlugin", (compilationParams) => {
    //   // console.log("compilationParams: ", compilationParams);
    // });

    compiler.hooks.done.tap("BoundlesizeWebpackPlugin", (stats) => {
      const { path, filename } = stats.compilation.outputOptions;
      const bundlePath = resolve(path, filename);
      // KB
      const { size } = statSync(bundlePath);
      const bundleSize = size / 1024;

      if (bundleSize < sizeLimit) {
        console.log(
          "Safe: bundle-size:",
          bundleSize,
          "\n SIZE LIMIT:",
          sizeLimit
        );
      } else {
        console.log(
          "Unsafe: bundle-size:",
          bundleSize,
          "\n SIZE LIMIT:",
          sizeLimit
        );
      }
    });
  }
}

module.exports = BoundlesizeWebpackPlugin;
