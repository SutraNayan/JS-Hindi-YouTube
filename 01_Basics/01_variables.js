const accountId = 144553;
let accountEmail = "nayan@gmail.com";
var accountPassword = 12345;
accountCity = "Norcross";
let accountState;

// accountId = 2; // if we declare a variable by using 'cosnt' then we can't change the assigned values.

/* We will avoid to use "var" to declare variable because it makes problems with the blockscope in javasScript.
   "let" we use this to assign variables which we can change in the future.*/ 

accountEmail = "hc@email.com";
//console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);