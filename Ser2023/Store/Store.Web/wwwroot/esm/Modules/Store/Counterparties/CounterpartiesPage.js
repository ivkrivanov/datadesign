import{h as g,i as l,j as e,k as d}from"../../../_chunks/chunk-U2RPTSI3.js";import{a as n,b as x,c as i,d as a,f as u,g as m}from"../../../_chunks/chunk-FEDAVPE7.js";var v=x((T,f)=>{f.exports=Serenity.Extensions});var P=i(u(),1);var p=i(m(),1);var s=i(m(),1),S=i(u(),1),y=i(v(),1);var t=class extends s.EntityDialog{constructor(){super();this.form=new l(this.idPrefix);this.byId("NotesList").closest(".field").hide().end().appendTo(this.byId("TabNotes")),y.DialogUtils.pendingChangesConfirmation(this.element,()=>this.getSaveState()!=this.loadedState)}getFormKey(){return l.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return d.baseUrl}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}getSaveState(){try{return $.toJSON(this.getSaveEntity())}catch(o){return null}}loadResponse(o){super.loadResponse(o),this.loadedState=this.getSaveState()}loadEntity(o){super.loadEntity(o)}onSaveSuccess(o){super.onSaveSuccess(o),(0,S.reloadLookup)("Store.Counterparties")}getTemplate(){return`<div id="~_Tabs" class="s-DialogContent">
    <ul>
        <li><a href="#~_TabInfo"><span>{{text:"Db.Store.Counterparties.EntitySingular"}}</span></a></li>
        <li><a href="#~_TabNotes"><span>{{text:"Db.Store.Notes.EntityPlural"}}</span></a></li>
    </ul>
    <div id="~_TabInfo" class="tab-pane s-TabInfo">
        <div id="~_Toolbar" class="s-DialogToolbar">
        </div>
        <div class="s-Form">
            <form id="~_Form" action="">
                <div class="fieldset ui-widget ui-widget-content ui-corner-all">
                    <div id="~_PropertyGrid"></div>
                    <div class="clear"></div>
                </div>
            </form>
        </div>
    </div>
    <div id="~_TabNotes" class="tab-pane s-TabNotes">
    </div>
</div>`}};n(t,"CounterpartiesDialog"),t=a([s.Decorators.registerClass("Store.Store.CounterpartiesDialog"),s.Decorators.panel()],t);var r=class extends p.EntityGrid{getColumnsKey(){return g.columnsKey}getDialogType(){return t}getIdProperty(){return e.idProperty}getInsertPermission(){return e.insertPermission}getLocalTextPrefix(){return e.localTextPrefix}getService(){return d.baseUrl}constructor(c){super(c)}};n(r,"CounterpartiesGrid"),r=a([p.Decorators.registerClass("Store.Store.CounterpartiesGrid")],r);$(function(){(0,P.initFullHeightGridPage)(new r($("#GridDiv")).element)});
//# sourceMappingURL=CounterpartiesPage.js.map
