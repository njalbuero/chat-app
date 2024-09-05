import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // don't allow JavaScript to access the cookie, protect it from XSS attacks
    sameSite: "strict", // only allow cookies to be sent over HTTPS, protect against CSRF
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
