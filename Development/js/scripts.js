let food=["Pizza", "Burger", "Pasta"];
function logger(array){
    for (let food of array){
        console.log(food);
    }
}
logger(food);



let degrees=[24, 31, 42, 55];
function hottestDays(hottest, tempnum){
    for (let temp of hottest){
      if(temp > tempnum);
        console.log(temp);
    }
   
}
hottestDays(degrees,27);



let array2 = [
{book1: "Lord", id:2},
{book1: "games", id:3},
{book1:  "Harry", id:4},
{book1:   "bye",  id:8}
];

function getbookbyid(bookid, books){

    for(book of array2){
        if (bookid==book.id){
            console.log(book.book1)
        }
        else{
            console.log("undefined");
        }
    }

   
}
getbookbyid(2,array2);