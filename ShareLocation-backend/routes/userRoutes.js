const express = require("express");
const router = express.Router();

const dummyUsers = [
  {
    id: "u1",
    name: "quixotic",
  },
  {
    id: "u2",
    name: "de_spook",
  },
];

router.get("/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const users = dummyUsers.find((user) => {
    return userId === user.id;
  });
  res.json(users);
});

module.exports = router;
