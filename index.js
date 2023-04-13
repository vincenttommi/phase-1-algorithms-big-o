///identifying time complexity with big O notation


function average(array){

     // step 1
    let total = 0;
    for(const  num of array){

     // n steps (dependant  on the size of  the array)

        total += num;
    }
 

    //step 1
    return total / array.length;
}

function average(array) {
    return array.reduce((total, num) => total + num, 0) / array.length;
  }

  
  function  containsAverage(array){


    // n steps(depending on the size of the array)
    const averageValue =  average(array);

    for (const num of array){
 
         //n steps(depending on  the size of the array)

        if(num === averageValue)return true;


    }

  }