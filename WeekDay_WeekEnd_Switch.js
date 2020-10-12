function workdayOrWeekend(day){
if ( day < 1 || day > 7) return "Wrong input";
else 
switch(day){

case 1: day = "Work day";break;
case 2: day = "Work day";break;
case 3: day = "Work day";break;
case 4: day = "Work day";break;
default: day = "Work day";break;
case 6:day = "Weekend";break;
case 7: day = "Weekend";break;
}
return day;
}
