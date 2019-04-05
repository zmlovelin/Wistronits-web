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
                inspectionTaskName: '秋风',
                inspectionTaskTime: 32,
                inspectionUser: '秋风',
                inspectionTaskState: '1',
                inspectionTaskLeven: '紧急',
                inspectionTaskR: 'New York No. 1 Lake Park'
            },
            {
                id: '2',
                inspectionTaskName: '梅西',
                inspectionTaskTime: 30,
                inspectionUser: '梅西',
                inspectionTaskState: '1',
                inspectionTaskLeven: '紧急',
                inspectionTaskR: 'New York No. 1 Lake Park'
            },
            {
                id: '3',
                inspectionTaskName: 'ivan',
                inspectionTaskTime: 40,
                inspectionUser: 'ivan',
                inspectionTaskState: '1',
                inspectionTaskLeven: '紧急',
                inspectionTaskR: 'New York No. 1 Lake Park'
            },
            {
                id: '4',
                inspectionTaskName: '游游',
                inspectionTaskTime: 30,
                inspectionUser: '游游',
                inspectionTaskState: '1',
                inspectionTaskLeven: '紧急',
                inspectionTaskR: 'New York No. 1 Lake Park'
            },
            {
                id: '5',
                inspectionTaskName: 'ace',
                inspectionTaskTime: 40,
                inspectionUser: 'ace',
                inspectionTaskState: '1',
                inspectionTaskLeven: '紧急',
                inspectionTaskR: 'New York No. 1 Lake Park'
            },
        ];
    }

    private initTableConfig() {
        this.tableConfig = {
            scroll:{ x: '1150px' },
            columnConfig: [
                { type: 'select', width: 250, fixedLeft: 250},
                { // 巡检任务名称
                    title: '巡检任务名称', key: 'inspectionTaskName', width: 200,
                },
                { // 巡检任务名称
                    title: '巡检任务时间', key: 'inspectionTaskTime', width: 200,
                },
                { // 巡检任务名称
                    title: '巡检责任人', key: 'inspectionUser', width: 200,
                },
                { // 巡检任务名称
                    title: '巡检任务状态', key: 'inspectionTaskState', width: 200,
                },
                { // 巡检任务名称
                    title: '巡检任务级别', key: 'inspectionTaskLeven', width: 200,
                },
                { // 巡检任务名称
                    title: '描述', key: 'inspectionTaskR', width: 200,
                }
            ],
            selectChange: (data) => {
                console.log(data)
            }
        }
    }
}
