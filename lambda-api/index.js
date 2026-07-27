const crypto = require("crypto");

exports.handler = async (event) => {
   
    //We will uncomment this to test the errors on the dashboard created 
    //throw new Error("Intentional capstone test error");

    console.log("Complete API Gateway event:", JSON.stringify(event));

    try {
        const payload = event.body
            ? JSON.parse(event.body)
            : {};

        console.log("Received data:", JSON.stringify(payload));

        const submissionId = crypto.randomUUID();

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                success: true,
                message: "Data successfully received and logged!",
                id: submissionId,
                receivedData: payload
            })
        };
    } catch (error) {
        console.error("Request processing error:", error);

        return {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                success: false,
                message: "The request body must contain valid JSON."
            })
        };
    }
};