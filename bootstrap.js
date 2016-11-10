/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this file,
You can obtain one at http://mozilla.org/MPL/2.0/.
*/
const ADDON_ID = 'terrace@asdfadsf.net';
const EXTENSION_PREFS = 'extensions.terrace.';

Components.utils.import('resource://gre/modules/Services.jsm');
Components.utils.import('resource://gre/modules/AddonManager.jsm');

let userPrefs = Services.prefs.getBranch(EXTENSION_PREFS);

/* exported install, uninstall, startup, shutdown */
function install() {}
function uninstall(params, reason) {
	if (reason == ADDON_UNINSTALL) {
		Services.prefs.deleteBranch(EXTENSION_PREFS);
	}
}
function startup(params, reason) {
	let defaultPrefs = Services.prefs.getDefaultBranch(EXTENSION_PREFS);
	defaultPrefs.setIntPref('time.notation', 0);
	defaultPrefs.setIntPref('foreground.opacity', 90);
	defaultPrefs.setIntPref('collection', '332379');
	defaultPrefs.setIntPref('collection.type', 0);
	defaultPrefs.setBoolPref('locked', false);

	prefObserver.init();

	win.location.reload();

	AddonManager.addAddonListener({
		onDisabled: function(addon) {
			AddonManager.removeAddonListener(this);
			if (addon.id == ADDON_ID) {
				win.location.reload();
			}
		}
	});

	uiStartup(params, reason);
}

function shutdown(params, reason) {
	if (reason == APP_SHUTDOWN) {
		return;
	}

	prefObserver.destroy();
}

var prefObserver = {
	init: function() {
		userPrefs.addObserver('', this, false);
	},
	destroy: function() {
		userPrefs.removeObserver('', prefObserver);
	},
	observe: function(subject, topic, data) {
		switch (data) {
		case 'time.notation':
		case 'collection.type':
		case 'collection':
		case 'foreground.opacity':
			win.terrace.updateUI();
			break;
		}
	}
};
