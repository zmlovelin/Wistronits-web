import {Component, OnInit} from '@angular/core';
import {TableConfig} from "../../shared-module/component/zm-table/tableConfig";
import {TableComponentService} from "../../shared-module/service/table-api-service/table.component.service";
import {Result} from "../../shared-module/entity/Result";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    public data = [];
    public tableConfig: TableConfig;

    constructor(
        private $tableService: TableComponentService
    ) {
    }

    ngOnInit() {
        this.initTableConfig();
        this.$tableService.getTableList().subscribe((result: Result) => {
            console.log(result)
            this.data = result.data;
            console.log(this.data);
        })
        // this.data = [
        //     {
        //         id: '1',
        //         inspectionTaskName: '秋风',
        //         inspectionTaskTime: 32,
        //         inspectionUser: '秋风',
        //         inspectionTaskState: '1',
        //         inspectionTaskLeven: '紧急',
        //         inspectionTaskR: 'New York No. 1 Lake Park'
        //     },
        //     {
        //         id: '2',
        //         inspectionTaskName: '梅西',
        //         inspectionTaskTime: 30,
        //         inspectionUser: '梅西',
        //         inspectionTaskState: '1',
        //         inspectionTaskLeven: '紧急',
        //         inspectionTaskR: 'New York No. 1 Lake Park'
        //     },
        //     {
        //         id: '3',
        //         inspectionTaskName: 'ivan',
        //         inspectionTaskTime: 40,
        //         inspectionUser: 'ivan',
        //         inspectionTaskState: '1',
        //         inspectionTaskLeven: '紧急',
        //         inspectionTaskR: 'New York No. 1 Lake Park'
        //     },
        //     {
        //         id: '4',
        //         inspectionTaskName: '游游',
        //         inspectionTaskTime: 30,
        //         inspectionUser: '游游',
        //         inspectionTaskState: '1',
        //         inspectionTaskLeven: '紧急',
        //         inspectionTaskR: 'New York No. 1 Lake Park'
        //     },
        //     {
        //         id: '5',
        //         inspectionTaskName: 'ace',
        //         inspectionTaskTime: 40,
        //         inspectionUser: 'ace',
        //         inspectionTaskState: '1',
        //         inspectionTaskLeven: '紧急',
        //         inspectionTaskR: 'New York No. 1 Lake Park'
        //     },
        // ];
    }

    private initTableConfig() {
        this.tableConfig = {
            scroll: {x: '1100px'},
            columnConfig: [
                {type: 'select', width: 50, fixedLeft: 50},
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
                    title: '描述', key: 'inspectionTaskR', width: 200
                },
                { // 巡检任务名称
                    type: 'operation', title: '操作', width: 200, fixedRight: 200, operation: [
                        {
                            textName: '新增', handle: (event) => {
                                console.log(event)
                            }
                        },
                        {
                            textName: '修改', handle: (event) => {
                                console.log(event)
                            }
                        },
                        {
                            textName: '删除', handle: (event) => {
                                console.log(event)
                            }
                        }
                    ]
                }
            ],
            selectChange: (event) => {
                console.log(event)
            }
        }
    }
}
