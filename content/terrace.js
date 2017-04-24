/*
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this file,
You can obtain one at http://mozilla.org/MPL/2.0/.
*/
Components.utils.import('resource://gre/modules/Services.jsm');
Components.utils.import('resource://gre/modules/XPCOMUtils.jsm');

var terrace = {};

(function() {
	XPCOMUtils.defineLazyGetter(terrace, 'prefs', function() {
		return Services.prefs.getBranch('extensions.terrace.');
	});

	var opacity =
    Math.max(0, Math.min(100, terrace.prefs.getIntPref('foreground.opacity')));
  var timeNotation = terrace.prefs.getIntPref('time.notation');
  var collectionList = ['332379','315652','397031','397034','397046','397054']
  var collecitonType = terrace.prefs.getIntPref('collection.type');
  var collection = collecitonType === 0 ?
    terrace.prefs.getIntPref('collection') :
    collectionList[Math.floor(Math.random()*collectionList.length)];

	document.getElementById('date-container').style.opacity = opacity / 100;

	var checkTime = function(i) {
    if (i < 10) {i = '0' + i};
    return i;
	};

  var updateTime = function() {
    var today = new Date();
    var h = today.getHours();

    if (timeNotation === 0) {
      h = h % 12;
      h = h ? h : 12;
    }

    var m = today.getMinutes();
    var s = today.getSeconds();
    var separator;
    document.getElementById('separator_symbol').classList.toggle('hide-separator');
    m = checkTime(m);

    var theDivHour = document.getElementById('date-text-hour');
    var theDivMinute = document.getElementById('date-text-minute');

    var contenthour = document.createTextNode(h);
    var contentMinute = document.createTextNode(m);

    while (theDivHour.firstChild) {
      theDivHour.removeChild(theDivHour.firstChild);
    }

    theDivHour.appendChild(contenthour);

    while (theDivMinute.firstChild) {
      theDivMinute.removeChild(theDivMinute.firstChild);
    }

    theDivMinute.appendChild(contentMinute);
  };

  updateTime();
	var t = window.setInterval(updateTime, 500);

  var collections = {
    332379: [
      'http://unsplash.com/photos/p3OzJuT_Dks/download',
      'http://unsplash.com/photos/NDuPLKYRXQU/download',
      'http://unsplash.com/photos/aQbSuHtYRhQ/download',
      'http://unsplash.com/photos/GjNs11Xnmfg/download',
      'http://unsplash.com/photos/bJBXvZ--uyc/download',
      'http://unsplash.com/photos/eHpYD4U5830/download',
      'http://unsplash.com/photos/9wVHyp90lgI/download',
      'http://unsplash.com/photos/MMJx78V7xS8/download',
      'http://unsplash.com/photos/feO87UOFyY4/download',
      'http://unsplash.com/photos/tME8s001BNQ/download',
      'http://unsplash.com/photos/2154YiDnVJU/download',
      'http://unsplash.com/photos/-e_njRV9hRE/download',
      'http://unsplash.com/photos/YZbrSfZxNOw/download',
      'http://unsplash.com/photos/BS-Uxe8wU5Y/download',
      'http://unsplash.com/photos/u7ldh_tgH3s/download',
      'http://unsplash.com/photos/ulDK1idr-3I/download',
      'http://unsplash.com/photos/rL6sOvctpo4/download',
      'http://unsplash.com/photos/xNLAq4U3GT8/download',
      'http://unsplash.com/photos/v1bP6olgtx0/download',
      'http://unsplash.com/photos/ooJi3CJQRa8/download',
      'http://unsplash.com/photos/PFy-3PaHT_M/download',
      'http://unsplash.com/photos/oO15xC38wj4/download',
      'http://unsplash.com/photos/aAQwxN-EOUI/download',
      'http://unsplash.com/photos/vddccTqwal8/download',
      'http://unsplash.com/photos/2E_dT65fyxo/download',
      'http://unsplash.com/photos/NfO6E5iQPAU/download',
      'http://unsplash.com/photos/FD_sabE544U/download',
      'http://unsplash.com/photos/d_5TQQQGSs8/download'
    ],
    315652: [
      'http://unsplash.com/photos/2_F8_vP-_Sg/download',
      'http://unsplash.com/photos/jIdKrtJF8Uk/download',
      'http://unsplash.com/photos/zZiq8toPsg0/download',
      'http://unsplash.com/photos/vPe0ltATD2k/download',
      'http://unsplash.com/photos/iXI5PsrxA-k/download',
      'http://unsplash.com/photos/CeL6SfbXCx8/download',
      'http://unsplash.com/photos/3Kv48NS4WUU/download',
      'http://unsplash.com/photos/d7y2-B0_TRU/download',
      'http://unsplash.com/photos/Cvf1IqUel9w/download',
      'http://unsplash.com/photos/vCqmY3bfqfo/download',
      'http://unsplash.com/photos/EeEx8zpOESA/download',
      'http://unsplash.com/photos/_6xC5v5fLpU/download',
      'http://unsplash.com/photos/R5S4OQpG0lE/download',
      'http://unsplash.com/photos/8ZgJyLGbC7Y/download',
      'http://unsplash.com/photos/2f5Ktwb8YXk/download',
      'http://unsplash.com/photos/HpiYsNBORAw/download',
      'http://unsplash.com/photos/nw2t0X0GXsw/download',
      'http://unsplash.com/photos/TFhGnkKjwUM/download',
      'http://unsplash.com/photos/prd5CXMsD68/download'
    ],
    397031: [
      'http://unsplash.com/photos/-aDl1z8_nGY/download',
      'http://unsplash.com/photos/nDqA4d5NL0k/download',
      'http://unsplash.com/photos/P6BxykAOnUA/download',
      'http://unsplash.com/photos/WYD0Gzym3Y0/download',
      'http://unsplash.com/photos/UyUvM0xcqMA/download',
      'http://unsplash.com/photos/jLwVAUtLOAQ/download',
      'http://unsplash.com/photos/sL7w1eUfHJQ/download',
      'http://unsplash.com/photos/d7CNJOlEY4Y/download',
      'http://unsplash.com/photos/6U-sSfBV-gM/download'
    ],
    397034: [
      'http://unsplash.com/photos/le60j2br1BI/download',
      'http://unsplash.com/photos/myRx7z3xAAk/download',
      'http://unsplash.com/photos/wfh8dDlNFOk/download',
      'http://unsplash.com/photos/-N_UwPdUs7E/download',
      'http://unsplash.com/photos/-rSka4Bw-EU/download',
      'http://unsplash.com/photos/9K-qiiWaT3s/download',
      'http://unsplash.com/photos/LhlxYMfnTF0/download',
      'http://unsplash.com/photos/hpCHLFknc2s/download',
      'http://unsplash.com/photos/7oS_26cb1Wo/download',
      'http://unsplash.com/photos/-e_njRV9hRE/download'
    ],
    397046: [
      'http://unsplash.com/photos/UvgzVZimyWU/download',
      'http://unsplash.com/photos/uu5PfAzu0s4/download',
      'http://unsplash.com/photos/ZpneNlSUyXQ/download',
      'http://unsplash.com/photos/O50HtSlCzag/download',
      'http://unsplash.com/photos/gM-RfQsZK98/download',
      'http://unsplash.com/photos/D90_p0ZinVA/download',
      'http://unsplash.com/photos/yZf1quatKCA/download',
      'http://unsplash.com/photos/9Y8vxVQN4o4/download',
      'http://unsplash.com/photos/Znvbt6PQGD0/download',
      'http://unsplash.com/photos/UvWlksgZGPE/download',
      'http://unsplash.com/photos/KR2mdHJ5qMg/download',
      'http://unsplash.com/photos/wiOEVPVRfW4/download',
      'http://unsplash.com/photos/VGdnQYYMKmg/download'
    ],
    397054: [
      'http://unsplash.com/photos/8V8qCIIo554/download',
      'http://unsplash.com/photos/1JWmFju8vVg/download',
      'http://unsplash.com/photos/sL7w1eUfHJQ/download',
      'http://unsplash.com/photos/p-rN-n6Miag/download',
      'http://unsplash.com/photos/wxJscL5ZzDA/download',
      'http://unsplash.com/photos/-zxlpucEQV4/download',
      'http://unsplash.com/photos/zRqcuLYFhLY/download',
      'http://unsplash.com/photos/myFsTTkub9E/download',
      'http://unsplash.com/photos/D8GFCYxyJj8/download',
      'http://unsplash.com/photos/o2KD7JtqTlk/download'
    ]
  };

  var photoList = collections[collection];
  var theUrl = photoList[Math.floor(Math.random()*photoList.length)];
  document.getElementById('unsplash-container').style.backgroundImage = 'url(' + theUrl + ')';
})();
