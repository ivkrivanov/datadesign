import{r as a,s as m,t as e,u as n}from"../../../_chunks/chunk-MM7FEJZM.js";import{a as o,c,d as i,f as P,g as u}from"../../../_chunks/chunk-FEDAVPE7.js";var l=c(P(),1);var s=c(u(),1);var p=c(u(),1);var r=class extends p.EntityDialog{constructor(){super(...arguments);this.form=new m(this.idPrefix)}getFormKey(){return m.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return n.baseUrl}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}};o(r,"OperationTypeDialog"),r=i([p.Decorators.registerClass("Store.Store.OperationTypeDialog")],r);var t=class extends s.EntityGrid{getColumnsKey(){return a.columnsKey}getDialogType(){return r}getIdProperty(){return e.idProperty}getInsertPermission(){return e.insertPermission}getLocalTextPrefix(){return e.localTextPrefix}getService(){return n.baseUrl}constructor(d){super(d)}getDefaultSortBy(){return[e.Fields.OpCode]}};o(t,"OperationTypeGrid"),t=i([s.Decorators.registerClass("Store.Store.OperationTypeGrid")],t);$(function(){(0,l.initFullHeightGridPage)(new t($("#GridDiv")).element)});
//# sourceMappingURL=OperationTypePage.js.map
