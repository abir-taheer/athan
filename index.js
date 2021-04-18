const app = require("./app");
const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`The app is now running on port ${port}`);
});