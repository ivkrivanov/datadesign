import{a,c as m,d as e,e as n}from"../../../_chunks/chunk-FYGCHMUP.js";import{a as o,b as d,c as i,e as u,f as y}from"../../../_chunks/chunk-RK3EK3FG.js";var g=d(y(),1);var p=d(u(),1);var s=d(u(),1);var r=class extends s.EntityDialog{constructor(){super(...arguments);this.form=new m(this.idPrefix)}getFormKey(){return m.formKey}getRowDefinition(){return e}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}getService(){return n.baseUrl}};o(r,"AddressDialog"),r=i([s.Decorators.registerClass("Company.Company.AddressDialog")],r);var t=class extends p.EntityGrid{getColumnsKey(){return a.columnsKey}getDialogType(){return r}getIdProperty(){return e.idProperty}getInsertPermission(){return e.insertPermission}getLocalTextPrefix(){return e.localTextPrefix}getRowDefinition(){return e}getService(){return n.baseUrl}constructor(c){super(c)}};o(t,"AddressGrid"),t=i([p.Decorators.registerClass("Company.Company.AddressGrid")],t);function P(){(0,g.initFullHeightGridPage)(new t($("#GridDiv")).element)}o(P,"pageInit");export{P as default};
//# sourceMappingURL=AddressPage.js.map
