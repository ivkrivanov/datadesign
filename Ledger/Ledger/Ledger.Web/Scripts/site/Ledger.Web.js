﻿var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Ledger;
(function (Ledger) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Ledger');
    })(ScriptInitialization = Ledger.ScriptInitialization || (Ledger.ScriptInitialization = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TenantDialog = /** @class */ (function (_super) {
            __extends(TenantDialog, _super);
            function TenantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TenantForm(_this.idPrefix);
                return _this;
            }
            TenantDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
            TenantDialog.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
            TenantDialog.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TenantDialog);
            return TenantDialog;
        }(Serenity.EntityDialog));
        Administration.TenantDialog = TenantDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity.__id;
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = row.__id;
                if (id == null) {
                    row.__id = this.nextId++;
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        delete y['__id'];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        y.__id = _this.nextId++;
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TenantEditor = /** @class */ (function (_super) {
            __extends(TenantEditor, _super);
            function TenantEditor(container) {
                return _super.call(this, container) || this;
            }
            TenantEditor.prototype.getColumnsKey = function () { return 'Administration.Tenant'; };
            TenantEditor.prototype.getDialogType = function () { return Administration.TenantEditorDialog; };
            TenantEditor.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantEditor);
            return TenantEditor;
        }(Ledger.Common.GridEditorBase));
        Administration.TenantEditor = TenantEditor;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TenantEditorDialog = /** @class */ (function (_super) {
            __extends(TenantEditorDialog, _super);
            function TenantEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TenantForm(_this.idPrefix);
                return _this;
            }
            TenantEditorDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
            TenantEditorDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantEditorDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
            TenantEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TenantEditorDialog);
            return TenantEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Administration.TenantEditorDialog = TenantEditorDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TenantGrid = /** @class */ (function (_super) {
            __extends(TenantGrid, _super);
            function TenantGrid(container) {
                return _super.call(this, container) || this;
            }
            TenantGrid.prototype.getColumnsKey = function () { return 'Administration.Tenant'; };
            TenantGrid.prototype.getDialogType = function () { return Administration.TenantDialog; };
            TenantGrid.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantGrid.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantGrid.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantGrid);
            return TenantGrid;
        }(Serenity.EntityGrid));
        Administration.TenantGrid = TenantGrid;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog.prototype.getPropertyItems = function () {
                var items = _super.prototype.getPropertyItems.call(this);
                if (!Ledger.Authorization.hasPermission("Administration:Tenants"))
                    items = items.filter(function (x) { return x.name != Administration.UserRow.Fields.TenantId; });
                return items;
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Ledger.BasicProgressDialog = BasicProgressDialog;
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Ledger.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Ledger.DialogUtils || (Ledger.DialogUtils = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Ledger.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Ledger.LanguageList || (Ledger.LanguageList = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                            params: {
                                key: options.reportKey,
                                ext: Q.coalesce(options.extension, 'pdf'),
                                opt: (options.getParams == null ? '' : $.toJSON(options.getParams()))
                            },
                            target: Q.coalesce(options.target, '_blank')
                        });
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        var fileName = options.reportTitle || "{0}_{1}.pdf";
                        fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                        doc.save(fileName);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmplAddressTypeDialog = /** @class */ (function (_super) {
            __extends(EmplAddressTypeDialog, _super);
            function EmplAddressTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HR.EmplAddressTypeForm(_this.idPrefix);
                return _this;
            }
            EmplAddressTypeDialog.prototype.getFormKey = function () { return HR.EmplAddressTypeForm.formKey; };
            EmplAddressTypeDialog.prototype.getIdProperty = function () { return HR.EmplAddressTypeRow.idProperty; };
            EmplAddressTypeDialog.prototype.getLocalTextPrefix = function () { return HR.EmplAddressTypeRow.localTextPrefix; };
            EmplAddressTypeDialog.prototype.getNameProperty = function () { return HR.EmplAddressTypeRow.nameProperty; };
            EmplAddressTypeDialog.prototype.getService = function () { return HR.EmplAddressTypeService.baseUrl; };
            EmplAddressTypeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmplAddressTypeDialog);
            return EmplAddressTypeDialog;
        }(Serenity.EntityDialog));
        HR.EmplAddressTypeDialog = EmplAddressTypeDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmplAddressTypeEditor = /** @class */ (function (_super) {
            __extends(EmplAddressTypeEditor, _super);
            function EmplAddressTypeEditor(container) {
                return _super.call(this, container) || this;
            }
            EmplAddressTypeEditor.prototype.getColumnsKey = function () { return 'HR.EmplAddressType'; };
            EmplAddressTypeEditor.prototype.getDialogType = function () { return HR.EmplAddressTypeEditorDialog; };
            EmplAddressTypeEditor.prototype.getLocalTextPrefix = function () { return HR.EmplAddressTypeRow.localTextPrefix; };
            EmplAddressTypeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmplAddressTypeEditor);
            return EmplAddressTypeEditor;
        }(Ledger.Common.GridEditorBase));
        HR.EmplAddressTypeEditor = EmplAddressTypeEditor;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmplAddressTypeEditorDialog = /** @class */ (function (_super) {
            __extends(EmplAddressTypeEditorDialog, _super);
            function EmplAddressTypeEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HR.EmplAddressTypeForm(_this.idPrefix);
                return _this;
            }
            EmplAddressTypeEditorDialog.prototype.getFormKey = function () { return HR.EmplAddressTypeForm.formKey; };
            EmplAddressTypeEditorDialog.prototype.getLocalTextPrefix = function () { return HR.EmplAddressTypeRow.localTextPrefix; };
            EmplAddressTypeEditorDialog.prototype.getNameProperty = function () { return HR.EmplAddressTypeRow.nameProperty; };
            EmplAddressTypeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmplAddressTypeEditorDialog);
            return EmplAddressTypeEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        HR.EmplAddressTypeEditorDialog = EmplAddressTypeEditorDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmplAddressTypeGrid = /** @class */ (function (_super) {
            __extends(EmplAddressTypeGrid, _super);
            function EmplAddressTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmplAddressTypeGrid.prototype.getColumnsKey = function () { return 'HR.EmplAddressType'; };
            EmplAddressTypeGrid.prototype.getDialogType = function () { return HR.EmplAddressTypeDialog; };
            EmplAddressTypeGrid.prototype.getIdProperty = function () { return HR.EmplAddressTypeRow.idProperty; };
            EmplAddressTypeGrid.prototype.getLocalTextPrefix = function () { return HR.EmplAddressTypeRow.localTextPrefix; };
            EmplAddressTypeGrid.prototype.getService = function () { return HR.EmplAddressTypeService.baseUrl; };
            EmplAddressTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmplAddressTypeGrid);
            return EmplAddressTypeGrid;
        }(Serenity.EntityGrid));
        HR.EmplAddressTypeGrid = EmplAddressTypeGrid;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeDialog = /** @class */ (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super.call(this) || this;
                _this.form = new HR.EmployeeForm(_this.idPrefix);
                _this.byId('NotesList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                Ledger.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () {
                return HR.EmployeeForm.formKey;
            };
            EmployeeDialog.prototype.getIdProperty = function () {
                return HR.EmployeeRow.idProperty;
            };
            EmployeeDialog.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeRow.localTextPrefix;
            };
            EmployeeDialog.prototype.getNameProperty = function () {
                return HR.EmployeeRow.nameProperty;
            };
            EmployeeDialog.prototype.getService = function () {
                return HR.EmployeeService.baseUrl;
            };
            EmployeeDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            EmployeeDialog.prototype.loadResponce = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            EmployeeDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
            };
            EmployeeDialog.prototype.onSaveSuccess = function (responce) {
                _super.prototype.onSaveSuccess.call(this, responce);
                Q.reloadLookup('HR.Employee');
            };
            EmployeeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], EmployeeDialog);
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        HR.EmployeeDialog = EmployeeDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEditor = /** @class */ (function (_super) {
            __extends(EmployeeEditor, _super);
            function EmployeeEditor(container) {
                return _super.call(this, container) || this;
            }
            EmployeeEditor.prototype.getColumnsKey = function () {
                return 'HR.Employee';
            };
            EmployeeEditor.prototype.getDialogType = function () {
                return HR.EmployeeEditorDialog;
            };
            EmployeeEditor.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeRow.localTextPrefix;
            };
            EmployeeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeEditor);
            return EmployeeEditor;
        }(Ledger.Common.GridEditorBase));
        HR.EmployeeEditor = EmployeeEditor;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEditorDialog = /** @class */ (function (_super) {
            __extends(EmployeeEditorDialog, _super);
            function EmployeeEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HR.EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeEditorDialog.prototype.getFormKey = function () {
                return HR.EmployeeForm.formKey;
            };
            EmployeeEditorDialog.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeRow.localTextPrefix;
            };
            EmployeeEditorDialog.prototype.getNameProperty = function () {
                return HR.EmployeeRow.nameProperty;
            };
            EmployeeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmployeeEditorDialog);
            return EmployeeEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        HR.EmployeeEditorDialog = EmployeeEditorDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeGrid = /** @class */ (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () {
                return 'HR.Employee';
            };
            EmployeeGrid.prototype.getDialogType = function () {
                return HR.EmployeeDialog;
            };
            EmployeeGrid.prototype.getIdProperty = function () {
                return HR.EmployeeRow.idProperty;
            };
            EmployeeGrid.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeRow.localTextPrefix;
            };
            EmployeeGrid.prototype.getService = function () {
                return HR.EmployeeService.baseUrl;
            };
            EmployeeGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Ledger.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            EmployeeGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], EmployeeGrid);
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        HR.EmployeeGrid = EmployeeGrid;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeAddressDialog = /** @class */ (function (_super) {
            __extends(EmployeeAddressDialog, _super);
            function EmployeeAddressDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HR.EmployeeAddressForm(_this.idPrefix);
                return _this;
            }
            EmployeeAddressDialog.prototype.getFormKey = function () {
                return HR.EmployeeAddressForm.formKey;
            };
            EmployeeAddressDialog.prototype.getIdProperty = function () {
                return HR.EmployeeAddressRow.idProperty;
            };
            EmployeeAddressDialog.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeAddressRow.localTextPrefix;
            };
            EmployeeAddressDialog.prototype.getNameProperty = function () {
                return HR.EmployeeAddressRow.nameProperty;
            };
            EmployeeAddressDialog.prototype.getService = function () {
                return HR.EmployeeAddressService.baseUrl;
            };
            EmployeeAddressDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmployeeAddressDialog);
            return EmployeeAddressDialog;
        }(Serenity.EntityDialog));
        HR.EmployeeAddressDialog = EmployeeAddressDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeAddressEditor = /** @class */ (function (_super) {
            __extends(EmployeeAddressEditor, _super);
            function EmployeeAddressEditor(container) {
                return _super.call(this, container) || this;
            }
            EmployeeAddressEditor.prototype.getColumnsKey = function () { return 'HR.EmployeeAddress'; };
            EmployeeAddressEditor.prototype.getLocalTextPrefix = function () { return HR.EmployeeAddressRow.localTextPrefix; };
            EmployeeAddressEditor.prototype.getDialogType = function () { return HR.EmployeeAddressEditorDialog; };
            EmployeeAddressEditor.prototype.getAddButtonCaption = function () {
                return "Add Address";
            };
            EmployeeAddressEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                row.StreetAddress = Ledger.Infra.AddressesRow.getLookup()
                    .itemById[row.AddressId].StreetAddress;
                return true;
            };
            EmployeeAddressEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeAddressEditor);
            return EmployeeAddressEditor;
        }(Ledger.Common.GridEditorBase));
        HR.EmployeeAddressEditor = EmployeeAddressEditor;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeAddressEditorDialog = /** @class */ (function (_super) {
            __extends(EmployeeAddressEditorDialog, _super);
            function EmployeeAddressEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new HR.EmployeeAddressForm(_this.idPrefix);
                return _this;
            }
            EmployeeAddressEditorDialog.prototype.getFormKey = function () {
                return HR.EmployeeAddressForm.formKey;
            };
            EmployeeAddressEditorDialog.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeAddressRow.localTextPrefix;
            };
            EmployeeAddressEditorDialog.prototype.getNameProperty = function () {
                return HR.EmployeeAddressRow.nameProperty;
            };
            EmployeeAddressEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmployeeAddressEditorDialog);
            return EmployeeAddressEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        HR.EmployeeAddressEditorDialog = EmployeeAddressEditorDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeAddressGrid = /** @class */ (function (_super) {
            __extends(EmployeeAddressGrid, _super);
            function EmployeeAddressGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeAddressGrid.prototype.getColumnsKey = function () { return 'HR.EmployeeAddress'; };
            EmployeeAddressGrid.prototype.getDialogType = function () { return HR.EmployeeAddressDialog; };
            EmployeeAddressGrid.prototype.getIdProperty = function () { return HR.EmployeeAddressRow.idProperty; };
            EmployeeAddressGrid.prototype.getLocalTextPrefix = function () { return HR.EmployeeAddressRow.localTextPrefix; };
            EmployeeAddressGrid.prototype.getService = function () { return HR.EmployeeAddressService.baseUrl; };
            EmployeeAddressGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeAddressGrid);
            return EmployeeAddressGrid;
        }(Serenity.EntityGrid));
        HR.EmployeeAddressGrid = EmployeeAddressGrid;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEmailDialog = /** @class */ (function (_super) {
            __extends(EmployeeEmailDialog, _super);
            function EmployeeEmailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HR.EmployeeEmailForm(_this.idPrefix);
                return _this;
            }
            EmployeeEmailDialog.prototype.getFormKey = function () { return HR.EmployeeEmailForm.formKey; };
            EmployeeEmailDialog.prototype.getIdProperty = function () { return HR.EmployeeEmailRow.idProperty; };
            EmployeeEmailDialog.prototype.getLocalTextPrefix = function () { return HR.EmployeeEmailRow.localTextPrefix; };
            EmployeeEmailDialog.prototype.getNameProperty = function () { return HR.EmployeeEmailRow.nameProperty; };
            EmployeeEmailDialog.prototype.getService = function () { return HR.EmployeeEmailService.baseUrl; };
            EmployeeEmailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmployeeEmailDialog);
            return EmployeeEmailDialog;
        }(Serenity.EntityDialog));
        HR.EmployeeEmailDialog = EmployeeEmailDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEmailEditor = /** @class */ (function (_super) {
            __extends(EmployeeEmailEditor, _super);
            function EmployeeEmailEditor(container) {
                return _super.call(this, container) || this;
            }
            EmployeeEmailEditor.prototype.getColumnsKey = function () {
                return 'HR.EmployeeEmail';
            };
            EmployeeEmailEditor.prototype.getDialogType = function () {
                return HR.EmployeeEmailEditorDialog;
            };
            EmployeeEmailEditor.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeEmailRow.localTextPrefix;
            };
            EmployeeEmailEditor.prototype.getAddButtonCaption = function () {
                return "Add Email";
            };
            EmployeeEmailEditor.prototype.validateEntity = function (row, id) {
                if (!_super.prototype.validateEntity.call(this, row, id))
                    return false;
                //row.EmailAddress = Infra.EmailRow.getLookup()
                //    .itemById[row.EmailId].EmailAddress;
                //row.FullName = HR.EmployeeRow.getLookup().itemById[row.EmployeeId].FullName;
                return true;
            };
            EmployeeEmailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeEmailEditor);
            return EmployeeEmailEditor;
        }(Ledger.Common.GridEditorBase));
        HR.EmployeeEmailEditor = EmployeeEmailEditor;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEmailEditorDialog = /** @class */ (function (_super) {
            __extends(EmployeeEmailEditorDialog, _super);
            function EmployeeEmailEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new HR.EmployeeEmailForm(_this.idPrefix);
                return _this;
            }
            EmployeeEmailEditorDialog.prototype.getFormKey = function () {
                return HR.EmployeeEmailForm.formKey;
            };
            EmployeeEmailEditorDialog.prototype.getLocalTextPrefix = function () {
                return HR.EmployeeEmailRow.localTextPrefix;
            };
            EmployeeEmailEditorDialog.prototype.getNameProperty = function () {
                return HR.EmployeeEmailRow.nameProperty;
            };
            EmployeeEmailEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmployeeEmailEditorDialog);
            return EmployeeEmailEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        HR.EmployeeEmailEditorDialog = EmployeeEmailEditorDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEmailGrid = /** @class */ (function (_super) {
            __extends(EmployeeEmailGrid, _super);
            function EmployeeEmailGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeEmailGrid.prototype.getColumnsKey = function () { return 'HR.EmployeeEmail'; };
            EmployeeEmailGrid.prototype.getDialogType = function () { return HR.EmployeeEmailDialog; };
            EmployeeEmailGrid.prototype.getIdProperty = function () { return HR.EmployeeEmailRow.idProperty; };
            EmployeeEmailGrid.prototype.getLocalTextPrefix = function () { return HR.EmployeeEmailRow.localTextPrefix; };
            EmployeeEmailGrid.prototype.getService = function () { return HR.EmployeeEmailService.baseUrl; };
            EmployeeEmailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeEmailGrid);
            return EmployeeEmailGrid;
        }(Serenity.EntityGrid));
        HR.EmployeeEmailGrid = EmployeeEmailGrid;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeePhoneDialog = /** @class */ (function (_super) {
            __extends(EmployeePhoneDialog, _super);
            function EmployeePhoneDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HR.EmployeePhoneForm(_this.idPrefix);
                return _this;
            }
            EmployeePhoneDialog.prototype.getFormKey = function () { return HR.EmployeePhoneForm.formKey; };
            EmployeePhoneDialog.prototype.getIdProperty = function () { return HR.EmployeePhoneRow.idProperty; };
            EmployeePhoneDialog.prototype.getLocalTextPrefix = function () { return HR.EmployeePhoneRow.localTextPrefix; };
            EmployeePhoneDialog.prototype.getNameProperty = function () { return HR.EmployeePhoneRow.nameProperty; };
            EmployeePhoneDialog.prototype.getService = function () { return HR.EmployeePhoneService.baseUrl; };
            EmployeePhoneDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmployeePhoneDialog);
            return EmployeePhoneDialog;
        }(Serenity.EntityDialog));
        HR.EmployeePhoneDialog = EmployeePhoneDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeePhoneEditor = /** @class */ (function (_super) {
            __extends(EmployeePhoneEditor, _super);
            function EmployeePhoneEditor(container) {
                return _super.call(this, container) || this;
            }
            EmployeePhoneEditor.prototype.getColumnsKey = function () { return 'HR.EmployeePhone'; };
            EmployeePhoneEditor.prototype.getDialogType = function () { return HR.EmployeePhoneEditorDialog; };
            EmployeePhoneEditor.prototype.getLocalTextPrefix = function () { return HR.EmployeePhoneRow.localTextPrefix; };
            EmployeePhoneEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeePhoneEditor);
            return EmployeePhoneEditor;
        }(Ledger.Common.GridEditorBase));
        HR.EmployeePhoneEditor = EmployeePhoneEditor;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeePhoneEditorDialog = /** @class */ (function (_super) {
            __extends(EmployeePhoneEditorDialog, _super);
            function EmployeePhoneEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new HR.EmployeePhoneForm(_this.idPrefix);
                return _this;
            }
            EmployeePhoneEditorDialog.prototype.getFormKey = function () { return HR.EmployeePhoneForm.formKey; };
            EmployeePhoneEditorDialog.prototype.getLocalTextPrefix = function () { return HR.EmployeePhoneRow.localTextPrefix; };
            EmployeePhoneEditorDialog.prototype.getNameProperty = function () { return HR.EmployeePhoneRow.nameProperty; };
            EmployeePhoneEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmployeePhoneEditorDialog);
            return EmployeePhoneEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        HR.EmployeePhoneEditorDialog = EmployeePhoneEditorDialog;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeePhoneGrid = /** @class */ (function (_super) {
            __extends(EmployeePhoneGrid, _super);
            function EmployeePhoneGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeePhoneGrid.prototype.getColumnsKey = function () { return 'HR.EmployeePhone'; };
            EmployeePhoneGrid.prototype.getDialogType = function () { return HR.EmployeePhoneDialog; };
            EmployeePhoneGrid.prototype.getIdProperty = function () { return HR.EmployeePhoneRow.idProperty; };
            EmployeePhoneGrid.prototype.getLocalTextPrefix = function () { return HR.EmployeePhoneRow.localTextPrefix; };
            EmployeePhoneGrid.prototype.getService = function () { return HR.EmployeePhoneService.baseUrl; };
            EmployeePhoneGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeePhoneGrid);
            return EmployeePhoneGrid;
        }(Serenity.EntityGrid));
        HR.EmployeePhoneGrid = EmployeePhoneGrid;
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var AddressesDialog = /** @class */ (function (_super) {
            __extends(AddressesDialog, _super);
            function AddressesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.AddressesForm(_this.idPrefix);
                return _this;
            }
            AddressesDialog.prototype.getFormKey = function () { return Infra.AddressesForm.formKey; };
            AddressesDialog.prototype.getIdProperty = function () { return Infra.AddressesRow.idProperty; };
            AddressesDialog.prototype.getLocalTextPrefix = function () { return Infra.AddressesRow.localTextPrefix; };
            AddressesDialog.prototype.getNameProperty = function () { return Infra.AddressesRow.nameProperty; };
            AddressesDialog.prototype.getService = function () { return Infra.AddressesService.baseUrl; };
            AddressesDialog.prototype.getLanguages = function () {
                return Ledger.LanguageList.getValue();
            };
            AddressesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AddressesDialog);
            return AddressesDialog;
        }(Serenity.EntityDialog));
        Infra.AddressesDialog = AddressesDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var AddressesEditor = /** @class */ (function (_super) {
            __extends(AddressesEditor, _super);
            function AddressesEditor(container) {
                return _super.call(this, container) || this;
            }
            AddressesEditor.prototype.getColumnsKey = function () { return 'Infra.Addresses'; };
            AddressesEditor.prototype.getDialogType = function () { return Infra.AddressesEditorDialog; };
            AddressesEditor.prototype.getLocalTextPrefix = function () { return Infra.AddressesRow.localTextPrefix; };
            AddressesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AddressesEditor);
            return AddressesEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.AddressesEditor = AddressesEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var AddressesEditorDialog = /** @class */ (function (_super) {
            __extends(AddressesEditorDialog, _super);
            function AddressesEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.AddressesForm(_this.idPrefix);
                return _this;
            }
            AddressesEditorDialog.prototype.getFormKey = function () { return Infra.AddressesForm.formKey; };
            AddressesEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.AddressesRow.localTextPrefix; };
            AddressesEditorDialog.prototype.getNameProperty = function () { return Infra.AddressesRow.nameProperty; };
            AddressesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AddressesEditorDialog);
            return AddressesEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.AddressesEditorDialog = AddressesEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var AddressesGrid = /** @class */ (function (_super) {
            __extends(AddressesGrid, _super);
            function AddressesGrid(container) {
                return _super.call(this, container) || this;
            }
            AddressesGrid.prototype.getColumnsKey = function () { return 'Infra.Addresses'; };
            AddressesGrid.prototype.getDialogType = function () { return Infra.AddressesDialog; };
            AddressesGrid.prototype.getIdProperty = function () { return Infra.AddressesRow.idProperty; };
            AddressesGrid.prototype.getLocalTextPrefix = function () { return Infra.AddressesRow.localTextPrefix; };
            AddressesGrid.prototype.getService = function () { return Infra.AddressesService.baseUrl; };
            AddressesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AddressesGrid);
            return AddressesGrid;
        }(Serenity.EntityGrid));
        Infra.AddressesGrid = AddressesGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Infra.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Infra.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Infra.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Infra.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Infra.CategoryService.baseUrl; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Infra.CategoryDialog = CategoryDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CategoryEditor = /** @class */ (function (_super) {
            __extends(CategoryEditor, _super);
            function CategoryEditor(container) {
                return _super.call(this, container) || this;
            }
            CategoryEditor.prototype.getColumnsKey = function () { return 'Infra.Category'; };
            CategoryEditor.prototype.getDialogType = function () { return Infra.CategoryEditorDialog; };
            CategoryEditor.prototype.getLocalTextPrefix = function () { return Infra.CategoryRow.localTextPrefix; };
            CategoryEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryEditor);
            return CategoryEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.CategoryEditor = CategoryEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CategoryEditorDialog = /** @class */ (function (_super) {
            __extends(CategoryEditorDialog, _super);
            function CategoryEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryEditorDialog.prototype.getFormKey = function () { return Infra.CategoryForm.formKey; };
            CategoryEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.CategoryRow.localTextPrefix; };
            CategoryEditorDialog.prototype.getNameProperty = function () { return Infra.CategoryRow.nameProperty; };
            CategoryEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CategoryEditorDialog);
            return CategoryEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.CategoryEditorDialog = CategoryEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return 'Infra.Category'; };
            CategoryGrid.prototype.getDialogType = function () { return Infra.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Infra.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Infra.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Infra.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Infra.CategoryGrid = CategoryGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CurrencyDialog = /** @class */ (function (_super) {
            __extends(CurrencyDialog, _super);
            function CurrencyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.CurrencyForm(_this.idPrefix);
                return _this;
            }
            CurrencyDialog.prototype.getFormKey = function () { return Infra.CurrencyForm.formKey; };
            CurrencyDialog.prototype.getIdProperty = function () { return Infra.CurrencyRow.idProperty; };
            CurrencyDialog.prototype.getLocalTextPrefix = function () { return Infra.CurrencyRow.localTextPrefix; };
            CurrencyDialog.prototype.getNameProperty = function () { return Infra.CurrencyRow.nameProperty; };
            CurrencyDialog.prototype.getService = function () { return Infra.CurrencyService.baseUrl; };
            CurrencyDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CurrencyDialog);
            return CurrencyDialog;
        }(Serenity.EntityDialog));
        Infra.CurrencyDialog = CurrencyDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CurrencyEditor = /** @class */ (function (_super) {
            __extends(CurrencyEditor, _super);
            function CurrencyEditor(container) {
                return _super.call(this, container) || this;
            }
            CurrencyEditor.prototype.getColumnsKey = function () { return 'Infra.Currency'; };
            CurrencyEditor.prototype.getDialogType = function () { return Infra.CurrencyEditorDialog; };
            CurrencyEditor.prototype.getLocalTextPrefix = function () { return Infra.CurrencyRow.localTextPrefix; };
            CurrencyEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrencyEditor);
            return CurrencyEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.CurrencyEditor = CurrencyEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CurrencyEditorDialog = /** @class */ (function (_super) {
            __extends(CurrencyEditorDialog, _super);
            function CurrencyEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.CurrencyForm(_this.idPrefix);
                return _this;
            }
            CurrencyEditorDialog.prototype.getFormKey = function () { return Infra.CurrencyForm.formKey; };
            CurrencyEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.CurrencyRow.localTextPrefix; };
            CurrencyEditorDialog.prototype.getNameProperty = function () { return Infra.CurrencyRow.nameProperty; };
            CurrencyEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CurrencyEditorDialog);
            return CurrencyEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.CurrencyEditorDialog = CurrencyEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CurrencyGrid = /** @class */ (function (_super) {
            __extends(CurrencyGrid, _super);
            function CurrencyGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrencyGrid.prototype.getColumnsKey = function () { return 'Infra.Currency'; };
            CurrencyGrid.prototype.getDialogType = function () { return Infra.CurrencyDialog; };
            CurrencyGrid.prototype.getIdProperty = function () { return Infra.CurrencyRow.idProperty; };
            CurrencyGrid.prototype.getLocalTextPrefix = function () { return Infra.CurrencyRow.localTextPrefix; };
            CurrencyGrid.prototype.getService = function () { return Infra.CurrencyService.baseUrl; };
            CurrencyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrencyGrid);
            return CurrencyGrid;
        }(Serenity.EntityGrid));
        Infra.CurrencyGrid = CurrencyGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var EmailDialog = /** @class */ (function (_super) {
            __extends(EmailDialog, _super);
            function EmailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.EmailForm(_this.idPrefix);
                return _this;
            }
            EmailDialog.prototype.getFormKey = function () { return Infra.EmailForm.formKey; };
            EmailDialog.prototype.getIdProperty = function () { return Infra.EmailRow.idProperty; };
            EmailDialog.prototype.getLocalTextPrefix = function () { return Infra.EmailRow.localTextPrefix; };
            EmailDialog.prototype.getNameProperty = function () { return Infra.EmailRow.nameProperty; };
            EmailDialog.prototype.getService = function () { return Infra.EmailService.baseUrl; };
            EmailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmailDialog);
            return EmailDialog;
        }(Serenity.EntityDialog));
        Infra.EmailDialog = EmailDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var EmailEditor = /** @class */ (function (_super) {
            __extends(EmailEditor, _super);
            function EmailEditor(container) {
                return _super.call(this, container) || this;
            }
            EmailEditor.prototype.getColumnsKey = function () { return 'Infra.Email'; };
            EmailEditor.prototype.getDialogType = function () { return Infra.EmailEditorDialog; };
            EmailEditor.prototype.getLocalTextPrefix = function () { return Infra.EmailRow.localTextPrefix; };
            EmailEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EmailEditor);
            return EmailEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.EmailEditor = EmailEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var EmailEditorDialog = /** @class */ (function (_super) {
            __extends(EmailEditorDialog, _super);
            function EmailEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.EmailForm(_this.idPrefix);
                return _this;
            }
            EmailEditorDialog.prototype.getFormKey = function () { return Infra.EmailForm.formKey; };
            EmailEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.EmailRow.localTextPrefix; };
            EmailEditorDialog.prototype.getNameProperty = function () { return Infra.EmailRow.nameProperty; };
            EmailEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmailEditorDialog);
            return EmailEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.EmailEditorDialog = EmailEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var EmailGrid = /** @class */ (function (_super) {
            __extends(EmailGrid, _super);
            function EmailGrid(container) {
                return _super.call(this, container) || this;
            }
            EmailGrid.prototype.getColumnsKey = function () { return 'Infra.Email'; };
            EmailGrid.prototype.getDialogType = function () { return Infra.EmailDialog; };
            EmailGrid.prototype.getIdProperty = function () { return Infra.EmailRow.idProperty; };
            EmailGrid.prototype.getLocalTextPrefix = function () { return Infra.EmailRow.localTextPrefix; };
            EmailGrid.prototype.getService = function () { return Infra.EmailService.baseUrl; };
            EmailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmailGrid);
            return EmailGrid;
        }(Serenity.EntityGrid));
        Infra.EmailGrid = EmailGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Infra.NoteDialog = NoteDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Infra.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: Ledger.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Infra.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Infra.NotesEditor = NotesEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var PhoneDialog = /** @class */ (function (_super) {
            __extends(PhoneDialog, _super);
            function PhoneDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.PhoneForm(_this.idPrefix);
                return _this;
            }
            PhoneDialog.prototype.getFormKey = function () { return Infra.PhoneForm.formKey; };
            PhoneDialog.prototype.getIdProperty = function () { return Infra.PhoneRow.idProperty; };
            PhoneDialog.prototype.getLocalTextPrefix = function () { return Infra.PhoneRow.localTextPrefix; };
            PhoneDialog.prototype.getNameProperty = function () { return Infra.PhoneRow.nameProperty; };
            PhoneDialog.prototype.getService = function () { return Infra.PhoneService.baseUrl; };
            PhoneDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PhoneDialog);
            return PhoneDialog;
        }(Serenity.EntityDialog));
        Infra.PhoneDialog = PhoneDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(container) {
                return _super.call(this, container) || this;
            }
            PhoneEditor.prototype.getColumnsKey = function () { return 'Infra.Phone'; };
            PhoneEditor.prototype.getDialogType = function () { return Infra.PhoneEditorDialog; };
            PhoneEditor.prototype.getLocalTextPrefix = function () { return Infra.PhoneRow.localTextPrefix; };
            PhoneEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PhoneEditor);
            return PhoneEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.PhoneEditor = PhoneEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var PhoneEditorDialog = /** @class */ (function (_super) {
            __extends(PhoneEditorDialog, _super);
            function PhoneEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.PhoneForm(_this.idPrefix);
                return _this;
            }
            PhoneEditorDialog.prototype.getFormKey = function () { return Infra.PhoneForm.formKey; };
            PhoneEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.PhoneRow.localTextPrefix; };
            PhoneEditorDialog.prototype.getNameProperty = function () { return Infra.PhoneRow.nameProperty; };
            PhoneEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PhoneEditorDialog);
            return PhoneEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.PhoneEditorDialog = PhoneEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var PhoneGrid = /** @class */ (function (_super) {
            __extends(PhoneGrid, _super);
            function PhoneGrid(container) {
                return _super.call(this, container) || this;
            }
            PhoneGrid.prototype.getColumnsKey = function () { return 'Infra.Phone'; };
            PhoneGrid.prototype.getDialogType = function () { return Infra.PhoneDialog; };
            PhoneGrid.prototype.getIdProperty = function () { return Infra.PhoneRow.idProperty; };
            PhoneGrid.prototype.getLocalTextPrefix = function () { return Infra.PhoneRow.localTextPrefix; };
            PhoneGrid.prototype.getService = function () { return Infra.PhoneService.baseUrl; };
            PhoneGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PhoneGrid);
            return PhoneGrid;
        }(Serenity.EntityGrid));
        Infra.PhoneGrid = PhoneGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportDialog = /** @class */ (function (_super) {
            __extends(SupportDialog, _super);
            function SupportDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.SupportForm(_this.idPrefix);
                return _this;
            }
            SupportDialog.prototype.getFormKey = function () { return Infra.SupportForm.formKey; };
            SupportDialog.prototype.getIdProperty = function () { return Infra.SupportRow.idProperty; };
            SupportDialog.prototype.getLocalTextPrefix = function () { return Infra.SupportRow.localTextPrefix; };
            SupportDialog.prototype.getNameProperty = function () { return Infra.SupportRow.nameProperty; };
            SupportDialog.prototype.getService = function () { return Infra.SupportService.baseUrl; };
            SupportDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupportDialog);
            return SupportDialog;
        }(Serenity.EntityDialog));
        Infra.SupportDialog = SupportDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportEditor = /** @class */ (function (_super) {
            __extends(SupportEditor, _super);
            function SupportEditor(container) {
                return _super.call(this, container) || this;
            }
            SupportEditor.prototype.getColumnsKey = function () { return 'Infra.Support'; };
            SupportEditor.prototype.getDialogType = function () { return Infra.SupportEditorDialog; };
            SupportEditor.prototype.getLocalTextPrefix = function () { return Infra.SupportRow.localTextPrefix; };
            SupportEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SupportEditor);
            return SupportEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.SupportEditor = SupportEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportEditorDialog = /** @class */ (function (_super) {
            __extends(SupportEditorDialog, _super);
            function SupportEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.SupportForm(_this.idPrefix);
                return _this;
            }
            SupportEditorDialog.prototype.getFormKey = function () { return Infra.SupportForm.formKey; };
            SupportEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.SupportRow.localTextPrefix; };
            SupportEditorDialog.prototype.getNameProperty = function () { return Infra.SupportRow.nameProperty; };
            SupportEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupportEditorDialog);
            return SupportEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.SupportEditorDialog = SupportEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportGrid = /** @class */ (function (_super) {
            __extends(SupportGrid, _super);
            function SupportGrid(container) {
                return _super.call(this, container) || this;
            }
            SupportGrid.prototype.getColumnsKey = function () { return 'Infra.Support'; };
            SupportGrid.prototype.getDialogType = function () { return Infra.SupportDialog; };
            SupportGrid.prototype.getIdProperty = function () { return Infra.SupportRow.idProperty; };
            SupportGrid.prototype.getLocalTextPrefix = function () { return Infra.SupportRow.localTextPrefix; };
            SupportGrid.prototype.getService = function () { return Infra.SupportService.baseUrl; };
            SupportGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupportGrid);
            return SupportGrid;
        }(Serenity.EntityGrid));
        Infra.SupportGrid = SupportGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeDialog = /** @class */ (function (_super) {
            __extends(SupportTypeDialog, _super);
            function SupportTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.SupportTypeForm(_this.idPrefix);
                return _this;
            }
            SupportTypeDialog.prototype.getFormKey = function () { return Infra.SupportTypeForm.formKey; };
            SupportTypeDialog.prototype.getIdProperty = function () { return Infra.SupportTypeRow.idProperty; };
            SupportTypeDialog.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeRow.localTextPrefix; };
            SupportTypeDialog.prototype.getNameProperty = function () { return Infra.SupportTypeRow.nameProperty; };
            SupportTypeDialog.prototype.getService = function () { return Infra.SupportTypeService.baseUrl; };
            SupportTypeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupportTypeDialog);
            return SupportTypeDialog;
        }(Serenity.EntityDialog));
        Infra.SupportTypeDialog = SupportTypeDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeEditor = /** @class */ (function (_super) {
            __extends(SupportTypeEditor, _super);
            function SupportTypeEditor(container) {
                return _super.call(this, container) || this;
            }
            SupportTypeEditor.prototype.getColumnsKey = function () { return 'Infra.SupportType'; };
            SupportTypeEditor.prototype.getDialogType = function () { return Infra.SupportTypeEditorDialog; };
            SupportTypeEditor.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeRow.localTextPrefix; };
            SupportTypeEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SupportTypeEditor);
            return SupportTypeEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.SupportTypeEditor = SupportTypeEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeEditorDialog = /** @class */ (function (_super) {
            __extends(SupportTypeEditorDialog, _super);
            function SupportTypeEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.SupportTypeForm(_this.idPrefix);
                return _this;
            }
            SupportTypeEditorDialog.prototype.getFormKey = function () { return Infra.SupportTypeForm.formKey; };
            SupportTypeEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeRow.localTextPrefix; };
            SupportTypeEditorDialog.prototype.getNameProperty = function () { return Infra.SupportTypeRow.nameProperty; };
            SupportTypeEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupportTypeEditorDialog);
            return SupportTypeEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.SupportTypeEditorDialog = SupportTypeEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeGrid = /** @class */ (function (_super) {
            __extends(SupportTypeGrid, _super);
            function SupportTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            SupportTypeGrid.prototype.getColumnsKey = function () { return 'Infra.SupportType'; };
            SupportTypeGrid.prototype.getDialogType = function () { return Infra.SupportTypeDialog; };
            SupportTypeGrid.prototype.getIdProperty = function () { return Infra.SupportTypeRow.idProperty; };
            SupportTypeGrid.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeRow.localTextPrefix; };
            SupportTypeGrid.prototype.getService = function () { return Infra.SupportTypeService.baseUrl; };
            SupportTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupportTypeGrid);
            return SupportTypeGrid;
        }(Serenity.EntityGrid));
        Infra.SupportTypeGrid = SupportTypeGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeStringDialog = /** @class */ (function (_super) {
            __extends(SupportTypeStringDialog, _super);
            function SupportTypeStringDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.SupportTypeStringForm(_this.idPrefix);
                return _this;
            }
            SupportTypeStringDialog.prototype.getFormKey = function () { return Infra.SupportTypeStringForm.formKey; };
            SupportTypeStringDialog.prototype.getIdProperty = function () { return Infra.SupportTypeStringRow.idProperty; };
            SupportTypeStringDialog.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeStringRow.localTextPrefix; };
            SupportTypeStringDialog.prototype.getNameProperty = function () { return Infra.SupportTypeStringRow.nameProperty; };
            SupportTypeStringDialog.prototype.getService = function () { return Infra.SupportTypeStringService.baseUrl; };
            SupportTypeStringDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupportTypeStringDialog);
            return SupportTypeStringDialog;
        }(Serenity.EntityDialog));
        Infra.SupportTypeStringDialog = SupportTypeStringDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeStringEditor = /** @class */ (function (_super) {
            __extends(SupportTypeStringEditor, _super);
            function SupportTypeStringEditor(container) {
                return _super.call(this, container) || this;
            }
            SupportTypeStringEditor.prototype.getColumnsKey = function () { return 'Infra.SupportTypeString'; };
            SupportTypeStringEditor.prototype.getDialogType = function () { return Infra.SupportTypeStringEditorDialog; };
            SupportTypeStringEditor.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeStringRow.localTextPrefix; };
            SupportTypeStringEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], SupportTypeStringEditor);
            return SupportTypeStringEditor;
        }(Ledger.Common.GridEditorBase));
        Infra.SupportTypeStringEditor = SupportTypeStringEditor;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeStringEditorDialog = /** @class */ (function (_super) {
            __extends(SupportTypeStringEditorDialog, _super);
            function SupportTypeStringEditorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Infra.SupportTypeStringForm(_this.idPrefix);
                return _this;
            }
            SupportTypeStringEditorDialog.prototype.getFormKey = function () { return Infra.SupportTypeStringForm.formKey; };
            SupportTypeStringEditorDialog.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeStringRow.localTextPrefix; };
            SupportTypeStringEditorDialog.prototype.getNameProperty = function () { return Infra.SupportTypeStringRow.nameProperty; };
            SupportTypeStringEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SupportTypeStringEditorDialog);
            return SupportTypeStringEditorDialog;
        }(Ledger.Common.GridEditorDialog));
        Infra.SupportTypeStringEditorDialog = SupportTypeStringEditorDialog;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeStringGrid = /** @class */ (function (_super) {
            __extends(SupportTypeStringGrid, _super);
            function SupportTypeStringGrid(container) {
                return _super.call(this, container) || this;
            }
            SupportTypeStringGrid.prototype.getColumnsKey = function () { return 'Infra.SupportTypeString'; };
            SupportTypeStringGrid.prototype.getDialogType = function () { return Infra.SupportTypeStringDialog; };
            SupportTypeStringGrid.prototype.getIdProperty = function () { return Infra.SupportTypeStringRow.idProperty; };
            SupportTypeStringGrid.prototype.getLocalTextPrefix = function () { return Infra.SupportTypeStringRow.localTextPrefix; };
            SupportTypeStringGrid.prototype.getService = function () { return Infra.SupportTypeStringService.baseUrl; };
            SupportTypeStringGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupportTypeStringGrid);
            return SupportTypeStringGrid;
        }(Serenity.EntityGrid));
        Infra.SupportTypeStringGrid = SupportTypeStringGrid;
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                _this.form = new Membership.LoginForm(_this.idPrefix);
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog.prototype.getLanguages = function () {
                return Ledger.LanguageList.getValue();
            };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                _this.ordersGrid.element.flexHeightOnly(1);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                Ledger.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = /** @class */ (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return 'Northwind.Customer';
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Ledger.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(Ledger.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Ledger.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: function () { return ({ OrderID: _this.get_entityId() }); }
                }));
                return buttons;
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../Order/OrderDialog.ts" />
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = /** @class */ (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                var fld = Northwind.OrderRow.Fields;
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Ledger.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Ledger.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = /** @class */ (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                var fld = Northwind.OrderRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.CustomerCompanyName; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = /** @class */ (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = /** @class */ (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: Ledger.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = /** @class */ (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/BulkServiceAction.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var OrderBulkAction = /** @class */ (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                BasicSamples.BasicSamplesService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(Ledger.Common.BulkServiceAction));
        BasicSamples.OrderBulkAction = OrderBulkAction;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(Ledger.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(Ledger.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductDialog.prototype.getLanguages = function () {
                return Ledger.LanguageList.getValue();
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Ledger.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Ledger.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass + "'" +
                    " value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' value='" + Q.htmlEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var fld = Northwind.ProductRow.Fields;
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + id + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                var fld = Northwind.ProductRow.Fields;
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === fld.CategoryName; });
                category.referencedFields = [fld.CategoryID];
                category.format = function (ctx) { return _this.selectFormatter(ctx, fld.CategoryID, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === fld.SupplierCompanyName; });
                supplier.referencedFields = [fld.SupplierID];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, fld.SupplierID, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === fld.UnitPrice; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsInStock; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsOnOrder; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.ReorderLevel; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field') || this.getColumns()[cell.cell].field;
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = /** @class */ (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return Ledger.LanguageList.getValue();
            };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = /** @class */ (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor_1 = PhoneEditor;
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = PhoneEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
            var PhoneEditor_1;
        }(Serenity.StringEditor));
        Northwind.PhoneEditor = PhoneEditor;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = /** @class */ (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return Ledger.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = /** @class */ (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = /** @class */ (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return Ledger.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = /** @class */ (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return Ledger.LanguageList.getValue();
            };
            TerritoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryDialog);
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = /** @class */ (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryGrid);
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Ledger.Authorization || (Ledger.Authorization = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var ChartInDialog = /** @class */ (function (_super) {
            __extends(ChartInDialog, _super);
            function ChartInDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChartInDialog_1 = ChartInDialog;
            ChartInDialog.initializePage = function () {
                $(function () {
                    $('#LaunchDialogButton').click(function (e) {
                        (new ChartInDialog_1()).dialogOpen();
                    });
                });
            };
            ChartInDialog.prototype.onDialogOpen = function () {
                var _this = this;
                _super.prototype.onDialogOpen.call(this);
                BasicSamples.BasicSamplesService.OrdersByShipper({}, function (response) {
                    _this.areaChart = new Morris.Area({
                        element: _this.idPrefix + 'Chart',
                        resize: true, parseTime: false,
                        data: response.Values,
                        xkey: 'Month',
                        ykeys: response.ShipperKeys, labels: response.ShipperLabels, hideHover: 'auto'
                    });
                });
                this.element.closest('.ui-dialog').bind('resize', function () { return _this.arrange(); });
            };
            ChartInDialog.prototype.arrange = function () {
                _super.prototype.arrange.call(this);
                this.areaChart && this.areaChart.redraw();
            };
            ChartInDialog.prototype.getTemplate = function () {
                // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.
                return "<div id='~_Chart'></div>";
            };
            ChartInDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.title = 'Orders by Shipper';
                return opt;
            };
            ChartInDialog = ChartInDialog_1 = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.resizable(),
                Serenity.Decorators.maximizable()
            ], ChartInDialog);
            return ChartInDialog;
            var ChartInDialog_1;
        }(Serenity.TemplatedDialog));
        BasicSamples.ChartInDialog = ChartInDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var CloneableEntityDialog = /** @class */ (function (_super) {
            __extends(CloneableEntityDialog, _super);
            function CloneableEntityDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CloneableEntityDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            /**
             * Overriding this method is optional to customize cloned entity
             */
            CloneableEntityDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' (Clone)';
                if (!Q.endsWith(clone.ProductName || '', suffix)) {
                    clone.ProductName = (clone.ProductName || '') + suffix;
                }
                // it's better to clear image for this sample
                // otherwise we would have to create a temporary copy of it
                // and upload
                clone.ProductImage = null;
                // let's clear fields not logical to be cloned
                clone.UnitsInStock = 0;
                clone.UnitsOnOrder = 0;
                return clone;
            };
            CloneableEntityDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], CloneableEntityDialog);
            return CloneableEntityDialog;
        }(Ledger.Northwind.ProductDialog));
        BasicSamples.CloneableEntityDialog = CloneableEntityDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var CloneableEntityGrid = /** @class */ (function (_super) {
            __extends(CloneableEntityGrid, _super);
            function CloneableEntityGrid(container) {
                return _super.call(this, container) || this;
            }
            CloneableEntityGrid.prototype.getDialogType = function () { return BasicSamples.CloneableEntityDialog; };
            CloneableEntityGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CloneableEntityGrid);
            return CloneableEntityGrid;
        }(Ledger.Northwind.ProductGrid));
        BasicSamples.CloneableEntityGrid = CloneableEntityGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var DefaultValuesInNewGrid = /** @class */ (function (_super) {
            __extends(DefaultValuesInNewGrid, _super);
            function DefaultValuesInNewGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called when New Item button is clicked.
             * By default, it calls EditItem with an empty entity.
             * This is a good place to fill in default values for New Item button.
             */
            DefaultValuesInNewGrid.prototype.addButtonClick = function () {
                this.editItem({
                    CustomerID: 'ANTON',
                    RequiredDate: Q.formatDate(new Date(), 'yyyy-MM-dd'),
                    EmployeeID: Ledger.Northwind.EmployeeRow.getLookup().items
                        .filter(function (x) { return x.FullName === 'Robert King'; })[0].EmployeeID,
                    ShipVia: Ledger.Northwind.ShipperRow.getLookup().items
                        .filter(function (x) { return x.CompanyName === 'Speedy Express'; })[0].ShipperID
                });
            };
            DefaultValuesInNewGrid.prototype.getButtons = function () {
                var _this = this;
                // preserving default New Item button
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Add Order from the Queen',
                    cssClass: 'add-button',
                    onClick: function () {
                        // using EditItem method as a shortcut to create a new Order dialog,
                        // bind to its events, load our order row, and open dialog
                        _this.editItem({
                            CustomerID: 'QUEEN',
                            EmployeeID: Ledger.Northwind.EmployeeRow.getLookup().items
                                .filter(function (x) { return x.FullName === 'Nancy Davolio'; })[0].EmployeeID,
                            ShipVia: Ledger.Northwind.ShipperRow.getLookup().items
                                .filter(function (x) { return x.CompanyName === 'United Package'; })[0].ShipperID
                        });
                    }
                });
                buttons.push({
                    title: 'Add Order with 5 Chai by Laura', cssClass: 'add-note-button',
                    onClick: function () {
                        // we could use EditItem here too, but for demonstration
                        // purposes we are manually creating dialog this time
                        var dlg = new Ledger.Northwind.OrderDialog();
                        // let grid watch for changes to manually created dialog, 
                        // so when a new item is saved, grid can refresh itself
                        _this.initDialog(dlg);
                        // get a reference to product Chai
                        var chai = Ledger.Northwind.ProductRow.getLookup().items
                            .filter(function (x) { return x.ProductName === 'Chai'; })[0];
                        // LoadEntityAndOpenDialog, loads an OrderRow 
                        // to dialog and opens it
                        var lauraCallahanID = Ledger.Northwind.EmployeeRow.getLookup().items
                            .filter(function (x) { return x.FullName === 'Laura Callahan'; })[0].EmployeeID;
                        dlg.loadEntityAndOpenDialog({
                            CustomerID: 'GOURL',
                            EmployeeID: lauraCallahanID,
                            DetailList: [{
                                    ProductID: chai.ProductID,
                                    ProductName: chai.ProductName,
                                    UnitPrice: chai.UnitPrice,
                                    Quantity: 5,
                                    LineTotal: chai.UnitPrice * 5
                                }]
                        });
                    }
                });
                return buttons;
            };
            DefaultValuesInNewGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DefaultValuesInNewGrid);
            return DefaultValuesInNewGrid;
        }(Ledger.Northwind.OrderGrid));
        BasicSamples.DefaultValuesInNewGrid = DefaultValuesInNewGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var DialogBoxes;
        (function (DialogBoxes) {
            function initializePage() {
                confirmDialogButtons();
                confirmWithCustomTitle();
                information();
                warning();
                alert();
            }
            DialogBoxes.initializePage = initializePage;
            function confirmDialogButtons() {
                // here we demonstrate how you can detect which button user has clicked
                // second parameter is Yes handler and it is called only when user clicks Yes.
                // third parameter has some additional options, that you should only use when needed
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, i'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            }
            function confirmWithCustomTitle() {
                $('#ConfirmWithCustomTitle').click(function () {
                    Q.confirm("This confirmation has a custom title", function () {
                        Q.notifySuccess("Allright!");
                    }, {
                        title: 'Some Custom Confirmation Title'
                    });
                });
            }
            function information() {
                $('#Information').click(function () {
                    Q.information("What a nice day", function () {
                        Q.notifySuccess("No problem!");
                    });
                });
            }
            function warning() {
                $('#Warning').click(function () {
                    Q.warning("Hey, be careful!");
                });
            }
            function alert() {
                $('#Alert').click(function () {
                    Q.alert("Houston, we got a problem!");
                });
            }
        })(DialogBoxes = BasicSamples.DialogBoxes || (BasicSamples.DialogBoxes = {}));
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var GetInsertedRecordIdDialog = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdDialog, _super);
            function GetInsertedRecordIdDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This method is called after the save request to service
             * is completed succesfully. This can be an insert or update.
             *
             * @param response Response that is returned from server
             */
            GetInsertedRecordIdDialog.prototype.onSaveSuccess = function (response) {
                // check that this is an insert
                if (this.isNew) {
                    Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);
                    // you could also open a new dialog
                    // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);
                    // but let's better load inserted record using Retrieve service
                    Ledger.Northwind.CategoryService.Retrieve({
                        EntityId: response.EntityId
                    }, function (resp) {
                        Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                    });
                }
            };
            GetInsertedRecordIdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdDialog);
            return GetInsertedRecordIdDialog;
        }(Ledger.Northwind.CategoryDialog));
        BasicSamples.GetInsertedRecordIdDialog = GetInsertedRecordIdDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Category/CategoryGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
         */
        var GetInsertedRecordIdGrid = /** @class */ (function (_super) {
            __extends(GetInsertedRecordIdGrid, _super);
            function GetInsertedRecordIdGrid(container) {
                return _super.call(this, container) || this;
            }
            GetInsertedRecordIdGrid.prototype.getDialogType = function () { return BasicSamples.GetInsertedRecordIdDialog; };
            GetInsertedRecordIdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GetInsertedRecordIdGrid);
            return GetInsertedRecordIdGrid;
        }(Ledger.Northwind.CategoryGrid));
        BasicSamples.GetInsertedRecordIdGrid = GetInsertedRecordIdGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderDialog.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Styling for columns is done with CSS in site.basicsamples.less file.
         * When comparing this to MultiColumnDialog sample, you may notice that
         * this version requires much less JS and CSS code.
         */
        var MultiColumnResponsiveDialog = /** @class */ (function (_super) {
            __extends(MultiColumnResponsiveDialog, _super);
            function MultiColumnResponsiveDialog() {
                return _super.call(this) || this;
            }
            MultiColumnResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveDialog);
            return MultiColumnResponsiveDialog;
        }(Ledger.Northwind.OrderDialog));
        BasicSamples.MultiColumnResponsiveDialog = MultiColumnResponsiveDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to MultiColumnResponsiveDialog
         */
        var MultiColumnResponsiveGrid = /** @class */ (function (_super) {
            __extends(MultiColumnResponsiveGrid, _super);
            function MultiColumnResponsiveGrid(container) {
                return _super.call(this, container) || this;
            }
            MultiColumnResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.MultiColumnResponsiveDialog; };
            MultiColumnResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MultiColumnResponsiveGrid);
            return MultiColumnResponsiveGrid;
        }(Ledger.Northwind.OrderGrid));
        BasicSamples.MultiColumnResponsiveGrid = MultiColumnResponsiveGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Supplier/SupplierDialog.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var ReadOnlyDialog = /** @class */ (function (_super) {
            __extends(ReadOnlyDialog, _super);
            function ReadOnlyDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * This is the method that gets list of tool
             * buttons to be created in a dialog.
             *
             * Here we'll remove save and close button, and
             * apply changes buttons.
             */
            ReadOnlyDialog.prototype.getToolbarButtons = function () {
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "save-and-close-button"; }), 1);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                // We could also remove delete button here, but for demonstration 
                // purposes we'll hide it in another method (updateInterface)
                // buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
                return buttons;
            };
            /**
             * This method is a good place to update states of
             * interface elements. It is called after dialog
             * is initialized and an entity is loaded into dialog.
             * This is also called in new item mode.
             */
            ReadOnlyDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // finding all editor elements and setting their readonly attribute
                // note that this helper method only works with basic inputs, 
                // some editors require widget based set readonly overload (setReadOnly)
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
                // here is a way to locate a button by its css class
                // note that this method is not available in 
                // getToolbarButtons() because buttons are not 
                // created there yet!
                // 
                // this.toolbar.findButton('delete-button').hide();
                // entity dialog also has reference variables to
                // its default buttons, lets use them to hide delete button
                this.deleteButton.hide();
                // we could also hide save buttons just like delete button,
                // but they are null now as we removed them in getToolbarButtons()
                // if we didn't we could write like this:
                // 
                // this.applyChangesButton.hide();
                // this.saveAndCloseButton.hide();
                // instead of hiding, we could disable a button
                // 
                // this.deleteButton.toggleClass('disabled', true);
            };
            ReadOnlyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyDialog);
            return ReadOnlyDialog;
        }(Ledger.Northwind.SupplierDialog));
        BasicSamples.ReadOnlyDialog = ReadOnlyDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * A readonly grid that launches ReadOnlyDialog
         */
        var ReadOnlyGrid = /** @class */ (function (_super) {
            __extends(ReadOnlyGrid, _super);
            function ReadOnlyGrid(container) {
                return _super.call(this, container) || this;
            }
            ReadOnlyGrid.prototype.getDialogType = function () { return BasicSamples.ReadOnlyDialog; };
            /**
             * Removing add button from grid using its css class
             */
            ReadOnlyGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            ReadOnlyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReadOnlyGrid);
            return ReadOnlyGrid;
        }(Ledger.Northwind.SupplierGrid));
        BasicSamples.ReadOnlyGrid = ReadOnlyGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Adding Responsive attribute makes this dialog use full screen in mobile devices.
         */
        var ResponsiveDialog = /** @class */ (function (_super) {
            __extends(ResponsiveDialog, _super);
            function ResponsiveDialog() {
                return _super.call(this) || this;
            }
            ResponsiveDialog.prototype.getFormKey = function () { return Ledger.Northwind.OrderForm.formKey; };
            ResponsiveDialog.prototype.getIdProperty = function () { return Ledger.Northwind.OrderRow.idProperty; };
            ResponsiveDialog.prototype.getLocalTextPrefix = function () { return Ledger.Northwind.OrderRow.localTextPrefix; };
            ResponsiveDialog.prototype.getNameProperty = function () { return Ledger.Northwind.OrderRow.nameProperty; };
            ResponsiveDialog.prototype.getService = function () { return Ledger.Northwind.OrderService.baseUrl; };
            ResponsiveDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.maximizable()
            ], ResponsiveDialog);
            return ResponsiveDialog;
        }(Serenity.EntityDialog));
        BasicSamples.ResponsiveDialog = ResponsiveDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to ResponsiveDialog
         */
        var ResponsiveGrid = /** @class */ (function (_super) {
            __extends(ResponsiveGrid, _super);
            function ResponsiveGrid(container) {
                return _super.call(this, container) || this;
            }
            ResponsiveGrid.prototype.getDialogType = function () { return BasicSamples.ResponsiveDialog; };
            ResponsiveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ResponsiveGrid);
            return ResponsiveGrid;
        }(Ledger.Northwind.OrderGrid));
        BasicSamples.ResponsiveGrid = ResponsiveGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailsEditor.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of Order Details editor with a CategoryID property
         */
        var FilteredLookupDetailEditor = /** @class */ (function (_super) {
            __extends(FilteredLookupDetailEditor, _super);
            function FilteredLookupDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupDetailEditor.prototype.getDialogType = function () { return BasicSamples.FilteredLookupOrderDetailDialog; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            FilteredLookupDetailEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.categoryID = this.categoryID;
            };
            FilteredLookupDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilteredLookupDetailEditor);
            return FilteredLookupDetailEditor;
        }(Ledger.Northwind.OrderDetailsEditor));
        BasicSamples.FilteredLookupDetailEditor = FilteredLookupDetailEditor;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Basic order dialog with a category selection
         */
        var FilteredLookupInDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailDialog, _super);
            function FilteredLookupInDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new BasicSamples.FilteredLookupInDetailForm(_this.idPrefix);
                _this.form.CategoryID.change(function (e) {
                    _this.form.DetailList.categoryID = Q.toId(_this.form.CategoryID.value);
                });
                return _this;
            }
            FilteredLookupInDetailDialog.prototype.getFormKey = function () { return BasicSamples.FilteredLookupInDetailForm.formKey; };
            FilteredLookupInDetailDialog.prototype.getIdProperty = function () { return Ledger.Northwind.OrderRow.idProperty; };
            FilteredLookupInDetailDialog.prototype.getLocalTextPrefix = function () { return Ledger.Northwind.OrderRow.localTextPrefix; };
            FilteredLookupInDetailDialog.prototype.getNameProperty = function () { return Ledger.Northwind.OrderRow.nameProperty; };
            FilteredLookupInDetailDialog.prototype.getService = function () { return Ledger.Northwind.OrderService.baseUrl; };
            FilteredLookupInDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailDialog);
            return FilteredLookupInDetailDialog;
        }(Serenity.EntityDialog));
        BasicSamples.FilteredLookupInDetailDialog = FilteredLookupInDetailDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
         */
        var FilteredLookupInDetailGrid = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailGrid, _super);
            function FilteredLookupInDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            FilteredLookupInDetailGrid.prototype.getDialogType = function () { return BasicSamples.FilteredLookupInDetailDialog; };
            FilteredLookupInDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupInDetailGrid);
            return FilteredLookupInDetailGrid;
        }(Ledger.Northwind.OrderGrid));
        BasicSamples.FilteredLookupInDetailGrid = FilteredLookupInDetailGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/OrderDetail/OrderDetailDialog.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Our subclass of order detail dialog with a CategoryID property
         * that will be used to set CascadeValue of product editor
         */
        var FilteredLookupOrderDetailDialog = /** @class */ (function (_super) {
            __extends(FilteredLookupOrderDetailDialog, _super);
            function FilteredLookupOrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Ledger.Northwind.OrderDetailForm(_this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                _this.form.ProductID.cascadeField = Ledger.Northwind.ProductRow.Fields.CategoryID;
                return _this;
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            }
            /**
             * This method is called just before an entity is loaded to dialog
             * This is also called for new record mode with an empty entity
             */
            FilteredLookupOrderDetailDialog.prototype.beforeLoadEntity = function (entity) {
                _super.prototype.beforeLoadEntity.call(this, entity);
                // setting cascade value here
                // make sure you have [LookupInclude] on CategoryID property of ProductRow
                // otherwise this field won't be available in lookup script (will always be null),
                // so can't be filtered and you'll end up with an empty product list.
                this.form.ProductID.cascadeValue = this.categoryID;
            };
            FilteredLookupOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FilteredLookupOrderDetailDialog);
            return FilteredLookupOrderDetailDialog;
        }(Ledger.Northwind.OrderDetailDialog));
        BasicSamples.FilteredLookupOrderDetailDialog = FilteredLookupOrderDetailDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Product/ProductDialog.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our custom product dialog that uses a different product form
         * (LookupFilterByMultipleForm) with our special category editor.
         */
        var LookupFilterByMultipleDialog = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleDialog, _super);
            function LookupFilterByMultipleDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleDialog.prototype.getFormKey = function () { return BasicSamples.LookupFilterByMultipleForm.formKey; };
            LookupFilterByMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleDialog);
            return LookupFilterByMultipleDialog;
        }(Ledger.Northwind.ProductDialog));
        BasicSamples.LookupFilterByMultipleDialog = LookupFilterByMultipleDialog;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
         */
        var LookupFilterByMultipleGrid = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleGrid, _super);
            function LookupFilterByMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            LookupFilterByMultipleGrid.prototype.getDialogType = function () { return BasicSamples.LookupFilterByMultipleDialog; };
            /**
             * This method is called just before List request is sent to service.
             * You have an opportunity here to cancel request or modify it.
             * Here we'll add a custom criteria to list request.
             */
            LookupFilterByMultipleGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // this has no relation to our lookup editor but as we'll allow picking only 
                // categories of Produce and Seafood in product dialog, it's better to show
                // only products from these categories in grid too
                var request = this.view.params;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['CategoryName'], 'in', [['Produce', 'Seafood']]]);
                // brackets used are important above, NOT ['CategoryName', 'in', ['Produce', 'Seafood']]
                return true;
            };
            LookupFilterByMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LookupFilterByMultipleGrid);
            return LookupFilterByMultipleGrid;
        }(Ledger.Northwind.ProductGrid));
        BasicSamples.LookupFilterByMultipleGrid = LookupFilterByMultipleGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        /**
         * This is our category editor that will show only categories of Produce and
         * Seafood. We are subclassing LookupEditorBase which also LookupEditor
         * derives from.
         *
         * After compiling and transforming templates, this editor type will be
         * available in server side to use in our LookupFilterByMultipleForm,
         * which is a version of ProductForm that uses our custom editor.
         */
        var ProduceSeafoodCategoryEditor = /** @class */ (function (_super) {
            __extends(ProduceSeafoodCategoryEditor, _super);
            function ProduceSeafoodCategoryEditor(container, opt) {
                return _super.call(this, container, opt) || this;
            }
            /**
             * Normally LookupEditor requires a lookup key to determine which set of
             * lookup data to show in editor. As our editor will only show category
             * data, we lock it to category lookup key.
             */
            ProduceSeafoodCategoryEditor.prototype.getLookupKey = function () {
                return Ledger.Northwind.CategoryRow.lookupKey;
            };
            /**
             * Here we are filtering by category name but you could filter by any field.
             * Just make sure the fields you filter on has [LookupInclude] attribute on them,
             * otherwise their value will be null in client side as they are not sent back
             * from server in lookup script.
             */
            ProduceSeafoodCategoryEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.CategoryName === 'Produce' || x.CategoryName === 'Seafood';
                });
            };
            ProduceSeafoodCategoryEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProduceSeafoodCategoryEditor);
            return ProduceSeafoodCategoryEditor;
        }(Serenity.LookupEditorBase));
        BasicSamples.ProduceSeafoodCategoryEditor = ProduceSeafoodCategoryEditor;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var CancellableBulkActionGrid = /** @class */ (function (_super) {
            __extends(CancellableBulkActionGrid, _super);
            function CancellableBulkActionGrid(container) {
                return _super.call(this, container) || this;
            }
            CancellableBulkActionGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            CancellableBulkActionGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Perform Bulk Action on Selected Orders',
                        cssClass: 'send-button',
                        onClick: function () {
                            if (!_this.onViewSubmit()) {
                                return;
                            }
                            var action = new BasicSamples.OrderBulkAction();
                            action.done = function () { return _this.rowSelection.resetCheckedAndRefresh(); };
                            action.execute(_this.rowSelection.getSelectedKeys());
                        }
                    }];
            };
            CancellableBulkActionGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            CancellableBulkActionGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 2500;
                return opt;
            };
            CancellableBulkActionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CancellableBulkActionGrid);
            return CancellableBulkActionGrid;
        }(Ledger.Northwind.OrderGrid));
        BasicSamples.CancellableBulkActionGrid = CancellableBulkActionGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var ConditionalFormattingGrid = /** @class */ (function (_super) {
            __extends(ConditionalFormattingGrid, _super);
            function ConditionalFormattingGrid(container) {
                return _super.call(this, container) || this;
            }
            ConditionalFormattingGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ConditionalFormattingGrid.prototype.getDialogType = function () { return Ledger.Northwind.ProductDialog; };
            ConditionalFormattingGrid.prototype.getIdProperty = function () { return Ledger.Northwind.ProductRow.idProperty; };
            ConditionalFormattingGrid.prototype.getLocalTextPrefix = function () { return Ledger.Northwind.ProductRow.localTextPrefix; };
            ConditionalFormattingGrid.prototype.getService = function () { return Ledger.Northwind.ProductService.baseUrl; };
            /**
             * We override getColumns() to be able to add a custom CSS class to UnitPrice
             * We could also add this class in ProductColumns.cs but didn't want to modify
             * it solely for this sample.
             */
            ConditionalFormattingGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = Ledger.Northwind.ProductRow.Fields;
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == fld.UnitPrice; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ConditionalFormattingGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Discontinued == true)
                    klass += " discontinued";
                else if (item.UnitsInStock <= 0)
                    klass += " out-of-stock";
                else if (item.UnitsInStock < 20)
                    klass += " critical-stock";
                else if (item.UnitsInStock > 50)
                    klass += " needs-reorder";
                if (item.UnitPrice >= 50)
                    klass += " high-price";
                else if (item.UnitPrice >= 20)
                    klass += " medium-price";
                else
                    klass += " low-price";
                return Q.trimToNull(klass);
            };
            ConditionalFormattingGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ConditionalFormattingGrid);
            return ConditionalFormattingGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ConditionalFormattingGrid = ConditionalFormattingGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var CustomLinksInGrid = /** @class */ (function (_super) {
            __extends(CustomLinksInGrid, _super);
            function CustomLinksInGrid(container) {
                return _super.call(this, container) || this;
            }
            /**
             * We override getColumns() to change format functions for some columns.
             * You could also write them as formatter classes, and use them at server side
             */
            CustomLinksInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var fld = Ledger.Northwind.OrderRow.Fields;
                Q.first(columns, function (x) { return x.field == fld.CustomerCompanyName; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"customer-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.OrderDate; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"date-link\">" + Q.formatDate(Q.parseISODateTime(ctx.value)) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.EmployeeFullName; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"employee-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                Q.first(columns, function (x) { return x.field == fld.ShipCountry; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"ship-country-link\">" + Q.htmlEncode(ctx.value) + "</a>"; };
                return columns;
            };
            CustomLinksInGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                if (target.hasClass("customer-link")) {
                    e.preventDefault();
                    var message = Q.format("<p>You have clicked an order from customer: {0}.</p>" +
                        "<p>If you click Yes, i'll open Customer dialog.</p>" +
                        "<p>If you click No, i'll open Order dialog.</p>", Q.htmlEncode(item.CustomerCompanyName));
                    Q.confirm(message, function () {
                        // CustomerDialog doesn't use CustomerID but ID (identity)
                        // so need to find customer to get its actual ID
                        var customer = Q.first(Ledger.Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == item.CustomerID; });
                        new Ledger.Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                    }, {
                        htmlEncode: false,
                        onNo: function () {
                            new Ledger.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
                }
                else if (target.hasClass("date-link")) {
                    e.preventDefault();
                    var ordersInSameDate = Q.count(this.view.getItems(), function (x) { return x.OrderDate == item.OrderDate; });
                    Q.notifyInfo("You clicked an order from date " +
                        Q.formatDate(Q.parseISODateTime(item.OrderDate)) + ". There are " +
                        ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
                }
                else if (target.hasClass("employee-link")) {
                    e.preventDefault();
                    Q.notifySuccess("You clicked an employee name, " +
                        "so i've opened a new Order Dialog from same customer " +
                        "with that employee prepopulated!");
                    new Ledger.Northwind.OrderDialog().loadEntityAndOpenDialog({
                        CustomerID: item.CustomerID,
                        EmployeeID: item.EmployeeID
                    });
                }
                else if (target.hasClass("ship-country-link")) {
                    e.preventDefault();
                    Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                    var countryFilter = this.findQuickFilter(Serenity.LookupEditor, Ledger.Northwind.OrderRow.Fields.ShipCountry);
                    countryFilter.value = item.ShipCountry;
                }
            };
            /**
             * This method is called for columns with [EditLink] attribute,
             * but only for edit links of this grid's own item type.
             * It is also called by Add Product button with a NULL entityOrId
             * parameter so we should check that entityOrId is a string
             * to be sure it is originating from a link.
             *
             * As we changed format for other columns, this will only be called
             * for links in remaining OrderID column
             */
            CustomLinksInGrid.prototype.editItem = function (entityOrId) {
                // check that this is an edit link click, not add button, ID is always a string
                if (typeof entityOrId == "string") {
                    // convert ID to an integer, and find order with that ID
                    var item = this.view.getItemById(Q.toId(entityOrId));
                    // date is a ISO string, so need to parse it first
                    var date = Q.formatDate(Q.parseISODateTime(item.OrderDate));
                    // ask for confirmation
                    Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?", item.OrderID, date), function () {
                        new Ledger.Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
                }
                else {
                    _super.prototype.editItem.call(this, entityOrId);
                }
            };
            CustomLinksInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomLinksInGrid);
            return CustomLinksInGrid;
        }(Ledger.Northwind.OrderGrid));
        BasicSamples.CustomLinksInGrid = CustomLinksInGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var GridFilteredByCriteria = /** @class */ (function (_super) {
            __extends(GridFilteredByCriteria, _super);
            function GridFilteredByCriteria(container) {
                return _super.call(this, container) || this;
            }
            GridFilteredByCriteria.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UnitsInStock'], '>', 10], [['CategoryName'], '!=', 'Condiments'], [['Discontinued'], '=', 0]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            GridFilteredByCriteria = __decorate([
                Serenity.Decorators.registerClass()
            ], GridFilteredByCriteria);
            return GridFilteredByCriteria;
        }(Ledger.Northwind.ProductGrid));
        BasicSamples.GridFilteredByCriteria = GridFilteredByCriteria;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Product/ProductGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var GroupingAndSummariesInGrid = /** @class */ (function (_super) {
            __extends(GroupingAndSummariesInGrid, _super);
            function GroupingAndSummariesInGrid(container) {
                return _super.call(this, container) || this;
            }
            GroupingAndSummariesInGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Avg('UnitPrice'),
                        new Slick.Aggregators.Sum('UnitsInStock'),
                        new Slick.Aggregators.Max('UnitsOnOrder'),
                        new Slick.Aggregators.Avg('ReorderLevel')
                    ]
                });
                return grid;
            };
            GroupingAndSummariesInGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === 'UnitsOnOrder'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                };
                Q.first(columns, function (x) { return x.field === 'ReorderLevel'; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.avg ? ('avg: ' + Q.coalesce(Q.formatNumber(totals.avg[col.field], '0.'), '')) : '');
                };
                return columns;
            };
            GroupingAndSummariesInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            GroupingAndSummariesInGrid.prototype.usePager = function () {
                return false;
            };
            GroupingAndSummariesInGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: 'Group By Category',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                getter: 'CategoryName'
                            }]); }
                    },
                    {
                        title: 'Group By Category and Supplier',
                        cssClass: 'expand-all-button',
                        onClick: function () { return _this.view.setGrouping([{
                                formatter: function (x) { return 'Category: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'CategoryName'
                            }, {
                                formatter: function (x) { return 'Supplier: ' + x.value + ' (' + x.count + ' items)'; },
                                getter: 'SupplierCompanyName'
                            }]); }
                    }, {
                        title: 'No Grouping',
                        cssClass: 'collapse-all-button',
                        onClick: function () { return _this.view.setGrouping([]); }
                    }];
            };
            GroupingAndSummariesInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GroupingAndSummariesInGrid);
            return GroupingAndSummariesInGrid;
        }(Ledger.Northwind.ProductGrid));
        BasicSamples.GroupingAndSummariesInGrid = GroupingAndSummariesInGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var InitialValuesForQuickFilters = /** @class */ (function (_super) {
            __extends(InitialValuesForQuickFilters, _super);
            function InitialValuesForQuickFilters(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of quick filters to be created for this grid.
             * By default, it returns quick filter objects corresponding to properties that
             * have a [QuickFilter] attribute at server side OrderColumns.cs
             */
            InitialValuesForQuickFilters.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                // get a reference to order row field names
                var fld = Ledger.Northwind.OrderRow.Fields;
                // quick filter init method is a good place to set initial
                // value for a quick filter editor, just after it is created
                Q.first(filters, function (x) { return x.field == fld.OrderDate; }).init = function (w) {
                    // w is a reference to the editor for this quick filter widget
                    // here we cast it to DateEditor, and set its value as date.
                    // note that in Javascript, months are 0 based, so date below
                    // is actually 1998-05-01
                    w.valueAsDate = new Date(1998, 4, 1);
                    // setting start date was simple. but this quick filter is actually
                    // a combination of two date editors. to get reference to second one,
                    // need to find its next sibling element by its class
                    var endDate = w.element.nextAll(".s-DateEditor").getWidget(Serenity.DateEditor);
                    endDate.valueAsDate = new Date(1998, 6, 1);
                };
                Q.first(filters, function (x) { return x.field == fld.ShippingState; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = Ledger.Northwind.OrderShippingState.NotShipped.toString();
                };
                return filters;
            };
            /**
             * This method is another possible place to modify quick filter widgets.
             * It is where the quick filter widgets are actually created.
             *
             * By default, it calls getQuickFilters() then renders UI for these
             * quick filters.
             *
             * We could use getQuickFilters() method for ShipVia too,
             * but this is for demonstration purposes
             */
            InitialValuesForQuickFilters.prototype.createQuickFilters = function () {
                // let base class to create quick filters first
                _super.prototype.createQuickFilters.call(this);
                // get a reference to order row field names
                var fld = Ledger.Northwind.OrderRow.Fields;
                // find a quick filter widget by its field name
                this.findQuickFilter(Serenity.LookupEditor, fld.ShipVia).values = ["1", "2"];
            };
            InitialValuesForQuickFilters = __decorate([
                Serenity.Decorators.registerClass()
            ], InitialValuesForQuickFilters);
            return InitialValuesForQuickFilters;
        }(Ledger.Northwind.OrderGrid));
        BasicSamples.InitialValuesForQuickFilters = InitialValuesForQuickFilters;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageFormatter = /** @class */ (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return "<a class=\"inline-image\" target='_blank' href=\"" + href + "\">" +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "fileProperty", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "thumb", void 0);
            InlineImageFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InlineImageFormatter);
            return InlineImageFormatter;
        }());
        BasicSamples.InlineImageFormatter = InlineImageFormatter;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var InlineImageInGrid = /** @class */ (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                return _super.call(this, container) || this;
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "BasicSamples.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return Ledger.Northwind.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return Ledger.Northwind.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return Ledger.Northwind.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return Ledger.Northwind.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            InlineImageInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineImageInGrid);
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        BasicSamples.InlineImageInGrid = InlineImageInGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
/// <reference path="../../../Northwind/Supplier/SupplierGrid.ts" />
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var RemovingAddButton = /** @class */ (function (_super) {
            __extends(RemovingAddButton, _super);
            function RemovingAddButton(container) {
                return _super.call(this, container) || this;
            }
            /**
             * This method is called to get list of buttons to be created.
             */
            RemovingAddButton.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            RemovingAddButton = __decorate([
                Serenity.Decorators.registerClass()
            ], RemovingAddButton);
            return RemovingAddButton;
        }(Ledger.Northwind.SupplierGrid));
        BasicSamples.RemovingAddButton = RemovingAddButton;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var ViewWithoutIDGrid = /** @class */ (function (_super) {
            __extends(ViewWithoutIDGrid, _super);
            function ViewWithoutIDGrid(container) {
                var _this = _super.call(this, container) || this;
                // this is our autoincrementing counter
                _this.nextId = 1;
                return _this;
            }
            ViewWithoutIDGrid.prototype.getColumnsKey = function () { return "Northwind.SalesByCategory"; };
            ViewWithoutIDGrid.prototype.getIdProperty = function () { return "__id"; };
            ViewWithoutIDGrid.prototype.getNameProperty = function () { return Ledger.Northwind.SalesByCategoryRow.nameProperty; };
            ViewWithoutIDGrid.prototype.getLocalTextPrefix = function () { return Ledger.Northwind.SalesByCategoryRow.localTextPrefix; };
            ViewWithoutIDGrid.prototype.getService = function () { return Ledger.Northwind.SalesByCategoryService.baseUrl; };
            /**
             * This method is called to preprocess data returned from the list service
             */
            ViewWithoutIDGrid.prototype.onViewProcessData = function (response) {
                response = _super.prototype.onViewProcessData.call(this, response);
                // there is no __id property in SalesByCategoryRow but 
                // this is javascript and we can set any property of an object
                for (var _i = 0, _a = response.Entities; _i < _a.length; _i++) {
                    var x = _a[_i];
                    x.__id = this.nextId++;
                }
                return response;
            };
            ViewWithoutIDGrid.prototype.getButtons = function () {
                return [];
            };
            ViewWithoutIDGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ViewWithoutIDGrid);
            return ViewWithoutIDGrid;
        }(Serenity.EntityGrid));
        BasicSamples.ViewWithoutIDGrid = ViewWithoutIDGrid;
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TenantForm = /** @class */ (function (_super) {
            __extends(TenantForm, _super);
            function TenantForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TenantForm.formKey = 'Administration.Tenant';
            return TenantForm;
        }(Serenity.PrefixedContext));
        Administration.TenantForm = TenantForm;
        [['TenantName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(TenantForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TenantRow;
        (function (TenantRow) {
            TenantRow.idProperty = 'TenantId';
            TenantRow.nameProperty = 'TenantName';
            TenantRow.localTextPrefix = 'Administration.Tenants';
            TenantRow.lookupKey = 'Administration.Tenant';
            function getLookup() {
                return Q.getLookup('Administration.Tenant');
            }
            TenantRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TenantRow.Fields || (TenantRow.Fields = {}));
            ['TenantId', 'TenantName'].forEach(function (x) { return Fields[x] = x; });
        })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TenantService;
        (function (TenantService) {
            TenantService.baseUrl = 'Administration/Tenant';
            var Methods;
            (function (Methods) {
            })(Methods = TenantService.Methods || (TenantService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TenantService[x] = function (r, s, o) { return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TenantService.baseUrl + '/' + x;
            });
        })(TenantService = Administration.TenantService || (Administration.TenantService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }], ['TenantId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'TenantId', 'TenantName', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Ledger.Administration || (Ledger.Administration = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var BasicSamplesService;
        (function (BasicSamplesService) {
            BasicSamplesService.baseUrl = 'BasicSamples/BasicSamples';
            var Methods;
            (function (Methods) {
            })(Methods = BasicSamplesService.Methods || (BasicSamplesService.Methods = {}));
            ['OrdersByShipper', 'OrderBulkAction'].forEach(function (x) {
                BasicSamplesService[x] = function (r, s, o) { return Q.serviceRequest(BasicSamplesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BasicSamplesService.baseUrl + '/' + x;
            });
        })(BasicSamplesService = BasicSamples.BasicSamplesService || (BasicSamples.BasicSamplesService = {}));
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var FilteredLookupInDetailForm = /** @class */ (function (_super) {
            __extends(FilteredLookupInDetailForm, _super);
            function FilteredLookupInDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FilteredLookupInDetailForm.formKey = 'BasicSamples.FilteredLookupInDetail';
            return FilteredLookupInDetailForm;
        }(Serenity.PrefixedContext));
        BasicSamples.FilteredLookupInDetailForm = FilteredLookupInDetailForm;
        [['CustomerID', function () { return Ledger.Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return BasicSamples.FilteredLookupDetailEditor; }]].forEach(function (x) { return Object.defineProperty(FilteredLookupInDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var BasicSamples;
    (function (BasicSamples) {
        var LookupFilterByMultipleForm = /** @class */ (function (_super) {
            __extends(LookupFilterByMultipleForm, _super);
            function LookupFilterByMultipleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LookupFilterByMultipleForm.formKey = 'BasicSamples.LookupFilterByMultiple';
            return LookupFilterByMultipleForm;
        }(Serenity.PrefixedContext));
        BasicSamples.LookupFilterByMultipleForm = LookupFilterByMultipleForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return BasicSamples.ProduceSeafoodCategoryEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(LookupFilterByMultipleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(BasicSamples = Ledger.BasicSamples || (Ledger.BasicSamples = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Ledger.Common || (Ledger.Common = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Default;
    (function (Default) {
        var EmplAddressTypeForm = /** @class */ (function (_super) {
            __extends(EmplAddressTypeForm, _super);
            function EmplAddressTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmplAddressTypeForm.formKey = 'Default.EmplAddressType';
            return EmplAddressTypeForm;
        }(Serenity.PrefixedContext));
        Default.EmplAddressTypeForm = EmplAddressTypeForm;
        [['EmplAddressType', function () { return Serenity.StringEditor; }], ['InsertUserId', function () { return Serenity.IntegerEditor; }], ['InsertDate', function () { return Serenity.DateEditor; }], ['UpdateUserId', function () { return Serenity.IntegerEditor; }], ['UpdateDate', function () { return Serenity.DateEditor; }], ['TenantId', function () { return Serenity.IntegerEditor; }], ['IsActive', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(EmplAddressTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Default = Ledger.Default || (Ledger.Default = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Default;
    (function (Default) {
        var EmplAddressTypeRow;
        (function (EmplAddressTypeRow) {
            EmplAddressTypeRow.idProperty = 'EmplAddressTypeId';
            EmplAddressTypeRow.nameProperty = 'EmplAddressType';
            EmplAddressTypeRow.localTextPrefix = 'Default.EmplAddressType';
            var Fields;
            (function (Fields) {
            })(Fields = EmplAddressTypeRow.Fields || (EmplAddressTypeRow.Fields = {}));
            ['EmplAddressTypeId', 'EmplAddressType', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate', 'TenantId', 'IsActive', 'EmplAddressTypeEmployeeId', 'EmplAddressTypeAddressId', 'EmplAddressTypeAddressType', 'EmplAddressTypeInsertUserId', 'EmplAddressTypeInsertDate', 'EmplAddressTypeUpdateUserId', 'EmplAddressTypeUpdateDate', 'EmplAddressTypeTenantId', 'EmplAddressTypeIsActive', 'EmplAddressTypeAddressTypeId'].forEach(function (x) { return Fields[x] = x; });
        })(EmplAddressTypeRow = Default.EmplAddressTypeRow || (Default.EmplAddressTypeRow = {}));
    })(Default = Ledger.Default || (Ledger.Default = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Default;
    (function (Default) {
        var EmplAddressTypeService;
        (function (EmplAddressTypeService) {
            EmplAddressTypeService.baseUrl = 'Default/EmplAddressType';
            var Methods;
            (function (Methods) {
            })(Methods = EmplAddressTypeService.Methods || (EmplAddressTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmplAddressTypeService[x] = function (r, s, o) { return Q.serviceRequest(EmplAddressTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmplAddressTypeService.baseUrl + '/' + x;
            });
        })(EmplAddressTypeService = Default.EmplAddressTypeService || (Default.EmplAddressTypeService = {}));
    })(Default = Ledger.Default || (Ledger.Default = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var AddressTypeId;
        (function (AddressTypeId) {
            AddressTypeId[AddressTypeId["HomeAddress"] = 1] = "HomeAddress";
            AddressTypeId[AddressTypeId["PostalAddress"] = 2] = "PostalAddress";
            AddressTypeId[AddressTypeId["WorkAddress"] = 3] = "WorkAddress";
        })(AddressTypeId = HR.AddressTypeId || (HR.AddressTypeId = {}));
        Serenity.Decorators.registerEnum(AddressTypeId, 'HR.AddressType');
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmplAddressTypeForm = /** @class */ (function (_super) {
            __extends(EmplAddressTypeForm, _super);
            function EmplAddressTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmplAddressTypeForm.formKey = 'HR.EmplAddressType';
            return EmplAddressTypeForm;
        }(Serenity.PrefixedContext));
        HR.EmplAddressTypeForm = EmplAddressTypeForm;
        [['EmplAddressType', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EmplAddressTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmplAddressTypeRow;
        (function (EmplAddressTypeRow) {
            EmplAddressTypeRow.idProperty = 'EmplAddressTypeId';
            EmplAddressTypeRow.isActiveProperty = 'IsActive';
            EmplAddressTypeRow.nameProperty = 'EmplAddressType';
            EmplAddressTypeRow.localTextPrefix = 'HR.EmplAddressType';
            var Fields;
            (function (Fields) {
            })(Fields = EmplAddressTypeRow.Fields || (EmplAddressTypeRow.Fields = {}));
            ['EmplAddressTypeId', 'EmplAddressType', 'TenantId', 'IsActive', 'EmplAddressTypeEmployeeId', 'EmplAddressTypeAddressId', 'EmplAddressTypeAddressType', 'EmplAddressTypeInsertUserId', 'EmplAddressTypeInsertDate', 'EmplAddressTypeUpdateUserId', 'EmplAddressTypeUpdateDate', 'EmplAddressTypeTenantId', 'EmplAddressTypeIsActive', 'EmplAddressTypeAddressTypeId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(EmplAddressTypeRow = HR.EmplAddressTypeRow || (HR.EmplAddressTypeRow = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmplAddressTypeService;
        (function (EmplAddressTypeService) {
            EmplAddressTypeService.baseUrl = 'HR/EmplAddressType';
            var Methods;
            (function (Methods) {
            })(Methods = EmplAddressTypeService.Methods || (EmplAddressTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmplAddressTypeService[x] = function (r, s, o) { return Q.serviceRequest(EmplAddressTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmplAddressTypeService.baseUrl + '/' + x;
            });
        })(EmplAddressTypeService = HR.EmplAddressTypeService || (HR.EmplAddressTypeService = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeAddressForm = /** @class */ (function (_super) {
            __extends(EmployeeAddressForm, _super);
            function EmployeeAddressForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeAddressForm.formKey = 'HR.EmployeeAddress';
            return EmployeeAddressForm;
        }(Serenity.PrefixedContext));
        HR.EmployeeAddressForm = EmployeeAddressForm;
        [['AddressId', function () { return Serenity.LookupEditor; }], ['AddressTypeId', function () { return Serenity.EnumEditor; }]].forEach(function (x) { return Object.defineProperty(EmployeeAddressForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeAddressRow;
        (function (EmployeeAddressRow) {
            EmployeeAddressRow.idProperty = 'EmployeeAddressId';
            EmployeeAddressRow.isActiveProperty = 'IsActive';
            EmployeeAddressRow.nameProperty = 'AddressType';
            EmployeeAddressRow.localTextPrefix = 'HR.EmployeeAddress';
            EmployeeAddressRow.lookupKey = 'HR.EmployeeAddress';
            function getLookup() {
                return Q.getLookup('HR.EmployeeAddress');
            }
            EmployeeAddressRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeAddressRow.Fields || (EmployeeAddressRow.Fields = {}));
            ['EmployeeAddressId', 'EmployeeId', 'AddressId', 'AddressType', 'AddressTypeId', 'TenantId', 'IsActive', 'EmployeeFirstName', 'EmployeeMiddleName', 'EmployeeSurName', 'FullName', 'EmployeeGender', 'EmployeeEgn', 'EmployeeHireDate', 'EmployeeLengthOfService', 'EmployeePhoto', 'EmployeeSalary', 'Address', 'AddressZipCode', 'AddressCity', 'AddressState', 'AddressCountry', 'StreetAddress', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeAddressRow = HR.EmployeeAddressRow || (HR.EmployeeAddressRow = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeAddressService;
        (function (EmployeeAddressService) {
            EmployeeAddressService.baseUrl = 'HR/EmployeeAddress';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeAddressService.Methods || (EmployeeAddressService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmployeeAddressService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeAddressService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeAddressService.baseUrl + '/' + x;
            });
        })(EmployeeAddressService = HR.EmployeeAddressService || (HR.EmployeeAddressService = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEmailForm = /** @class */ (function (_super) {
            __extends(EmployeeEmailForm, _super);
            function EmployeeEmailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeEmailForm.formKey = 'HR.EmployeeEmail';
            return EmployeeEmailForm;
        }(Serenity.PrefixedContext));
        HR.EmployeeEmailForm = EmployeeEmailForm;
        [['EmployeeId', function () { return Serenity.LookupEditor; }], ['EmailId', function () { return Serenity.LookupEditor; }], ['EmailType', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EmployeeEmailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEmailRow;
        (function (EmployeeEmailRow) {
            EmployeeEmailRow.idProperty = 'EmployeeEmailId';
            EmployeeEmailRow.isActiveProperty = 'IsActive';
            EmployeeEmailRow.nameProperty = 'EmailType';
            EmployeeEmailRow.localTextPrefix = 'HR.EmployeeEmail';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeEmailRow.Fields || (EmployeeEmailRow.Fields = {}));
            ['EmployeeEmailId', 'EmployeeId', 'EmailId', 'EmailType', 'TenantId', 'IsActive', 'EmployeeFirstName', 'EmployeeMiddleName', 'EmployeeSurName', 'FullName', 'EmployeeGender', 'EmployeeEgn', 'EmployeeHireDate', 'EmployeeLengthOfService', 'EmployeePhoto', 'EmployeeSalary', 'EmailAddress', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeEmailRow = HR.EmployeeEmailRow || (HR.EmployeeEmailRow = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeEmailService;
        (function (EmployeeEmailService) {
            EmployeeEmailService.baseUrl = 'HR/EmployeeEmail';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeEmailService.Methods || (EmployeeEmailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmployeeEmailService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeEmailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeEmailService.baseUrl + '/' + x;
            });
        })(EmployeeEmailService = HR.EmployeeEmailService || (HR.EmployeeEmailService = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeForm = /** @class */ (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeeForm.formKey = 'HR.Employee';
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        HR.EmployeeForm = EmployeeForm;
        [['FirstName', function () { return Serenity.StringEditor; }], ['MiddleName', function () { return Serenity.StringEditor; }], ['SurName', function () { return Serenity.StringEditor; }], ['Gender', function () { return Serenity.EnumEditor; }], ['Egn', function () { return Serenity.StringEditor; }], ['HireDate', function () { return Serenity.DateEditor; }], ['LengthOfService', function () { return Serenity.DateEditor; }], ['Photo', function () { return Serenity.ImageUploadEditor; }], ['Salary', function () { return Serenity.DecimalEditor; }], ['AddressList', function () { return HR.EmployeeAddressEditor; }], ['EmailList', function () { return HR.EmployeeEmailEditor; }], ['PhoneList', function () { return HR.EmployeePhoneEditor; }], ['NotesList', function () { return Ledger.Infra.NotesEditor; }]].forEach(function (x) { return Object.defineProperty(EmployeeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeePhoneForm = /** @class */ (function (_super) {
            __extends(EmployeePhoneForm, _super);
            function EmployeePhoneForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeePhoneForm.formKey = 'HR.EmployeePhone';
            return EmployeePhoneForm;
        }(Serenity.PrefixedContext));
        HR.EmployeePhoneForm = EmployeePhoneForm;
        [['EmployeeId', function () { return Serenity.IntegerEditor; }], ['PhoneId', function () { return Serenity.LookupEditor; }], ['PhoneType', function () { return Serenity.StringEditor; }], ['TenantId', function () { return Serenity.IntegerEditor; }], ['IsActive', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(EmployeePhoneForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeePhoneRow;
        (function (EmployeePhoneRow) {
            EmployeePhoneRow.idProperty = 'EmployeePhoneId';
            EmployeePhoneRow.isActiveProperty = 'IsActive';
            EmployeePhoneRow.nameProperty = 'PhoneType';
            EmployeePhoneRow.localTextPrefix = 'HR.EmployeePhone';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeePhoneRow.Fields || (EmployeePhoneRow.Fields = {}));
            ['EmployeePhoneId', 'EmployeeId', 'PhoneId', 'PhoneType', 'TenantId', 'IsActive', 'EmployeeFirstName', 'EmployeeMiddleName', 'EmployeeSurName', 'FullName', 'EmployeeGender', 'EmployeeEgn', 'EmployeeHireDate', 'EmployeeLengthOfService', 'EmployeePhoto', 'EmployeeSalary', 'PhonePhoneNumber', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeePhoneRow = HR.EmployeePhoneRow || (HR.EmployeePhoneRow = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeePhoneService;
        (function (EmployeePhoneService) {
            EmployeePhoneService.baseUrl = 'HR/EmployeePhone';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeePhoneService.Methods || (EmployeePhoneService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmployeePhoneService[x] = function (r, s, o) { return Q.serviceRequest(EmployeePhoneService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeePhoneService.baseUrl + '/' + x;
            });
        })(EmployeePhoneService = HR.EmployeePhoneService || (HR.EmployeePhoneService = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeId';
            EmployeeRow.isActiveProperty = 'IsActive';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'HR.Employee';
            EmployeeRow.lookupKey = 'HR.Employee';
            function getLookup() {
                return Q.getLookup('HR.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['EmployeeId', 'FirstName', 'MiddleName', 'SurName', 'FullName', 'Gender', 'Egn', 'HireDate', 'LengthOfService', 'Photo', 'Salary', 'IsActive', 'TenantId', 'AddressList', 'EmailList', 'PhoneList', 'NotesList', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = HR.EmployeeRow || (HR.EmployeeRow = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'HR/Employee';
            var Methods;
            (function (Methods) {
            })(Methods = EmployeeService.Methods || (EmployeeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) { return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmployeeService.baseUrl + '/' + x;
            });
        })(EmployeeService = HR.EmployeeService || (HR.EmployeeService = {}));
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var HR;
    (function (HR) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = HR.Gender || (HR.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'HR.Gender');
    })(HR = Ledger.HR || (Ledger.HR = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var AddressesForm = /** @class */ (function (_super) {
            __extends(AddressesForm, _super);
            function AddressesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AddressesForm.formKey = 'Infra.Addresses';
            return AddressesForm;
        }(Serenity.PrefixedContext));
        Infra.AddressesForm = AddressesForm;
        [['Address', function () { return Serenity.StringEditor; }], ['ZipCode', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['State', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(AddressesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var AddressesRow;
        (function (AddressesRow) {
            AddressesRow.idProperty = 'AddressId';
            AddressesRow.isActiveProperty = 'IsActive';
            AddressesRow.nameProperty = 'StreetAddress';
            AddressesRow.localTextPrefix = 'Infra.Addresses';
            AddressesRow.lookupKey = 'Infra.Addresses';
            function getLookup() {
                return Q.getLookup('Infra.Addresses');
            }
            AddressesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = AddressesRow.Fields || (AddressesRow.Fields = {}));
            ['AddressId', 'Address', 'ZipCode', 'City', 'State', 'Country', 'StreetAddress', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(AddressesRow = Infra.AddressesRow || (Infra.AddressesRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var AddressesService;
        (function (AddressesService) {
            AddressesService.baseUrl = 'Infra/Addresses';
            var Methods;
            (function (Methods) {
            })(Methods = AddressesService.Methods || (AddressesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                AddressesService[x] = function (r, s, o) { return Q.serviceRequest(AddressesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = AddressesService.baseUrl + '/' + x;
            });
        })(AddressesService = Infra.AddressesService || (Infra.AddressesService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CategoryForm.formKey = 'Infra.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Infra.CategoryForm = CategoryForm;
        [['CategoryCode', function () { return Serenity.StringEditor; }], ['CategoryType', function () { return Serenity.IntegerEditor; }], ['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['Picture', function () { return Serenity.ImageUploadEditor; }], ['IsActive', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryId';
            CategoryRow.isActiveProperty = 'IsActive';
            CategoryRow.nameProperty = 'CategoryCode';
            CategoryRow.localTextPrefix = 'Infra.Category';
            CategoryRow.lookupKey = 'Infra.Category';
            function getLookup() {
                return Q.getLookup('Infra.Category');
            }
            CategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['CategoryId', 'CategoryCode', 'CategoryType', 'CategoryName', 'Description', 'Picture', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Infra.CategoryRow || (Infra.CategoryRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Infra/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = Infra.CategoryService || (Infra.CategoryService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CurrencyForm = /** @class */ (function (_super) {
            __extends(CurrencyForm, _super);
            function CurrencyForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CurrencyForm.formKey = 'Infra.Currency';
            return CurrencyForm;
        }(Serenity.PrefixedContext));
        Infra.CurrencyForm = CurrencyForm;
        [['Code', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['IsActive', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(CurrencyForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CurrencyRow;
        (function (CurrencyRow) {
            CurrencyRow.idProperty = 'CurrencyId';
            CurrencyRow.isActiveProperty = 'IsActive';
            CurrencyRow.nameProperty = 'Code';
            CurrencyRow.localTextPrefix = 'Infra.Currency';
            CurrencyRow.lookupKey = 'Infra.Currency';
            function getLookup() {
                return Q.getLookup('Infra.Currency');
            }
            CurrencyRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CurrencyRow.Fields || (CurrencyRow.Fields = {}));
            ['CurrencyId', 'Code', 'Description', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(CurrencyRow = Infra.CurrencyRow || (Infra.CurrencyRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var CurrencyService;
        (function (CurrencyService) {
            CurrencyService.baseUrl = 'Infra/Currency';
            var Methods;
            (function (Methods) {
            })(Methods = CurrencyService.Methods || (CurrencyService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CurrencyService[x] = function (r, s, o) { return Q.serviceRequest(CurrencyService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CurrencyService.baseUrl + '/' + x;
            });
        })(CurrencyService = Infra.CurrencyService || (Infra.CurrencyService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var EmailForm = /** @class */ (function (_super) {
            __extends(EmailForm, _super);
            function EmailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmailForm.formKey = 'Infra.Email';
            return EmailForm;
        }(Serenity.PrefixedContext));
        Infra.EmailForm = EmailForm;
        [['EmailAddress', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(EmailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var EmailRow;
        (function (EmailRow) {
            EmailRow.idProperty = 'EmailId';
            EmailRow.isActiveProperty = 'IsActive';
            EmailRow.nameProperty = 'EmailAddress';
            EmailRow.localTextPrefix = 'Infra.Email';
            EmailRow.lookupKey = 'Infra.Email';
            function getLookup() {
                return Q.getLookup('Infra.Email');
            }
            EmailRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmailRow.Fields || (EmailRow.Fields = {}));
            ['EmailId', 'EmailAddress', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(EmailRow = Infra.EmailRow || (Infra.EmailRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var EmailService;
        (function (EmailService) {
            EmailService.baseUrl = 'Infra/Email';
            var Methods;
            (function (Methods) {
            })(Methods = EmailService.Methods || (EmailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EmailService[x] = function (r, s, o) { return Q.serviceRequest(EmailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EmailService.baseUrl + '/' + x;
            });
        })(EmailService = Infra.EmailService || (Infra.EmailService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteID';
            NoteRow.isActiveProperty = 'IsActive';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Infra.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteID', 'EntityType', 'EntityId', 'Text', 'InsertUserDisplayName', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Infra.NoteRow || (Infra.NoteRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var PhoneForm = /** @class */ (function (_super) {
            __extends(PhoneForm, _super);
            function PhoneForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PhoneForm.formKey = 'Infra.Phone';
            return PhoneForm;
        }(Serenity.PrefixedContext));
        Infra.PhoneForm = PhoneForm;
        [['PhoneNumber', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PhoneForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var PhoneRow;
        (function (PhoneRow) {
            PhoneRow.idProperty = 'PhoneId';
            PhoneRow.isActiveProperty = 'IsActive';
            PhoneRow.nameProperty = 'PhoneNumber';
            PhoneRow.localTextPrefix = 'Infra.Phone';
            PhoneRow.lookupKey = 'Infra.Email';
            function getLookup() {
                return Q.getLookup('Infra.Email');
            }
            PhoneRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = PhoneRow.Fields || (PhoneRow.Fields = {}));
            ['PhoneId', 'PhoneNumber', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(PhoneRow = Infra.PhoneRow || (Infra.PhoneRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var PhoneService;
        (function (PhoneService) {
            PhoneService.baseUrl = 'Infra/Phone';
            var Methods;
            (function (Methods) {
            })(Methods = PhoneService.Methods || (PhoneService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PhoneService[x] = function (r, s, o) { return Q.serviceRequest(PhoneService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PhoneService.baseUrl + '/' + x;
            });
        })(PhoneService = Infra.PhoneService || (Infra.PhoneService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportForm = /** @class */ (function (_super) {
            __extends(SupportForm, _super);
            function SupportForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SupportForm.formKey = 'Infra.Support';
            return SupportForm;
        }(Serenity.PrefixedContext));
        Infra.SupportForm = SupportForm;
        [['SupportTypeId', function () { return Serenity.LookupEditor; }], ['SupportCode', function () { return Serenity.StringEditor; }], ['Name', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupportForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportRow;
        (function (SupportRow) {
            SupportRow.idProperty = 'SupportId';
            SupportRow.isActiveProperty = 'IsActive';
            SupportRow.nameProperty = 'SupportCode';
            SupportRow.localTextPrefix = 'Infra.Support';
            var Fields;
            (function (Fields) {
            })(Fields = SupportRow.Fields || (SupportRow.Fields = {}));
            ['SupportId', 'Guid', 'SupportTypeId', 'SupportCode', 'Name', 'Description', 'TenantId', 'IsActive', 'SupportTypeEnumValue', 'SupportTypeDisplayName', 'SupportTypeLocale', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(SupportRow = Infra.SupportRow || (Infra.SupportRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportService;
        (function (SupportService) {
            SupportService.baseUrl = 'Infra/Support';
            var Methods;
            (function (Methods) {
            })(Methods = SupportService.Methods || (SupportService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupportService[x] = function (r, s, o) { return Q.serviceRequest(SupportService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupportService.baseUrl + '/' + x;
            });
        })(SupportService = Infra.SupportService || (Infra.SupportService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeForm = /** @class */ (function (_super) {
            __extends(SupportTypeForm, _super);
            function SupportTypeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SupportTypeForm.formKey = 'Infra.SupportType';
            return SupportTypeForm;
        }(Serenity.PrefixedContext));
        Infra.SupportTypeForm = SupportTypeForm;
        [['EnumValue', function () { return Serenity.StringEditor; }], ['EnumName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupportTypeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeRow;
        (function (SupportTypeRow) {
            SupportTypeRow.idProperty = 'EnumValue';
            SupportTypeRow.isActiveProperty = 'IsActive';
            SupportTypeRow.nameProperty = 'EnumName';
            SupportTypeRow.localTextPrefix = 'Infra.SupportType';
            var Fields;
            (function (Fields) {
            })(Fields = SupportTypeRow.Fields || (SupportTypeRow.Fields = {}));
            ['EnumValue', 'EnumName', 'TenantId', 'IsActive', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(SupportTypeRow = Infra.SupportTypeRow || (Infra.SupportTypeRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeService;
        (function (SupportTypeService) {
            SupportTypeService.baseUrl = 'Infra/SupportType';
            var Methods;
            (function (Methods) {
            })(Methods = SupportTypeService.Methods || (SupportTypeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupportTypeService[x] = function (r, s, o) { return Q.serviceRequest(SupportTypeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupportTypeService.baseUrl + '/' + x;
            });
        })(SupportTypeService = Infra.SupportTypeService || (Infra.SupportTypeService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeStringForm = /** @class */ (function (_super) {
            __extends(SupportTypeStringForm, _super);
            function SupportTypeStringForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SupportTypeStringForm.formKey = 'Infra.SupportTypeString';
            return SupportTypeStringForm;
        }(Serenity.PrefixedContext));
        Infra.SupportTypeStringForm = SupportTypeStringForm;
        [['EnumValue', function () { return Serenity.IntegerEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Locale', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(SupportTypeStringForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeStringRow;
        (function (SupportTypeStringRow) {
            SupportTypeStringRow.idProperty = 'EnumLocaleId';
            SupportTypeStringRow.isActiveProperty = 'IsActive';
            SupportTypeStringRow.nameProperty = 'DisplayName';
            SupportTypeStringRow.localTextPrefix = 'Infra.SupportTypeString';
            SupportTypeStringRow.lookupKey = 'Infra.SupportTypeString';
            function getLookup() {
                return Q.getLookup('Infra.SupportTypeString');
            }
            SupportTypeStringRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupportTypeStringRow.Fields || (SupportTypeStringRow.Fields = {}));
            ['EnumLocaleId', 'EnumValue', 'DisplayName', 'Locale', 'TenantId', 'IsActive', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(SupportTypeStringRow = Infra.SupportTypeStringRow || (Infra.SupportTypeStringRow = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Infra;
    (function (Infra) {
        var SupportTypeStringService;
        (function (SupportTypeStringService) {
            SupportTypeStringService.baseUrl = 'Infra/SupportTypeString';
            var Methods;
            (function (Methods) {
            })(Methods = SupportTypeStringService.Methods || (SupportTypeStringService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupportTypeStringService[x] = function (r, s, o) { return Q.serviceRequest(SupportTypeStringService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupportTypeStringService.baseUrl + '/' + x;
            });
        })(SupportTypeStringService = Infra.SupportTypeStringService || (Infra.SupportTypeStringService = {}));
    })(Infra = Ledger.Infra || (Ledger.Infra = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            var Fields;
            (function (Fields) {
            })(Fields = CategoryLangRow.Fields || (CategoryLangRow.Fields = {}));
            ['Id', 'CategoryId', 'LanguageId', 'CategoryName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryLangService.Methods || (CategoryLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) { return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryLangService.baseUrl + '/' + x;
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['CategoryID', 'CategoryName', 'Description', 'Picture', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'RetrieveLocalization', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerCustomerDemoRow.Fields || (CustomerCustomerDemoRow.Fields = {}));
            ['ID', 'CustomerID', 'CustomerTypeID', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'CustomerTypeCustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDemographicRow.Fields || (CustomerDemographicRow.Fields = {}));
            ['ID', 'CustomerTypeID', 'CustomerDesc'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
        [['CustomerID', function () { return Serenity.StringEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Representatives', function () { return Serenity.LookupEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['NoteList', function () { return Northwind.NotesEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'CustomerRepresentatives';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRepresentativesRow.Fields || (CustomerRepresentativesRow.Fields = {}));
            ['RepresentativeId', 'CustomerId', 'EmployeeId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['ID', 'CustomerID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CustomerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Photo', 'Notes', 'ReportsTo', 'PhotoPath', 'ReportsToFullName', 'ReportsToLastName', 'ReportsToFirstName', 'ReportsToTitle', 'ReportsToTitleOfCourtesy', 'ReportsToBirthDate', 'ReportsToHireDate', 'ReportsToAddress', 'ReportsToCity', 'ReportsToRegion', 'ReportsToPostalCode', 'ReportsToCountry', 'ReportsToHomePhone', 'ReportsToExtension', 'ReportsToPhoto', 'ReportsToNotes', 'ReportsToReportsTo', 'ReportsToPhotoPath', 'Gender', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeTerritoryRow.Fields || (EmployeeTerritoryRow.Fields = {}));
            ['EmployeeID', 'TerritoryID', 'EmployeeLastName', 'EmployeeFirstName', 'EmployeeTitle', 'EmployeeTitleOfCourtesy', 'EmployeeBirthDate', 'EmployeeHireDate', 'EmployeeAddress', 'EmployeeCity', 'EmployeeRegion', 'EmployeePostalCode', 'EmployeeCountry', 'EmployeeHomePhone', 'EmployeeExtension', 'EmployeePhoto', 'EmployeeNotes', 'EmployeeReportsTo', 'EmployeePhotoPath', 'TerritoryTerritoryDescription', 'TerritoryRegionID'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnum(Gender, 'Ledger.Northwind.Entities.Gender');
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(OrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ['DetailID', 'OrderID', 'ProductID', 'UnitPrice', 'Quantity', 'Discount', 'OrderCustomerID', 'OrderEmployeeID', 'OrderDate', 'OrderShippedDate', 'OrderShipVia', 'OrderShipCity', 'OrderShipCountry', 'ProductName', 'ProductDiscontinued', 'ProductSupplierID', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'LineTotal'].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = OrderDetailService.Methods || (OrderDetailService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderDetailService.baseUrl + '/' + x;
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = /** @class */ (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
        [['CustomerID', function () { return Northwind.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return Northwind.OrderDetailsEditor; }], ['ShippedDate', function () { return Serenity.DateEditor; }], ['ShipVia', function () { return Serenity.LookupEditor; }], ['Freight', function () { return Serenity.DecimalEditor; }], ['ShipName', function () { return Serenity.StringEditor; }], ['ShipAddress', function () { return Serenity.StringEditor; }], ['ShipCity', function () { return Serenity.StringEditor; }], ['ShipRegion', function () { return Serenity.StringEditor; }], ['ShipPostalCode', function () { return Serenity.StringEditor; }], ['ShipCountry', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.lookupKey = 'Northwind.OrderShipCity';
            function getLookup() {
                return Q.getLookup('Northwind.OrderShipCity');
            }
            OrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'RequiredDate', 'ShippedDate', 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode', 'ShipCountry', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerCity', 'CustomerRegion', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'EmployeeFullName', 'EmployeeGender', 'ShipViaCompanyName', 'ShipViaPhone', 'ShippingState', 'DetailList', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            var Methods;
            (function (Methods) {
            })(Methods = OrderService.Methods || (OrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderService[x] = function (r, s, o) { return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderService.baseUrl + '/' + x;
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnum(OrderShippingState, 'Northwind.OrderShippingState');
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLangRow.Fields || (ProductLangRow.Fields = {}));
            ['Id', 'ProductId', 'LanguageId', 'ProductName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLangService.Methods || (ProductLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) { return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductLangService.baseUrl + '/' + x;
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLogRow.Fields || (ProductLogRow.Fields = {}));
            ['ProductLogID', 'OperationType', 'ChangingUserId', 'ValidFrom', 'ValidUntil', 'ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'CategoryName', 'CategoryDescription', 'CategoryPicture', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'RetrieveLocalization', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = /** @class */ (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
        [['RegionID', function () { return Serenity.IntegerEditor; }], ['RegionDescription', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RegionForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RegionRow.Fields || (RegionRow.Fields = {}));
            ['RegionID', 'RegionDescription', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            var Methods;
            (function (Methods) {
            })(Methods = RegionService.Methods || (RegionService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RegionService[x] = function (r, s, o) { return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RegionService.baseUrl + '/' + x;
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            var Fields;
            (function (Fields) {
            })(Fields = SalesByCategoryRow.Fields || (SalesByCategoryRow.Fields = {}));
            ['CategoryId', 'CategoryName', 'ProductName', 'ProductSales'].forEach(function (x) { return Fields[x] = x; });
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            var Methods;
            (function (Methods) {
            })(Methods = SalesByCategoryService.Methods || (SalesByCategoryService.Methods = {}));
            ['List'].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) { return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SalesByCategoryService.baseUrl + '/' + x;
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = /** @class */ (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['Phone', function () { return Northwind.PhoneEditor; }]].forEach(function (x) { return Object.defineProperty(ShipperForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ShipperRow.Fields || (ShipperRow.Fields = {}));
            ['ShipperID', 'CompanyName', 'Phone', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            var Methods;
            (function (Methods) {
            })(Methods = ShipperService.Methods || (ShipperService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ShipperService[x] = function (r, s, o) { return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ShipperService.baseUrl + '/' + x;
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['HomePage', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ['SupplierID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'HomePage', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupplierService[x] = function (r, s, o) { return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = /** @class */ (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
        [['TerritoryID', function () { return Serenity.StringEditor; }], ['TerritoryDescription', function () { return Serenity.StringEditor; }], ['RegionID', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(TerritoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = TerritoryRow.Fields || (TerritoryRow.Fields = {}));
            ['ID', 'TerritoryID', 'TerritoryDescription', 'RegionID', 'RegionDescription', 'TenantId'].forEach(function (x) { return Fields[x] = x; });
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            var Methods;
            (function (Methods) {
            })(Methods = TerritoryService.Methods || (TerritoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) { return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TerritoryService.baseUrl + '/' + x;
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = Ledger.Northwind || (Ledger.Northwind = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
var Ledger;
(function (Ledger) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Ledger.Membership || (Ledger.Membership = {}));
})(Ledger || (Ledger = {}));
//# sourceMappingURL=Ledger.Web.js.map