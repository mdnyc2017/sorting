
function bubbleSort(array) {
  if(!array.length || array.length === 1) return array


  for(var i = 0; i<array.length-1; i++){
    for(let j = 1; j<array.length; j++){
    if(array[j-1] > array[j]){
     swap(array, j-1, j)
   }
  }    
}
  return array
}

 function swap(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp
 }

