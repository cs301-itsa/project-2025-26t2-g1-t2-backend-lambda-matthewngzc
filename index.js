exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello, this is your AWS Lambda API response for your CS301 ITSA class!'),
    };
    return response;
};
