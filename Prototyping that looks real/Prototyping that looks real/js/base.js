
// This is a way to get the address of what site this code is running from
let currentAddress = window.location.href;
console.log(currentAddress);
// it will be just string

// now, we know that we want the address or the URL (Uniform Resource Locator) as it is called
// and there is a way to get the URL with some extra features
let currentURL = new URL(window.location.href);

// printing it will show us the extra stuff
console.log(currentURL);

// one of the extras is "search"
console.log(currentURL.search);
// this will cut off everything before the ? mark

// now we have the info from the form, lets get the info into a useable format

// URLSearchParams is a way to get form data like this
// its called HTTP GET method
// URLSearchParams let us get this data in a easy way.
var searchParams = new URLSearchParams(currentURL.search);

//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams


// there is a few features that URLSearchParams has that is usefull
// the main one is "get", that lets us fetch form data based on the form name
let fname = searchParams.get("username");
// when we print this we will see what was enterd in the form with the name "fname"
console.log(fname);

// lets show it on the page
document.getElementById("formName").innerHTML ="Welcome back: " + fname;
