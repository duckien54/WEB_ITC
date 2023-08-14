/*Variable: var-let-const
console.log('Hello');
let number =1;
number = 'abc';
console.log(number);
//var-let -> cho phép gán lại giá trị
// const -> không cho phép gán lại giá trị
*/
/*Data-type:
-Number(int, long, float...)
-String
-Boolean:true,false
-Undefined
-Null
-Array
-Object
-Function

//Kiem tra kieu du lieu
//console.log(typeof(variable));

//1.Number
var number =43;
console.log(number);

//2.String
var fistName = 'Hello';
var lastName = ' every body';
console.log(fistName + lastName);
var des = `dlghjdfoi${fistName}kgh${lastName}`
console.log(des);
console.log(typeof(des));

//3.Boolean
var isEmply = true;
console.log(typeof(isEmply));

//4.Undefined - Bien khai bao nhung khong gan gia tri
var age;
console.log(age);

//5. Null - Khong co gia tri
var a= null;
console.log(a);

//6. NaN - Kieu gia tri su dung khi khong tinh duoc gia tri
var calc = 0/0;
console.log(calc);

//7. Array: Mang
var Array = [{id:1},{name:'Kien'},6,57]
console.log(Array);

//8. Object
//key - value:
var people = {
    name:'Kien',
    age:20
};
console.log(people);

//9. Function
//Cach 1:
function showName(){
    console.log("Duc Kien");
}
showName();
//Cach 2:
const showAge = function(){
    console.log(20);
};
showAge();
//Cach 3: Arrow Function
const showAdress=()=>{
    console.log("Hai Duong");
};
showAdress();

*/
//Truthy -Falsy:
//Falsy: null, underfined, false, NaN, 0, -0, "" -> false
//Truthy: Tat ca cac gia tri con lai
// var isCheck = function(){
//     return;
// };
// //If-else
// if(isCheck){
//     console.log("Day la Truthy");
// }else{
//     console.log("Day la Falsy");
// }
// //Switch-case:
// var choose = 1;
// switch(choose){
//     case 1:
//         console.log('Choose 1');
//         break;
//     case 2:
//         console.log('Choose 2');
//         break;
//     default:
//         console.log('All');
// }

//Loop:
//for-while-do while
// for(var i=1; i<10; i++){
//     console.log(i + 1);
    
// }
// var check = 0;
// while(check < 3){
//     console.log(check+1);
//     check++;
// }

// var Array=[111,2322,435];
// //for in: duyet qua vi tri cua phan tu trong mang
// for(let index in Array){
//     console.log(index);
// }
// //for off: duyet qua tung gia tri cua phan tu trong mang
// for(let value of Array){
//     console.log(value);
// }
// console.log(Array);


//Toan tu: + - * / %
//Toan tu logic: =, <, >, >=, <=, ==, !=, ===, !==
//== khac === o diem gi? -> thay vi kiem tra moi value thi === se kiem tra ca kieu du lieu  
// var n=2
// var m ='3'
/// console.log(n);
// console.log(m);
// if(n!==m){
//     console.log('Dung');
// }else{
//     console.log("Sai");
// }

// ++ --
// var a=4;
// var result = a++ - ++a;
// console.log(result);
var text = "Hoc web cung ITC-web    "
var lastName = " Duc Kien"
console.log(lastName);
//Kiem tra do dai chuoi
console.log(lastName.length);
//Noi chuoi
var fistName = 'Trinh ';
console.log(fistName + lastName);
//Template string
console.log(`Toi la: ${fistName}${lastName}`);
//Index of(Tu khoa tim kiem, vi tri bat dau tim kiem)
console.log(text.indexOf('b'));
// Cut string( vtri bat dau, vtri cuoi cung)
console.log(text.slice(4,7));
//Replace(tim chuoi dau tien can thay, noi dung thay)
console.log(text.replace('web','WEB'));
//Replace(tim tat ca noi dung 'web' can thay, noi dung thay)
console.log(text.replace(/web/g,'WEB'));
//Convert to upper case, convert to lower case
console.log(lastName.toLowerCase());//in thuong cac chu
console.log(lastName.toUpperCase());//in hoa cac chu
//Trim: Chuan hoa chuoi 
console.log(text.length);//do dai chuoi ban dau
console.log(text.trim());
console.log(text.trim().length);//do dai chuoi sau khi duoc chuan hoa
//Split: cat 1 chuoi thanh 1 array
var Class = 'TINA1, TINA2, TINA3';
console.log(Class.split(','));
//charAt
console.log(text.charAt(11));
