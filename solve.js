function whisper(sentense) {
  let result = "shh... " + sentense.toLowerCase();
  if (result.endsWith("!")) {
    return result.slice(0, result.length - 1);
  }
  return result;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
