var name = prompt("Hello! What's your name?")
var age = prompt("What's your age?")
var message;

if (age >= 0 && age < 18) {
    message = 'hello, ' + name + ' as a ' + age + ' years old, you are officially a child!'
    alert(message);
} else if (age >= 18) {
    message = 'Hello,' + name + ' as a ' + age + ' years old,you are officially an adult!';
} else {
    message = 'Welcome Mr/Mrs ' + name + 'you are ' + age + ' years old!'
    alert(message);
}
alert(message)
document.write(message);