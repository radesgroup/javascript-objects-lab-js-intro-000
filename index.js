var recipes = {
  bluberry: '1 cup',
  flour: '2 cup',
  sugar: '3 cup'
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
updateObjectWithKeyAndValue(recipes, 'milk', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object.key = ["value"]
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'sugar', '5 tbsp')
