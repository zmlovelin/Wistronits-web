import {Injectable} from '@angular/core';

@Injectable()
export class TableService {
    constructor() {
    }

    /**
     * 获取check选中的值
     * @param data
     */
    selectChange(data) {
        const newData = [];
        if (data) {
            data.forEach(item => {
                if (item.checked) {
                    newData.push(item);
                }
            })
        }
        return newData;

    }

}
