const accountId = 123456
let accountEmail = "gaurav@google.com"
var accountPassword = "123456"
accountCity = "Satna"
let accountState;
// accountId = 2 not allowed
console.log(accountId);

/*
Prefer not to use Var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])
console.log(accountState)