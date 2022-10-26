/**
 * The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "stinetg timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
 */

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const alarm = () => process.stdout.write('\x07');
const standOut = process.stdout;

stdin.on('data', key => {
  if (key === 'b') {
    alarm();
  };
  
  if (key >= 1 && key <= 9) {
    standOut.write(`stinetg timer for ${key} seconds...\n`);
    setTimeout(() => {
      alarm();
    }, key * 1000);
  };
  
  if (key === '\u0003') {
    process.exit();
  };
});