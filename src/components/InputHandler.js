/**
 * To be improved
 * [X] 1- Deal with different concat symbols
 *      (Difference between "," or "+"?)
 * [X] 2- Deal with different quotation marks
 *      (Convert all time to s)
 * [ ] 3- Deal with exercice blocks
 *      (By simply looping over n times?)
 * [ ] 4- Deal with comments for each exercice
 *      (Just adding them to the screen)
 * [ ] 5- Deal with intensity for each exercice
 *      (And then show some sort of indication)
 */

 
/**
 * @desc Replaces "similar" characters to help user input
 * @param {string} input
 * @return Correctly replaced string
 */
function makeTextReplacements(input) {
  let first = input.replace(/\+/g, ",");
  let second = first.replace(/“/g, '"');
  let third = second.replace(/”/g, '"');
  return third;
}

/**
 * @desc Converts excercice duration to seconds
 * @param {string} exercice in form: MM'SS" exerciceName
 * @return The same exercice but with the duration in seconds
 */
function converToSeconds(exercice) {
  let sIndex = exercice.indexOf('"');
  let mIndex = exercice.indexOf("'");
  if (mIndex === -1) {
    return exercice;
  } else if (sIndex === -1) {
    let mins = exercice.slice(0, mIndex);
    return (60 * mins).toString() + '"' + exercice.slice(mIndex + 1);
  } else {
    let mins = exercice.slice(0, mIndex);
    let secs = exercice.slice(mIndex + 1, sIndex);
    let totalSeconds = 60 * mins + parseInt(secs);
    return totalSeconds.toString() + '"' + exercice.slice(sIndex + 1);
  }
}

function getSeconds(exercice) {
  let divided = exercice.split('"');
  return divided[0].trim();
}

function getName(exercice) {
  let divided = exercice.split('"');
  return divided[1].trim();
}

/**
 * @desc Transforms the long string into an array of exercices
 * @param {string} input A correctly formatted exercice session (see documentation)
 * @return The array containing a dict for each exercice
 */
export function inputToExerciceArray(input) {
  let replaced = makeTextReplacements(input);
  console.log(replaced);
  let splitted = replaced.split(",");

  let exercices = [];

  splitted.forEach((ex) => {
    let exInSeconds = converToSeconds(ex);

    let exercice = {
      duration: getSeconds(exInSeconds),
      exercice: getName(exInSeconds),
    };

    exercices.push(exercice);
  });

  return exercices;
}

export default inputToExerciceArray;
