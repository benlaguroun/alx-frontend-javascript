// 0-promise.js

// Define the function to return a Promise
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve("Dummy API response");
  });
}
