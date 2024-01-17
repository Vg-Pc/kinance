import { Swal } from './jsplugin/swal';
import { ToastrNotify } from './jsplugin/toastr';
import { EchartPie } from './jsplugin/charts/echarts/pie';
import { EchartArea } from './jsplugin/charts/echarts/area';
import { EchartColumn } from './jsplugin/charts/echarts/column';

export class Confirm extends Swal { };

export class Notify extends ToastrNotify { };

export * from './jsplugin/html_helper';

export * from './jsplugin/countdown';

export * from './jsplugin/ajax_loading';

export * from './jsplugin/velocity_animation';

export * from './jsplugin/uniform';

export * from './jsplugin/select2';

export * from './jsplugin/touch_spin';

export * from './jsplugin/date_picker';

export * from './jsplugin/js_tree';

export * from './jsplugin/dual_listbox';

export * from './jsplugin/typehead';

export * from './jsplugin/modal';

export * from './jsplugin/charts/index';
