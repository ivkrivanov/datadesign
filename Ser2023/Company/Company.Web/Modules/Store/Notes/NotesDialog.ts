import { Decorators, HtmlContentEditor, HtmlNoteContentEditor, TemplatedDialog } from "@serenity-is/corelib";
import { localText } from "@serenity-is/corelib/q";

@Decorators.registerClass('Company.Store.NotesDialog')
export class NotesDialog extends TemplatedDialog<any> {

    private textEditor: HtmlContentEditor;

    constructor() {
        super();

        this.textEditor = new HtmlNoteContentEditor(this.byId('Text'));
    }

    protected getTemplate() {
        return (
            "<form id='~_Form' class='s-Form'>" +
            "<textarea id='~_Text' class='required'></textarea>" +
            "</form>");
    }

    protected getDialogButtons() {
        return [
            {
                text: localText('Dialogs.OkButton'),
                click: () => {
                    if (!this.validateForm()) {
                        return;
                    }

                    this.okClick && this.okClick();
                }
            },
            {
                text: localText('Dialogs.CancelButton'),
                click: () => this.dialogClose()
            }
        ];
    }

    get text(): string {
        return this.textEditor.value;
    }

    set text(value: string) {
        this.textEditor.value = value;
    }

    public okClick: () => void;
}
