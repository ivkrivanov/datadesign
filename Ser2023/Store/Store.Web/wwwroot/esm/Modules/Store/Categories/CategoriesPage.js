import{B,a as E,b as S,d as m,e as p,g as w}from"../../../_chunks/chunk-SIFYXVFG.js";import{a,c as n,d as c,f as d,g as v}from"../../../_chunks/chunk-FEDAVPE7.js";var T=n(d(),1);var u=n(v(),1),F=n(d(),1);var o=n(d(),1);var g;(t=>{function C(e){return{hint:(0,o.coalesce)(e.hint,"Excel"),title:(0,o.coalesce)(e.title,""),cssClass:"export-xlsx-button",icon:"fa-file-excel-o",onClick:function(){if(!e.onViewSubmit())return;let x=e.grid;var r=(0,o.deepClone)(x.getView().params);r.Take=0,r.Skip=0;var y=x.getView().sortBy;y&&(r.Sort=y),r.ExportColumns=[];let b=x.getGrid().getColumns();for(let h of b)r.ExportColumns.push(h.id||h.field);e.editRequest&&(r=e.editRequest(r)),(0,o.postToService)({service:e.service,request:r,target:"_blank"})},separator:e.separator}}t.createToolButton=C,a(C,"createToolButton")})(g||(g={}));var f=n(v(),1),s=n(d(),1);var i=class extends f.PropertyDialog{constructor(){super();this.form=new S(this.idPrefix)}getDialogTitle(){return"Excel Import"}getDialogButtons(){return[{text:"Import",click:()=>{if(this.validateBeforeSave()){if(this.form.FileName.value==null||(0,s.isEmptyOrNull)(this.form.FileName.value.Filename)){(0,s.notifyError)("Please select a file!");return}p.ExcelImport({FileName:this.form.FileName.value.Filename},e=>{(0,s.notifyInfo)("Inserted: "+(e.Inserted||0)+", Updated: "+(e.Updated||0)),e.ErrorList!=null&&e.ErrorList.length>0&&(0,s.notifyError)(e.ErrorList.join(`,\r
 `)),this.dialogClose()})}}},{text:"Cancel",click:()=>this.dialogClose()}]}};a(i,"CategoriesExcelImportDialog"),i=c([f.Decorators.registerClass("Store.Store.CategoriesExcelImportDialog")],i);var l=class extends u.EntityGrid{getColumnsKey(){return E.columnsKey}getDialogType(){return B}getIdProperty(){return m.idProperty}getInsertPermission(){return m.insertPermission}getLocalTextPrefix(){return m.localTextPrefix}getService(){return p.baseUrl}constructor(t){super(t)}getQuickFilters(){var t=super.getQuickFilters();return t.push({type:u.LookupEditor,options:{lookupKey:w.lookupKey},field:"CategoriesID",title:"CategoriesType",handler:e=>{this.view.params.CategoryName=(0,F.toId)(e.value)},cssClass:"hidden-xs"}),t}getDefaultSortBy(){return[m.Fields.CategoryCode]}getButtons(){var t=super.getButtons();return t.push(g.createToolButton({title:"Export To Excel",grid:this,service:p.baseUrl+"/ListExcel",onViewSubmit:()=>this.onViewSubmit(),separator:!0})),t.push({title:"Import From Excel",cssClass:"export-xlsx-button",onClick:()=>{var e=new i;e.element.on("dialogclose",()=>{this.refresh(),e=null}),e.dialogOpen()}}),t}};a(l,"CategoriesGrid"),l=c([u.Decorators.registerClass("Store.Store.CategoriesGrid")],l);$(function(){(0,T.initFullHeightGridPage)(new l($("#GridDiv")).element)});
//# sourceMappingURL=CategoriesPage.js.map
