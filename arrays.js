var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
const array = [1]
element = "foo"
index = 2
function addElementToBeginningOfArray(array, element) {
  return ([element, ...array])
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  return ([...array, element])
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = [1, 2, 3]
  array.shift
  return array
}
function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  return array.slice(0,array.slice(-1))
}
