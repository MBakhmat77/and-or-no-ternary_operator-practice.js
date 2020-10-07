function newValues(a, b){
let newarr = [];
let newA;
let newB;
if ( a !== b){
 return [a+b, a-b]; 
 } else if( a === b){
  return [0,0];
}
a = newA; b = newB;
return [newA,newB];
}
