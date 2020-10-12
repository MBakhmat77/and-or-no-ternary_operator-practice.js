function greetings(name, language){
let greetings;
switch (language){
case 'English': greetings = `Hello ${name}!`;
break;
case 'German': greetings = `Hallo ${name}!`;
break;
case 'French': greetings = `Bonjour ${name}!`; 
break;
case 'Spanish': greetings = `Hola ${name}!`;
break;
case 'Italian': greetings = `Saluto ${name}!`;
break;
case 'Russian': greetings = `Привет ${name}!`;
break;
case 'Czech': greetings = `Nazdar ${name}!`;
break;
default: greetings = `Hello ${name}!`;
}
return greetings;
}
