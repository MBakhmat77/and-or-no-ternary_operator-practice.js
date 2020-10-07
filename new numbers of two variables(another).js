function newValues(a, b){
let newarr = [];
let newA;
let newB;
if ( a !== b && a > b){
 return [a, a]; 
 }else if(a !== b && a < b){
 return [b,b];
  } else if( a === b){
   return [0,0];
}
a = newA; b = newB;

return [newA,newB];

}
