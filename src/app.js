
const express = require("express");
const path = require("path");

const authRoutes = require("./routes/auth.routes");
const roomRoutes = require("./routes/room.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

app.use((req, res, next) => {
    const error = new Error("Không tìm thấy đường dẫn này");
    error.statusCode = 404;
    next(error);
});

app.use(errorMiddleware);

module.exports = app;
