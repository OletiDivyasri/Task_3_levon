function findMax(arr) {
  return Math.max(...arr);
}

let numbers2 = [5, 3, 9, 1, 12, 8];

let maxArr = document.getElementById("maxArr")
for (let i = 0; i < numbers2.length; i++) {
  maxArr.innerHTML += numbers2[i] + " "
}
let maxElement = findMax(numbers2);

let maxEle = document.getElementById("maxEle")
maxEle.innerHTML = maxElement
