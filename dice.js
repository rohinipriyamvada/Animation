const LENGTH = 8;

const EMPTY = joinBorders('┃', repeat(' ', 8), '┃');
const MIDDLE_DOT = joinBorders('┃', '   🔴   ', '┃');
const LEFT_DOT = joinBorders('┃', '🔴      ', '┃');
const RIGHT_DOT = joinBorders('┃', '      🔴', '┃');
const TWO_DOTS = joinBorders('┃', '🔴    🔴', '┃');

function repeat(string, times, specialChar, specialCharPos) {
  let repeatedString = '';

  if (times === 0 || string === '') {
    return '';
  }

  for (let noOfTimes = 0; noOfTimes < times; noOfTimes++) {
    if (noOfTimes / specialCharPos === 1 && specialChar !== undefined) {
      repeatedString += specialChar;
      continue;
    }
    repeatedString += string;
  }
  return repeatedString;
}

function joinBorders(startBorder, string, endBorder) {
  return startBorder + string + endBorder;
}

function createTop(length) {
  return joinBorders('┏', repeat('━', length), '┓');
}

function createBottom(length) {
  return joinBorders('┗', repeat('━', length), '┛');
}

function createMiddle(diceValue) {
  switch (diceValue) {
    case 1: return joinLines(EMPTY, MIDDLE_DOT, EMPTY);
    case 2: return joinLines(LEFT_DOT, EMPTY, RIGHT_DOT);
    case 3: return joinLines(RIGHT_DOT, MIDDLE_DOT, LEFT_DOT);
    case 4: return joinLines(TWO_DOTS, EMPTY, TWO_DOTS);
    case 5: return joinLines(TWO_DOTS, MIDDLE_DOT, TWO_DOTS);
    case 6: return joinLines(TWO_DOTS, TWO_DOTS, TWO_DOTS);
  }
}

function joinLines(firstPart, middlePart, lastPart) {
  return firstPart + '\n' + middlePart + '\n' + lastPart;
}

function createDiceFace(diceValue) {
  return joinLines(createTop(LENGTH), createMiddle(diceValue), createBottom(LENGTH));
}

console.log(createDiceFace(Math.ceil(Math.random() * 6)));
