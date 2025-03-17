const ResponseHelper = {
    successRes(res, statusCode, message, data = null) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    },

    errorRes(res, statusCode, message, error = null) {
        return res.status(statusCode).json({
            success: false,
            message,
            error,
        });
    },
};

module.exports = ResponseHelper;
