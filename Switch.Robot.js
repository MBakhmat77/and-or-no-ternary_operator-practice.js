function robot(x, y, direction){
let r;
switch (direction){
case 'E': r = [x+1,y];
break;
case 'W': r = [x-1,y];
break;
case 'N': r = [x,y+1];
break;
case 'S': r = [x,y-1];
break;
}
return r;
}
