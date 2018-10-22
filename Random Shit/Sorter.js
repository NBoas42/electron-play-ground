

 class Sorter {

    constructor(){
       
    }


    quickSort(arr){

        let pivot = arr[arr.length-1];
        let wall = -1;

        if(arr.length <= 1){
            return arr;
        }

        for(let x = 0; x < arr.length-1; x++){
           
            if(arr[x] <= pivot) {
                wall++;
                let temp = arr[wall];
                arr[wall] = arr[x];
                arr[x] = temp;
            }
        }

        let temp = arr[arr.length-1];
        arr[arr.length-1] = arr[wall+1];
        arr[wall +1] = temp;
        
        return this.quickSort(arr.slice(0,wall+1)).concat(arr[wall+1], this.quickSort(arr.slice(wall+2, arr.length)));
    }

    InsertionSort(){

    }


}

module.exports = Sorter;

