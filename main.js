
function resolve(){
    var value_one = parseInt(document.getElementById("n1").value);
    var value_two = parseInt(document.getElementById("n2").value);

    operator = document.querySelector('#op').value;

    switch (operator){

        case "+":
            document.getElementById('result_label').innerHTML= value_one + value_two;
            break;

        case "-":
            document.getElementById('result_label').innerHTML= value_one - value_two;
            reak;

        case "*":
            document.getElementById('result_label').innerHTML= value_one * value_two;
            break;

        case "/":
            document.getElementById('result_label').innerHTML= value_one / value_two;
            break;
    
    }

}