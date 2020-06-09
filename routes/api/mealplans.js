const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const fs = require('fs');

const MealPlan = require("../../models/MealPlan");


// @route    POST api/mealplans
// @desc     Create a meal plan
// @access   Private
router.post(
  "/",
  [
    auth,
  ],
  async (req, res) => {

    try {
      const newMealPlan = new MealPlan({
        user: req.body.user,
        week: [
          req.body.breakfast,
          req.body.lunch,
          req.body.dinner,
        ]
      });

      const mealplan = await newMealPlan.save();

      res.json(mealplan);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/mealplans
// @desc     Get all meal plans
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const mealPlan = await MealPlan.find({ user: req.user.id})
    res.json(mealPlan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/cart
// @desc     Delete Meal Plan
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    const mealplan = await MealPlan.find({ user: req.user.id})
    await mealplan.map(item => item.remove())
    res.json(mealplan)
  } catch (err) {
    console.error(err.message);
  }
});
  

module.exports = router;
