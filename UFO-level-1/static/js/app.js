// reference data from data.js 
var ufoData = data;
console.log(ufoData);

//referencing the table body for future append
var table = d3.select("tbody");

//create function that generates UFO table
function makeTable(ufoData) {
//clear out all prior table data except headers
     table.html(""); 

  //loop through each object in array of objects (data) and append a row and cells for each value in row
  ufoData.forEach(function(sightingData) {
    console.log(sightingData);  

    //add a row onto the table
    var tablerow = table.append("tr");

    
    //iterate through sightingData fields then append each value to table as table cells (td)
    Object.entries(sightingData).forEach(function([key,value]) {
      console.log(key, value);  
      
      // attach a cell for each sighting value onto every row in table
      var cell = tablerow.append("td")
      cell.text(value); 
      //must add above step or will not run
      
        
    });

  });

  
}

//select button and form
var searchButton = d3.select("#filter-btn");
var form = d3.select("#datetime");

//event handlers for elements
searchButton.on("click", runEnter);
form.on("submit", runEnter);

//create event handler function to trigger on enter or click
function runEnter() {
  
  //select user input element and create variable
  var inputForm = d3.select("#datetime");

  // get value of the user input form
  var userInput = inputForm.property("value");
  
  //create filtered data variable for date matching 
  var dateMatch = ufoData;
    
  //us arrow function and run filter function against data in table to drop all rows that are not matches 
  //of 'datetime' and filter input values 
  dateMatch = ufoData.filter(tablerow => {
    return tablerow.datetime === userInput;//--->>returns rows of datetime and filter values that match  
  });
    
  

  //run the makeTable function with dateMatch data that is filtered 
  makeTable(dateMatch);
}


//table is built on page load
makeTable(ufoData);