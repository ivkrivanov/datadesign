import{a as t,b as s,c as E,d as x,e as C,f as y}from"./chunk-RK3EK3FG.js";var T=class{};t(T,"AddressColumns"),T.columnsKey="Company.Address";var w=s(C(),1);var g=s(C(),1);var F=s(y(),1);var I=class extends g.PrefixedContext{constructor(p){if(super(p),!I.init){I.init=!0;var e=g.StringEditor,i=g.LookupEditor;(0,F.initFormType)(I,["AddressLine1",e,"AddressLine2",e,"City",e,"StateProvinceId",i,"PostalCode",e])}}},O=I;t(O,"AddressForm"),O.formKey="Company.Address";var j=s(y(),1);var u=class{};t(u,"AddressRow"),u.idProperty="AddressId",u.isActiveProperty="IsActive",u.nameProperty="AddressLine1",u.localTextPrefix="Company.Address",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,j.fieldsProxy)();var B=s(y(),1),z;(e=>(e.baseUrl="Company/Address",e.Methods={Create:"Company/Address/Create",Update:"Company/Address/Update",Delete:"Company/Address/Delete",Retrieve:"Company/Address/Retrieve",List:"Company/Address/List"},["Create","Update","Delete","Retrieve","List"].forEach(i=>{e[i]=function(m,a,l){return(0,B.serviceRequest)(e.baseUrl+"/"+i,m,a,l)}})))(z||(z={}));var H=class{};t(H,"AddressTypeColumns"),H.columnsKey="Company.AddressType";var Q=s(C(),1),W=s(y(),1);var U=class extends Q.PrefixedContext{constructor(p){if(super(p),!U.init){U.init=!0;var e=Q.StringEditor;(0,W.initFormType)(U,["Name",e,"Rowguid",e])}}},J=U;t(J,"AddressTypeForm"),J.formKey="Company.AddressType";var P=s(y(),1);var d=class{static getLookup(){return(0,P.getLookup)("Company.AddressType")}static getLookupAsync(){return x(this,null,function*(){return(0,P.getLookupAsync)("Company.AddressType")})}};t(d,"AddressTypeRow"),d.idProperty="AddressTypeId",d.isActiveProperty="IsActive",d.nameProperty="Name",d.localTextPrefix="Company.AddressType",d.lookupKey="Company.AddressType",d.deletePermission="Company:AddressType:Delete",d.insertPermission="Company:AddressType:Modify",d.readPermission="Company:AddressType:View",d.updatePermission="Company:AddressType:Modify",d.Fields=(0,P.fieldsProxy)();var Z=s(y(),1),Y;(e=>(e.baseUrl="Company/AddressType",e.Methods={Create:"Company/AddressType/Create",Update:"Company/AddressType/Update",Delete:"Company/AddressType/Delete",Retrieve:"Company/AddressType/Retrieve",List:"Company/AddressType/List"},["Create","Update","Delete","Retrieve","List"].forEach(i=>{e[i]=function(m,a,l){return(0,Z.serviceRequest)(e.baseUrl+"/"+i,m,a,l)}})))(Y||(Y={}));var X=class{};t(X,"CountryColumns"),X.columnsKey="Company.Country";var k=s(C(),1),$=s(y(),1);var b=class extends k.PrefixedContext{constructor(p){if(super(p),!b.init){b.init=!0;var e=k.StringEditor;(0,$.initFormType)(b,["Name",e])}}},f=b;t(f,"CountryForm"),f.formKey="Company.Country";var q=s(y(),1);var r=class{static getLookup(){return(0,q.getLookup)("Company.Country")}static getLookupAsync(){return x(this,null,function*(){return(0,q.getLookupAsync)("Company.Country")})}};t(r,"CountryRow"),r.idProperty="CountryCode",r.isActiveProperty="IsActive",r.nameProperty="CountryCode",r.localTextPrefix="Company.Country",r.lookupKey="Company.Country",r.deletePermission="Company:Country:Delete",r.insertPermission="Company:Country:Modify",r.readPermission="Company:Country:View",r.updatePermission="Company:Country:Modify",r.Fields=(0,q.fieldsProxy)();var _=s(y(),1),M;(e=>(e.baseUrl="Company/Country",e.Methods={Create:"Company/Country/Create",Update:"Company/Country/Update",Delete:"Company/Country/Delete",Retrieve:"Company/Country/Retrieve",List:"Company/Country/List"},["Create","Update","Delete","Retrieve","List"].forEach(i=>{e[i]=function(m,a,l){return(0,_.serviceRequest)(e.baseUrl+"/"+i,m,a,l)}})))(M||(M={}));var ee;(a=>{a.General="Company:General";let p;(c=>(c.Delete="Company:Address:Delete",c.Modify="Company:Address:Modify",c.View="Company:Address:View"))(p=a.Address||(a.Address={}));let e;(c=>(c.Delete="Company:AddressType:Delete",c.Modify="Company:AddressType:Modify",c.View="Company:AddressType:View"))(e=a.AddressType||(a.AddressType={}));let i;(c=>(c.Delete="Company:Country:Delete",c.Modify="Company:Country:Modify",c.View="Company:Country:View"))(i=a.Country||(a.Country={}));let m;(c=>(c.Delete="Company:StateProvince:Delete",c.Modify="Company:StateProvince:Modify",c.View="Company:StateProvince:View"))(m=a.StateProvince||(a.StateProvince={}))})(ee||(ee={}));var N=class{};t(N,"StateProvinceColumns"),N.columnsKey="Company.StateProvince";var v=s(C(),1);var h=s(C(),1);var L=class extends h.EntityDialog{constructor(){super(...arguments);this.form=new f(this.idPrefix)}getFormKey(){return f.formKey}getRowDefinition(){return r}getIdProperty(){return r.idProperty}getLocalTextPrefix(){return r.localTextPrefix}getNameProperty(){return r.nameProperty}getDeletePermission(){return r.deletePermission}getInsertPermission(){return r.insertPermission}getUpdatePermission(){return r.updatePermission}getService(){return M.baseUrl}};t(L,"CountryDialog"),L=E([h.Decorators.registerClass("Company.Company.CountryDialog")],L);var te=s(y(),1);var A=class extends v.PrefixedContext{constructor(p){if(super(p),!A.init){A.init=!0;var e=v.StringEditor,i=v.LookupEditor,m=v.IntegerEditor;(0,te.initFormType)(A,["StateProvinceCode",e,"CountryCode",i,"Name",e,"TerritoryId",m])}}},R=A;t(R,"StateProvinceForm"),R.formKey="Company.StateProvince";var D=s(y(),1);var o=class{static getLookup(){return(0,D.getLookup)("Company.StateProvince")}static getLookupAsync(){return x(this,null,function*(){return(0,D.getLookupAsync)("Company.StateProvince")})}};t(o,"StateProvinceRow"),o.idProperty="StateProvinceId",o.isActiveProperty="IsActive",o.nameProperty="StateProvinceCode",o.localTextPrefix="Company.StateProvince",o.lookupKey="Company.StateProvince",o.deletePermission="Company:StateProvince:Delete",o.insertPermission="Company:StateProvince:Modify",o.readPermission="Company:StateProvince:View",o.updatePermission="Company:StateProvince:Modify",o.Fields=(0,D.fieldsProxy)();var re=s(y(),1),V;(e=>(e.baseUrl="Company/StateProvince",e.Methods={Create:"Company/StateProvince/Create",Update:"Company/StateProvince/Update",Delete:"Company/StateProvince/Delete",Retrieve:"Company/StateProvince/Retrieve",List:"Company/StateProvince/List"},["Create","Update","Delete","Retrieve","List"].forEach(i=>{e[i]=function(m,a,l){return(0,re.serviceRequest)(e.baseUrl+"/"+i,m,a,l)}})))(V||(V={}));var S=class extends w.EntityDialog{constructor(){super(...arguments);this.form=new R(this.idPrefix)}getFormKey(){return R.formKey}getRowDefinition(){return o}getIdProperty(){return o.idProperty}getLocalTextPrefix(){return o.localTextPrefix}getNameProperty(){return o.nameProperty}getService(){return V.baseUrl}getDeletePermission(){return o.deletePermission}getInsertPermission(){return o.insertPermission}getUpdatePermission(){return o.updatePermission}loadEntity(e){super.loadEntity(e),this.isNew()}};t(S,"StateProvinceDialog"),S=E([w.Decorators.registerClass("Company.Company.StateProvinceDialog")],S);export{T as a,S as b,O as c,u as d,z as e,H as f,J as g,d as h,Y as i,X as j,r as k,M as l,N as m,L as n,o,V as p};
//# sourceMappingURL=chunk-3E3US6PM.js.map
