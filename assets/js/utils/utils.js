const getInitials = (str) => {
  const wordsArr = str.split(' ');
  const initialsArr = wordsArr.map((word) => word[0]);
  const initialsStr = initialsArr.join(' ');
  return initialsStr;
};

/*
const getInitials = (str) =>
  str
    .split(' ')
    .map((word) => word[0])
    .join(' ');

*/
