function multiplicationTable (input){
    let b=Number(input[0])
for (let i=1; i<=10; i++){
    let sum = i*b
    console.log (`${i} * ${b} = ${sum}`)
}
    console.log();
}
multiplicationTable(["3"])