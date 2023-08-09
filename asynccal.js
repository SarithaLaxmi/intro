const async = require("async");



function add(a,b) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(a + b);

    }, 2000);

  });

}

function sub(a,b) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(a - b);

    }, 2000);

  });

}

function multiply(a,b) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(a * b);

    }, 2000);

  });

}

function divide(a,b) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(a / b);

    }, 2000);

  });

}

 async function output(op,a,b){

 if(op == 'add'){

 const ans = await add(a,b);

 console.log(ans);

 }

 else if(op == 'sub'){

 const ans1 = await sub(a,b);

 console.log(ans1);

 }

 else if(op == 'mul'){

 const ans2 = await multiply(a,b);

 console.log(ans2);

 }

 else if(op == 'div'){

 const ans3 = await divide(a,b);

 console.log(ans3);

 }

 }

 output('sub',4,5);



