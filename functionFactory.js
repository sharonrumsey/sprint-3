/*Create a function called cube*/
function cube(x) {
  return x * x * x
}
/*Create a function called absolute that takes a number and returns the same number 
if it's positive, or returns the number multiplied by -1 if it's a negative. 
  NOTE MY HUSBAND HELPED ME WTH MY HOMEWORK*/
function absolute(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n;
  }
} 

/*Create an array of first names at least five items in length.  Then "map" the array,
passing in an anonymous function that returns the name "y" appended ot it.
In other words, if my array is ['Joe', 'Chuck'] then the output of the call to map 
should be ['Joey', 'Chucky'].
NOTE MY HUSBAND HELPED ME WTH MY HOMEWORK*/

var firstNames=["Joe", "Chuck", "Nick", "John", "Tom"]
var yNames = firstNames.map(function(name) {
    return name + "y";
});
yNames.map(function(name) {
  console.log(name);
});

/*Create a function called makeKiaOra(name) that returns a function that logs to the 
console "KiaOra,[name]" where [name] is the name with which we called makeKiaOra. 
NOTE MY HUSBAND HELPED ME WTH MY HOMEWORK*/

function makeKiaOra(name) {
  return function () {
    console.log("KiaOra " + name);
  }
}
var kiaOraSharon=makeKiaOra("Sharon");
kiaOraSharon();

/*[Next level bonus challenge]: Create a function that takes a Date object and returns 
another function.  The function returned, when called, should output the number of seconds
since the original functions was called.  Call the out function makeSince(d) such that
if I create a function var since = makeSince(new Date()), when I call since() it returns 
the number of seconds since I created the since variable and assigned the output of
makeSince(new Date()) to it. NOTE MY HUSBAND HELPED ME WTH MY HOMEWORK*/

function makeSince(d) {
  return function() {
    var endDate = new Date();
    return (endDate.getTime() - d.getTime())/1000;
  }
}
var since = makeSince(new Date());

function showWait() {
console.log("Waited " + since() + " seconds" );
}
setTimeout( showWait, 1234 );