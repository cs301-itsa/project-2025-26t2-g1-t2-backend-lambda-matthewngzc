exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "http://project-2025-26t2-g1-t2-s3.s3-website-us-east-1.amazonaws.com",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET,OPTIONS"
        },
        body: JSON.stringify('Hello, this is your AWS Lambda API response for your CS301 ITSA class!'),
    };
    return response;
};
