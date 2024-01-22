import { Router } from "express";
import { parse, serialize } from "cookie";
import getNextSequence, { Counter } from "../libs/counters.js";

const router = Router();

router.post("/counter-visits", async (req, res) => {
  try {
    const { visited } = req.cookies;
    if (visited) {
      const counter = await Counter.findById("visits");
      res.json({ count: counter.seq });
    }

    const counter = await getNextSequence("visits");

    res.cookie("visited", counter.toString(), {
      sameSite: "None",
      secure: true,
      httpOnly: false,
    });

    res.json({ count: counter });
  } catch (error) {
    console.log(error);
  }
});

router.get("/counter-visits", async (req, res) => {
  try {
    const counter = await Counter.findById("visits");
    res.json({ count: counter.seq });
  } catch (error) {
    console.log(error);
  }
});

export default router;
