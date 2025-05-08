// 在瀏覽器環境中，這裡的this式window
// console.log(this);
// 在普通函式內，this也是window (非嚴格模式)
// function test(){
//     console.log(this);
// }
// test();

// 呼叫this的環境限制在物件之中；當前執行這段程式碼的擁有者
const obj = {
    name: "Alice", 
    show: function(){
        console.log(this.name);
    }
};
obj.show();
