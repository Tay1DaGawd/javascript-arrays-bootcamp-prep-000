var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
const array = [1]
element = "foo"
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