const { express, routes } = require("./controllers/index");
const errorHandling = require("./middleware/errorHandling");

const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// cors access
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

app.use(
  express.static("./static"),
  express.urlencoded({
    extended: false,
  }),
  cookieParser(),
  cors(),
  routes,
  errorHandling
);

// direct to home page with routes descriptions
routes.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname,"./static/html"));
});

// set server
app.listen(port, () => {
  console.log(
    `Envy Essentials server running on port http://localhost:${port}`
  );
});