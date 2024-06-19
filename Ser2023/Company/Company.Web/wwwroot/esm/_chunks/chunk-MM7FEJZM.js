import{a as r,b as Zt,c as o,d as x,e as m,f as c,g}from"./chunk-FEDAVPE7.js";var Ye=Zt((_t,_e)=>{_e.exports=Serenity.Extensions});var qe=class{};r(qe,"CategoriesColumns"),qe.columnsKey="Store.Categories";var je=o(g(),1);var Te=o(g(),1),we=o(c(),1);var ve=class extends Te.PrefixedContext{constructor(a){if(super(a),!ve.init){ve.init=!0;var e=Te.ImageUploadEditor;(0,we.initFormType)(ve,["FileName",e])}}},Ue=ve;r(Ue,"CategoriesExcelImportForm"),Ue.formKey="Store.CategoriesExcelImport";var ee=o(g(),1),et=o(c(),1);var ge=class extends ee.PrefixedContext{constructor(a){if(super(a),!ge.init){ge.init=!0;var e=ee.LookupEditor,t=ee.StringEditor;(0,et.initFormType)(ge,["CategoryTypeId",e,"CategoryCode",t,"CategoryName",t,"Description",t,"Picture",t])}}},he=ge;r(he,"CategoriesForm"),he.formKey="Store.Categories";var tt=o(c(),1);var O=class{};r(O,"CategoriesLangRow"),O.idProperty="Id",O.nameProperty="CategoryName",O.localTextPrefix="Store.CategoriesLang",O.deletePermission="Store:General",O.insertPermission="Store:General",O.readPermission="Store:General",O.updatePermission="Store:General",O.Fields=(0,tt.fieldsProxy)();var ot=o(c(),1),rt;(e=>(e.baseUrl="Store/CategoriesLang",e.Methods={Create:"Store/CategoriesLang/Create",Update:"Store/CategoriesLang/Update",Delete:"Store/CategoriesLang/Delete",Retrieve:"Store/CategoriesLang/Retrieve",List:"Store/CategoriesLang/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,ot.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(rt||(rt={}));var te=o(c(),1);var b=class{static getLookup(){return(0,te.getLookup)("Store.Categories")}static getLookupAsync(){return m(this,null,function*(){return(0,te.getLookupAsync)("Store.Categories")})}};r(b,"CategoriesRow"),b.idProperty="CategoryId",b.isActiveProperty="IsActive",b.nameProperty="CategoryName",b.localTextPrefix="Store.Categories",b.lookupKey="Store.Categories",b.deletePermission="Store:CategoriesType:Delete",b.insertPermission="Store:CategoriesType:Modify",b.readPermission="Store:CategoriesType:View",b.updatePermission="Store:CategoriesType:Modify",b.Fields=(0,te.fieldsProxy)();var it=o(c(),1),st;(e=>(e.baseUrl="Store/Categories",e.Methods={Create:"Store/Categories/Create",Update:"Store/Categories/Update",Delete:"Store/Categories/Delete",Retrieve:"Store/Categories/Retrieve",List:"Store/Categories/List",ExcelImport:"Store/Categories/ExcelImport"},["Create","Update","Delete","Retrieve","List","ExcelImport"].forEach(t=>{e[t]=function(s,i,p){return(0,it.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(st||(st={}));var Ee=class{};r(Ee,"CategoriesTypeColumns"),Ee.columnsKey="Store.CategoriesType";var re=o(g(),1),nt=o(c(),1);var xe=class extends re.PrefixedContext{constructor(a){if(super(a),!xe.init){xe.init=!0;var e=re.IntegerEditor,t=re.StringEditor;(0,nt.initFormType)(xe,["Type",e,"CategoryType",t])}}},G=xe;r(G,"CategoriesTypeForm"),G.formKey="Store.CategoriesType";var oe=o(c(),1);var y=class{static getLookup(){return(0,oe.getLookup)("Store.CategoriesType")}static getLookupAsync(){return m(this,null,function*(){return(0,oe.getLookupAsync)("Store.CategoriesType")})}};r(y,"CategoriesTypeRow"),y.idProperty="CategoryTypeId",y.isActiveProperty="IsActive",y.nameProperty="CategoryType",y.localTextPrefix="Store.CategoriesType",y.lookupKey="Store.CategoriesType",y.deletePermission="Store:CategoriesType:Delete",y.insertPermission="Store:CategoriesType:Modify",y.readPermission="Store:CategoriesType:View",y.updatePermission="Store:CategoriesType:Modify",y.Fields=(0,oe.fieldsProxy)();var at=o(c(),1),Oe;(e=>(e.baseUrl="Store/CategoriesType",e.Methods={Create:"Store/CategoriesType/Create",Update:"Store/CategoriesType/Update",Delete:"Store/CategoriesType/Delete",Retrieve:"Store/CategoriesType/Retrieve",List:"Store/CategoriesType/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,at.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(Oe||(Oe={}));var pt=o(g(),1);var se=class{format(a){var e=a.value;if(!e||!e.length)return"";var t=P.getLookup().itemById;let s;return e.map(i=>(s=t[i])?s.FullName:i).join(", ")}};r(se,"EmployeeListFormatter"),se=x([pt.Decorators.registerFormatter("Company.Store.EmployeeListFormatter")],se);var ke=class{};r(ke,"CounterpartiesColumns"),ke.columnsKey="Store.Counterparties";var E=o(g(),1);var K=o(g(),1),u=o(c(),1);var R=class extends K.StringEditor{constructor(e){super(e);this.addValidationRule(this.uniqueName,t=>{var s=(0,u.trimToNull)(this.get_value());return s==null?null:R.validate(s,this.multiple)}),e.bind("change",t=>{K.WX.hasOriginalEvent(t)&&this.formatValue()}),e.bind("blur",t=>{this.element.hasClass("valid")&&this.formatValue()})}formatValue(){this.element.val(this.getFormattedValue())}getFormattedValue(){var e=this.element.val();return this.multiple?R.formatMulti(e,R.formatPhone):R.formatPhone(e)}get_value(){return this.getFormattedValue()}set_value(e){this.element.val(e)}static validate(e,t){var s=t?R.isValidMulti(e,R.isValidPhone):R.isValidPhone(e);return s?null:(0,u.localText)(t?"Validation.StorePhoneMultiple":"Validation.StorePhone")}static isValidPhone(e){if((0,u.isEmptyOrNull)(e)||(e=(0,u.replaceAll)((0,u.replaceAll)(e," ",""),"-",""),e.length<10)||((0,u.startsWith)(e,"0")&&(e=e.substring(1)),(0,u.startsWith)(e,"(")&&e.charAt(4)===")"&&(e=e.substr(1,3)+e.substring(5)),e.length!==12)||(0,u.startsWith)(e,"0"))return!1;for(var t=0;t<e.length;t++){var s=e.charAt(t);if(s<"0"||s>"9")return!1}return!0}static formatPhone(e){return R.isValidPhone(e)&&(e=(0,u.replaceAll)((0,u.replaceAll)((0,u.replaceAll)((0,u.replaceAll)(e," ",""),"-",""),"(",""),")",""),(0,u.startsWith)(e,"0")&&(e=e.substring(1)),e="("+e.substr(0,3)+") "+e.substr(3,3)+"-"+e.substr(6,2)+e.substr(8,2)+e.substr(10,2)),e}static formatMulti(e,t){var s=(0,u.replaceAll)(e,String.fromCharCode(59),String.fromCharCode(44)).split(String.fromCharCode(44)),i="";for(var p of s){var l=(0,u.trimToNull)(p);l!=null&&(i.length>0&&(i+=", "),i+=t(l))}return i}static isValidMulti(e,t){if((0,u.isEmptyOrNull)(e))return!1;for(var s=(0,u.replaceAll)(e,String.fromCharCode(59),String.fromCharCode(44)).split(String.fromCharCode(44)),i=!1,p=0;p<s.length;p++){var l=s[p],A=(0,u.trimToNull)(l);if(A!=null){if(!t(A))return!1;i=!0}}return!!i}};r(R,"PhoneEditor"),x([K.Decorators.option()],R.prototype,"multiple",2),R=x([K.Decorators.registerEditor("Company.PhoneEditor")],R);var k=o(g(),1),C=o(c(),1);var ie=o(g(),1),Ze=o(c(),1);var F=class extends ie.TemplatedDialog{constructor(){super();this.textEditor=new ie.HtmlNoteContentEditor(this.byId("Text"))}getTemplate(){return"<form id='~_Form' class='s-Form'><textarea id='~_Text' class='required'></textarea></form>"}getDialogButtons(){return[{text:(0,Ze.localText)("Dialogs.OkButton"),click:()=>{this.validateForm()&&this.okClick&&this.okClick()}},{text:(0,Ze.localText)("Dialogs.CancelButton"),click:()=>this.dialogClose()}]}get text(){return this.textEditor.value}set text(e){this.textEditor.value=e}};r(F,"NotesDialog"),F=x([ie.Decorators.registerClass("Company.Store.NotesDialog")],F);var z=class extends k.TemplatedWidget{constructor(e){super(e);new k.Toolbar(this.byId("Toolbar"),{buttons:[{title:"Add Note",cssClass:"add-button",onClick:t=>{t.preventDefault(),this.addClick()}}]})}getTemplate(){return"<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>"}updateContent(){var e=this.byId("NoteList");if(e.children().remove(),this.items)for(var t=0,s=0;s<this.items.length;s++){var i=this.items[s],p=$("<li/>");$("<div/>").addClass("note-text").html((0,C.coalesce)(i.Text,"")).appendTo(p),$("<a/>").attr("href","#").addClass("note-date").text(i.InsertUserDisplayName+" - "+(0,C.formatDate)(i.InsertDate,"g")).data("index",t).appendTo(p).click(l=>this.editClick(l)),$("<a/>").attr("href","#").addClass("note-delete").attr("title","delete note").data("index",t).appendTo(p).click(l=>this.deleteClick(l)),p.appendTo(e),t++}}addClick(){var e=new F;e.dialogTitle="Add Note",e.okClick=()=>{var t=(0,C.trimToNull)(e.text);t!=null&&(this.items=this.items||[],(0,C.insert)(this.items,0,{Text:t,InsertUserDisplayName:C.Authorization.userDefinition.DisplayName,InsertDate:(0,C.formatISODateTimeUTC)(new Date)}),this.updateContent(),e.dialogClose(),this.set_isDirty(!0),this.onChange&&this.onChange())},e.dialogOpen()}editClick(e){e.preventDefault();var t=$(e.target).data("index"),s=this.items[t],i=new F;i.dialogTitle="Edit Note",i.text=s.Text,i.okClick=()=>{var p=(0,C.trimToNull)(i.text);p&&(this.items[t].Text=p,this.updateContent(),i.dialogClose(),this.set_isDirty(!0),this.onChange&&this.onChange())},i.dialogOpen()}deleteClick(e){e.preventDefault();var t=$(e.target).data("index");(0,C.confirmDialog)("Delete this note?",()=>{this.items.splice(t,1),this.updateContent(),this.set_isDirty(!0),this.onChange&&this.onChange()})}get value(){return this.items}set value(e){this.items=e||[],this.set_isDirty(!1),this.updateContent()}getEditValue(e,t){t[e.name]=this.value}setEditValue(e,t){this.value=e[t.name]||[]}get_isDirty(){return this.isDirty}set_isDirty(e){this.isDirty=e}};r(z,"NotesEditor"),z=x([k.Decorators.registerEditor("Company.Store.NotesEditor",[k.IGetEditValue,k.ISetEditValue]),k.Decorators.element("<div/>")],z);var ct=o(c(),1);var Re=class extends E.PrefixedContext{constructor(a){if(super(a),!Re.init){Re.init=!0;var e=E.StringEditor,t=E.LookupEditor,s=R,i=z,p=E.DateEditor,l=E.EmailEditor,A=E.BooleanEditor;(0,ct.initFormType)(Re,["CounterpartyId",e,"CompanyName",e,"ContactName",e,"ContactTitle",e,"Representatives",t,"Address",e,"Country",t,"City",t,"Region",e,"PostalCode",e,"Phone",s,"NotesList",i,"LastContactDate",p,"LastContactedBy",t,"Email",l,"SendBulletin",A])}}},Ne=Re;r(Ne,"CounterpartiesForm"),Ne.formKey="Store.Counterparties";var ne=o(c(),1);var q=class{static getLookup(){return(0,ne.getLookup)("Store.Counterparties")}static getLookupAsync(){return m(this,null,function*(){return(0,ne.getLookupAsync)("Store.Counterparties")})}};r(q,"CounterpartiesRow"),q.idProperty="Id",q.isActiveProperty="IsActive",q.nameProperty="CounterpartyId",q.localTextPrefix="Store.Counterparties",q.lookupKey="Store.Counterparties",q.deletePermission="Store:Counterparties:Delete",q.insertPermission="Store:Counterparties:Modify",q.readPermission="Store:Counterparties:View",q.updatePermission="Store:Counterparties:Modify",q.Fields=(0,ne.fieldsProxy)();var ut=o(c(),1),dt;(e=>(e.baseUrl="Store/Counterparties",e.Methods={Create:"Store/Counterparties/Create",Update:"Store/Counterparties/Update",Delete:"Store/Counterparties/Delete",Retrieve:"Store/Counterparties/Retrieve",List:"Store/Counterparties/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,ut.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(dt||(dt={}));var lt=o(c(),1);var N=class{};r(N,"CounterpartyDetailsRow"),N.idProperty="Id",N.nameProperty="Email",N.localTextPrefix="Store.CounterpartyDetails",N.deletePermission="Store:Counterparties:Delete",N.insertPermission="Store:Counterparties:Modify",N.readPermission="Store:Counterparties:View",N.updatePermission="Store:Counterparties:Modify",N.Fields=(0,lt.fieldsProxy)();var mt=o(c(),1);var J=class{};r(J,"CounterpartyRepresentativesRow"),J.idProperty="RepresentativeId",J.localTextPrefix="Store.CounterpartyRepresentatives",J.deletePermission="Store:Counterparties:Delete",J.insertPermission="Store:Counterparties:Modify",J.readPermission="Store:Counterparties:View",J.updatePermission="Store:Counterparties:Modify",J.Fields=(0,mt.fieldsProxy)();var ae=o(c(),1);var P=class{static getLookup(){return(0,ae.getLookup)("Store.Employees")}static getLookupAsync(){return m(this,null,function*(){return(0,ae.getLookupAsync)("Store.Employees")})}};r(P,"EmployeesRow"),P.idProperty="EmployeeId",P.isActiveProperty="IsActive",P.nameProperty="LastName",P.localTextPrefix="Store.Employees",P.lookupKey="Store.Employees",P.deletePermission="Store:General",P.insertPermission="Store:General",P.readPermission="Store:General",P.updatePermission="Store:General",P.Fields=(0,ae.fieldsProxy)();var yt=o(g(),1),St=(e=>(e[e.Male=1]="Male",e[e.Female=2]="Female",e))(St||{});yt.Decorators.registerEnumType(St,"Company.Store.Gender");var Qe=class{};r(Qe,"MeasuresColumns"),Qe.columnsKey="Store.Measures";var Me=o(g(),1),ft=o(c(),1);var Pe=class extends Me.PrefixedContext{constructor(a){if(super(a),!Pe.init){Pe.init=!0;var e=Me.StringEditor;(0,ft.initFormType)(Pe,["MeasureName",e])}}},j=Pe;r(j,"MeasuresForm"),j.formKey="Store.Measures";var pe=o(c(),1);var S=class{static getLookup(){return(0,pe.getLookup)("Store.Measures")}static getLookupAsync(){return m(this,null,function*(){return(0,pe.getLookupAsync)("Store.Measures")})}};r(S,"MeasuresRow"),S.idProperty="MeasureId",S.isActiveProperty="IsActive",S.nameProperty="MeasureName",S.localTextPrefix="Store.Measures",S.lookupKey="Store.Measures",S.deletePermission="Store:Measures:Delete",S.insertPermission="Store:Measures:Modify",S.readPermission="Store:Measures:View",S.updatePermission="Store:Measures:Modify",S.Fields=(0,pe.fieldsProxy)();var vt=o(c(),1),He;(e=>(e.baseUrl="Store/Measures",e.Methods={Create:"Store/Measures/Create",Update:"Store/Measures/Update",Delete:"Store/Measures/Delete",Retrieve:"Store/Measures/Retrieve",List:"Store/Measures/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,vt.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(He||(He={}));var gt=o(c(),1);var Q=class{};r(Q,"NotesRow"),Q.idProperty="NoteId",Q.nameProperty="EntityType",Q.localTextPrefix="Store.Notes",Q.deletePermission="Store:General",Q.insertPermission="Store:General",Q.readPermission="Store:General",Q.updatePermission="Store:General",Q.Fields=(0,gt.fieldsProxy)();var Rt=o(c(),1),xt;(e=>(e.baseUrl="Store/Notes",e.Methods={Create:"Store/Notes/Create",Update:"Store/Notes/Update",Delete:"Store/Notes/Delete",Retrieve:"Store/Notes/Retrieve",List:"Store/Notes/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,Rt.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(xt||(xt={}));var Ae=class{};r(Ae,"OperationTypeColumns"),Ae.columnsKey="Store.OperationType";var ce=o(g(),1),Pt=o(c(),1);var Ce=class extends ce.PrefixedContext{constructor(a){if(super(a),!Ce.init){Ce.init=!0;var e=ce.IntegerEditor,t=ce.StringEditor;(0,Pt.initFormType)(Ce,["OpCode",e,"Operation",t])}}},Je=Ce;r(Je,"OperationTypeForm"),Je.formKey="Store.OperationType";var de=o(c(),1);var U=class{static getLookup(){return(0,de.getLookup)("Store.OperationType")}static getLookupAsync(){return m(this,null,function*(){return(0,de.getLookupAsync)("Store.OperationType")})}};r(U,"OperationTypeRow"),U.idProperty="OperationTypeId",U.isActiveProperty="IsActive",U.nameProperty="Operation",U.localTextPrefix="Store.OperationType",U.lookupKey="Store.OperationType",U.deletePermission="Store:OperationType:Delete",U.insertPermission="Store:OperationType:Modify",U.readPermission="Store:OperationType:View",U.updatePermission="Store:OperationType:Modify",U.Fields=(0,de.fieldsProxy)();var It=o(c(),1),Ct;(e=>(e.baseUrl="Store/OperationType",e.Methods={Create:"Store/OperationType/Create",Update:"Store/OperationType/Update",Delete:"Store/OperationType/Delete",Retrieve:"Store/OperationType/Retrieve",List:"Store/OperationType/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,It.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(Ct||(Ct={}));var Dt;(v=>{v.General="Store:General";let a;(d=>(d.Delete="Store:Categories:Delete",d.Modify="Store:Categories:Modify",d.View="Store:Categories:View"))(a=v.Categories||(v.Categories={}));let e;(d=>(d.Delete="Store:CategoriesType:Delete",d.Modify="Store:CategoriesType:Modify",d.View="Store:CategoriesType:View"))(e=v.CategoriesType||(v.CategoriesType={}));let t;(d=>(d.Delete="Store:Shops:Delete",d.Modify="Store:Shops:Modify",d.View="Store:Shops:View"))(t=v.Shops||(v.Shops={}));let s;(d=>(d.Delete="Store:DocumentType:Delete",d.Modify="Store:DocumentType:Modify",d.View="Store:DocumentType:View"))(s=v.DocumentType||(v.DocumentType={}));let i;(d=>(d.Delete="Store:Measures:Delete",d.Modify="Store:Measures:Modify",d.View="Store:Measures:View"))(i=v.Measures||(v.Measures={}));let p;(d=>(d.Delete="Store:OperationType:Delete",d.Modify="Store:OperationType:Modify",d.View="Store:OperationType:View"))(p=v.OperationType||(v.OperationType={}));let l;(d=>(d.Delete="Store:Counterparties:Delete",d.Modify="Store:Counterparties:Modify",d.View="Store:Counterparties:View"))(l=v.Counterparties||(v.Counterparties={}));let A;(d=>(d.Delete="Store:Wares:Delete",d.Modify="Store:Wares:Modify",d.View="Store:Wares:View"))(A=v.Wares||(v.Wares={}));let Yt;(d=>(d.Delete="Store:Product:Delete",d.Modify="Store:Product:Modify",d.View="Store:Product:View"))(Yt=v.Product||(v.Product={}))})(Dt||(Dt={}));var ue=class{};r(ue,"ProductDetailsColumns"),ue.columnsKey="Store.ProductDetails";var le=o(g(),1),Lt=o(c(),1);var Ie=class extends le.PrefixedContext{constructor(a){if(super(a),!Ie.init){Ie.init=!0;var e=le.LookupEditor,t=le.DecimalEditor;(0,Lt.initFormType)(Ie,["WaresId",e,"Quantity",t,"ProductQuantity",t,"PlanPrice",t,"Discount",t])}}},Y=Ie;r(Y,"ProductDetailsForm"),Y.formKey="Store.ProductDetails";var bt=o(c(),1);var I=class{};r(I,"ProductDetailsRow"),I.idProperty="DetailId",I.isActiveProperty="IsActive",I.localTextPrefix="Store.ProductDetails",I.deletePermission="Store:Product:Delete",I.insertPermission="Store:Product:View",I.readPermission="Store:Product:View",I.updatePermission="Store:Product:View",I.Fields=(0,bt.fieldsProxy)();var Ut=o(c(),1),qt;(e=>(e.baseUrl="Store/ProductDetails",e.Methods={Retrieve:"Store/ProductDetails/Retrieve",List:"Store/ProductDetails/List"},["Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,Ut.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(qt||(qt={}));var Tt=o(c(),1);var M=class{};r(M,"ProductLangRow"),M.idProperty="Id",M.nameProperty="ProductName",M.localTextPrefix="Store.ProductLang",M.deletePermission="Store:General",M.insertPermission="Store:General",M.readPermission="Store:General",M.updatePermission="Store:General",M.Fields=(0,Tt.fieldsProxy)();var Et=o(c(),1),ht;(e=>(e.baseUrl="Store/ProductLang",e.Methods={Create:"Store/ProductLang/Create",Update:"Store/ProductLang/Update",Delete:"Store/ProductLang/Delete",Retrieve:"Store/ProductLang/Retrieve",List:"Store/ProductLang/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,Et.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(ht||(ht={}));var Xe=class{};r(Xe,"ProductsColumns"),Xe.columnsKey="Store.Products";var D=o(g(),1);var We=o(g(),1);var me=class extends We.EntityDialog{constructor(){super(...arguments);this.form=new j(this.idPrefix)}getFormKey(){return j.formKey}getIdProperty(){return S.idProperty}getLocalTextPrefix(){return S.localTextPrefix}getNameProperty(){return S.nameProperty}getService(){return He.baseUrl}getDeletePermission(){return S.deletePermission}getInsertPermission(){return S.insertPermission}getUpdatePermission(){return S.updatePermission}};r(me,"MeasuresDialog"),me=x([We.Decorators.registerClass("Company.Store.MeasuresDialog")],me);var Qt=o(g(),1),Ve=o(c(),1),Mt=o(Ye(),1);var Ot=o(g(),1),kt=o(c(),1),Nt=o(Ye(),1);var Z=class extends Nt.GridEditorDialog{constructor(){super();this.form=new Y(this.idPrefix),this.form.WaresId.changeSelect2(e=>m(this,null,function*(){var t=(0,kt.toId)(this.form.WaresId.value);t!=null&&(this.form.PlanPrice.value=(yield f.getLookupAsync()).itemById[t].UnitPrice)})),this.form.Discount.addValidationRule(this.uniqueName,e=>{var t=this.form.PlanPrice.value,s=this.form.Quantity.value,i=this.form.ProductQuantity.value,p=this.form.Discount.value;if(t!=null&&s!=null&&i!=null&&p!=null&&p>0&&p>=t*s/i)return"Discount can't be higher than total price!"})}getFormKey(){return Y.formKey}getLocalTextPrefix(){return I.localTextPrefix}updateInterface(){super.updateInterface()}};r(Z,"ProductDetailsDialog"),Z=x([Ot.Decorators.registerClass()],Z);var _=class extends Mt.GridEditorBase{getColumnsKey(){return ue.columnsKey}getDialogType(){return Z}getLocalTextPrefix(){return I.localTextPrefix}constructor(a){super(a)}getLookupKey(){return f.lookupKey}validateEntity(a,e){a.WaresId=(0,Ve.toId)(a.WaresId);var t=this.view.getItems().find(s=>s.WaresId===a.WaresId);return t&&this.id(t)!==e?((0,Ve.alertDialog)("This wares is already in order details!"),!1):(e!=null||(e=a[this.getIdProperty()]),f.getLookupAsync().then(s=>{var p,l;var i=(l=(p=this.view)==null?void 0:p.getItemById)==null?void 0:l.call(p,e);i&&(i.WaresName=s.itemById[a.WaresId].WaresName,this.view.updateItem(e,i))}),a.WaresName=f.getLookup().itemById[a.WaresId].WaresName,a.WaresCode=f.getLookup().itemById[a.WaresId].WaresCode,a.LineTotal=(a.Quantity||0)*(a.UnitPrice||0)-(a.Discount||0),!0)}};r(_,"ProductDetailsEditor"),_=x([Qt.Decorators.registerEditor("Company.Store.ProductDetailsEditor")],_);var Ht=o(c(),1);var De=class extends D.PrefixedContext{constructor(a){if(super(a),!De.init){De.init=!0;var e=D.LookupEditor,t=D.StringEditor,s=D.ImageUploadEditor,i=D.BooleanEditor,p=D.DecimalEditor,l=_,A=D.IntegerEditor;(0,Ht.initFormType)(De,["CategoryId",e,"ProductName",t,"ProductCode",t,"ProductBarcode",t,"ProductLabel",t,"MeasureId",e,"ProductImage",s,"Discontinued",i,"UnitPrice",p,"QuantityPerUnit",t,"DetailList",l,"UnitsInStock",A,"UnitsOnOrder",A,"ReorderLevel",A])}}},Be=De;r(Be,"ProductsForm"),Be.formKey="Store.Products";var At=o(c(),1);var X=class{};r(X,"ProductsLogRow"),X.idProperty="ProductLogId",X.localTextPrefix="Store.ProductsLog",X.deletePermission=null,X.insertPermission=null,X.readPermission="",X.updatePermission=null,X.Fields=(0,At.fieldsProxy)();var ye=o(c(),1);var T=class{static getLookup(){return(0,ye.getLookup)("Store.Product")}static getLookupAsync(){return m(this,null,function*(){return(0,ye.getLookupAsync)("Store.Product")})}};r(T,"ProductsRow"),T.idProperty="ProductId",T.isActiveProperty="IsActive",T.nameProperty="ProductName",T.localTextPrefix="Store.Products",T.lookupKey="Store.Product",T.deletePermission="Store:Product:Delete",T.insertPermission="Store:Product:Modify",T.readPermission="Store:Product:View",T.updatePermission="Store:Product:Modify",T.Fields=(0,ye.fieldsProxy)();var Xt=o(c(),1),Jt;(e=>(e.baseUrl="Store/Products",e.Methods={Create:"Store/Products/Create",Update:"Store/Products/Update",Delete:"Store/Products/Delete",Retrieve:"Store/Products/Retrieve",List:"Store/Products/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,Xt.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(Jt||(Jt={}));var Ge=o(g(),1),Wt=o(c(),1);var Le=class extends Ge.PrefixedContext{constructor(a){if(super(a),!Le.init){Le.init=!0;var e=Ge.StringEditor;(0,Wt.initFormType)(Le,["ShopId",e,"ShopName",e,"ContactName",e,"ContactTitle",e,"Address",e,"City",e,"Region",e,"PostalCode",e,"Country",e,"Phone",e])}}},Fe=Le;r(Fe,"ShopsForm"),Fe.formKey="Store.Shops";var Ke=class{};r(Ke,"ShopsColumns"),Ke.columnsKey="Store.Shops";var Se=o(c(),1);var h=class{static getLookup(){return(0,Se.getLookup)("Store.Shops")}static getLookupAsync(){return m(this,null,function*(){return(0,Se.getLookupAsync)("Store.Shops")})}};r(h,"ShopsRow"),h.idProperty="Id",h.isActiveProperty="IsActive",h.nameProperty="ShopId",h.localTextPrefix="Store.Shops",h.lookupKey="Store.Shops",h.deletePermission="Store:Shops:Delete",h.insertPermission="Store:Shops:Modify",h.readPermission="Store:Shops:View",h.updatePermission="Store:Shops:Modify",h.Fields=(0,Se.fieldsProxy)();var Bt=o(c(),1),Vt;(e=>(e.baseUrl="Store/Shops",e.Methods={Create:"Store/Shops/Create",Update:"Store/Shops/Update",Delete:"Store/Shops/Delete",Retrieve:"Store/Shops/Retrieve",List:"Store/Shops/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,Bt.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(Vt||(Vt={}));var $e=class{};r($e,"WaresColumns"),$e.columnsKey="Store.Wares";var L=o(g(),1),Ft=o(c(),1);var be=class extends L.PrefixedContext{constructor(a){if(super(a),!be.init){be.init=!0;var e=L.LookupEditor,t=L.StringEditor,s=L.IntegerEditor,i=L.ImageUploadEditor,p=L.BooleanEditor,l=L.DecimalEditor;(0,Ft.initFormType)(be,["CategoryId",e,"WaresCode",t,"WaresBarcode",t,"WaresLabel",t,"WaresName",t,"MeasureId",s,"WaresImage",i,"Discontinued",p,"CounterpartyId",e,"QuantityPerUnit",l,"UnitPrice",l,"AccountId",s])}}},ze=be;r(ze,"WaresForm"),ze.formKey="Store.Wares";var Gt=o(c(),1);var H=class{};r(H,"WaresLangRow"),H.idProperty="Id",H.nameProperty="WaresName",H.localTextPrefix="Store.WaresLang",H.deletePermission="Store:General",H.insertPermission="Store:General",H.readPermission="Store:General",H.updatePermission="Store:General",H.Fields=(0,Gt.fieldsProxy)();var $t=o(c(),1),Kt;(e=>(e.baseUrl="Store/WaresLang",e.Methods={Create:"Store/WaresLang/Create",Update:"Store/WaresLang/Update",Delete:"Store/WaresLang/Delete",Retrieve:"Store/WaresLang/Retrieve",List:"Store/WaresLang/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,$t.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(Kt||(Kt={}));var fe=o(c(),1);var f=class{static getLookup(){return(0,fe.getLookup)("Store.Wares")}static getLookupAsync(){return m(this,null,function*(){return(0,fe.getLookupAsync)("Store.Wares")})}};r(f,"WaresRow"),f.idProperty="WaresId",f.isActiveProperty="IsActive",f.nameProperty="WaresName",f.localTextPrefix="Store.Wares",f.lookupKey="Store.Wares",f.deletePermission="Store:Wares:Delete",f.insertPermission="Store:Wares:Modify",f.readPermission="Store:Wares:View",f.updatePermission="Store:Wares:Modify",f.Fields=(0,fe.fieldsProxy)();var jt=o(c(),1),zt;(e=>(e.baseUrl="Store/Wares",e.Methods={Create:"Store/Wares/Create",Update:"Store/Wares/Update",Delete:"Store/Wares/Delete",Retrieve:"Store/Wares/Retrieve",List:"Store/Wares/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(s,i,p){return(0,jt.serviceRequest)(e.baseUrl+"/"+t,s,i,p)}})))(zt||(zt={}));var w=class extends je.EntityDialog{constructor(){super(...arguments);this.form=new G(this.idPrefix)}getFormKey(){return G.formKey}getIdProperty(){return y.idProperty}getLocalTextPrefix(){return y.localTextPrefix}getNameProperty(){return y.nameProperty}getService(){return Oe.baseUrl}getDeletePermission(){return y.deletePermission}getInsertPermission(){return y.insertPermission}getUpdatePermission(){return y.updatePermission}};r(w,"CategoriesTypeDialog"),w=x([je.Decorators.registerClass("Company.Store.CategoriesTypeDialog")],w);export{Ye as a,qe as b,Ue as c,w as d,he as e,b as f,st as g,Ee as h,y as i,Oe as j,ke as k,Ne as l,q as m,dt as n,Qe as o,S as p,He as q,Ae as r,Je as s,U as t,Ct as u,ue as v,I as w,qt as x,Xe as y,me as z,Z as A,Be as B,T as C,Jt as D,Fe as E,Ke as F,h as G,Vt as H,$e as I,ze as J,f as K,zt as L};
//# sourceMappingURL=chunk-MM7FEJZM.js.map
