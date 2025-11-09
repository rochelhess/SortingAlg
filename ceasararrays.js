const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
guests.unshift("BRUTUS");
// guests[0]
guests.push("AUGUSTUS", "LUCIA");
const spartacusIndex = guests.indexOf("SPARTACUS");
// -1 if not found
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);

const specialGuests=[guests.slice(0,3)];
const honoredGuests = guests.slice(0, 1); // Extracts honored guests.
const otherGuests = guests.slice(1); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays. 

