import dotenv from "dotenv";

dotenv.config()
const PORT = process.env.PORT || 5000
import { app } from "./app.js"

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})