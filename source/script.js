/* globals apex,$ */
window.ENHANCEIGWITHTREEGRID = window.ENHANCEIGWITHTREEGRID || {};

//Execute script
ENHANCEIGWITHTREEGRID.main = function(config,init) { 
    
    const dataRownum = "[data-rownum]";

    var $widget = apex.region(config.regionID).widget();
    var $grid = $widget.interactiveGrid('getViews').grid;
    var $model = $grid.model;
    
    var totalRecords = $model.getTotalRecords(true);

    //Adding treegrid CSS classes to the rows
    for(i = 0;i < totalRecords; i++) { 
        record      = $model.recordAt(i);
        recId       = $model.getValue(record,config.idColumn);
        recParentId = $model.getValue(record,config.parentIdColumn);
        
        //Adding basic treegrid classes to the row
        $(config.rowSelector + dataRownum).eq(i).addClass('apex-treegrid-' + recId);

        if(recParentId) {
            $(config.rowSelector + dataRownum).eq(i).addClass('apex-treegrid-parent-' + recParentId);
        };

        //Adding expand or collapse to nodes
        if (ENHANCEIGWITHTREEGRID.hasChild($model,config.parentIdColumn,recId)) {
            addExpColl = config.expCollNodes === 'expand' ? 'expanded' : 'collapsed';
            $(config.rowSelector + dataRownum).eq(i).addClass(addExpColl);
        };
    }

    //Init JS function
    if (init && typeof init == 'function') init.call(this, config);

    //Initialize IG
    $('#' + config.regionID).find(config.tableSelector).last().treegrid(config);
}

//Check if the current record is a parent in other records
//and if so add expand or collapse css class.
ENHANCEIGWITHTREEGRID.hasChild = function(pModel,pParentCol,pVal) {
    
    var vRecordsNo = pModel.getTotalRecords(true);
    
    for(k = 0;k < vRecordsNo; k++) { 
        vRecord      = pModel.recordAt(k);
        vIsParent    = (pModel.getValue(vRecord,pParentCol) === pVal);

        if (vIsParent) return true;
    }
    
    return false;
}
