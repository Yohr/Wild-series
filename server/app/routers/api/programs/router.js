const express = require("express");

const routerPrograms = express.Router();


const {browse} = require ("../../../controllers/programActions");

routerPrograms.get("/", (req, res) => {
    browse(req, res).catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
  });
module.exports = routerPrograms;