import{a as w,b as T,c as E,d as t,e as s}from"../../../_chunks/chunk-5WJE5TW3.js";import{a as i,c,d as p,f as P,g as h}from"../../../_chunks/chunk-FEDAVPE7.js";var b=c(P(),1);var x=c(h(),1);var n=c(P(),1);var d;(r=>{function y(e){return{hint:(0,n.coalesce)(e.hint,"Excel"),title:(0,n.coalesce)(e.title,""),cssClass:"export-xlsx-button",icon:"fa-file-excel-o",onClick:function(){if(!e.onViewSubmit())return;let C=e.grid;var o=(0,n.deepClone)(C.getView().params);o.Take=0,o.Skip=0;var v=C.getView().sortBy;v&&(o.Sort=v),o.ExportColumns=[];let B=C.getGrid().getColumns();for(let S of B)o.ExportColumns.push(S.id||S.field);e.editRequest&&(o=e.editRequest(o)),(0,n.postToService)({service:e.service,request:o,target:"_blank"})},separator:e.separator}}r.createToolButton=y,i(y,"createToolButton")})(d||(d={}));var g=c(h(),1);var l=class extends g.EntityDialog{constructor(){super(...arguments);this.form=new E(this.idPrefix)}getFormKey(){return E.formKey}getIdProperty(){return t.idProperty}getLocalTextPrefix(){return t.localTextPrefix}getNameProperty(){return t.nameProperty}getService(){return s.baseUrl}getDeletePermission(){return t.deletePermission}getInsertPermission(){return t.insertPermission}getUpdatePermission(){return t.updatePermission}};i(l,"CategoriesDialog"),l=p([g.Decorators.registerClass("Store.Store.CategoriesDialog")],l);var f=c(h(),1),m=c(P(),1);var a=class extends f.PropertyDialog{constructor(){super();this.form=new T(this.idPrefix)}getDialogTitle(){return"Excel Import"}getDialogButtons(){return[{text:"Import",click:()=>{if(this.validateBeforeSave()){if(this.form.FileName.value==null||(0,m.isEmptyOrNull)(this.form.FileName.value.Filename)){(0,m.notifyError)("Please select a file!");return}s.ExcelImport({FileName:this.form.FileName.value.Filename},e=>{(0,m.notifyInfo)("Inserted: "+(e.Inserted||0)+", Updated: "+(e.Updated||0)),e.ErrorList!=null&&e.ErrorList.length>0&&(0,m.notifyError)(e.ErrorList.join(`,\r
 `)),this.dialogClose()})}}},{text:"Cancel",click:()=>this.dialogClose()}]}};i(a,"CategoriesExcelImportDialog"),a=p([f.Decorators.registerClass("Store.Store.CategoriesExcelImportDialog")],a);var u=class extends x.EntityGrid{getColumnsKey(){return w.columnsKey}getDialogType(){return l}getIdProperty(){return t.idProperty}getInsertPermission(){return t.insertPermission}getLocalTextPrefix(){return t.localTextPrefix}getService(){return s.baseUrl}constructor(r){super(r)}getDefaultSortBy(){return[t.Fields.CategoryCode]}getButtons(){var r=super.getButtons();return r.push(d.createToolButton({title:"Export To Excel",grid:this,service:s.baseUrl+"/ListExcel",onViewSubmit:()=>this.onViewSubmit(),separator:!0})),r.push({title:"Import From Excel",cssClass:"export-xlsx-button",onClick:()=>{var e=new a;e.element.on("dialogclose",()=>{this.refresh(),e=null}),e.dialogOpen()}}),r}};i(u,"CategoriesGrid"),u=p([x.Decorators.registerClass("Store.Store.CategoriesGrid")],u);$(function(){(0,b.initFullHeightGridPage)(new u($("#GridDiv")).element)});
//# sourceMappingURL=CategoriesPage.js.map
