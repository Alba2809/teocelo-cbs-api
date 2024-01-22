import { Router } from "express";
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

    res.cookie("visited", true, {
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60,
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
