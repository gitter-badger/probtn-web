	var proBtn = {
		hide: function() {
			try {
				parent.proBtn.hide();
				parent.proBtn.hideContent();
			} catch(ex) {}
		},
		hideContent: function() {
			try {			
			parent.proBtn.hideContent(); } catch(ex) {}
		},
		performAction: function() {
			try { parent.proBtn.performAction(); } catch(ex) {}
		}
	}