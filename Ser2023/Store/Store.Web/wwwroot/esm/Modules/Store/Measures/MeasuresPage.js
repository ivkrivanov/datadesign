import{p as a,q as m,r as e,s as i}from"../../../_chunks/chunk-U2RPTSI3.js";import{a as o,c,d as s,f as g,g as d}from"../../../_chunks/chunk-FEDAVPE7.js";var l=c(g(),1);var p=c(d(),1);var n=c(d(),1);var r=class extends n.EntityDialog{constructor(){super(...arguments);this.form=new m(this.idPrefix)}getFormKey(){return m.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return i.baseUrl}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}};o(r,"MeasuresDialog"),r=s([n.Decorators.registerClass("Store.Store.MeasuresDialog")],r);var t=class extends p.EntityGrid{getColumnsKey(){return a.columnsKey}getDialogType(){return r}getIdProperty(){return e.idProperty}getInsertPermission(){return e.insertPermission}getLocalTextPrefix(){return e.localTextPrefix}getService(){return i.baseUrl}constructor(u){super(u)}getDefaultSortBy(){return[e.Fields.MeasureId]}};o(t,"MeasuresGrid"),t=s([p.Decorators.registerClass("Store.Store.MeasuresGrid")],t);$(function(){(0,l.initFullHeightGridPage)(new t($("#GridDiv")).element)});
//# sourceMappingURL=MeasuresPage.js.map