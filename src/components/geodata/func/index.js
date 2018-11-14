export const retrieveData = (start, end) => {
  return new Promise(res => {
    var data = [];
    const DBopenRequest = window.indexedDB.open("openModal", 1);
    DBopenRequest.onsuccess = evt => {
      var db = DBopenRequest.result;
      const keyRangeValue = IDBKeyRange.bound(start, end, false, false);
      var transaction = db.transaction("openModal", "readonly");
      var objectStore = transaction.objectStore("openModal");
      objectStore = objectStore.index("timestamp");
      objectStore.openCursor(keyRangeValue).onsuccess = event => {
        var cursor = event.target.result;
        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        } else console.log("Query Finished.");
      }
      transaction.oncomplete = () => {
        return res(data)
      }
    }
  })
}

export const staticMap = (start, end) => {
  return new Promise(res => {
    retrieveData(start, end)
      .then(data => res(reduceData(data)))
  }
  )
}

export const yearVariation = (start, end) => {
  retrieveData(start, end)
  .then( data => {
    var result = getUniqueYears(data)
    let x = data.reduce((acc, item) => {
      let year = new Date(item.timestamp * 1000).getFullYear()
      acc[year].push(item)
      return acc
    }, result)
    console.log(x)
  })
}

export const monthVariation = (data, start, end) => { };

export const dayVariation = (data, start, end) => { };

export const hourVariation = (data, start, end) => { };

const getUniqueYears = (data) => {
  return data.reduce((years, item) => {
    let currentYear = new Date(item.timestamp * 1000).getFullYear()
    if (!years.hasOwnProperty(currentYear)) years[currentYear] = []
    return years
  },{})
}

const getUniqueValuesOfKey = (data, key) => {
  return data.reduce((carry, item) => {
    if (item[key] && !~carry.indexOf(item[key])) carry.push(item[key]);
    return carry;
  }, []);
};

export const reduceData = data => {
  const uniqueKeys = getUniqueValuesOfKey(data, "name");
  let result = [];
  uniqueKeys.map(key => {
    var currentRegister = {
      name: key,
      coordinates: "",
      timestamp: 1,
      load: 0,
      group: 0
    };
    return result.push(
      data.reduce((accumulator, item) => {
        if (item.name === accumulator.name) {
          accumulator.load += item.load;
          accumulator.coordinates = item.coordinates;
          accumulator.group = item.group;
        }
        return accumulator;
      }, currentRegister)
    );
  });
  return result;
};
