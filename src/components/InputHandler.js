
/**
 * To be improved
 * 1- Deal with different concat symbols
 *      (Difference between "," or "+"?)
 * 2- Deal with different quotation marks
 *      (Convert all time to s)
 * 3- Deal with exercice blocks
 *      (By simply looping over n times?)
 * 4- Deal with comments for each exercice
 *      (Just adding them to the screen)
 * 5- Deal with intensity for each exercice
 *      (And then show some sort of indication)
*/

function getSeconds(exercice) {
    let divided = exercice.split("\"");
    return divided[0].trim();
}

function getName(exercice) {
    let divided = exercice.split("\"");
    return divided[1].trim();
}

export function textDealer(input) {
    let splitted = input.split(",");
    // console.log(splitted);
    // console.log(splitted[0]);
    
    let exercices = [];

    splitted.forEach(ex => {
        let exercice = {};
        exercice["duration"] = getSeconds(ex);
        exercice["exercice"] = getName(ex);
        exercices.push(exercice);
    });
    
    // console.log("Dict exercices");
    // console.log(exercices);

   return exercices;
}

export default textDealer;