// setTimeout(()=>{
//     console.log("hello im from global")
// },2000)

let count = 0;

const interval = setInterval(()=>{
    console.log(`Hello coming from setInterval time at ${++count}` )
    if(count == 4){
        clearInterval(interval)
    }
},1000)