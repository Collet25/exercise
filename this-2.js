// call, apply, bind 改變this
// 手動設定this的值

// call 立即執行函式，並明確設定this的值，參數以逗號分隔
function greet(greeting){
    console.log(greeting+", "+this.name);
}
const person = {name: "Bob"};
greet.call(person, "Hi");

// 直接執行，參數格式為陣列
greet.apply(person, ["Hi", "!!"]); //Hi, Bob

const boundGreet = greet.bind(person, "Hey");
boundGreet("?");