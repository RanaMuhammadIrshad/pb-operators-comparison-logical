/* 0. Declare two variables `apples` and `oranges`. Assign a value of 20 to `apples`. Assign a value of 30 to `oranges`. */

let apples = 20;
let oranges = 30;

/* 1. Check whether `apples` and `oranges` are equal. */

let appEqualOrg = apples === oranges;
console.log(`1. Are ${apples} apples and ${oranges} oranges are equal? ${appEqualOrg} `) ;

/* 2. Check whether `apples` and `oranges` are *not* equal. */

let appNotEqualOrg = apples !== oranges;
console.log(`2. Are ${apples} apples and ${oranges} oranges are not equal? ${appNotEqualOrg} `) ;

/* 3. Check whether `apples` is greater than `oranges`. */

let appGreatOrg = apples > oranges;
console.log(`3. Are ${apples} apples greater than ${oranges} oranges? ${appGreatOrg} `) ;

/* 4. Check whether `apples` is less than or equal to `oranges`. */

let appLessOrEqlOrg = apples <= oranges;
console.log(`4. Are ${apples} apples less than or equal to ${oranges} oranges? ${appLessOrEqlOrg} `) ;

/* 5. Check whether `oranges` is greater than `apples`. */

let orgGreatApp = oranges > apples;
console.log(`5. Are ${oranges} oranges greater than ${apples} apples? ${orgGreatApp} `) ;

/* 6. Declare another variable `mangoes` and give it a value of 5. Multiply `mangoes` by `apples`, and check whether this result is greater than `mangoes` added to `oranges`. */

let mangoes = 5;
let manIntoApp = mangoes*apples;
let manPlusOrg = mangoes+oranges;
let result = manIntoApp > manPlusOrg;
console.log(`6. Are ${mangoes} mangoes multiply by ${apples} apples (${mangoes}*${apples}) is greater than ${mangoes} mangoes plus ${oranges} oranges (${mangoes}+${oranges})?  ${result}`) 

/* 7. Subtract `mangoes` from `apples` and check whether this result is less than `oranges` divided by `mangoes`. */


let manMinApp = mangoes - apples;
let orgDivMan = oranges/mangoes;
let result1 = manMinApp < orgDivMan;
console.log(`7. Is the result of subtracting mangoes from apples (${mangoes} - ${apples} = ${manMinApp}) is less than than the oranges divided by mangoes (${oranges} / ${mangoes} = ${orgDivMan})? ${result1}`)

/* 8. Check whether `mangoes`, `apples` and `oranges` are equal. */

let allEqual = (apples === oranges) && (apples===mangoes) && (mangoes===oranges);
console.log(`8. whether ${mangoes} mangoes, ${apples} apples and ${oranges} oranges are equal? ${allEqual}`)

/* 9. Check whether the remainder of `apples` divided by `mangoes` and the remainder of `oranges` divided by `mangoes` are equal. */

let remAppMan = apples % mangoes;
let remOrgMan = oranges % mangoes;

let result2 = remAppMan === remOrgMan;
console.log(`9. Is the remainder of apples and oranges (${remAppMan}) is equal to remainder of oranges and mangoes (${remOrgMan})? ${result2}`)

/* 10. Check whether `mangoes` added to `apples` is greater than `oranges` minus `mangoes`. If it is not, find an operator which will give a result of true. */

let manAddApp = mangoes + apples;
let orgMinMan = oranges-mangoes;
let result3 = manAddApp > orgMinMan;
console.log(`10-a. mangoes plus apples (${mangoes}+${apples} = ${manAddApp}) is greater than oranges minus mangoes (${oranges} - ${mangoes} = ${orgMinMan})? ${result3}`)

let result4 = manAddApp >= orgMinMan;
console.log(`10-b. mangoes plus apples (${mangoes}+${apples} = ${manAddApp}) is greater than or equal to oranges minus mangoes (${oranges} - ${mangoes} = ${orgMinMan})? ${result4}`)


///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/* LOGICAL-OPERATORS */

/* 0. Declare two variables: `isDogBetter` with the value of `true`, and `isCatBetter` with the value of `false`.
 */

let isDogBetter = true;
let isCatBetter = false;
/* 1. Check the result of:

- a) isDogBetter AND isCatBetter.

- b) isDogBetter OR isCatBetter.

- c) NOT (isDogBetter AND isCatBetter). */


console.log(isDogBetter && isCatBetter); //false- because for AND (&&) operator both conditions should be true
console.log(isDogBetter || isCatBetter) //true-because for OR (||) operator one of the condition is true then result is true

console.log(!(isDogBetter && isCatBetter))// true- the NOt (!) operator here in converting false value to true

/* 2. Declare three more variables `atoms`, `sandGrains`, `starsInSky`. Give these variables number values. */
let atoms = 100000000000000;
let sandGrains = 100000000
let starsInSky = 10000000000

/* 3. Check the result of whether:

- a) `atoms` is greater than `starsInSky` AND `atoms` is greater than `sandGrains`.

- b) `atoms` is NOT equal to `sandGrains`.

- c) `starsInSky` is less than `sandGrains` OR `starsInSky` is greater than `atoms`.

- d) `atoms` is equal to `starsInSky` OR `atoms` is NOT equal to `sandGrains`.

- e) `atoms` is greater than or equal to 10 AND `sandGrains` is less than or equal to 10.

- f) `atoms` multiplied by `starsInSky` is less than 100 OR whether `atoms` multiplied by `sandGrains` is greater than 100. */

console.log(atoms > starsInSky && atoms > sandGrains);//true
console.log(atoms !== sandGrains); //true
console.log(starsInSky < sandGrains || starsInSky > atoms);//false
console.log(atoms===starsInSky || atoms !==sandGrains);//true
console.log(atoms >= 10 && sandGrains <= 10);//false
console.log(atoms*starsInSky < 100 || atoms*sandGrains>100); //true