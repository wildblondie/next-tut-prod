'use client'; // Important! Without this, the code failed to compile

const error = (error) => {
  console.log(error);
  // return <div>there was an error...</div>;
  return <div>{error.error.message}</div>;
};

export default error;
