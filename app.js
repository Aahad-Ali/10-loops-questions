for (var i = 1; i <= 5; i++) {
    document.write("hellow world" + "</br>");
}

// ==============1 to 10 print

for (var i = 1; i <= 10; i++) {
    document.write(i + "</br>");
}
//   ===========table

var num = prompt("enter any table number");
var a = 1;

// document.write("<h1>" +"6 javascript assiment" + "</h1>" );
document.write("<center>");
document.write("<h1>" + " " + num + " " + "X" + " " + a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);
document.write("<h1>" + " " + num + " " + "X" + " " + ++a + " " + "=" + " " + num * a);


document.write("</center>");

// =======================================================================================================================

var mobile = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
{
    for (a = 0; a <= mobile.length; a++) {
        document.write(mobile[a] + "</br>");
    }

}

// ====================================================


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
{
    for (var i = 0; i <= fruits.length; i++) {
        document.write(fruits[i] + "</br>");
    }

}


// ====================================   6   ========================================

var n = ["keyboard", "mouse", "flash drive", "cpu"]

for (var i = 0; i <= n.length; i++) {

    alert(n[i]);
}

// ==============================    7   ==================================

// var counting = prompt("Enter the counting limit");
// var reverse = prompt("Enter the reverse counting limit");
// var even = prompt("Enter the even counting limit");
// var odd = prompt("Enter the odd counting limit");

// for (var a = 1; a <= counting; a++) {

//     document.write("Counting  " + "</br>");
//     document.write(a + "  ");

//     for (var b = reverse; b <= 1; b++) {

//         document.write(b + "  ");

//     }

//     for (var c = 0; c <= even; c + 2) {

//         document.write(c + "  ");

//     }

//     for (var d = 1; d <= odd; d + 2) {

//         document.write(d + "  ");

//     }

// }

// =================================  8  ==================================

var select = prompt("Welcome to the Rajput Bakery: What's you want");

var a = ["cake", "apple pie", "cookie", "chips", "patties"]

if (select === "cake") {
    document.write("<h1> Yes it's avalible on 0 index: </h1>");
}
else if (select === "apple pie") {
    document.write("<h1> Yes it's avalible on 1 index: </h1>");

}
else if (select === "cookies") {
    document.write("<h1> Yes it's avalible on 2 index: </h1>");

}
else if (select === "chips") {
    document.write("<h1> Yes it's avalible on 3 index: </h1>");

}
else if (select === "patties") {
    document.write("<h1> Yes it's avalible on 4 index: </h1>");

}
else {
    document.write("<h1> We are sorry '" + select + " is <b> not avalible' </b> in our bakery: </h1>" + "</br>" + "<h3> PLZ enter valid product like:" + "</br>" + "cake , apple pie , cookie, chips, patties: </h3>");
}


// =================================  14  ==================================



var num1 = prompt("Enter the quantity of random numbers i will find the largest number")

var add = [];

for (var i = 0; i <= num1; i++) {
    add[i] = prompt("enter the numbers")

}

for (var i = 0; i <= num1; i++) {

    document.write(add[i] + "</br>");

}

// =================================  9  ==================================

var array = [2, 23, 67, 89, 2, 5, 1, 7, 4]
var maximum = array[0]
for (var i = 0; i < array.length; i++) {
    if (array[i] > maximum) {

        maximum = array[i]
    }

}
document.write(array + "</br>");
document.write("The largest number amoung them is:" + maximum + "</br>");



// =================================  10  ==================================

var array = [2, 23, 67, 89, 2, 5, 1, 7, 4]
var maximum = array[0]
for (var i = 0; i < array.length; i++) {
    if (array[i] < maximum) {

        maximum = array[i]
    }

}
document.write(array + "</br>");
document.write("The smallest number amoung them is:" + maximum);


// =================================  12  ==================================


for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + "_");

}


// =================================  13  ==================================


var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for (var i = 1; i <= 3; i++) {

    document.write(i);

}
for (var j = 4; j <= 6; j++) {
    document.write(j + "</br>");

}
for (var a = 7; a <= 9; a++) {
    document.write(a);
}

// =================================  13 odd even  ==================================

for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(i + " " + "Even" + "<br>" + "<br>");

    }
    else if (i % 2 != 0) {
        document.write(i + " " + "odd" + "<br>" + "<br>");

    }

}

var a = prompt("Enter a number");
for (var i = 5; i >= 0; i= i-0.5) {

        document.write(i + "_");

    }















