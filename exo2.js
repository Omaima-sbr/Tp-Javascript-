let n=Math.floor(Math.random());
console.log(n);

while(true){
    let nbr=parseFloat(prompt("try to guess the number"));
if(nbr>n){
    console.log("the number is smaller");

}
else if(nbr<n){
    console.log("the number is bigger");
}
else{
    console.log(" congrats you found the number ");
    break;
}
}

