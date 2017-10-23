var path = require('path');

module.exports = {
  entry: {
    app: "./app/assets/scripts/app.js"
  },
	output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
	}
}
