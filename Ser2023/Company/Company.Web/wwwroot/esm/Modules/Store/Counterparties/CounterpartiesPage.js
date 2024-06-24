import{a as P,k as g,l,m as e,n as d}from"../../../_chunks/chunk-RQZR5N5E.js";import{a,c as i,d as n,f as u,g as m}from"../../../_chunks/chunk-FEDAVPE7.js";var y=i(u(),1);var p=i(m(),1);var s=i(m(),1),f=i(u(),1),v=i(P(),1);var t=class extends s.EntityDialog{constructor(){super();this.form=new l(this.idPrefix);this.byId("NotesList").closest(".field").hide().end().appendTo(this.byId("TabNotes")),v.DialogUtils.pendingChangesConfirmation(this.element,()=>this.getSaveState()!=this.loadedState)}getFormKey(){return l.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return d.baseUrl}getDeletePermission(){return e.deletePermission}getInsertPermission(){return e.insertPermission}getUpdatePermission(){return e.updatePermission}getSaveState(){try{return $.toJSON(this.getSaveEntity())}catch(o){return null}}loadResponse(o){super.loadResponse(o),this.loadedState=this.getSaveState()}loadEntity(o){super.loadEntity(o)}onSaveSuccess(o){super.onSaveSuccess(o),(0,f.reloadLookup)("Store.Counterparties")}getTemplate(){return`<div id="~_Tabs" class="s-DialogContent">
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
</div>`}};a(t,"CounterpartiesDialog"),t=n([s.Decorators.registerClass("Company.Store.CounterpartiesDialog"),s.Decorators.panel()],t);var r=class extends p.EntityGrid{getColumnsKey(){return g.columnsKey}getDialogType(){return t}getIdProperty(){return e.idProperty}getInsertPermission(){return e.insertPermission}getLocalTextPrefix(){return e.localTextPrefix}getService(){return d.baseUrl}constructor(c){super(c)}};a(r,"CounterpartiesGrid"),r=n([p.Decorators.registerClass("Company.Store.CounterpartiesGrid")],r);$(function(){(0,y.initFullHeightGridPage)(new r($("#GridDiv")).element)});
//# sourceMappingURL=CounterpartiesPage.js.map
