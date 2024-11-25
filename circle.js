const WIDTH = 161;
const HEIGHT = 61;

function create(char) {
  let screen = '';

  for (let index = 0; index < WIDTH * HEIGHT; index++) {
    screen += char;
  }

  return screen;
}

function slice(string, from, to) {
  let slicedString = '';

  for (let index = from; index < to; index++) {
    slicedString += string[index];
  }

  return slicedString;
}

function display(screen) {
  for (let counter = 0; counter < HEIGHT; counter++) {
    console.log(slice(screen, counter * WIDTH, ((counter + 1) * WIDTH)));
    // 0 to 40; 40 to 80; 80 to 120; 120 to 160....
  }
}


function put(screen, char, position) {
  let newScreen = '';

  for (let index = 0; index < screen.length; index++) {
    if (index === position) {
      newScreen += char;
      continue;
    }

    newScreen += screen[index];
  }

  console.clear();
  display(newScreen);
  return newScreen;
}

function wait(delay) {
  for (let i = 0; i < delay; i++) { }
}

function createPosition(Xpos, Ypos) {
  return (Ypos * WIDTH) + Xpos;
}

function animate() {
  let screen = create(' ');
  const centreX = Math.floor(WIDTH / 2);
  const centreY = Math.floor(HEIGHT / 2);
  const radius = 10;
  screen = put(screen, 'o', createPosition(centreX, centreY));

  for (let angle = 0; angle < 360; angle++) {
    const sinAngle = Math.sin(angle * (Math.PI / 180));
    const cosAngle = Math.cos(angle * (Math.PI / 180));
    const Xposition = centreX - Math.round(radius * sinAngle * 2);
    const Yposition = centreY - Math.round(radius * cosAngle);

    screen = put(screen, '.', createPosition(Xposition, Yposition));
    wait(4999999);
  }
}

animate();
