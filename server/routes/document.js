import express from "express";
const router = express.Router();
import { call_llm } from "../utils/llm.js";

router.get("/:docId", function (req, res, next) {
  const payload = req.params;
  const docId = payload.docId;
  const search = SemanticSearch.findAll({ where: { id: docId } });
  return JSON.stringify(search);
});

router.post("/", async (req, res, next) => {
  const payload = req.body;
  const question = payload.question;
  const response = await call_llm(question);
  return res.send({ response: response });
});

module.exports = router;
