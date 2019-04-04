import {Component, OnInit} from '@angular/core';
import {TableConfig} from "../../shared-module/component/zm-table/tableConfig";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    public data = [];
    public tableConfig: TableConfig;

    constructor() {
    }

    ngOnInit() {
        this.initTableConfig();
        this.data = [
            {
                id: '1',
                inspectionTaskName: 'lin',
                inspectionTaskTime: 12,
                inspectionTask: 'New York No. 1 Lake Park'
            },
            {
                id: '2',
                inspectionTaskName: 'ivan',
                inspectionTaskTime: 30,
                inspectionTask: 'New York No. 1 Lake Park'
            },
            {
                id: '3',
                inspectionTaskName: 'Brown',
                inspectionTaskTime: 40,
                inspectionTask: 'New York No. 1 Lake Park'
            },
        ];
    }

    private initTableConfig() {
        this.tableConfig = {
            columnConfig: [
                // {type: 'select', fixedStyle: {fixedLeft: true, style: {left: '0px'}}, width: 62},
                { // 巡检任务名称
                    title: '巡检任务名称', key: 'inspectionTaskName', width: 200,
                },
                { // 巡检任务名称
                    title: '巡检任务时间', key: 'inspectionTaskTime', width: 200,
                },
                { // 巡检任务名称
                    title: '巡检任务周期', key: 'inspectionTask', width: 200,
                }
            ],
            selectChange: (data) => {
                console.log(data)
            }
        }
    }
}
