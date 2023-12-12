const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

// router.route("/").get(getGoals).post(setGoals);
// router.route("/:d").put(updateGoals).delete(deleteGoals);
 
const { protect } = require("../middleware/authMiddleware");


router.get("/", protect, getGoals);
router.post("/", protect , setGoals);

router.put("/:id", protect , updateGoals);

router.delete("/:id", protect , deleteGoals);

module.exports = router;
