goog.provide('org.koshinuke.ui.CodeMirrorWrapper');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.soy');
goog.require('goog.string');

goog.require('goog.ui.Component');

goog.require('CodeMirror');
goog.require('CodeMirror.modes');

goog.require('org.koshinuke');
goog.require('org.koshinuke.template.codemirror');
goog.require('org.koshinuke.template.tooltip');

// TODO module化によるmodeの遅延ローディング
/** @constructor */
org.koshinuke.ui.CodeMirrorWrapper = function(loader) {
	this.loader = loader;
};
goog.inherits(org.koshinuke.ui.CodeMirrorWrapper, goog.ui.Component);

/** @override */
org.koshinuke.ui.CodeMirrorWrapper.prototype.createDom = function() {
	this.loading = goog.dom.createDom("div", {
		'class' : 'loading_large'
	});
	var element = goog.dom.createDom("div", null, this.loading);
	this.decorateInternal(element);
};
// git note
/** @override */
org.koshinuke.ui.CodeMirrorWrapper.prototype.enterDocument = function() {
	org.koshinuke.ui.CodeMirrorWrapper.superClass_.enterDocument.call(this);
	var parent = this.getElement();
	var model = this.getModel();
	var self = this;
	this.loader.load(model, function(contentType, resource) {
		if(contentType && goog.string.startsWith(contentType, 'image')) {
			// data schemeでサーバからリソースが返ってくる事を期待する。
			// http://tools.ietf.org/html/rfc2397
			self.img = goog.dom.createDom("img", {
				"src" : resource
			});
			parent.replaceChild(self.img, self.loading);
		} else {
			var newone = goog.soy.renderAsElement(org.koshinuke.template.codemirror.tmpl, model.node);
			self.getElement().insertBefore(newone, self.loading);
			self.clip = self.setUpZC_(newone, resource);
			self.cm = CodeMirror(function(elt) {
				parent.replaceChild(elt, self.loading);
			}, {
				mode : contentType,
				value : resource,
				matchBrackets : true,
				lineNumbers : true,
				readOnly : true
			});
		}
	});
};
/** @private */
org.koshinuke.ui.CodeMirrorWrapper.prototype.setUpZC_ = function(element, copyValue) {
	// TODO refactor.
	var clip = new ZeroClipboard.Client();
	var img = goog.dom.query('.clip-container .copy', element)[0];

	var g = function() {
		return new org.koshinuke.positioning.GravityPosition(img, 'w', 1);
	}
	var copyTip = new goog.ui.Popup(this.tooltip_('copy contents to clipboard'), g());
	var compTip = new goog.ui.Popup(this.tooltip_('copied !!'), g());

	clip.addEventListener('onMouseOver', function(client) {
		copyTip.setVisible(true);
	});
	clip.addEventListener('onMouseOut', function(client) {
		copyTip.setVisible(false);
		compTip.setVisible(false);
	});
	clip.addEventListener('onMouseDown', function(client) {
		clip.setText(copyValue);
	});
	clip.addEventListener('onComplete', function(client, text) {
		compTip.setVisible(true);
	});
	clip.glue(img, img.parentNode);
	clip.dispose = function() {
		goog.array.forEach([copyTip, compTip], function(a) {
			goog.dom.removeNode(a.getElement());
			a.dispose();
		});
		clip.destroy();
	};
	return clip;
};
/** @private */
org.koshinuke.ui.CodeMirrorWrapper.prototype.tooltip_ = function(t) {
	var el = goog.soy.renderAsElement(org.koshinuke.template.tooltip.tmpl, {
		dir : 'right',
		txt : t
	});
	goog.dom.appendChild(document.body, el);
	return el;
};
/** @override */
org.koshinuke.ui.CodeMirrorWrapper.prototype.exitDocument = function() {
	org.koshinuke.ui.CodeMirrorWrapper.superClass_.exitDocument.call(this);
	if(this.img) {
		goog.dom.removeNode(this.img);
		this.img = null;
	}
	if(this.cm) {
		goog.dom.removeNode(this.cm.getWrapperElement());
		this.cm = null;
	}
	if(this.clip) {
		this.clip.dispose();
		this.clip = null;
	}
};
org.koshinuke.ui.CodeMirrorWrapper.prototype.setVisible = function(state) {
	var el = this.getElement();
	if(el) {
		goog.style.showElement(el, state);
	}
};
/** @override */
org.koshinuke.ui.CodeMirrorWrapper.prototype.disposeInternal = function() {
	org.koshinuke.ui.CodeMirrorWrapper.superClass_.disposeInternal.call(this);
	this.loader = null;
};