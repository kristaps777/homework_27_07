function myFizzBuzz() {

    const divWidth = document.getElementById('div_width');
    const divHeight = document.getElementById('div_height');
    const fizzValue = document.getElementById('fizz_value').value;
    const buzzValue = document.getElementById('buzz_value').value;
    const errorMsg = document.getElementById('error_messages');
    const mainContainer = document.getElementById('main');
    let startValue = document.getElementById('start_value').value;
    let endValue = document.getElementById('end_value').value;
    let sectionCheck = mainContainer.hasChildNodes();


    // error check switch
    switch (true) {
        case divWidth.value == '':
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- enter div width --";
            break;

        case divWidth.value == 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div width can't be zero --";
            break;

        case divWidth.value < 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div width can't be negative --";
            break;

        case divHeight.value == '':
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- enter div height --";
            break;

        case divHeight.value == 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div height can't be zero --";
            break;

        case divHeight.value < 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div height can't be negative --";
            break;
    };

    if (sectionCheck) {
        return errorMsg.innerText += "-- already generated --";
    };

    errorMsg.innerText = '';

    const myContainer = document.createElement('section');
    myContainer.id = "container";
    document.getElementById('main').appendChild(myContainer);

    for (let i = startValue; i <= endValue; i++) {

        const myDiv = document.createElement('div');
        const myBr = document.createElement('br');
        myDiv.id = "block_ID_" + i;
        myDiv.innerText = i;
        myDiv.appendChild(myBr);
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
    const errorMsg = document.getElementById('error_messages');
    target.parentNode.removeChild(target);
    errorMsg.innerText = '';
};