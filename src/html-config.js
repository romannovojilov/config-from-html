HTMLElement.prototype.findClosestByAttrName = function (attr) {
    let el = this;
    while ((el = el.parentElement) && !el.attributes.getNamedItem(attr));
    return el;
}

let cacheList = [];

export default class HTMLConfig {
    constructor(entryElement, { attr }) {
        this.list = [];
        let el = entryElement;
        while(el) {
            this.list.push(el);
            el = el.findClosestByAttrName(attr);
            console.log(cacheList.indexOf(el));
            if(cacheList.indexOf(el) == -1)
                cacheList.push(el);
        }

        this.list.forEach((item) => console.log(item));

    }

    static clearCache() {
        cacheList = [];
    }

    static create(entryElement, attr) {
        return new HTMLConfig(entryElement, { attr });
    }
}