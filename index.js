const server = require("./api/server.js");
const { orWhereNotExists } = require("./data/dbConfig");
const db = require("./data/dbConfig")

server.get("/", async (req, res) => {
 try{
   const accounts = await db.select("*").from("accounts")
   res.json(accounts)

 }catch (error) {
   console.log(error)
 }

})

server.get("/:id", async (req, res) => {
  try{
    const accounts = await db
    .select("*")
    .from("accounts")
    .where("id", req.params.id)
    res.json(accounts)
  }catch (error) {
    console.log(error)
  }
})

server.post("/", async (req, res) => {
  try{
    const accounts = await db
    .insert({
      name: req.body.name,
      budget: req.body.budget
    })
    .into("accounts")
    res.status(201).json(accounts)
    

  }catch (error) {
    console.log(error)
  }
})

server.put("/:id", async (req, res) => {
  await db("accounts")
  .update({})
  .where("id", req.params.id)
})

server.delete("/:id", async (req, res) => {
  await db("accounts")
  .where("id", req.params.id)
  .del()
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
