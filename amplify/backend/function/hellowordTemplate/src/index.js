

exports.handler = async (event) => {
    const message = "Hello from Index(Hello world Template)"
    const response = {
        statusCode: 200,
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     },
        body: message,
    };
    return response;
};
