const fs = require('fs');
const { sayHello:hello } = require('./sayHello');

// index.sayHello('isen')
// console.log(index);

// sayHello('isen');

function sayHello(){

    hello({});
}

sayHello();

// {
//     var a = 1;
//     let b = 1;
// }

// console.log(b);


// var array = [];

// for(let i = 0;i<10;i++){

//     array[i] = function(){

//         console.log(i)
//     }
// }

// var i = 0;

// array[i] = function(){

//     console.log(i)
// }

// i++;

// array[i] = function(){

//     console.log(i)
// }


// {
//     let i = 0;
//     array[i] = function(){

//         console.log(i)
//     }
// }


// {
//     let i = 1;
//     array[i] = function(){

//         console.log(i)
//     }
// }


// {
//     let i = 2;
//     array[i] = function(){

//         console.log(i)
//     }
// }

// array[2]()
// var a;
// console.log(a);
// a = 1;

// console.log(b);
// let b = 1;

// let tmp = 123;

// if (true) {

//   tmp = 'abc'; // ReferenceError
  
//   console.log(tmp)
//   let tmp;
// }

// let a = 1;

// let a = 10;

// console.log(a);

// const Pi = 3.14;

// Pi = 2;

// const obj = {};

// obj.a = 3;

// console.log(obj);


// let a = 1;
// let b = 2;
// let c = 3;

// let [a, b, c] = [1, 2, 3];

// console.log(a);

// let [foo, [[bar], baz]] = [1, [[2], 3]];

// console.log(bar);

// let [,, third] = ["foo", "bar", "baz"];

// console.log(third);


// let [x, y] = [1, 2, 3];

// console.log('x ==>',x,'y===>',y);

// let [a, [,b], d] = [1, [2, 3], 4];

// console.log(b);

// let [foo = 2] = [10];
    
// console.log('foo===>',foo)

// let [x, y = 'b'] = ['a', undefined]; 
// x='a', y='b'
// console.log(y);

// let [x = 1] = [null];

// console.log(x);

// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };


// let obj = {};

// console.log(obj.a);
// console.log(foo2);
// console.log(foo);

// let obj = {bar: 'baz'}
// let {bar} = obj;

// console.log(obj.foo)

// console.log(bar);

// let obj = { foo: 'aaa', bar: 'bbb' };
// let { foo: baz } = obj;

// let baz = obj.foo;

// console.log(baz);

// let obj = {x:5};

// console.log(obj.x);

// let {x = 3} = obj;
// console.log(x)

// let obj = {x: 1};
// let {x, y = 5} = obj;

// console.log(x);
// console.log(y);