// As a function
export const checkHealth = () => {
  return new Promise(async (resolve, reject) => {
    try {
      return resolve(true);
    } catch (err) {
      console.log("Error in check health event", err);
      return reject(err);
    }
  });
};
