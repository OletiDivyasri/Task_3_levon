function rotateArray(arr, k) {
    // If the array is empty or k is 0, return the array as is
    if (arr.length === 0 || k === 0) return arr;

    // Handle cases where k is greater than the array length
    k = k % arr.length;

    // Cut the last 'k' elements and put them in the front
    const partToMove = arr.splice(arr.length - k, k);
    arr.unshift(...partToMove);

    return arr;
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

let orgArr = document.getElementById("orgArr")
for (let i = 0; i < arr.length; i++) {
    orgArr.innerHTML += arr[i] + " "
}
let result = rotateArray(arr, k)
let rotateEle = document.getElementById('rotateArr')
document.getElementById("desc").innerHTML = `Rotation of array by ${k} times`
for (let i = 0; i < result.length; i++) {
    rotateEle.innerHTML += result[i] + " "
}
// Output: [5, 6, 7, 1, 2, 3, 4]
