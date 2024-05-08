const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const listingRoutes = require("./routes/listing.route");
const imageUploadRoutes = require("./routes/upload.route");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connection = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinaryConnect");
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/listing", listingRoutes);
app.use("/api/v1/upload", imageUploadRoutes);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running on ${process.env.PORT}`);
  await connection();
  await cloudinaryConnect();
});
