import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// db connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
}
main();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
