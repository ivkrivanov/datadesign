import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { htmlEncode, reloadLookup, localText } from "@serenity-is/corelib/q";
import { DialogUtils } from "@serenity-is/extensions";
import { CounterpartiesForm, CounterpartiesRow, CounterpartiesService } from '../../ServerTypes/Store';
import { CounterpartiesGrid } from "./CounterpartiesGrid"

@Decorators.registerClass('Store.Store.CounterpartiesDialog')
@Decorators.panel()
export class CounterpartiesDialog extends EntityDialog<CounterpartiesRow, any> {
    protected getFormKey() { return CounterpartiesForm.formKey; }
    protected getIdProperty() { return CounterpartiesRow.idProperty; }
    protected getLocalTextPrefix() { return CounterpartiesRow.localTextPrefix; }
    protected getNameProperty() { return CounterpartiesRow.nameProperty; }
    protected getService() { return CounterpartiesService.baseUrl; }
    protected getDeletePermission() { return CounterpartiesRow.deletePermission; }
    protected getInsertPermission() { return CounterpartiesRow.insertPermission; }
    protected getUpdatePermission() { return CounterpartiesRow.updatePermission; }

    protected form = new CounterpartiesForm(this.idPrefix);

    //private ProductMoveGrid: CounterpartiesProductMovementGrid;
    //private WaresMoveGrid: CounterpartiesWaresMovementGrid;
    private loadedState: string;

    constructor() {
        super();

        //this.ProductMoveGrid = new CounterpartiesProductMovementGrid(this.byId('ProductMovementGrid'));
        //this.WaresMoveGrid = new CounterpartiesWaresMovementGrid(this.byId('WaresMovementGrid'));
        /// force order dialog to open in Dialog mode instead of Panel mode
        /// which is set as default on OrderDialog with @panelAttribute
        //this.ProductMoveGrid.openDialogsAsPanel = false;
        //this.WaresMoveGrid.openDialogsAsPanel = false;

        this.byId('NotesList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
        DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
    }

    getSaveState() {
        try {
            return $.toJSON(this.getSaveEntity());
        }
        catch (e) {
            return null;
        }
    }

    loadResponse(data) {
        super.loadResponse(data);
        this.loadedState = this.getSaveState();
    }

    loadEntity(entity: CounterpartiesRow) {
        super.loadEntity(entity);

        //Serenity.TabsExtensions.setDisabled(this.tabs, 'Product Movement', this.isNewOrDeleted());
        //Serenity.TabsExtensions.setDisabled(this.tabs, 'Wares Movement', this.isNewOrDeleted());

        //this.ProductMoveGrid.counterpartyId = entity.CounterpartyId;
        //this.WaresMoveGrid.counterpartyId = entity.CounterpartyId;
    }

    onSaveSuccess(response) {
        super.onSaveSuccess(response);

        reloadLookup('Store.Counterparties');
    }

    getTemplate() {
        return `<div id="~_Tabs" class="s-DialogContent">
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
</div>`;

    }

}