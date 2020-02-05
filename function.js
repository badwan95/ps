function msg(){
    //input
    var name = prompt("Hello! What's your name?");
    var age = prompt("What's your age?");
    var msg;
    //processing
    if (isNaN(age)) {
    msg = 'Please put an actual age!';
    } else {
        if (age > 0 && age < 18) {
            msg = 'hello, ' + name + ' as a ' + age + ' years old, you are officially a child!';
        } else if (age >= 18 && age < 100) {
            msg = 'Hello,' + name + ' as a ' + age + ' years old,you are officially an adult!';
        } else {
            msg = 'Welcome Mr/Mrs ' + name + ' ,please put your real age, as ' + age + ' is not believable';
        }
    }
    //output
    console.log(msg);
    alert(msg);
    return msg;
}
msg();