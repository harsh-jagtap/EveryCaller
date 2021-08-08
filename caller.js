console.log("Wel-Come to EveryCaller web app");

let submit = document.querySelector("#submit");


submit.addEventListener("click", function(e) {
    e.preventDefault();
    let InputNumber = document.querySelector("#number");
    let inputNumber = document.querySelector("#number").value;
    let tip = document.querySelector("#tip");
    let hr2 = document.querySelector("#hr2");
    let info = document.querySelector("#info");

    if (inputNumber.length == 10) {
        console.log("valid number");
        InputNumber.removeAttribute("class", "wrong");
        InputNumber.setAttribute("class", "input");

        // fetch number
        let url = `http://apilayer.net/api/validate?access_key=0acfcb96d2345aaa9da9fc07abd2ddcb&number=${inputNumber}&country_code=IN&format=1`
        fetch(url).then(function(e) {
            return e.json()
        }).then(function(data) {
            console.log(data);
            if (data.valid) {
                let text = `Your number :  ${inputNumber} <br>
                country code : +91 <br> 
                country name : India <br>
                location : ${data.location} <br>
                number  : ${data.line_type} <br>`
                info.innerHTML = text;
                console.log("true");
            } else {
                let text = ``
                info.innerHTML = text;
                InputNumber.setAttribute("class", "wrong input");
                tip.innerHTML = `Your number is not valid number.`
                hr2.removeAttribute("class", "hr2");
                console.log("false");
            }
        })

        // extra tip
        tip.innerHTML = ``
        hr2.setAttribute("class", "hr2");
    } else {
        console.log("unvalid number", inputNumber.length);
        InputNumber.setAttribute("class", "wrong input");
        tip.innerHTML = `Your number is wrong or small it must be of 10 digit.`
        hr2.removeAttribute("class", "hr2");
    }
})