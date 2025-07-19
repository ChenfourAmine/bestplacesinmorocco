
class LocalStorage {
    constructor() {
        this.ls = localStorage;
    }

    addData(key, value, expirationMinutes) {
        let now = new Date();
        let expirationTime = new Date(now.getTime() + expirationMinutes * 60 * 1000);
        let dataToStore = {
            value: value,
            expiresAt: expirationTime.getTime(),
        };
        this.ls.setItem(key, JSON.stringify(dataToStore));
    }

    getData(key) {
        let storedData = this.ls.getItem(key);
        if (!storedData) return null;
      
        let data = JSON.parse(storedData);
        let now = new Date().getTime();
        if (data.expiresAt < now) {
            this.ls.removeItem(key);
          return null;
        }
      
        return data.value;
    }

    clear() {
        this.ls.clear();
    }

    static toMinutes(days) {
        return days * 24 * 60;
    }
}

