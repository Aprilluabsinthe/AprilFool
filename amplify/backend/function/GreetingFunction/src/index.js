

exports.handler = async (event) => {
    const message = "Hello from Amplify API!",
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
