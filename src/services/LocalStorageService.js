import storage from 'electron-json-storage';

export default class LocalStorageService {
    static set = (data, onlyLocalStorage = false) => {

    };

    static setAsync = storage.set;

    static get = (key, onlyLocalStorage = false) => {

    };

    static getAsync = storage.get;

    static has = async key => {
        const result = await new Promise((resolve, reject) => {
            storage.has(key, (error, hasKey) => {
                if (error) resolve(false);
                resolve(hasKey);
            });
        });
        return result;
    };

    static hasAsync = storage.has;

    static removeAsync = storage.remove;
}
