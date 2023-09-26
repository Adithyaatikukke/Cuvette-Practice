function getInput(arr) {
    let numCheck = arr.every((item) => typeof item === "number");

    if (numCheck) {
    console.log("Array consists of all numbers");

    function multiArray() {
        arr = arr.map((item) => item * 2);
        console.log("Array is multiplied by 2", arr);
    }

    const interval = setInterval(multiArray, 5000);

    setTimeout(()=> {
        clearInterval(interval);
        console.log("20000 miliSeconds completed");
    }, 20000);
}
else 
{
    let ind= arr.filter((item)=> item !== 'number');
    ind= ind.length;
    console.log("Array does not consists numbers at ", ind);
}

}

arr = [1,2,3,4,5];
getInput(arr);
