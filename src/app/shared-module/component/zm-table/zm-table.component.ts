import {Component, Input, OnInit, Output} from '@angular/core';
import {TableConfig} from './tableConfig';
import {TableService} from "./table.service";

@Component({
    selector: 'zm-table',
    templateUrl: './zm-table.component.html',
    styleUrls: ['./zm-table.component.scss']
})
export class ZmTableComponent implements OnInit {
    /**
     * 接受的后台数据
     */
    @Input()
    dataSet = [];
    /**
     * 前端配置列
     */
    @Input()
    tableConfig: TableConfig = new TableConfig();


    indeterminate = false;
    allChecked = false;

    constructor(
        private $tableService: TableService
    ) {
    }

    ngOnInit() {

    }

    refreshStatus(): void {
        const validData = this.dataSet.filter(value => !value.disabled);
        const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
        const allUnChecked = validData.every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = !allChecked && !allUnChecked;
        this.tableConfig.selectChange(this.$tableService.selectChange(validData))

    }

    checkAll(value: boolean): void {
        this.dataSet.forEach(data => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    }


}
