
const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const firstLetter = friend[0]
const firstLowerCase = firstLetter.toLowerCase();
const index = alphabet.indexOf(firstLowerCase);
//bacause start counting at 0
const alphabetLength = alphabet.length;

//% shifts back to first letter if goes past z  
const newIndex = (index + shiftValue) % alphabetLength;
const encryotedfirstletter = alphabet[newIndex];
const encryptedMessage = "EUXWXV"
const teaserMessage = encryptedMessage.slice(0, 3)
console.log(friend)
console.log(firstLetter)

const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31 
// we add one to get 33 to be inclusive
const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
const shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33


const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationStart = "";

if (emblemClue1==="Eagle")
    {
locationStart="Forum";
}

else if (emblemClue1==="Lion")
{
    locationStart="Colosseum";

}

else {
    locationStart="Villa";}



    if (emblemClue2 === "Laurel" && locationStart === "Forum")
{
  locationStart += " of Augustus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa")
{
  locationStart += " of Pompey";
}

switch (emblemClue3) {
  case 7:
      locationStart += "North";
      break;
  case 3:
      locationStart += " South";
      break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}
// because they dont diffrentiate types only values