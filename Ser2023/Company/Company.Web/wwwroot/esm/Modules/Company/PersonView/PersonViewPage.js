import{G as f,H as c,I as n,J as i}from"../../../_chunks/chunk-U54JSELU.js";import{a as t,c as p,d as o,f as l,g as u}from"../../../_chunks/chunk-FEDAVPE7.js";var y=p(l(),1);var s=p(u(),1);var m=p(u(),1);var e=class extends m.EntityDialog{constructor(){super(...arguments);this.form=new c(this.idPrefix)}getFormKey(){return c.formKey}getRowDefinition(){return n}getService(){return i.baseUrl}};t(e,"PersonViewDialog"),e=o([m.Decorators.registerClass("Company.Company.PersonViewDialog")],e);var r=class extends s.EntityGrid{getColumnsKey(){return f.columnsKey}getDialogType(){return e}getRowDefinition(){return n}getService(){return i.baseUrl}constructor(a){super(a)}};t(r,"PersonViewGrid"),r=o([s.Decorators.registerClass("Company.Company.PersonViewGrid")],r);function g(){(0,y.initFullHeightGridPage)(new r($("#GridDiv")).element)}t(g,"pageInit");export{g as default};
//# sourceMappingURL=PersonViewPage.js.map
