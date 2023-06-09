const express = require("express");
const app = express();
const multer = require("multer");

// Configure storage for uploaded files
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploaded videos/folder"); 
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Handle video upload request
app.post("/upload-video", upload.single("videoFile"), function(req, res) {
    res.sendStatus(200); // Send a success response
});

// Start the server
app.listen(3000, function() {
    console.log("Server started on port 3000");
});
