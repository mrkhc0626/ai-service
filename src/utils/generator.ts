export const generateCode = (length, characterSet = 0) => {
  let result = "";
  let characters = "";
  switch (characterSet) {
    case 1:
      characters = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";
      break;
    case 0:
    default:
      characters = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
      break;
  }
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
