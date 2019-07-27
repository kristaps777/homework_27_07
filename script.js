function myFizzBuzz() {

    const divWidth = document.getElementById('div_width');
    const divHeight = document.getElementById('div_height');
    const fizzValue = document.getElementById('fizz_value').value;
    const buzzValue = document.getElementById('buzz_value').value;

    if (divWidth.value == '') {
        return alert('Please enter div width!')
    };

    if (divHeight.value == '') {
        return alert('Please enter div height!')
    };

    const myContainer = document.createElement('section');
    myContainer.id = "container";
    document.getElementById('main').appendChild(myContainer);

    for (let i = 1; i < 101; i++) {

        const myDiv = document.createElement('div');
        myDiv.id = "block_ID_" + i;
        myDiv.innerText = i;
        myDiv.style.width = divWidth.value + 'px';
        myDiv.style.height = divHeight.value + 'px';

        if (i % fizzValue === 0) {
            myDiv.innerText += " FIZZ";
            myDiv.className = "fizz_class";
        };

        if (i % buzzValue === 0) {
            myDiv.innerText += " BUZZ";
            myDiv.className += " buzz_class";
        };

        if (i % fizzValue === 0 && i % buzzValue === 0) {
            myDiv.className = "both_class";
        };

        document.getElementById('container').appendChild(myDiv);
    };

};

function myDestroyer() {
    const target = document.getElementById('container');
    target.parentNode.removeChild(target);
};