var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
const array = [1]
const arrayq = [1, 2, 3]
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
  return arrayq[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  arrayq.shift
  return arrayq
}
function removeElementFromBeginningOfArray(array) {
  return arrayq.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  arrayq.pop()
  return arrayq
}
function removeElementFromEndOfArray(array) {
  return arrayq.slice(0,arrayq.slice(-1))
}
