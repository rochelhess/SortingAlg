const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Caesar cipher encryption
let encrypted = "";
//using loop allows us to process each letter individually and consecutively
for (let i = 0; i < friend.length; i++) {
    const currentLetter = friend[i];
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex= (currentIndex + shiftValue) % alphabet.length;
    encrypted += alphabet[newIndex].toUpperCase();
}
//% is used to wrap around the alphabet if the new index exceeds its length
console.log(encrypted); // Output: "EUXWXV"