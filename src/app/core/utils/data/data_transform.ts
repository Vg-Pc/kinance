import { PieSeriesData } from "../../templates/jsplugin/charts/echarts/serie";

declare var $: any;
export class DataTransform {
    /**
     * Tranform data to select2 object
     */
    public static toSelect2Datas(data: Array<any>, dataValueField: string, dataTextField?: string): any {
        return $.map(data, function (obj: any) {
            obj.id = obj.id || obj[dataValueField];
            obj.text = obj.text || obj[dataTextField];
            return obj;
        });
    }

    /**
     * Tranform data to select2 object
     */
    public static toEChartSeries(data: Array<any>, dataTextField?: string, dataValueField?: string): any {
        // let dataMapper = Object.assign({}, data);
        return $.map(data, function (obj: any) {
            let newObj: any = Object.assign({}, obj);
            newObj.name = obj.name || obj[dataTextField];
            newObj.value = obj.value || obj[dataValueField];
            return newObj;
        });
    }

    /**
     * tranform data to typeahead object
     */
    public static toTypeaheadDatas(data: Array<any>, dataValueField: string, dataTextField?: string): any {
        return $.map(data, function (obj: any) {
            obj.name = obj.name || obj[dataValueField];
            obj.code = obj.code || obj[dataTextField];
            return obj;
        });
    }

    /**
     * tranform data to typeahead object
     */
    toCalendarDatas(data: Array<any>, dataIdField: string, dataTextField: string, dataFieldStartDate?: string, dataFieldEndDate?: string): any {
        return $.map(data, function (obj: any) {
            obj.id = obj.id || obj[dataIdField];
            obj.title = obj.title || obj[dataTextField];
            obj.start = obj.start || obj.startDate || obj[dataFieldStartDate];
            obj.end = obj.end || obj.endDate || obj[dataFieldEndDate];
            obj.color = obj.color;
            obj.allDay = true;
            obj.editable = false;
            return obj;
        });
    }
}