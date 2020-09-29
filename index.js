var recipes = {
  bluberry: '1 cup',
  flour: '2 cup',
  sugar: '3 cup'
}
var recipes1 = recipes;

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
updateObjectWithKeyAndValue(recipes, 'milk', '1 cup')


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'sugar', '5 tbsp')

function deleteFromObjectByKey(object, key){
 Object.assign({}, object = delete object[key])
return object
}
deleteFromObjectByKey(recipes1, 'flour')


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
destructivelyDeleteFromObjectByKey(recipes, 'sugar')
