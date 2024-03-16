//with no gaurd clause
function checkIfExists(user){
    if(user!=null)
    {
        console.log("User exists");
        print();
    }
}


function print(user){
    if(user.id== null)
    {
       console.log("User Id");
       if(user.name == "Javascript")
       {
        console.log("Javascript");
       }
    }
}
//WITH  GAURD CLAUSE

function checkIfExistsWithGaurdClause(user){
    if(user==null)return; //write the condition from which we can get return easier
    console.log("User exists");
    printWithGaurdClause(user);
    
}

function printWithGaurdClause(user){
    if(user.id== null)return;
    console.log("User Id");
    if(user.name != "Javascript")return;
    console.log("Javascript");    
}
const user = {id:0,name:"Javaascript"}
checkIfExistsWithGaurdClause(user);
// a programming pattern that uses conditional statements at the beginning of a function to check for specific conditions When these conditions are met, the function returns early, preventing the rest of the code from executing