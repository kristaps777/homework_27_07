function myFizzBuzz() {

    const divWidth = document.getElementById('div_width').value;
    const divHeight = document.getElementById('div_height').value;
    const fizzValue = document.getElementById('fizz_value').value;
    const buzzValue = document.getElementById('buzz_value').value;
    const radValue = document.getElementById('border_radius').value;
    const errorMsg = document.getElementById('error_messages');
    const mainContainer = document.getElementById('main');
    const borderSolid = document.getElementById("border_style_solid");
    const borderDashed = document.getElementById("border_style_dashed");
    const borderDotted = document.getElementById("border_style_dotted");
    let startValue = parseInt(document.getElementById('start_value').value);
    let endValue = parseInt(document.getElementById('end_value').value);
    let sectionCheck = mainContainer.hasChildNodes();

    if (sectionCheck) {
        return errorMsg.innerText += "-- already generated, delete first --";
    };

    // error check switch
    switch (true) {
        case divWidth == '':
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- enter div width --";
            break;

        case divWidth == 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div width can't be 0px --";
            break;

        case divWidth < 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div width can't be negative --";
            break;

        case divWidth > 200:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- max div width is 200px --";
            break;

        case divHeight == '':
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- enter div height --";
            break;

        case divHeight == 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div height can't be 0px --";
            break;

        case divHeight < 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- div height can't be negative --";
            break;

        case divHeight > 200:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- max div height is 200px --";
            break;

        case startValue > endValue:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- start value must be lower than end value --";
            break;

        case startValue == '':
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- please enter start value --";
            break;

        case endValue == '':
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- please enter start value --";
            break;

        case radValue < 0:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- border radius can't be negative --";
            break;

        case radValue > 50:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- max border radius is 50% --";
            break;

        case borderSolid.checked == true && borderDashed.checked == true && borderDotted.checked == true:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- please select only one border type --";
            break;

        case borderSolid.checked == true && borderDashed.checked == true:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- please select only one border type --";
            break;

        case borderSolid.checked == true && borderDotted.checked == true:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- please select only one border type --";
            break;

        case borderDashed.checked == true && borderDotted.checked == true:
            errorMsg.innerText = '';
            return errorMsg.innerText += "-- please select only one border type --";
            break;
    };

    errorMsg.innerText = '';

    const myContainer = document.createElement('section');
    myContainer.id = "container";
    document.getElementById('main').appendChild(myContainer);

    for (let i = startValue; i <= endValue; i++) {

        const myDiv = document.createElement('div');
        myDiv.id = "block_ID_" + i;
        myDiv.className = 'div_class';
        myDiv.innerText = i;
        myDiv.style.width = divWidth + 'px';
        myDiv.style.height = divHeight + 'px';

        if (i % fizzValue === 0) {
            myDiv.innerText += " FIZZ";
            myDiv.className = "fizz_class";
        };

        if (i % buzzValue === 0) {
            myDiv.innerText += " BUZZ";
            myDiv.className = "buzz_class";
        };

        if (i % fizzValue === 0 && i % buzzValue === 0) {
            myDiv.className = "both_class";
        };

        document.getElementById('container').appendChild(myDiv);

    };

};

function changeColor() {
    const divColorInput = document.getElementById('div_color');
    const buzzColorInput = document.getElementById('buzz_color');
    const fizzColorInput = document.getElementById('fizz_color');
    const bothColorInput = document.getElementById('both_color');
    let divColor = divColorInput.value;
    let buzzColor = buzzColorInput.value;
    let fizzColor = fizzColorInput.value;
    let bothColor = bothColorInput.value;
    $('.div_class').css("background-color", divColor);
    $('.buzz_class').css("background-color", buzzColor);
    $('.fizz_class').css("background-color", fizzColor);
    $('.both_class').css("background-color", bothColor);
    $('.div_class, .fizz_class, .buzz_class, .both_class').css("opacity", ".6");
};

function borderRadius() {
    const divBorderRadiusInput = document.getElementById('border_radius');
    let borderRadius = divBorderRadiusInput.value;
    $('.div_class, .buzz_class, .fizz_class, .both_class').css("border-radius", borderRadius + '%');
};

function animationToggler() {
    const animationToggler = document.getElementById("animations");
    if (animationToggler.checked === false) {
        $('.fizz_class, .buzz_class, .both_class').css("animation-name", 'none');
    }
};

function borderToggler() {
    const borderSolid = document.getElementById("border_style_solid");
    const borderDashed = document.getElementById("border_style_dashed");
    const borderDotted = document.getElementById("border_style_dotted");

    switch (true) {
        case borderSolid.checked === true:
            $('.div_class, .fizz_class, .buzz_class, .both_class').css("border-style", 'solid');
            break;

        case borderDashed.checked === true:
            $('.div_class, .fizz_class, .buzz_class, .both_class').css("border-style", 'dashed');
            break;

        case borderDotted.checked === true:
            $('.div_class, .fizz_class, .buzz_class, .both_class').css("border-style", 'dotted');
            break;

    }
};

// generate button
const generateBtn = document.querySelector('#generate');
generateBtn.onclick = function allTogether() {
    myFizzBuzz();
    changeColor();
    borderRadius();
    animationToggler();
    borderToggler();
};

// delete button
const deleteBtn = document.querySelector('#delete');
deleteBtn.onclick = function myDestroyer() {
    const main = document.getElementById('main');
    const errorMsg = document.getElementById('error_messages');
    const target = document.getElementById('container');
    let mainState = main.hasChildNodes();

    if (mainState) {
        target.parentNode.removeChild(target);
        errorMsg.innerText = '';
    } else {
        return errorMsg.innerText = "-- nothing to delete, generate first --";
    }

};

// settings button
const settingsBtn = document.querySelector('#settings');
settingsBtn.onclick = function showControls() {
    const controls = document.getElementById('controls');
    let property = controls.getAttribute('class');

    if (property == 'div_controls') {
        controls.setAttribute('class', 'inactive');
    } else {
        controls.setAttribute('class', 'div_controls');
    }
};