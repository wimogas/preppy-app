const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealPlanSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    week: [
      {
        type: Array,
      },
      {
        type: Array,
      },
      {
        type: Array,
      },
    ],
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = MealPlan = mongoose.model('mealplan', MealPlanSchema);