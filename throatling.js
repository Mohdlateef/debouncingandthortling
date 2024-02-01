console.log("abc");
let count=0
function searchFn(event) {
    console.log(event.target.value,count);
count++;  
}
  
let exi=true;

const debounceFn = (normalFn, delay) => {
    
    return function (...restParams) {
      if (exi){
      normalFn(...restParams)
      exe=false;}
      
       setTimeout(() => {
        exi=true;
      }, delay);
    };
  }









const searchFn2=debounceFn(searchFn,1000)