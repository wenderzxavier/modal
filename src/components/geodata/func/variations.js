export const staticMap = (start, end) => {
    console.log(`Start = ${start} and End = ${end}`)
    const DBopenRequest = window.indexedDB.open('openModal', 1)
    DBopenRequest.onsuccess = (evt) => {
        var db = DBopenRequest.result
        const keyRangeValue = IDBKeyRange.bound(start, end, false, false);;
        console.log(keyRangeValue.lower)
        console.log(keyRangeValue.upper)

        var transaction = db.transaction('openModal', 'readonly');
        var objectStore = transaction.objectStore('openModal');
        objectStore = objectStore.index("timestamp");

        var countRequest = objectStore.count();
        countRequest.onsuccess = function() {
          console.log(countRequest.result);
        }
        var data = []
        objectStore.openCursor(keyRangeValue).onsuccess = function(event) {
            var cursor = event.target.result;
            console.log(`Cursor = ${cursor}`)
              if(cursor) {
                console.log(cursor.value)
                data.push(cursor.value)
                cursor.continue();
              } else {
                console.log('Entries all displayed.');
                console.log(`Data = ${data.length}`)
              }
          };
    }
}

export const yearVariation = (data, start, end) => {

}

export const monthVariation = (data, start, end) => {

}

export const dayVariation = (data, start, end) => {

}

export const hourVariation = (data, start, end) => {

}