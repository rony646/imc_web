// Mask for user inputs using Jquery


$('.height').mask('0.00')

$(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("flex-containter").css({"width":w, "height":h});
});


function calcBMI() {
    
    // Here we get the user height and wheight values

    const height = document.getElementById('get_height').value
    const weight = document.getElementById('get_weight').value
    var message = document.getElementById('bmi_message')


    // Calculate BMI and verify if the result is invalid

    const bmiResult = weight / Math.pow(height, 2)

    if (bmiResult == Infinity || bmiResult < 0.1  || bmiResult >= 1000) {
        message.innerHTML = 'Você inseriu um valor inválido!'
        message.style.color = '#8B0000'
    } else {
        // Show the result

            if(bmiResult < 17) {
                document.getElementById('my_result').innerHTML = bmiResult.toFixed(2)
                message.innerHTML = 'Você está muito abaixo do peso!'
                message.style.color = '#8B0000'
            }

            if(bmiResult >= 17 && bmiResult <= 18.49) {
                document.getElementById('my_result').innerHTML = bmiResult.toFixed(2)
                message.innerHTML = 'Você está abaixo do peso!'
                message.style.color = '#FF7F00'
            }

            if(bmiResult >= 18.5 && bmiResult <= 24.99) {
                document.getElementById('my_result').innerHTML = bmiResult.toFixed(2)
                message.innerHTML = 'Você está no peso ideal.'
                message.style.color = '#00CD00'
            }

            if(bmiResult >= 25 && bmiResult <= 29.99) {
                document.getElementById('my_result').innerHTML = bmiResult.toFixed(2)
                message.innerHTML = 'Você está acima do peso!'
                message.style.color = '#FF7F00'
            }

            if(bmiResult >= 30 && bmiResult <= 34.99) {
                document.getElementById('my_result').innerHTML = bmiResult.toFixed(2)
                message.innerHTML = 'Você está com obesidade!'
                message.style.color = '#8B0000'
            }

            if(bmiResult >= 35 && bmiResult <= 39.99) {
                document.getElementById('my_result').innerHTML = bmiResult.toFixed(2)
                message.innerHTML = 'Você está com obesidade severa!'
                message.style.color = '#8B0000'
            }

            if (bmiResult >= 40) {
                document.getElementById('my_result').innerHTML = bmiResult.toFixed(2)
                message.innerHTML = 'Você está com obesidade mórbida!'
                message.style.color = '#8B0000'
            }
    }

}