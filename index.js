// Code your solution in this file!
let companyName = 'Scuber';
console.log(companyName);
//const js = companyName;
//console.log(js);

let mostProfitableNeighborhood= 'chelsea';
console.log(mostProfitableNeighborhood);

let companyCeo = 'Susan Smith';
console.log(companyCeo);


function book(pages)
{
    if(pages <=50){
        answer = "short story";
    }
    else {
        answer = "novel";
    }
    return answer;
}
console.log(book(50));

//const table = "cities";
let table = prompt("Enter table to check number of rows: ");
let rows ;
switch (table){
    case "numbers":
        rows = 6;
        break;
    case "cities":
        rows = 2;
        break;
    case "age":
        rows = 5;
        break;
    default :
        console.log("invalid entry");
        break;
}

console.log(rows);
