function sendResponse(req, res, next) {
    res.status(200).json({ message: res.locals.message });
  }
  
module.exports = { sendResponse };