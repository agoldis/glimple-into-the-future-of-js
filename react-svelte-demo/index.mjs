import express from "express";

const PORT = process.env.PORT || 3333;

async function main() {
  express()
    .use(express.static("./dist"))
    .listen(PORT, error => {
      if (error) {
        throw error;
      }
      console.log(`Express server is running on http://localhost:${PORT}...`);
    });
}

main().catch(error => {
  console.error(error);
  process.exit(255);
});
