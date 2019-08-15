// define child rescript
module.exports = config => {
	config.target = 'electron-renderer';
	config.mode = process.env.NODE_ENV === "production" ? "production" : "development";
	return config;
}