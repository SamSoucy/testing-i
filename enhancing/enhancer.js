module.exports = {
  succeed,
  fail,
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

function fail(item) {
    if (typeof item.name !== "string"
      || typeof item.enhancement !== "number"
      || item.enhancement > 20
      || item.enhancement < 0
      || item.durability > 100
      || item.durability < 0 
      ) {
        return { error: "data not correct" };  
    }
    let newItem = item;
    if (item.enhancement < 15) {
      newItem.durability -= 5;
      if (newItem.durability < 20)
              newItem.durability = 20;
    } else {
      newItem.durability -= 10;
      if (newItem.durability < 0)
              newItem.durability = 0;
      if (newItem.enhancement > 16) {
        newItem.enhancement--;
      }
    }

      return newItem;
  };












