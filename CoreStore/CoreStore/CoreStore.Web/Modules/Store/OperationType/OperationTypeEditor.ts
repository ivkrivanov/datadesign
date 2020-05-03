
namespace CoreStore.Store {

    @Serenity.Decorators.registerEditor()
    export class OperationTypeEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OperationTypeRow>{

        constructor(hidden: JQuery) {
            super(hidden)
        }

        protected getLookupKey() {
            return OperationTypeRow.lookupKey;
        }

        protected getItemText(item, lookup) {
            return '[' + item.OpCode + '] ' + super.getItemText(item, lookup)
        }
    }
}