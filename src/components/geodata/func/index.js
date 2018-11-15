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
  return new Promise(res => {
    retrieveData(start, end)
      .then(data => {
        let result = getUniqueYears(data)
        result = data.reduce((acc, item) => {
          let year = new Date(item.timestamp * 1000).getFullYear()
          acc[year].push(item)
          return acc
        }, result)
        Object.keys(result).map((year) => (
          result[year] = reduceData(result[year])
        ))
        res(result)
      })
  })
}

export const monthVariation = (start, end) => {
  return new Promise(res => {
    retrieveData(start, end)
      .then(data => {
        let result = getUniqueMonths(data)
        result = data.reduce((acc, item) => {
          let currentDate = new Date(item.timestamp * 1000)
          let month = `${currentDate.getMonth()}/${currentDate.getFullYear()}`
          acc[month].push(item)
          return acc
        }, result)
        Object.keys(result).map((month) => (
          result[month] = reduceData(result[month])
        ))
        res(result)
      })
  })
}

export const dayVariation = (start, end) => {
  return new Promise(res => {
    retrieveData(start, end)
      .then(data => {
        let result = getUniqueDays(data)
        result = data.reduce((acc, item) => {
          let currentDate = new Date(item.timestamp * 1000)
          let day = `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`
          acc[day].push(item)
          return acc
        }, result)
        Object.keys(result).map((day) => (
          result[day] = reduceData(result[day])
        ))
        res(result)
      })
  })
};

export const hourVariation = (start, end) => {
  return new Promise(res => {
    retrieveData(start, end)
      .then(data => {
        let result = getUniqueHours(data)
        result = data.reduce((acc, item) => {
          let currentDate = new Date(item.timestamp * 1000)
          let hour = `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:00`
          acc[hour].push(item)
          return acc
        }, result)
        Object.keys(result).map((hour) => (
          result[hour] = reduceData(result[hour])
        ))
        res(result)
      })
  })
};

const getUniqueHours = data => {
  return data.reduce((hours, item) => {
    let currentDate = new Date(item.timestamp * 1000)
    let time = `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:00`
    if (!hours.hasOwnProperty(time)) hours[time] = []
    return hours
  }, {})
}

const getUniqueDays = data => {
  return data.reduce((days, item) => {
    let currentDate = new Date(item.timestamp * 1000)
    let currentDay = `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`
    if (!days.hasOwnProperty(currentDay)) days[currentDay] = []
    return days
  }, {})
}

const getUniqueMonths = (data) => {
  return data.reduce((months, item) => {
    let currentDate = new Date(item.timestamp * 1000)
    let day = `${currentDate.getMonth()}/${currentDate.getFullYear()}`
    if (!months.hasOwnProperty(day)) months[day] = []
    return months
  }, {})
}

const getUniqueYears = (data) => {
  return data.reduce((years, item) => {
    let currentYear = new Date(item.timestamp * 1000).getFullYear()
    if (!years.hasOwnProperty(currentYear)) years[currentYear] = []
    return years
  }, {})
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
