Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	launch: function() {
		console.log('Launch function is gestart!');
		
		// Tonen van alle Milestones in een Combobox
    	this.milestonesCombobox = this.add({
        	xtype: 'rallymilestonecombobox'
    	});		
		
		this._loadData() ;
		},
	
	// ophalen data vanuit Rally
	_loadData: function() {
	  console.log('Function loadData is gestart');
    	
	}
	
	
});
