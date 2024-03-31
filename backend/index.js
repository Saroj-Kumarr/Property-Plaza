import express from "express";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import connection from "./config/database.js";
import { v2 as cloudinary } from "cloudinary";
import File from "./models/file.model.js";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const app = express();
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

const cloudinaryConnect = async () => {
  try {
    cloudinary.config({
      cloud_name: "dpkeexb0x",
      api_key: "824867471374662",
      api_secret: "zDIE0iGlXiXv53A2OhfOCsfdzmk",
    });
    console.log("Connected with cloudinary.");
  } catch (error) {
    console.log(error.message);
  }
};

cloudinaryConnect();

const uploadFileToCloudinary = async (file, folder) => {
  const options = { folder };

  try {
    await cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.log(error.message);
  }
};

app.post("/file", async (req, res) => {
  const { name, imageURL } = req.body;
  const { file } = req.files;

  console.log(file);

  let path = `${__dirname}/files/${Date.now()}.${file.name.split(".")[1]}`;

  const response = await uploadFileToCloudinary(file, "saroj");

  console.log(response);

  file.mv(path, (error) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error occurred while uploading the file.");
    } else {
      res.send("File uploaded successfully.");
    }
  });
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
  connection();
});
