function oldBooks(params) {
  let favoritBook = params[0];

  let index = 1;
  let bookNameFound = false;
  let counter = 0;

  let nextBookName = params[index];
  while (nextBookName !== "No More Books") {
      
    if (nextBookName === favoritBook) {
      bookNameFound = true;
      break;
    }
    counter++;
    index ++;
    nextBookName = params[index];
  }

  if(bookNameFound === false){
      console.log("The book you search is not here!");
      console.log(`You checked ${counter} books.`)
  }else{
      console.log(`You checked ${counter} books and found it.`)
  }
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])
;
