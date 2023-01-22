    function distinct1 (arr_,arr){
        let dif = arr_.filter(val => !arr.includes(val))
        let diff = arr.filter(val => !arr_.includes(val))
        let fdiff = dif.concat(diff)

        const reducer = (accumulator, curr) => accumulator + curr;
        console.log("somme= "+fdiff.reduce(reducer));
        return fdiff

    }

    function distinct2(arr_, arr) {
        let sum = 0;
        let elementCount = {};
        for (let i = 0; i < arr_.length; i++) {
            elementCount[arr_[i]] = (elementCount[arr_[i]] || 0) + 1;
        }
        for (let i = 0; i < arr.length; i++) {
            elementCount[arr[i]] = (elementCount[arr[i]] || 0) + 1;
        }
        for (let element in elementCount) {
            if (elementCount[element] === 1) {
                sum += element;

            }
            console.log("somme = "+sum)
        }
        return sum;
    }

    function findSumOverlap(arr_, arr) {
        let sum = 0;
        for (let i = 0; i < arr_.length; i++) {
            if (arr.includes(set1[i])) {
                sum += arr_[i];
            }
        }
        return sum;
    }


        function findSumOverlap(arr_, arr) {
        let sum = 0;
        let elementCount = {};
        for (let i = 0; i < arr_.length; i++) {
            elementCount[arr_[i]] = (elementCount[arr_[i]] || 0) + 1;
        }
        for (let i = 0; i < arr2.length; i++) {
            elementCount[arr[i]] = (elementCount[arr[i]] || 0) + 1;
        }
        for (let element in elementCount) {
            if (elementCount[element] > 1) {
                sum += element;
            }
        }
        return sum;
    }
