import{a as C}from"../../../_chunks/chunk-3TQWCOWC.js";import{h as D,o as x,p as y,q as p,r as t,s as c}from"../../../_chunks/chunk-NDBDVNJT.js";import{a,c as o,d as u,f as d,g as P}from"../../../_chunks/chunk-FEDAVPE7.js";var U=o(d(),1);var h=o(P(),1),b=o(d(),1);var I=o(P(),1),r=o(d(),1);var m=class extends I.TemplatedDialog{constructor(e){super(e);this.permissions=new C(this.byId("Permissions"),{showRevoke:!0}),p.List({UserID:this.options.userID,Module:null,Submodule:null},s=>{this.permissions.value=s.Entities}),p.ListRolePermissions({UserID:this.options.userID,Module:null,Submodule:null},s=>{this.permissions.rolePermissions=s.Entities}),this.permissions.implicitPermissions=(0,r.getRemoteData)("Administration.ImplicitPermissions"),this.dialogTitle=(0,r.format)((0,r.localText)("Site.UserPermissionDialog.DialogTitle"),this.options.username)}getDialogButtons(){return[{text:(0,r.localText)("Dialogs.OkButton"),cssClass:"btn btn-primary",click:e=>{p.Update({UserID:this.options.userID,Permissions:this.permissions.value,Module:null,Submodule:null},s=>{this.dialogClose(),window.setTimeout(()=>(0,r.notifySuccess)((0,r.localText)("Site.UserPermissionDialog.SaveSuccess")),0)})}},{text:(0,r.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}]}getTemplate(){return'<div id="~_Permissions"></div>'}};a(m,"UserPermissionDialog");var g=o(P(),1),f=o(d(),1);var i=class extends g.EntityDialog{constructor(){super();this.form=new y(this.idPrefix);this.form.Password.addValidationRule(this.uniqueName,e=>{if(this.form.Password.value.length<7)return"Password must be at least 7 characters!"}),this.form.PasswordConfirm.addValidationRule(this.uniqueName,e=>{if(this.form.Password.value!=this.form.PasswordConfirm.value)return"The passwords entered doesn't match!"})}getFormKey(){return y.formKey}getIdProperty(){return t.idProperty}getIsActiveProperty(){return t.isActiveProperty}getLocalTextPrefix(){return t.localTextPrefix}getNameProperty(){return t.nameProperty}getService(){return c.baseUrl}getToolbarButtons(){let e=super.getToolbarButtons();return e.push({title:(0,f.localText)("Site.UserDialog.EditPermissionsButton"),cssClass:"edit-permissions-button",icon:"fa-lock text-green",onClick:()=>{new m({userID:this.entity.UserId,username:this.entity.Username}).dialogOpen()}}),e}updateInterface(){super.updateInterface(),this.toolbar.findButton("edit-roles-button").toggleClass("disabled",this.isNewOrDeleted()),this.toolbar.findButton("edit-permissions-button").toggleClass("disabled",this.isNewOrDeleted())}afterLoadEntity(){super.afterLoadEntity(),this.form.Password.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew()),this.form.PasswordConfirm.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew())}getPropertyItems(){var e=super.getPropertyItems();return f.Authorization.hasPermission("Administration:Tenants")||(e=e.filter(s=>s.name!=t.Fields.TenantId)),e}};a(i,"UserDialog"),i=u([g.Decorators.registerClass()],i);var n=class extends h.EntityGrid{getColumnsKey(){return x.columnsKey}getDialogType(){return i}getIdProperty(){return t.idProperty}getIsActiveProperty(){return t.isActiveProperty}getLocalTextPrefix(){return t.localTextPrefix}getService(){return c.baseUrl}constructor(l){super(l)}getDefaultSortBy(){return[t.Fields.Username]}getColumns(){var l=super.getColumns(),e=(0,b.tryFirst)(l,s=>s.field==t.Fields.Roles);return e&&(e.format=s=>{var v=(s.value||[]).map(T=>(D.getLookup().itemById[T]||{}).RoleName||"");return v.sort(),v.join(", ")}),l}};a(n,"UserGrid"),n=u([h.Decorators.registerClass()],n);$(function(){(0,U.initFullHeightGridPage)(new n($("#GridDiv")).element)});
//# sourceMappingURL=UserPage.js.map
