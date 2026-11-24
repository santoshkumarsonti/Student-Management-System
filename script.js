function checkResult() {
    let name = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);

    if (name == "" || marks < 0 || marks > 100 ||
        document.getElementById("marks").value == "") {
        document.getElementById("result").innerHTML =
            "Enter valid details";
    }
    else if (marks >= 35) {
        document.getElementById("result").innerHTML =
            name + " is PASS";
    }
    else {
        document.getElementById("result").innerHTML =
            name + " is FAIL";
    }
}