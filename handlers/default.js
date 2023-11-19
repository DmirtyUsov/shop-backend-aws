exports.handler = async function (event) {
  console.log('request:', JSON.stringify(event, undefined, 2));
  return {
    statusCode: 404,
    headers: { 'Content-Type': 'text/plain' },
    body: `Method/Path combination not found. Please check the documentation.`,
  };
};
