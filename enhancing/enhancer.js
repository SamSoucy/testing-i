
// function fail(item) {
//   return { ...item };
// }

module.exports = {
  succeed,
  // fail,
  repair,
  // get,
};



function repair(item){
  if (typeof item.name !== "string"
      || typeof item.durability !== "number"
      || item.durability > 100
      || item.durability < 0
      ){
      return {error: "data not correct"};
  } else if (item.durability === 100) {
      return {error: "Item already fully repaired"};
  }

  let newItem = item;

  newItem.durability = 100;

  return newItem;
};

function succeed(item) {
  if (typeof item.name !== "string"
    || typeof item.enhancement !== "number"
    || item.enhancement > 20
    || item.enhancement < 0) {
    return { error: "data not correct" };
  } else if (item.enhancement === 20) {
    return { error: "cannot enhance" }
  }
  let newItem = item;
  newItem.enhancement++;
  return newItem;
};





