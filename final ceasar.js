const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{ let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase();

    if (alphabet.includes(char)) {
      // find the shifted index
      let oldIndex = alphabet.indexOf(char);
      let newIndex = (oldIndex + shiftValue) % 26;
      encryptedMessage += alphabet[newIndex];
    } else {
      // keep spaces, punctuation, etc.
      encryptedMessage += char;
    }
  // Your encryption code here
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    let char = encryptedMessage[i].toLowerCase();

    if (alphabet.includes(char)) {
      let oldIndex = alphabet.indexOf(char);
      let newIndex = (oldIndex - shiftValue + 26) % 26;
      decryptedMessage += alphabet[newIndex];
    } else {
      decryptedMessage += char;
    }
  }

  return decryptedMessage;
}
