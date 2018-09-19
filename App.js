Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	launch: function() {
		console.log('Launch function is gestart!');
		
		// Tonen van alle Milestones in een Combobox
    	this.milestonesCombobox = this.add({
        	xtype: 'rallymilestonecombobox'
    	});		
		
		// Ophalen van data uit Rally
		this._loadData() ;

	},		
		
	
	// ophalen data vanuit Rally
	_loadData: function() {
	  console.log('Function loadData is gestart');
    	
		var myStore = Ext.create('Rally.data.wsapi.Store', {
    		model: 'User Story',
    		// Direct na starten van de app wordt er data opgehaald
    		autoLoad: true,
    		listeners: {
    			// wordt aangeroepen wanneer de data terugkomt uit de store
    	    	load: function(myStore, myData, success) {
    	        	//process data
    	        	console.log('Data ontvangen vanuit Rally', myStore, myData, success);
    	        	this._loadGrid(myStore);
    	        },
	    	    // maken van een reference naar de app
	    	    scope: this
    		},
	    	fetch: ['FormattedID','Name', 'ScheduleState']
		});		
    	 	
	},
	
	
    // Create ans Show a Grid of given stories
    _loadGrid: function(myStoryStore) {	        
        //aanmaken van een grid om data te kunnen tonen
    	var myGrid = Ext.create('Rally.ui.grid.Grid', {
    	    store: myStoryStore,
    	    columnCfgs: [
    	        	'Name'
    	        ]
    	});
    	    
    	// add te grid to the app
    	this.add(myGrid);
    	    console.log('Grid toegevoegd?', this);
    	}
	
	
});
