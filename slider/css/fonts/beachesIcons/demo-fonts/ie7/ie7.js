/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'beachesIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-down-big': '&#xe97d;',
		'icon-luxury': '&#xe97b;',
		'icon-concierge': '&#xe97c;',
		'icon-grid-new': '&#xe979;',
		'icon-list-new': '&#xe97a;',
		'icon-circle-close': '&#xe978;',
		'icon-album': '&#xe975;',
		'icon-camara': '&#xe976;',
		'icon-shoots': '&#xe977;',
		'icon-jamaican-villas': '&#xe900;',
		'icon-global-gourmet': '&#xe901;',
		'icon-together-nest-text': '&#xe902;',
		'icon-together-nest': '&#xe903;',
		'icon-washer-dryer': '&#xe904;',
		'icon-instagram': '&#xe905;',
		'icon-engagements': '&#xe906;',
		'icon-honeymoons': '&#xe907;',
		'icon-rtk': '&#xe908;',
		'icon-weddings': '&#xe909;',
		'icon-activities': '&#xe90a;',
		'icon-arrow-down': '&#xe90b;',
		'icon-arrow-left': '&#xe90c;',
		'icon-arrow-right': '&#xe90d;',
		'icon-arrow-up': '&#xe90e;',
		'icon-arrow': '&#xe90f;',
		'icon-beaches': '&#xe910;',
		'icon-best-price': '&#xe911;',
		'icon-bullet': '&#xe912;',
		'icon-butler-elite': '&#xe913;',
		'icon-butler': '&#xe914;',
		'icon-cal': '&#xe915;',
		'icon-check': '&#xe916;',
		'icon-check2': '&#xe917;',
		'icon-checkin': '&#xe918;',
		'icon-checkout': '&#xe919;',
		'icon-close': '&#xe91a;',
		'icon-compass': '&#xe91b;',
		'icon-contact': '&#xe91c;',
		'icon-dan': '&#xe91d;',
		'icon-details-arrivals': '&#xe91e;',
		'icon-details-babysitting': '&#xe91f;',
		'icon-details-bring': '&#xe920;',
		'icon-details-butler': '&#xe921;',
		'icon-details-charge': '&#xe922;',
		'icon-details-checkin': '&#xe923;',
		'icon-details-currency': '&#xe924;',
		'icon-details-departure': '&#xe925;',
		'icon-details-dress': '&#xe926;',
		'icon-details-electric': '&#xe927;',
		'icon-details-gift': '&#xe928;',
		'icon-details-handicap': '&#xe929;',
		'icon-details-laundry': '&#xe92a;',
		'icon-details-medical': '&#xe92b;',
		'icon-details-passport': '&#xe92c;',
		'icon-details-private': '&#xe92d;',
		'icon-details-requests': '&#xe92e;',
		'icon-details-safe': '&#xe92f;',
		'icon-details-scuba': '&#xe930;',
		'icon-details-tips': '&#xe931;',
		'icon-details-transfers': '&#xe932;',
		'icon-details-weather': '&#xe933;',
		'icon-details-wifi': '&#xe934;',
		'icon-details': '&#xe935;',
		'icon-dining-diet': '&#xe936;',
		'icon-divider': '&#xe937;',
		'icon-dollar': '&#xe938;',
		'icon-download': '&#xe939;',
		'icon-english-butler': '&#xe93a;',
		'icon-extras-butler': '&#xe93b;',
		'icon-extras-concierge': '&#xe93c;',
		'icon-extras-handicap': '&#xe93d;',
		'icon-extras-lovenest': '&#xe93e;',
		'icon-extras-private-transfer': '&#xe93f;',
		'icon-extras-room-service': '&#xe940;',
		'icon-facebook': '&#xe941;',
		'icon-flipbook': '&#xe942;',
		'icon-foundation': '&#xe943;',
		'icon-fowlcay': '&#xe944;',
		'icon-gplus': '&#xe945;',
		'icon-grandpineapple': '&#xe946;',
		'icon-grid': '&#xe947;',
		'icon-handicap': '&#xe948;',
		'icon-islandroutes': '&#xe949;',
		'icon-laptop': '&#xe94a;',
		'icon-list': '&#xe94b;',
		'icon-lovenest': '&#xe94c;',
		'icon-map': '&#xe94d;',
		'icon-padi-learning': '&#xe94e;',
		'icon-padi': '&#xe94f;',
		'icon-person': '&#xe950;',
		'icon-photo': '&#xe951;',
		'icon-pinterest': '&#xe952;',
		'icon-plus': '&#xe953;',
		'icon-press': '&#xe954;',
		'icon-privatevillas': '&#xe955;',
		'icon-redlane': '&#xe956;',
		'icon-rss': '&#xe957;',
		'icon-sandals-select': '&#xe958;',
		'icon-sandals': '&#xe959;',
		'icon-select': '&#xe95a;',
		'icon-share-link': '&#xe95b;',
		'icon-share': '&#xe95c;',
		'icon-snapshots': '&#xe95d;',
		'icon-square-check': '&#xe95e;',
		'icon-tag': '&#xe95f;',
		'icon-tri-down': '&#xe960;',
		'icon-tri-left': '&#xe961;',
		'icon-tri-right': '&#xe962;',
		'icon-tri-up': '&#xe963;',
		'icon-twitter': '&#xe964;',
		'icon-video': '&#xe965;',
		'icon-vrx': '&#xe966;',
		'icon-weddingmoons': '&#xe967;',
		'icon-wp-lazy': '&#xe968;',
		'icon-wp-pirate': '&#xe969;',
		'icon-wp-slide': '&#xe96a;',
		'icon-wp-surf': '&#xe96b;',
		'icon-zoom': '&#xe96c;',
		'icon-anniversaries': '&#xe96d;',
		'icon-wmblog': '&#xe96e;',
		'icon-checkmark': '&#xe96f;',
		'icon-world': '&#xe970;',
		'icon-headset': '&#xe971;',
		'icon-divesite': '&#xe972;',
		'icon-details-mobile': '&#xe973;',
		'icon-global-gourmet-2': '&#xe974;',
		'icon-spinner-reset': '&#xe984;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
