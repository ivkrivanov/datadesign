import{P as a,Q as c,R as e,S as s}from"../../../_chunks/chunk-NQNNAIF5.js";import{a as o,c as m,d as i,f as g,g as u}from"../../../_chunks/chunk-FEDAVPE7.js";var l=m(g(),1);var p=m(u(),1);var n=m(u(),1);var r=class extends n.EntityDialog{constructor(){super(...arguments);this.form=new c(this.idPrefix)}getFormKey(){return c.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return s.baseUrl}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}};o(r,"ShippersDialog"),r=i([n.Decorators.registerClass("Company.Store.ShippersDialog")],r);var t=class extends p.EntityGrid{getColumnsKey(){return a.columnsKey}getDialogType(){return r}getIdProperty(){return e.idProperty}getInsertPermission(){return e.insertPermission}getLocalTextPrefix(){return e.localTextPrefix}getService(){return s.baseUrl}constructor(d){super(d)}};o(t,"ShippersGrid"),t=i([p.Decorators.registerClass("Company.Store.ShippersGrid")],t);$(function(){(0,l.initFullHeightGridPage)(new t($("#GridDiv")).element)});
//# sourceMappingURL=ShippersPage.js.map
