/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace Store.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Store');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}