// Define a type for the path parameter object
type PathParam = {
  [key: string]: string;
};

// Define a function that takes two strings as inputs
function checkPathParam(url: string, pattern: string): PathParam | null {
  // Split the url and the pattern by "/"
  const urlParts = url.split('/');
  const patternParts = pattern.split('/');

  // Check if the url and the pattern have the same length
  if (urlParts.length !== patternParts.length) {
    // If not, return null
    return null;
  }

  // Initialize an empty object to store the path parameter
  const param: PathParam = {};

  // Loop through the url and the pattern parts
  for (let i = 0; i < urlParts.length; i++) {
    // Check if the current pattern part starts with ":"
    if (patternParts[i].startsWith(':')) {
      // If yes, extract the key name by removing the ":"
      const key = patternParts[i].slice(1);

      // Store the corresponding url part as the value for the key
      param[key] = urlParts[i];
    } else {
      // If no, check if the current url part matches the current pattern part
      if (urlParts[i] !== patternParts[i]) {
        // If not, return null
        return null;
      }
    }
  }

  // Return the path parameter object
  return param;
}

export default checkPathParam;
