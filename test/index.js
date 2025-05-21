function main (test){
    setTimeout(()=>{
        const person={name:"levi asher", age:20};
        test(person);
    },2000);
}

main(function(data){
    Object.entries(data).forEach(([key,value])=>{
        console.log(`${key},${value}`);
    }); 
})

console.log("print this first");