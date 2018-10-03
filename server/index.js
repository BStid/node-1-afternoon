let express = require("express");
let bodyParse = require("body-parser");
let messages = require("./controllers/messages_controller.js");

let app = express();

app.use(bodyParse.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", messages.read);
app.put("/api/messages/:id", messages.update);
app.post("/api/messages", messages.create);
app.delete("/api/messages/:id", messages.delete);

let port = 3001;
app.listen(port, () => {
  console.log(`Server is now listening on port ${port}.`);
});
