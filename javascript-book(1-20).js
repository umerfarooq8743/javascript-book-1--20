


// Chapter 01
    
    alert("Greeting")
    alert("Error! Please enter a valid Password.")
    alert("Welcome to JS land.. \nHappy Coding!!!")
    alert("Welcome to JS land..")
    alert("Happy Coding!!!")
    console.log("Hello.. I can run JS through my web browser's console");

 // Chapter 02

    var userName = "umer"
    var myName = userName
    alert(myName)

    var message = "Hello World"
    alert(message)

    var stdName = prompt("Enter your name: ")
    var stdAge = prompt("Enter your age: ")
    var stdQualication = prompt("Enter your Qualification: ")
    alert(stdName)
    alert(stdAge + "years old")
    alert(stdQualication)

    alert(`Pizza
    Pizz
    Piz
    Pi
    P`)

    var email = "hassanmujtaba@gmail.com"
    alert("My email address is " + email)

    var book = "A smarter way to learn JavaScript"
    alert("I'm tring to learn from this book"+ book)

    document.write("Yeah! I can Write HTML content through Javascript")

    alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// Chapter 03

    var age = 20
    alert("I'm "+ age + " years old")

    var userRecord = 5
    alert("You have visited this site " + userRecord + " times")

    var birthYear = 2020
    document.write("My Birth year is " + birthYear + "<br/>" + "Data type of my declared variable is number, See in the console")
    console.log(typeof(birthYear));

    var visiterName = prompt("Enter Your Name: ")
    var productTitle = prompt("Enter Product title: ")
    var quantity = prompt(parseInt("Enter Quantity "))
    alert(visiterName + " ordered " + quantity + " T-shirts " + productTitle) 


// Chapter 04

    var variables = `<h2>Rules for naming JS variables</h2>
    Variable names can only contain number, $ and $my_1stVariable.
    Variables must begin with a letter, $ or _. For example $name, _name or name.
    Variable names are case Sensitive.
    Variable names should not be JS keyword.`
    document.write(variables)


// Chapter 05 question 1

     var a = 3;
     var b = 5;
     var c = a+b;
     document.write("sum of " + a + " and " + b + " is " + c);

     
// Chapter 05 question 2
   
    var item1 = 650;
    var item2 = 100;
    document.write("    price of item 1 is  " + "" + item1);
    document.write("<br>");
    document.write("price of item 2 "+ item2);
    document.write("<br>");
    document.write("quantity of item 1 is 3")
    document.write("<br>");
    document.write("quantity of item 1 is 3");
    document.write("<br>");
    document.write("shipping charges 100");
    document.write("<br>");
    var q1 = item1 *3;
    var q2 = item2 *7;
    var shipping = 100;
    var total;
    
    total = q1+q2+shipping;
    document.write("total cost of your order is "+ total);


// Chapter 05 question 3

    var total = 980;
    var obtained = 804;
    var percentage;
    percentage = obtained/ total *100;
    document.write("total marks: "+ total)
    document.write("<br>");
    document.write("obtained marks: "+ obtained)
    document.write("<br>");
    document.write("percentage " + percentage);
     
// Chapter 05 question 4

    var pkr ;
    pkr = 104.80 *10;
    pkr = pkr + 28*25;
    document.write("CURRENCY IN PKR")
    document.write("<br>");

    document.write("<br>");

    document.write("total currency in pkr is "+pkr);
     
// Chapter 05 question 5

    var sapphire = 2;
    sapphire = sapphire+5;
    sapphire =sapphire*10;
    sapphire = sapphire/2
    document.write(sapphire);
     
// Chapter 05 question 11

    document.write("AGE CALCULATOR ")

    document.write("<br>");

    var current = 2020;
    var byear = 2001;
    var yourage;
    yourage = current-byear;
    document.write("current year "+ current);
    document.write("<br>");
    document.write("birth year "+ byear);
    document.write("<br>");
    document.write("your age is "+ yourage );
     
// Chapter 05 question 13

    document.write("The Lifetime Supply Calculator")
    document.write("<br>")
    var snack = sandwich;
    var age = 20;   
    var maxage = 65;
    var  estimated =3;

// Chapter 06 question 1

    var a = 10;
    document.write("Result");
    document.write("<br>");
    document.write("the value of a is "+a);
    document.write("<br>");
    document.write("<br>");
    document.write("..............................");
    document.write("<br>");

    a = ++a;

    document.write("the value of ++a is "+a);
    document.write("<br>");
    document.write("now the value of a is " +a);
    document.write("<br>");

    a = a++;

    document.write("now the value of a++ is "+a);
    document.write("<br>");
    document.write("now the value of a is " +a);
    a = --a;
    document.write("<br>");
    document.write("now the value of --a is " + a);
    document.write("<br>");
    document.write("now the value of a is " +a);
    a = a--;
    document.write("<br>");
    document.write("now the value of a-- is " + a);
    document.write("<br>");
    document.write("now the value of a is "+ a);

// Chapter 06 question 3

    var a =prompt("assalam o alaikum");
    alert(a)

// Chapter 06 question 4

    var a =prompt("enter number");
    document.write("<br>");

    document.write("Multiplication of " +a)
    var b;
    b = a*1;
    document.write(b)
    document.write("<br>");
    b = a*2;
    document.write(b)
    document.write("<br>");
    b = a*3;
    document.write(b)
    document.write("<br>");

    b = a*4;
    document.write(b)
    document.write("<br>");

    b = a*5;
    document.write(b)
    document.write("<br>");

    b = a*6;
    document.write(b)
    document.write("<br>");

    b = a*7;
    document.write(b)
    document.write("<br>");

    b = a*8;
    document.write(b)
    document.write("<br>");

    b = a*9;
    document.write(b)
    document.write("<br>");

    b = a*10;
    document.write(b)
    document.write("<br>");

// Chapter 06 question 5

    document.write("Subject   " + "Total Marks   " + "Obtained Marks    " +"percentage")
    document.write("<br>");
    var total = 100;
    var sub1 =prompt("enter subject 1");
    var sub2 =prompt("enter subject 2")
    var sub3 =prompt("enter subject 3")
    var obt1 =prompt("obtained marks for subject 1")
    var obt2 =prompt("obtained marks for subject 2")
    var obt3 =prompt("obtained marks for subject 3")
 
    var per1 = obt1/ total*100  
    var per2 = obt2/ total*100  
    var per3 = obt3/ total*100  


    document.write(sub1 + "" + total + "" + obt1 + "" + per1);
    document.write("<br>");
    document.write(sub2 + "" + total + "" + obt2 + "" + per2);
    document.write("<br>");
    document.write(sub3 + "" + total + "" + obt3 + "" + per3);


11
// Chapter 9-11 .. Question 1

let city = prompt("Enter city");
if (city.toLowerCase() === "karachi") alert("Welcome to the city of lights");

//Chapter 9-11 ... question 2

let gender = prompt("Enter gender: ");
if (gender.toLowerCase() === "male") alert("Good morning sir");
else if (gender.toLowerCase() === "female") alert("Good morning ma'am ");

// Chapter 9-11 question 3

let color = prompt("Enter color: ");
if (color.toLowerCase() === "red") alert("must stop");
else if (color.toLowerCase() === "yellow") alert("ready to move ");
else if (color.toLowerCase() === "green") alert("move now ");

//Chapter 9-11 question 4

let fuel = prompt("Enter fuel in litres: ");
if (parseInt(fuel) < 0.25) alert("please refill the fuel in your car");

//Chapter 9-11 question 5

Output for question a is: "given condition for variable a is true");
Output for question B is: nothing.. the program ends
Output for question c is: condition 2 is true in alert and condition 4 is also true
Output for question d is: the cost equals
Output for question e is: alerts true
Output for question e is: alerts car is smaller than cat

// Chapter 9-11 question 6

let totalMarks = parseInt(prompt("Enter total marks: "));
let grade, remarks;
let subj1 = parseInt(prompt("Enter marks of subject 1: "));
let subj2 = parseInt(prompt("Enter marks of subject 2: "));
let subj3 = parseInt(prompt("Enter marks of subject 3: "));
let obtained = subj1 + subj2 + subj3;
let percentage = (obtained / totalMarks) * 100;
if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

alert(`
 Total marks: ${totalMarks}\n
 Marks obtained: ${obtained}\n
 Percentage: ${percentage}\n
 Grade: ${grade}\n
 Remarks: ${remarks}

 `);

// Chapters 9-11 question 7

let snum = 5;
let user = parseInt(prompt("Guess the number: "));
if (user === snum) alert("Bingo! correct answer");
else if (user === ++snum) alert("Close enough to the correct answer");

// Chapters 9-11 question  8

let divnum = parseInt(prompt("Enter num"));
if (divnum % 3 === 0) alert("Number is divisible by 3");

// Chapters 9-11 question 9

let checkNum = parseInt(prompt("Enter num"));
if (num % 2 === 0) alert("even number");
else alert("odd number");

//Chapters 9-11 question 10

let temp = prompt("Enter num");
if (temp > 40) alert("It is too hot outside");
else if (temp > 30) alert("The Weather today is Normal");
else if (temp > 20) alert("Today’s Weather is cool");
else alert("OMG! Today’s weather is so Cool.");

//Chapters 9-11 question 11

let fnum = parseInt(prompt("Enter first num"));
let snum = parseInt(prompt("Enter second num"));
let op = prompt("Enter operation");

if (op == "+") alert(fnum + snum);
else if (op == "-") alert(fnum - snum);
else if (op == "*") alert(fnum * snum);
else if (op == "/") alert(fnum / snum);
else if (op == "%") alert(fnum % snum);

13
// Chapters 12-13 question 1

var strings = prompt("Enter char");
var char = strings.charAt(0);
if (!isNaN(char * 1)) alert("numeric");
else if (char == char.toUpperCase()) alert("uppercase letter");
else if (char == char.toLowerCase()) alert("lowercase letter");

// Chapters 12-13 question 2

var num1 = parseInt(prompt("Enter num 1: "));
var num2 = parseInt(prompt("Enter num 2: "));
if (num1 === num2) alert("equal");
else if (num1 > num2) alert(`${num1} is greater`);
else if (num1 < num2) alert(`${num2} is greater`);

//Chapters 12-13 question 3

let num = parseInt(prompt("Enter num"));
if (num > 0) alert("positive");
else if (num < 0) alert("negative");
else alert("number is 0");

//Chapters 12-13 question 4

var strings = prompt("Enter char");
var char = strings.charAt(0);
if (
  char.toLowerCase() == "a" ||
  char.toLowerCase() == "e" ||
  char.toLowerCase() == "i" ||
  char.toLowerCase() == "o" ||
  char.toLowerCase() == "u"
)
  alert(true);
else alert(false);

//Chapters 12-13 question 5

let pass = "zainjhe";
var userpass = prompt("enter pass");
while (userpass == "") var userpass = prompt("Please enter your password");
if (userpass == pass)
  alert("Correct! The password you entered matches the original password");
else alert("Incorrect password");

//Chapters 12-13 question 6

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else greeting = "Good evening";

//Chapters 12-13 question 7

let time = parseInt(prompt("Enter time: "));
if (time >= 0000 && time <= 1200) alert("good morning");
else if (time >= 1200 && time <= 1700) alert("good afternoon");
else if (time >= 1700 && time <= 2100) alert("good evening");
else if (time >= 2100 && time <= 2359) alert("good night");

16
//Chapter 14-16 question 01

 var arr = new emptyarray();

//Chapter 14-16 question 02

var names=[];

//Chapter 14-16 question 03
var student=[];
student[0]="saad";
student[1]="hamza";
student[2]="mufeex";

console.table(student);

//Chapter 14-16 question 04

var friends=[];
 friends=[54,67,43,34,546,456];
console.log(friends);

//Chapter 14-16 question 05

var boolarr =[true,false];
console.log(boolarr);

//Chapter 14-16 question 06

var mixedarr =["saad",746,true, "hamza",9832,false];
console.log(mixedarr);

//Chapter 14-16 question 07

    var education;
    education=["1) SSC <br>" , "2) HSC <br>" ,
  " 3)BCS <br>" , " 4)BS <br>" , "5)BCOM <br>" ,
   "6)MS <br>" , "7)M. Phil <br>" , "8)PhD <br>" ];
    document.write(education);

                // or 

  var education;
 education=[ "SSC", "HSC", "BCS","BS", "BCOM", "MS"," M. Phil ", "PhD" ];
 for (var i=0 ;i<8 ; i++){
document.write( i+") " +  education[i] +"<br>" );
 }

//Chapter 14-16 question 08

 var std = ["saad","hamza","zain"];
 var score = [320,230,480];

 for (i=0 ; i<3 ;i++){
     var percentage = score[i]/500 *100;

     document.write( "score of " + std[i] + " is " + score[i] + " . percentage: " + percentage + "% <br>"  ); 


}

//Chapter 14-16 question 09
      
var colornames=["red","green","blue"];
alert(colornames );

//Chapter 14-16 question 9(a)
var ask_user_color_beginning = prompt("enter your color to add in first","your color is");
colornames.unshift(ask_user_color_beginning);
alert(colornames );

//Chapter 14-16 question 9(b)
var ask_user_color_end = prompt("enter your color to add in end","your color is");
colornames.push(ask_user_color_end);
alert(colornames );

//Chapter 14-16 question 9(c)

colornames.unshift("indigo","purple");
alert(colornames );

//Chapter 14-16 question 9(d)

colornames.shift();
alert(colornames );

//Chapter 14-16 question 9(e)

colornames.pop();
alert(colornames );


//Chapter 14-16 question 9(f)

var ask_user_color_at_center_index = +prompt("enter your color index to add color in center ","your color index is");
var ask_user_color_at_center = prompt("enter your color to add in center","your color is");

colornames.splice(ask_user_color_at_center_index,0,ask_user_color_at_center);
alert(colornames );



//Chapter 14-16 question 9(g)

var ask_user_delete_color_at_center_index = +prompt("enter your color index to delete color in center ","your color index is");
var ask_user_delete_color_at_center = +prompt("how many colors you want to delete","your no is");
colornames.splice(ask_user_delete_color_at_center_index,ask_user_delete_color_at_center);
alert(colornames );

//Chapter 14-16 question 10

var scores=[ 320 , 230 , 480 , 120];
document.write("score of students : " + scores +"<br>" );
scores.sort();
document.write("ordered score of students : " + scores +"<br>" );

//Chapter 14-16 question 11

var cities =["karachi "," lahore "," islamabad "," quetta "," peshawer "];
document.write(cities + "<br>");
var selected_cities = cities.slice(2,4);
document.write(selected_cities);

//Chapter 14-16 question 12

var arr = ["This", "is", "my", "cat"];
var lol = arr.join(" ");
console.log(lol);

//Chapter 14-16 question 13

var stack = new Array();

stack.push("first");
stack.push("second");
stack.push("third");
alert(stack.shift());
alert(stack.shift());
alert(stack);

//Chapter 14-16 question 14

var queue = new Array();
queue.push("first");
queue.push("second");
queue.push("third");
alert(queue.pop());
alert(queue.pop());
alert(queue);

//Chapter 14-16 question 15

document.write(`<select name="mob" id="select"> </select> `);
let select = document.getElementById("select");

let options = ["Motorola", "Nokia", "Sony", "Samsung", "Haier", "Apple"];
for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

20
// Chapter 17-20 question 1
 
let emptyMultiDimentionalArray = [ [], [], []]
console.log(emptyMultiDimentionalArray)

// Chapter 17-20 question 2

let arrayOfMatrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
console.log(arrayOfMatrix)

// Chapter 17-20 question 3

function numericCounting(){
    for (let i = 1; i <= 10; i++ ){
        console.log(i)
    }
}
numericCounting();

// Chapter 17-20 question 4

function Table(){
    let number = prompt('Enter the number..')
    let limit = prompt('Enter the limit..')

    for (let i = 1; i <= limit; i++){
        console.log(`${number} * ${i} = ${number * i}`)
    }
}
Table()

// Chapter 17-20 question 5

let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberyy']
console.log(fruits)

for (let i = 0; i < fruits.length; i++){
    console.log(`Element at index ${i} is ${fruits[i]}`)
}

// Chapter 17-20 question 6

function Counting(limit){
    for (let i = 1; i <= limit; i++){
        console.log(i)
    }
// }
Counting(15);

function ReverseCounting(limit){
    for (let i = limit; i >= 1; i--){
        console.log(i)
    }
}
ReverseCounting(10);

function even(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}

even(10)


function odd(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 1){
            console.log(i)
        }
    }
}

odd(10)

function evenWithK(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0){
            console.log(`${i}k`)
        }
    }
}

evenWithK(20)

// Chapter 17-20 question 7

let bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

let input = prompt('Enter item to Search..')

if (bakery.includes(input)){
    console.log(`${input} is available in our bakery`)
}
else {
    console.log(`We are sorry ${input} is not available in our bakery`)
}

// Chapter 17-20 question 8

let numbers = [1,2,3,4,5,6]

function Max(array){
    let firstNumber = array[0]
    for (let i = 1; i < array.length; i++ ){
        if (array[i] > firstNumber){
            firstNumber = array[i]
        }
    }
    return firstNumber
}
console.log(Max(numbers));

// Chapter 17-20 question 9

function Min(array){
    let firstNumber = array[0]
    for (let i = 1; i < array.length; i++ ){
        if (array[i] < firstNumber){
            firstNumber = array[i]
        }
    }
    return firstNumber
}
console.log(Min(numbers));

// Chapter 17-20 question 10

function MultiplesOf5(limit){
    for (let i = 1; i <= limit; i++){
        if (i % 5 === 0){
            console.log(i)
        }
    }
}

MultiplesOf5(100);