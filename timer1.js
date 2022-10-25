
/*
No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number. */
const args = process.argv.slice(2);
// console.log(args);
// process.stdout.write('\x07');

args.every(element => {
  element = Number(element);
  if (element < 0 || isNaN(element)) {
    return false;
  } 
  time = element * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time)
  return true;
});

// for (let ele of args) {
//   ele = Number(ele);
//   // console.log(typeof(ele), ele)
//   if (ele < 0 || Number.isNaN(ele)) {
//     continue;
//   } else {
//     time  = ele * 1000;
//     setTimeout(() => {
//       process.stdout.write('\x07');
//       console.log(ele, " second");
//     }, time)
//   };
// };


