const onSuccess = (callback, data) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(data)
  }
  callback(null, response)
};

const onError = (callback) => {
  const response = {
    statusCode: 500,
    body: {
      text: null,
      err: "Oops, looks like there's gremlins in the serverless function again"
    }
  }
  callback(null, response)
};

exports.handler = (event, context, callback) => {
  try{
    const data = true;
    //Do stuff here
    onSuccess(callback, data)
  } catch {
    onError(callback)
  }
};
