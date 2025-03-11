require("dotenv").config();
const express = require("express");
const pool = require("./src/config/db");

const app = express();
const port = process.env.PORT || 5000;

// Cek koneksi ke database saat server dimulai
pool
  .connect()
  .then((client) => {
    console.log("✅ PostgreSQL Database Connected");
    client.release(); // Penting! Lepaskan client setelah pengecekan
  })
  .catch((err) => console.error("❌ PostgreSQL Connection Failed:", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

app.listen(port, () => {
  console.log("Server is running in port: http://localhost:5000");
});
