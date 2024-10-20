let userName = "";

let user = {
  userName: (userName ||= "unknown"),
  userAge: 20 ,
};

console.log(userName) //=> unknown
console.log(user.userName); //=> unknown
