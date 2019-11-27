import express from "express";
import bcrypt from "bcrypt";

import passport from "passport";
const userController = express.Router();

function getUserByEmailQuery(email) {
  return `SELECT userID, email from User WHERE email LIKE ${email}`;
}

userController.get("/", (req, res) => {
  db.query("SELECT * from User", (err, data, fields) => {
    if (err) {
      console.log("Error while performing Query." + err);
    } else {
      const returnData = { ...data };
      res.status(200).json(returnData);
    }
  });
});

userController.post("/", (req, res) => {
  res.status(200).json({ data: "" });
});

userController.post("/register", (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    const createUserQuery = `INSERT into User(email, password) values('${email}', '${hashedPassword}')`;
    db.query(createUserQuery, (err2, createdUser, fields) => {
      if (err2) res.status(500).json(err2);
      else {
        db.query(getUserByEmailQuery(email), (err2, data, fields) => {
          res.status(200).json({ ...data });
        });
      }
    });
  });
});

userController.get("/login-failed", (req, res) => {
  res.status(403).json({ message: "User enter wrong password" });
});

userController.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login-failed"
  }),
  (req, res) => {
    const { email } = req.body;
    db.query(getUserByEmailQuery(email), (err2, foundUser) => {
      if (err2) res.status(500).json(err2);
      else res.status(200).json({ foundUser });
    });
  }
);

export default userController;
