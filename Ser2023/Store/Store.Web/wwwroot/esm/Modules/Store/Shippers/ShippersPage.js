import{u as l,v as c,w as e,x as s}from"../../../_chunks/chunk-6VP3PB7X.js";import{a as o,b as m,c as i,e as g,f as u}from"../../../_chunks/chunk-K3EI6ARL.js";var P=m(g(),1);var p=m(u(),1);var n=m(u(),1);var r=class extends n.EntityDialog{constructor(){super(...arguments);this.form=new c(this.idPrefix)}getFormKey(){return c.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return s.baseUrl}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}};o(r,"ShippersDialog"),r=i([n.Decorators.registerClass("Store.Store.ShippersDialog")],r);var t=class extends p.EntityGrid{getColumnsKey(){return l.columnsKey}getDialogType(){return r}getIdProperty(){return e.idProperty}getInsertPermission(){return e.insertPermission}getLocalTextPrefix(){return e.localTextPrefix}getService(){return s.baseUrl}constructor(d){super(d)}};o(t,"ShippersGrid"),t=i([p.Decorators.registerClass("Store.Store.ShippersGrid")],t);$(function(){(0,P.initFullHeightGridPage)(new t($("#GridDiv")).element)});
//# sourceMappingURL=ShippersPage.js.map
