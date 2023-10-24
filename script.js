/*var a="1";
document.write("la valeur de a est "+ a +" et est de type" +typeof(a) +"<br>") ;
var b ="2";
document.write("la valeur de b est "+ b +"et est de type" +typeof(b)+"<br>") ;
var c ="a+b";
document.write("la valeur de c est "+ c +" et est de type" +typeof(c)+"<br>") ;
var a = parseInt (a)
var b = parseInt (b)
var c = parseInt(a)+ parseInt (b)
document.write("la valeur de c est "+c+" et est de type" +typeof(c)+"<br>") ;
*/

/*function countTrue(tab)
{
    let sum =0;
    for(let i=0 ; i<tab.length ; i++)
    {
        if(tab[i] == true)
        {
            sum = sum+1
        }
    }
    return sum;
}
console.log(countTrue([true,true,true]))
*/ 

/*function filterArray(tab)
{
    let arr =[];
    for(let i=0 ; i<tab.length ; i++ )
    {
        if(typeof tab[i] == "number")
        {
            arr.push(tab[i]);
        }
    }
    return arr;
}
console.log(filterArray([1,2,'a','b']))
*/

/*function getAbsSum(arr)
{
    let sum = 0;
    for(let i=0 ; i<arr.length ; i++) {
        sum =sum + Math.abs (arr[i]);
    } 
    return sum;
}
console.log(getAbsSum([1,3,-4])) //8;*/


/*function objectToarray(obj)
{
    let resultTab= []
    for(let i in obj) {
        resultTab.push([i,obj[i]]);
    }
    return resultTab;
}
console.log(objectToarray({
    D: 1,
    B: 2,
    C:3
}))
*/

/*function greenting(name)
{
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam:"Argentina"
    }

    for(let i in GUEST_LIST)
    {
        if(name == i) {
            return "Hi i'm" + name +",i'm from"+GUEST_LIST[i] +'.'
        }
    }

    return "Hi i'm a guest !"
}
console.log(greenting('Randy')) //"Hi i'm guest"
*/

/*function isSameNum(num1, num2) {
    if(num1 === num2){
        return true
    }else{
        return false;
    }
}
console.log(isSameNum(4, 8)); // false
*/

/*function getBudgets(tab){
    let sum=0;
    for(let i=0; i<tab.length; i++)
    {
        sum=sum+tab[i].budget
    }
    return sum
}
console.log(getBudgets([{budget: 23000},{budget: 40000},{budget: 2700}])) //65700
*/
// function sable(tab){ 
//     return tab [tab.length-1]
// } 
// console.log(sable([7,2,1])) //3

// function afterNYears(objet , n) 
// {
//     for(i in objet);
//     return  objet[i]=objet[i] + Math.abs(n)
//     }

// console.log(afterNYears({joel :44 }, 2))  

// function coolskin(tab)
// {
//     return tab [tab.length-1]
// }
// console.log(coolskin([7,8,2,4,63,65,41,14])) // 8

/*function check(){
    var strong;
    strong = strong.(document.getElementById("myInput").value);
    if(strong%2 == 0)
    {
        alert("Nombre impair");
    } 
}
console.log(filterArray([salut])) //l*/

/*const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1);*/

/*function myNewArray(myArray)
{
    myArray.map(
        function (element)
        {
            console.log(element)
        }
    )
}
myNewArray([10,9,8])*/

