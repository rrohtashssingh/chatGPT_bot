
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and the listeners
const port = process.env.PORT || 5000;

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server has started on port ${port} and database`)
  })
}).catch((error) => {
  console.log(error);
})
