// const func = () => {
//     console.log('pass')
// }

// func()

// ((arg1, arg2) => {
//     console.log('IIFE', arg1+arg2)
// })(1,2)

// for(var i = 0; i < 4; i++) {
//     const btn = document.createElement('button')
//     btn.innerText = `Button ${i}`
//     btn.onclick = (function (arg) {
//         return function () {
//             console.log(arg)
//         }
//     })(i);
//     document.body.appendChild(btn)
// }
 ///sau:


//  for(let i = 0; i < 4; i++) {
//     const btn = document.createElement('button')
//     btn.innerText = `Button ${i}`
//     btn.onclick = function () {
//          console.log(i)
//         }
//     document.body.appendChild(btn)
// }

// const promiseTest = document.getElementById('promiseTest')


// let p = new Promise((resolve, reject)=>{
//     let condition = true;

//     if(condition){
//          resolve('success')
//     }else {
//         reject({error: 'This user does not exist'})
//     }
// })



// p.then((message) => {
//     promiseTest.innerText = 'Username: ' + user.name
//     console.log('This is then', message)
// }).catch((err)=> {
//     promiseTest.innerText = err.message
// }).finally(() =>{
//     console.log('will show no matter what')
// })



// const p1 = new Promise((res, rej) => res('p1'))
// const p2 = new Promise((res, rej) => res('p2'))
// const p3 = new Promise((res, rej) => res('p3'))

// Promise.all([
//     p1,
//     p2,
//     p3
// ]).then(mess => console.log(mess)).finally(() => console.log('finally'))

// Promise.race([
//     p1,
//     p2,
//     p3
// ]).then(mess => console.log(mess)).finally(() => console.log('finally'))



