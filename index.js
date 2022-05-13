function confirmEnding(str, target) {
    str = str.substring(str.length - target.length);
  
    if (target === str) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(confirmEnding("Logan loves Angel like so much!", "so much!"));