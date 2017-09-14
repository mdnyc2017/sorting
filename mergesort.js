function split(wholeArray) {
    let midPoint = Math.floor(wholeArray.length/2)
      /* your code here to define the firstHalf and secondHalf arrays */
    let firstHalf = wholeArray.slice(0, midPoint)
    let secondHalf = wholeArray.slice(midPoint)
      return [firstHalf, secondHalf];
    }




function mergeSort(array) {
    let splitArr = split(array)
    if (splitArr.length < array.length) {
        splitArr.push(split(splitArr))
    } else {
        console.log('splitArr: ', splitArr)
    }
          /* your code here */
        
    }

let testArr = [8,7,6,5,4,3,2,1]
console.log('testArr: ', testArr)
mergeSort(testArr)
