var emparr = [];
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);
// console.log("number of Company in the arr: " + itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[itCompanies.length - 1]);
// console.log(itCompanies[Math.round((itCompanies.length - 1) / 2 )]);
// Print out each company
// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
// }
// Change each company name to uppercase one by one and print them out
// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies + " are big IT companies");

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// if(itCompanies.includes("google")){
//     console.log("true")
// }else {
//     console.log("not found")
// }

// Filter out companies which have more than one 'o' without the filter method
// var newArr1 = [];
// for (var company of itCompanies) {
//     if(company.indexOf("o") !== company.lastIndexOf("o")){
//         newArr1.push(company);
//     }
// }
// console.log(newArr1);


// // Sort the array using sort() method
// console.log(itCompanies.sort());

// // Reverse the array using reverse() method
// console.log(itCompanies.reverse());


// Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3));


// Slice out the last 3 companies from the array
// console.log(itCompanies.slice(-3));


// Slice out the middle IT company or companies from the array
// var shit = Math.round((itCompanies.length - 1) / 2);
// console.log(itCompanies.slice(shit, shit + 1));

// Remove the first IT company from the array
// console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
// delete itCompanies[(itCompanies.length - 1 ) / 2];
// console.log(itCompanies);


// Remove the last IT company from the array
// console.log(itCompanies.pop());


// Remove all IT companies
// itCompanies.length = 0;
// console.log(itCompanies);
