import{B as C,a as x,c as s,d as p}from"../../../_chunks/chunk-SVIQE756.js";import{a as n,c,d,f,g as b}from"../../../_chunks/chunk-FEDAVPE7.js";var y=c(f(),1);var a=c(b(),1);var r=c(f(),1);var u;(i=>{function E(e){return{hint:(0,r.coalesce)(e.hint,"Excel"),title:(0,r.coalesce)(e.title,""),cssClass:"export-xlsx-button",icon:"fa-file-excel-o",onClick:function(){if(!e.onViewSubmit())return;let l=e.grid;var t=(0,r.deepClone)(l.getView().params);t.Take=0,t.Skip=0;var m=l.getView().sortBy;m&&(t.Sort=m),t.ExportColumns=[];let S=l.getGrid().getColumns();for(let g of S)t.ExportColumns.push(g.id||g.field);e.editRequest&&(t=e.editRequest(t)),(0,r.postToService)({service:e.service,request:t,target:"_blank"})},separator:e.separator}}i.createToolButton=E,n(E,"createToolButton")})(u||(u={}));var o=class extends a.EntityGrid{getColumnsKey(){return x.columnsKey}getDialogType(){return C}getIdProperty(){return s.idProperty}getInsertPermission(){return s.insertPermission}getLocalTextPrefix(){return s.localTextPrefix}getService(){return p.baseUrl}constructor(i){super(i)}getDefaultSortBy(){return[s.Fields.CategoryCode]}getButtons(){var i=super.getButtons();return i.push(u.createToolButton({title:"Export To Excel",grid:this,service:p.baseUrl+"/ListExcel",onViewSubmit:()=>this.onViewSubmit(),separator:!0})),i}};n(o,"CategoriesGrid"),o=d([a.Decorators.registerClass("Store.Store.CategoriesGrid")],o);$(function(){(0,y.initFullHeightGridPage)(new o($("#GridDiv")).element)});
//# sourceMappingURL=CategoriesPage.js.map
