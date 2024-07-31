console.log('first task');
// We execute the call back only when we have time or when all normal operations are done executing
// So in this case, 'second task' gets printed after all the normal console logs have been done executing
// In general we run the immediate tasks first and only then we run the call back
setTimeout(() => {
    console.log('second task');
}, 0);
console.log('next task');
console.log('next1 task');
console.log('next2 task');
console.log('next3 task');
console.log('next4 task');