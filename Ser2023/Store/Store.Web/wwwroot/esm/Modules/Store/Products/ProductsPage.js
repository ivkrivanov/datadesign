import{A as k,D,F as x,G as u,H as C,S as F,d as S}from"../../../_chunks/chunk-URF5PXDV.js";import{a as d,c as v,d as I,f as E,g as w}from"../../../_chunks/chunk-FEDAVPE7.js";var R=v(E(),1);var p=v(w(),1),t=v(E(),1),h=v(D(),1);var b=v(w(),1),T=v(D(),1);var g=class extends b.EntityDialog{constructor(){super();this.form=new x(this.idPrefix)}getFormKey(){return x.formKey}getIdProperty(){return u.idProperty}getLocalTextPrefix(){return u.localTextPrefix}getNameProperty(){return u.nameProperty}getService(){return C.baseUrl}getDeletePermission(){return u.deletePermission}getInsertPermission(){return u.insertPermission}getUpdatePermission(){return u.updatePermission}getToolbarButtons(){var e=super.getToolbarButtons();return e.push(T.ReportHelper.createToolButton({title:"Invoice",cssClass:"export-pdf-button",reportKey:"Northwind.OrderDetail",getParams:()=>({OrderID:this.get_entityId()})})),e}updateInterface(){super.updateInterface(),this.toolbar.findButton("export-pdf-button").toggle(this.isEditMode())}};d(g,"ProductsDialog"),g=I([b.Decorators.registerClass("Store.Store.ProductsDialog")],g);var c=u.Fields,f=class extends p.EntityGrid{constructor(e){super(e);this.pendingChanges={}}getColumnsKey(){return k.columnsKey}getDialogType(){return g}getIdProperty(){return u.idProperty}getInsertPermission(){return u.insertPermission}getLocalTextPrefix(){return u.localTextPrefix}getService(){return C.baseUrl}getQuickFilters(){var e=super.getQuickFilters(),n=(0,t.parseQueryString)();if(n.cat){var s=(0,t.tryFirst)(e,i=>i.field=="CategoryId");s.init=i=>{i.element.getWidget(p.LookupEditor).value=n.cat}}return e.push({type:p.LookupEditor,options:{lookupKey:F.lookupKey},field:"WaresID",title:"Contains Wares in Details",handler:i=>{this.view.params.WaresId=(0,t.toId)(i.value)},cssClass:"hidden-xs"}),e}getButtons(){var e=super.getButtons();return e.push(h.ExcelExportHelper.createToolButton({title:"Export To Excel",grid:this,service:C.baseUrl+"/ListExcel",onViewSubmit:()=>this.onViewSubmit(),separator:!0})),e.push(h.PdfExportHelper.createToolButton({grid:this,onViewSubmit:()=>this.onViewSubmit(),reportTitle:"Product List",columnTitles:{Discontinued:"Dis."},tableOptions:{columnStyles:{ProductID:{columnWidth:25,halign:"right"},Discountinued:{columnWidth:25}}}})),e.push({title:"Save Changes",cssClass:"apply-changes-button disabled",onClick:n=>this.saveClick(),separator:!0}),e}onViewProcessData(e){return this.pendingChanges={},this.setSaveButtonState(),super.onViewProcessData(e)}numericInputFormatter(e){var n="edit numeric",s=e.item,i=this.pendingChanges[s.ProductId];i&&i[e.column.field]!==void 0&&(n+=" dirty");var o=this.getEffectiveValue(s,e.column.field);return"<input type='text' class='"+n+"' data-field='"+e.column.field+"' value='"+(0,t.formatNumber)(o,"0.####")+"'/>"}moneyInputFormatter(e){var n="edit numeric",s=e.item,i=this.pendingChanges[s.ProductId];i&&i[e.column.field]!==void 0&&(n+=" dirty");var o=this.getEffectiveValue(s,e.column.field);return"<input type='text' style='text - align:right' class='"+n+"' data-field='"+e.column.field+"' value='"+(0,t.formatNumber)(o,"0.0000")+"'/>"}stringInputFormatter(e){var n="edit string",s=e.item,i=this.pendingChanges[s.ProductId],o=e.column;i&&i[o.field]!==void 0&&(n+=" dirty");var r=this.getEffectiveValue(s,o.field);return"<input type='text' class='"+n+"' data-field='"+o.field+"' value='"+(0,t.attrEncode)(r)+"' maxlength='"+o.sourceItem.maxLength+"'/>"}selectFormatter(e,n,s){var i="edit",o=e.item,r=this.pendingChanges[o.ProductId],y=e.column;r&&r[n]!==void 0&&(i+=" dirty");var P=this.getEffectiveValue(o,n),l="<select class='"+i+"' data-field='"+n+"' style='width: 100%; max-width: 100%'>";for(var a of s.items){let m=a[s.idField];l+="<option value='"+(0,t.attrEncode)(m)+"'",m==P&&(l+=" selected"),l+=">"+(0,t.htmlEncode)(a[s.textField])+"</option>"}return l+"</select>"}getEffectiveValue(e,n){var s=this.pendingChanges[e.ProductID];return s&&s[n]!==void 0?s[n]:e[n]}getColumns(){var e=super.getColumns(),n=d(r=>this.numericInputFormatter(r),"num"),s=d(r=>this.stringInputFormatter(r),"str"),i=d(r=>this.moneyInputFormatter(r),"mon");(0,t.first)(e,r=>r.field==="QuantityPerUnit").format=s;var o=(0,t.first)(e,r=>r.field===c.CategoryCategoryName);return o.referencedFields=[c.CategoryId],o.format=r=>this.selectFormatter(r,c.CategoryId,S.getLookup()),(0,t.first)(e,r=>r.field===c.UnitPrice).format=i,(0,t.first)(e,r=>r.field==c.UnitPrice).cssClass+=" col-unit-price",(0,t.first)(e,r=>r.field===c.UnitsInStock).format=n,(0,t.first)(e,r=>r.field===c.UnitsOnOrder).format=n,(0,t.first)(e,r=>r.field===c.ReorderLevel).format=n,e}inputsChange(e){var n=this.slickGrid.getCellFromEvent(e),s=this.itemAt(n.row),i=$(e.target),o=i.data("field"),r=(0,t.coalesce)((0,t.trimToNull)(i.val()),"0"),y=this.pendingChanges[s.ProductId],P=this.getEffectiveValue(s,o),l;i.hasClass("numeric")?l=(0,t.formatNumber)(P,"0.####"):l=P;var a;if(o==="UnitPrice"){if(a=(0,t.parseDecimal)(r),a==null||isNaN(a)){(0,t.notifyError)(r("Validation.Decimal"),"",null),i.val(l),i.focus();return}}else if(i.hasClass("numeric")){var m=(0,t.parseInteger)(r);if(isNaN(m)||m>32767||m<0){(0,t.notifyError)(r("Validation.Integer"),"",null),i.val(l),i.focus();return}a=m}else a=r;y||(this.pendingChanges[s.ProductId]=y={}),y[o]=a,s[o]=a,this.view.refresh(),i.hasClass("numeric")&&(a=(0,t.formatNumber)(a,"0.####")),i.val(a).addClass("dirty"),this.setSaveButtonState()}onClick(e,n,s){if(super.onClick(e,n,s),!e.isDefaultPrevented()){var i=this.itemAt(n),o=$(e.target);o.parent().hasClass("inline-action")&&(o=o.parent()),o.hasClass("inline-action")&&(e.preventDefault(),o.hasClass("print-invoice")&&h.ReportHelper.execute({reportKey:"Northwind.OrderDetail",params:{ProductId:i.ProductId}}))}}setSaveButtonState(){this.toolbar.findButton("apply-changes-button").toggleClass("disabled",Object.keys(this.pendingChanges).length===0)}saveClick(){if(Object.keys(this.pendingChanges).length!==0){var e=Object.keys(this.pendingChanges),n=-1,s=this;d(function i(){if(++n>=e.length){s.refresh();return}var o=e[n],r=(0,t.deepClone)(s.pendingChanges[o]);r.ProductID=o,(0,t.serviceRequest)("Store/Product/Update",{EntityId:o,Entity:r},y=>{delete s.pendingChanges[o],i()})},"saveNext")()}}};d(f,"ProductsGrid"),f=I([p.Decorators.registerClass("Store.Store.ProductsGrid"),p.Decorators.filterable()],f);$(function(){(0,R.initFullHeightGridPage)(new f($("#GridDiv")).element)});
//# sourceMappingURL=ProductsPage.js.map
