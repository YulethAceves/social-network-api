const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
  updateThought
} = require('../../controllers/thoughtController');

// /api/students
router.route('/:userId').post(createThought);
router.route("/").get(getThought);

// /api/students/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought)

// /api/students/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
