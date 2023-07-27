const router = require('express').Router();
const {
  getThoughtss,
  getSingleThoughts,
  createThoughts,
  deleteThoughts,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/students
router.route('/').get(getThoughtss).post(createThoughts);

// /api/students/:thoughtId
router.route('/:thoughtId').get(getSingleThoughts).delete(deleteThoughts);

// /api/students/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/students/:thoughtId/reactions/:assignmentId
router.route('/:thoughtId/reactions/:assignmentId').delete(removeReaction);

module.exports = router;
