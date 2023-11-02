export const customError = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500
  error.status = error.status || "error"

  res.status(error.statusCode).json({
    status: error.status,
    mesaage: error.message,
    stack: process.env.NODE_ENV !== "production" ? error.stack : null

  })
}