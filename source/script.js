/* globals apex,$ */
window.ENHANCEIGWITHTREEGRID = window.ENHANCEIGWITHTREEGRID || {};

//Execute script
ENHANCEIGWITHTREEGRID.main = function(config,init) { 

    //Initialize variables
    const dataRownum  = "[data-id=#ROW_ID#]";

    var $widget       = apex.region(config.regionID).widget(),
        $grid         = $widget.interactiveGrid('getViews').grid,
        $model        = $grid.model,
        totalRecords  = $model._data.length;

    var cols          = $grid.view$.grid("getColumns"),
        treeColumnIdx = cols.filter(item => item.property === config.treeColumn),
        hasActionsRow = cols.filter(item => item.property === 'APEX$ROW_ACTION').length; //'APEX$ROW_ACTION','_meta'
    
    //Defaults
    $.fn.treegrid.defaults.treeColumn      = treeColumnIdx[0].index + (hasActionsRow ? 1 : 0);

    //Initialize table
    var settings = (init && typeof init == 'function') ? init.call(this, config) : $.fn.treegrid.defaults;
    var $table   = $('#' + config.regionID).find(config.tableSelector).last();

    $table.treegrid('setTreeContainer', $table);
    $table.treegrid('setSettings', settings);

    //Adding treegrid CSS classes to the rows
    for(i = 0;i < totalRecords; i++) { 

        record      = $model.recordAt(i);
        recId       = $model.getValue(record,config.idColumn);
        recParentId = $model.getValue(record,config.parentIdColumn);
        recJq       = config.rowSelector + dataRownum.replace('#ROW_ID#',recId);
        recDepth    = $model.getValue(record,config.depthLevel) - 1;
        $regionDOM  = $('#' + config.regionID)
        $recJq      = $regionDOM.find(recJq);

        //If record exists in the DOM
        if ($recJq.length) {
        
            //Adding basic treegrid classes to the row
            $recJq.addClass('apex-treegrid-' + recId);
            $recJq.addClass('apex-treegrid-' + config.initialState);

            if(recParentId && $regionDOM.find(".apex-treegrid-" + recParentId).length > 0) {
                $recJq.addClass('apex-treegrid-parent-' + recParentId);
            };

            //Initialize row
            $recJq.treegrid('setTreeContainer', $table);
            $recJq.treegrid('getChildNodes')
                  .treegrid('initNode', settings);
            $recJq.treegrid('initEvents')
                .treegrid('initExpander')
                .treegrid('initIndent', recDepth)
                .treegrid('initState')
                .treegrid('initChangeEvent')
                .treegrid("initSettingsEvents");
        }
    }
    
    $table.treegrid('getRootNodes').treegrid('render');

    //Add apex-treegrid-expander-expanded if IG is reinitialized due to some change in the region
    $table.find('.apex-treegrid-expanded').each(function() {
        var $this = $(this);
        if (!$this.treegrid('isLeaf')) {
            $this.treegrid('renderExpander');
            $this.treegrid('getChildNodes').treegrid('render');
        };
    });

}
