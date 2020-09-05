const express = require("express")

const server = express()
const actionsRouter = require("./data/routers/actionsRouter")
const projectsRouter = require("./data/routers/projectsRouter")

server.use(express.json())

server.use("/api/actions", actionsRouter)
server.use("/api/projects", projectsRouter)

server.get("/", (req, res) => {
    res.send("I hope this works");
  });

  module.exports = server;