import{j as u,k as m,l as e,m as i}from"../../../_chunks/chunk-QEVNXHVC.js";import{a as o,c as a,d as n,f,g as d}from"../../../_chunks/chunk-FEDAVPE7.js";var y=a(f(),1);var p=a(d(),1);var t=class extends p.EntityDialog{constructor(){super(...arguments);this.form=new m(this.idPrefix)}getFormKey(){return m.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return i.baseUrl}};o(t,"TenantDialog"),t=n([p.Decorators.registerClass("Company.Administration.Tenant")],t);var c=a(d(),1);var r=class extends c.EntityGrid{useAsync(){return!0}getColumnsKey(){return u.columnsKey}getDialogType(){return t}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return i.baseUrl}constructor(s){super(s)}afterInit(){super.afterInit()}getDefaultSortBy(){return[e.Fields.TenantName]}};o(r,"TenantGrid"),r=n([c.Decorators.registerClass("Company.Administration.TenantGrid")],r);$(function(){(0,y.initFullHeightGridPage)(new r($("#GridDiv")).element)});
//# sourceMappingURL=TenantPage.js.map
