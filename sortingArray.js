//   BUBBLE SORT ALGORITHM 

  let numArray = [100, 77, 44, 200, 1, 33, 2, 99]

  function sorting(arr){

    for(let i=0;i<arr.length-1;i++)
    {

      for(let j=0;j<arr.length-1-i;j++)
      {
        if(arr[j]>arr[j+1])
        {
          let temp = arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp
        }
      }
     
    }
    return arr;
  }
let sortedArray=  sorting(numArray);

for (let i=0; i< sortedArray.length; i++){
  console.log(i);
}

//checking the duplicates

