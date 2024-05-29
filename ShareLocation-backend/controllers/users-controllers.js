const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

const dummyUsers = [
  {
    id: "u1",
    name: "quixotic",
    email: "test.quixotic@gmail.com",
    password: "Quixotic",
  },
  {
    id: "u2",
    name: "de_spook",
    email: "test.despook@gmail.com",
    password: "Despook",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: dummyUsers });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = dummyUsers.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    const error = new HttpError("Enter valid username and password", 401);
    return next(error);
  }
  res.json({ message: "Logged in successfully!" });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data.",
      422
    );
    return next(error);
  }

  const existingUser = dummyUsers.find((u) => u.email === email);

  if (existingUser) {
    const error = new HttpError("User already exist", 422);
    return next(error);
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  dummyUsers.push(createdUser);
  res.status(201).json({ user: createdUser });
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
