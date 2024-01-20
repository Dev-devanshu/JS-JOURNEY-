//block scope vs function scope

function app(){
    if(true){
        var firstname="dev"
        console.log(firstname)
    }
    console.log(firstname)
}
app();
