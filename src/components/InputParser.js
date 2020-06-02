/**
 * To be improved
 * [X] 1- Deal with different concat symbols
 *      (Difference between "," or "+"?)
 * [X] 2- Deal with different quotation marks
 *      (Convert all time to s)
 * [X] 3- Deal with exercise blocks
 *      (By simply looping over n times?)
 * [X] 4- Change "x"s for "*" where needed
 *      (If it is in the middle of an exercise, better not)
 * [ ] 5- Deal with comments for each exercise
 *      (Just adding them to the screen)
 * [ ] 6- Deal with intensity for each exercise
 *      (And then show some sort of indication)
 */

/**
 * @desc Transforms the long string into an array of exercises
 * @param {string} input A correctly formatted workout session (see documentation)
 * @return {dict} A dict containing an array made up of a dict for each exercise and the total duration.
 */
export function inputToExerciseDict(input) {
  let replaced = makeTextReplacements(input);
  // console.log(replaced);
  let full = computeRepetition(replaced);
  let splitted = full.split(",");

  let exercises = [];
  let totalSeconds = 0;

  splitted.forEach((ex) => {
    let exInSeconds = convertToSeconds(ex);
    let [exDuration, exName] = exInSeconds.split('"');
    totalSeconds += parseInt(exDuration.trim());

    let exercise = {
      duration: exDuration.trim(),
      name: exName.trim(),
    };

    exercises.push(exercise);
  });

  let workout = {
    exercises: exercises,
    duration: totalSeconds,
  };

  // console.log(workout.duration);

  return workout;
}

/**
 * @desc Replaces "similar" characters to help user input
 * @param {string} input
 * @return {string} Correctly replaced string
 */
function makeTextReplacements(input) {
  let first = input.replace(/\+/g, ",");
  let second = first.replace(/[“”]/g, '"');
  let third = second.replace(/[[{]/g, "(");
  let fourth = third.replace(/[\]}]/g, ")");
  let fifth = replaceXs(fourth);
  return fifth;
}

function replaceXs(input) {
  for (var i = 0; i < input.length; i++) {
    let c = input[i];
    let replace = true;
    if (c === "x") {
      if (i - 1 >= 0) {
        const prev = input[i - 1];
        replace = !isLetter(prev);
      }
      if (i + 1 < input.length) {
        const post = input[i + 1];
        replace = replace && !isLetter(post);
      }
      if (replace) {
        input = input.slice(0, i) + "*" + input.slice(i + 1);
      }
    }
  }
  return input;
}

function isLetter(char) {
  return char.match(/[a-z]/i) !== null;
}

/**
 * @desc Expands the exercise blocks given in the input.
 * @param {string} input
 * @returns {string} with the blocks expanded
 */
function computeRepetition(input) {
  let multIndex = input.indexOf("*");
  while (input.indexOf("*") !== -1) {
    let first, times, block, last;
    [first, times] = getNumReps(input, multIndex);
    [last, block] = getBlock(input, multIndex);

    let repeated = repeatBlock(block, times);

    input = input.slice(0, first) + repeated + input.slice(last + 1);
    multIndex = input.indexOf("*");
  }
  return input;
}

function getNumReps(input, multIndex) {
  let repetitions = [];
  let currentIndex = multIndex;
  let loop = true;

  while (loop && currentIndex >= 0) {
    currentIndex--;
    repetitions.unshift(input[currentIndex]);
    loop = isNumericChar(input[currentIndex - 1]) && currentIndex > 0;
  }
  if (repetitions.length === 0) {
    // EXCEPTION
    return "";
  }
  let numReps = repetitions.join("").trim();
  return [currentIndex, numReps];
}

function isNumericChar(char) {
  return /^\d$/.test(char);
}

/**
 *
 * @param {string} input
 * @param {number} m
 */
function getBlock(input, m) {
  let indexOpen = input.indexOf("(", m);
  if (indexOpen === -1) {
    // EXCEPTION
    return "";
  }
  let currentIndex = indexOpen;
  let numOpen = 1;
  let loop = true;

  while (loop) {
    currentIndex++;
    if (input[currentIndex] === "(") {
      numOpen++;
    } else if (input[currentIndex] === ")") {
      numOpen--;
    }
    loop = numOpen > 0 && currentIndex < input.length;
  }
  let block = input.slice(indexOpen + 1, currentIndex);
  return [currentIndex, block];
}

/**
 * Repeat the block and add ", " between reps
 * @param {string} block
 * @param {int} numTimes
 */
function repeatBlock(block, numTimes) {
  let repeatedBlock = "";
  for (let i = numTimes; i > 0; i--) {
    let added = i !== 1 ? ", " : "";
    repeatedBlock += block + added;
  }
  return repeatedBlock;
}

/**
 * @desc Converts excercice duration to seconds
 * @param {string} exercise in form: MM'SS" exerciseName
 * @return The same exercise but with the duration in seconds
 */
function convertToSeconds(exercise) {
  let sIndex = exercise.indexOf('"');
  let mIndex = exercise.indexOf("'");
  if (mIndex === -1) {
    return exercise;
  } else if (sIndex === -1) {
    let mins = exercise.slice(0, mIndex);
    return (60 * mins).toString() + '"' + exercise.slice(mIndex + 1);
  } else {
    let mins = exercise.slice(0, mIndex);
    let secs = exercise.slice(mIndex + 1, sIndex);
    let totalSeconds = 60 * mins + parseInt(secs);
    return totalSeconds.toString() + '"' + exercise.slice(sIndex + 1);
  }
}

export default inputToExerciseDict;
