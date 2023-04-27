import{a as I}from"../../../_chunks/chunk-JAA36G5N.js";import"../../../_chunks/chunk-CXKY5VTN.js";import{h as C,o as x,p as w,q as g,r as t,s as h}from"../../../_chunks/chunk-FLDQVI53.js";import{a as f}from"../../../_chunks/chunk-P2OFJRRD.js";import{a as m,b as i,c as p,e as y,f as c}from"../../../_chunks/chunk-RK3EK3FG.js";var T=i(c(),1);var P=i(y(),1),U=i(c(),1);var b=i(y(),1),r=i(c(),1);var d=class extends b.TemplatedDialog{constructor(e){super(e);this.permissions=new I(this.byId("Permissions"),{showRevoke:!0}),g.List({UserID:this.options.userID,Module:null,Submodule:null},s=>{this.permissions.value=s.Entities}),g.ListRolePermissions({UserID:this.options.userID,Module:null,Submodule:null},s=>{this.permissions.rolePermissions=s.Entities}),this.permissions.implicitPermissions=(0,r.getRemoteData)("Administration.ImplicitPermissions"),this.dialogTitle=(0,r.format)((0,r.localText)("Site.UserPermissionDialog.DialogTitle"),this.options.username)}getDialogButtons(){return[{text:(0,r.localText)("Dialogs.OkButton"),cssClass:"btn btn-primary",click:e=>{g.Update({UserID:this.options.userID,Permissions:this.permissions.value,Module:null,Submodule:null},s=>{this.dialogClose(),window.setTimeout(()=>(0,r.notifySuccess)((0,r.localText)("Site.UserPermissionDialog.SaveSuccess")),0)})}},{text:(0,r.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}]}getTemplate(){return'<div id="~_Permissions"></div>'}};m(d,"UserPermissionDialog");var u=i(y(),1),o=i(c(),1);var n=class extends u.EntityDialog{constructor(){super();this.form=new w(this.idPrefix);this.form.Password.change(()=>{u.EditorUtils.setRequired(this.form.PasswordConfirm,this.form.Password.value.length>0)}),this.form.Password.addValidationRule(this.uniqueName,e=>{if(this.form.Password.value.length<6)return(0,o.format)((0,o.localText)(f.Validation.MinRequiredPasswordLength),6)}),this.form.PasswordConfirm.addValidationRule(this.uniqueName,e=>{if(this.form.Password.value!=this.form.PasswordConfirm.value)return(0,o.localText)(f.Validation.PasswordConfirmMismatch)})}getFormKey(){return w.formKey}getIdProperty(){return t.idProperty}getIsActiveProperty(){return t.isActiveProperty}getLocalTextPrefix(){return t.localTextPrefix}getNameProperty(){return t.nameProperty}getService(){return h.baseUrl}getToolbarButtons(){let e=super.getToolbarButtons();return e.push({title:(0,o.localText)(f.Site.UserDialog.EditPermissionsButton),cssClass:"edit-permissions-button",icon:"fa-lock text-green",onClick:()=>{new d({userID:this.entity.UserId,username:this.entity.Username}).dialogOpen()}}),e}updateInterface(){super.updateInterface(),this.toolbar.findButton("edit-roles-button").toggleClass("disabled",this.isNewOrDeleted()),this.toolbar.findButton("edit-permissions-button").toggleClass("disabled",this.isNewOrDeleted())}afterLoadEntity(){super.afterLoadEntity(),this.form.Password.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew()),this.form.PasswordConfirm.element.toggleClass("required",this.isNew()).closest(".field").find("sup").toggle(this.isNew())}getPropertyItems(){var e=super.getPropertyItems();return o.Authorization.hasPermission("Administration:Tenants")||(e=e.filter(s=>s.name!=t.Fields.TenantId)),e}};m(n,"UserDialog"),n=p([u.Decorators.registerClass()],n);var l=class extends P.EntityGrid{getColumnsKey(){return x.columnsKey}getDialogType(){return n}getIdProperty(){return t.idProperty}getIsActiveProperty(){return t.isActiveProperty}getLocalTextPrefix(){return t.localTextPrefix}getService(){return h.baseUrl}constructor(a){super(a)}getDefaultSortBy(){return[t.Fields.Username]}getColumns(){var a=super.getColumns(),e=(0,U.tryFirst)(a,s=>s.field==t.Fields.Roles);return e&&(e.format=s=>{var D=(s.value||[]).map(R=>(C.getLookup().itemById[R]||{}).RoleName||"");return D.sort(),D.join(", ")}),a}};m(l,"UserGrid"),l=p([P.Decorators.registerClass()],l);$(function(){(0,T.initFullHeightGridPage)(new l($("#GridDiv")).element)});
//# sourceMappingURL=UserPage.js.map
