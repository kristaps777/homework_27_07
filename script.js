function myFizzBuzz() {
    const myContainer = document.createElement('section');
    myContainer.id = "container";
    document.getElementById('main').appendChild(myContainer);

    for (let i = 1; i < 101; i++) {

        const myDiv = document.createElement('div');
        myDiv.id = "block_ID_" + i;
        myDiv.innerText = i;

        if (i % 3 === 0) {
            myDiv.innerText += " FIZZ";
            myDiv.className = "fizz_class";
        };

        if (i % 5 === 0) {
            myDiv.innerText += " BUZZ";
            myDiv.className += " buzz_class";
        };

        if (i % 3 === 0 && i % 5 === 0) {
            myDiv.className = "both_class";
        };

        document.getElementById('container').appendChild(myDiv);
    };

};

function myDestroyer() {
    const target = document.getElementById('container');
    target.parentNode.removeChild(target);
};