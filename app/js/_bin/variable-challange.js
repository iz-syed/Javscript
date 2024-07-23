/*
## Variables #1

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable an dassign "mainstreet" value to it
4. re-assign address to "first street" later
5. log all values in the console

*/


const firstName = "Syed";
const last_name = "Mubarak";

let address = "mainstreet";

address = "first street";

console.log(firstName, last_name, address);


/*

## Concatinate Strings #2
1. create "street" and "country" variables
2. assign your values
3. create "fullMailingAddress" variable and assign the result of "street + country"
4. remember about the space
5. log "fullMailingAddress" in the console

*/ 

// 1. create "street" and "country" variables
let street = "my_street";
let country = "my_country";

// 3. create "fullMailingAddress" variable and assign the result of "street + country"
let fullMailingAddress = street + " " + country;

// 5. log "fullMailingAddress" in the console
console.log(fullMailingAddress);