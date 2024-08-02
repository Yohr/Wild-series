const express = require("express");

const router = express.Router();


const {browse, read} = require ("../../../controllers/programActions");

router.get("/", (req, res) => {
    browse(req, res).catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
  });

  router.get("/:id", read); // Complete path is: /api/programs/:id

module.exports = router;