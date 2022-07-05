/* 1. */
const parkWalkStr = "I can walk in the park all day!";
console.log(parkWalkStr.slice(18,-9));
console.log(parkWalkStr.substring(18,22));
console.log(parkWalkStr.split(` `)[5]);

/* 2. */
const helloStr = "Hello World";
console.log(helloStr.toUpperCase());

/* 3. */
const earthLinsStr = "Hello Earthling";
console.log(earthLinsStr.toLowerCase());


/* 4. */
const jsStr = "JavaScript";
console.log(jsStr.slice(3,6));

/* 5. */
const niceShoesStr = "nice shoes";
console.log(`string contain letter "l"?`, niceShoesStr.includes(`l`));
console.log(`string contain letter "l"?`,niceShoesStr.includes(`n`));


/* 6. */
const oldStr = "izabela";
const newStr = `i` + oldStr + `i`;
console.log(newStr);

/* 7. */
const scritcherStr = `katzen` ;
const lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars);
console.log(lastThreeChars + scritcherStr+ lastThreeChars);
/* 8. */
const boogieNightsStr = `BoogieWoogie` ;
const eoogieWoogiB = boogieNightsStr.slice(1,-1)
console.log(eoogieWoogiB);
const firstChar = boogieNightsStr.slice(0, 1);
const lastChar = boogieNightsStr.slice(-1);
console.log(lastChar + eoogieWoogiB + firstChar);



/* 9. */
const firstName = "Maria"; 

const city = "Berlin";

const job = "Teacher" ;

console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}`);

10.

const foxStr =  "the quick brown fox";
console.log(foxStr[0].toUpperCase() + foxStr.substring(1));


