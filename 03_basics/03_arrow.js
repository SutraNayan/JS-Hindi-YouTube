const user = {
    username: "Nayan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//  user.welcomeMessage();
//  user.username = "Sam";
//  user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Nayan";
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "Nayan";
//     console.log(this.username);
// }
// chai();

const chai = () => {
    
}