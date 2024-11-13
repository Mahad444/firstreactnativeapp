// functions
// Description: This file contains all the functions that are used in the application

// Function to get the current date
function getCurrentDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return year + "-" + month + "-" + day;
}