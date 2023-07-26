// Define a function that takes a string as input
function isPathParamPattern(str: string): boolean {
  // Check if the string starts with "/" and contains ":"
  if (str.startsWith('/') && str.includes(':')) {
    // Use the match method to split the string by "/" and ignore the empty strings
    const parts = str.match(/[^/]+/g);

    // Loop through the parts
    for (let part of parts!) {
      // Check if the part contains more than one ":"
      if (part.split(':').length > 2) {
        // If yes, return false
        return false;
      }
    }

    // Return true if no part is invalid
    return true;
  } else {
    // Return false if the string does not start with "/" or does not contain ":"
    return false;
  }
}

export default isPathParamPattern;
