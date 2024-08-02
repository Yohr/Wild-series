const express = require("express");

const router = express.Router();

/* ************************************************************************* */
const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);
  
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */
const programRouter = require("./programs/router")

router.use("/programs",programRouter)
/* ************************************************************************* */
const categorieRouter = require("../categories/router")

router.use("/categories", categorieRouter)
/* ************************************************************************* */
module.exports = router;
