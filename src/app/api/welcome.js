export default function handler(req, res) {
    res.status(200).json({
      message: "Welcome to our API!",
      version: "1.0"
    });
  }
  