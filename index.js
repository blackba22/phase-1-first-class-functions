function dostuff(){
    console.log("I go in front of functionReceived");
}
function receivesAFunction(functionReceived){
    dostuff();
    functionReceived();
}
receivesAFunction();


function returnsANamedFunction() {
    let weekDay;
    (function(){
        weekDay = returnsANamedFunction();
    });
    return function returnsANamedFunction(){
        console.log("not to deeply equal")
    }
}
returnsANamedFunction();


function returnsAnAnonymousFunction(){
    let artist;
    (function(){
        artist = returnsAnAnonymousFunction();
    });
    return function(){
        console.log("Meg The Stallion")
    }

}
returnsAnAnonymousFunction();