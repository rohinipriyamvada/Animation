const WIDTH = 130;
const HEIGHT = 40;

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
    console.log(slice(screen, counter * WIDTH, (counter * WIDTH) + WIDTH));
    // 0 to 9; 10 to 19; 20 to 29; 120 to 160....
  }
}

function put(screen, position) {
  let newScreen = '';
  const char = Math.random() > 0.4 ? '.' : '-';
  for (let index = 0; index < screen.length; index++) {
    if (index === position) {
      newScreen += char;
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

function randomInt(from, to) {
  return from + Math.floor(Math.random() * (to - from));
}

function animate() {
  let screen = create(' ');

  for (let times = 0; times < WIDTH * HEIGHT; times++) {
    wait(49999999);
    screen = put(screen, randomInt(0, WIDTH * HEIGHT));
  }

}

animate();
