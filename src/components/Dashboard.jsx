import LoadingScreen from "../modules/LoadingScreen";
import StatusIcon from "../modules/StatusIcon";
import PostResData from '../modules/PostResData';

///REACT GRID
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { Grid } from '@ag-grid-community/core';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

function Dashboard(props) {
 
   if(!props.checksData){
     console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }
 const gridRef = useRef();

 const [rowData, setRowData] = useState([]); // Set rowData to Array of Objects, one Object per Row
 
 useEffect(() => {
setRowData(props.checksData)
}, [props]);

// console.log(rowData);


 const [columnDefs, setColumnDefs] = useState([
  {field: 'status',
  
  cellRenderer: params => {
   /*  if(params.value === "down"){

    } */
      return <StatusIcon status={params.value}/>
                          } /* filter: true */},
  {field: 'name', /* filter: true */},
  {field: 'hostname', /* filter: true */},
  {field: 'type'},
  {field: 'lastresponsetime', cellRenderer: 'agAnimateShowChangeCellRenderer:'},
  {field: 'resolution'},
  {field: 'created',  cellRenderer: params => {
    return getDate(params.value)
                        }},
  
]);

const defaultColDef = useMemo( ()=> ({
  
    flex: 1,
    minWidth: 120,
    resizable: true,
    cellClass: 'align-right',
    sortable: true,
 /*  editable: true, */
 /* filter: 'agTextColumnFilter' */
 
 
 
}));


const gridOptions = {
/*   rowStyle: { background: 'black' },
 */
   
      rowClassRules: {
        // apply green to 2008
        'rag-green-outer': function(params) { return params.data.status === "down"; },
      },
  // PROPERTIES
  // Objects like myRowData and myColDefs would be created in your application
  /* rowData: myRowData,
  columnDefs: myColDefs,
  pagination: true,
  rowSelection: 'single', */

  // EVENTS
  // Add event handlers
  /* onRowClicked: event => console.log('A row was clicked'),
  onColumnResized: event => console.log('A column was resized'),
  onGridReady: event => console.log('The grid is now ready'), */

  // CALLBACKS
  /* getRowHeight: (params) => 25 */
}

const cellClickedListener = useCallback( event => {
  console.log('cellClicked', event);
}, []);

 function getDate(serverdata) {
  const findDate = serverdata.created;
  const timestamp = new Date(findDate);  
  let theDate = `${timestamp.getHours()}:${timestamp.getMinutes()} - ${timestamp.getDate()}/${timestamp.getMonth()+1}/${timestamp.getYear()}`;
  return theDate;
}
   
/* api.refreshCells = (
  params: RefreshCellsParams = {}
) => void;

interface RefreshCellsParams {
// Skip change detection, refresh everything. 
force?: boolean;
// Skip cell flashing, if cell flashing is enabled. 
suppressFlash?: boolean;
// Optional list of row nodes to restrict operation to 
rowNodes?: RowNode[];
// Optional list of columns to restrict operation to 
columns?: (string | Column)[];
} */

    return ( <div className="dashboard-container"><div className="ag-theme-alpine" style={{width: 100+"%", height: 100+"%"}}>

    <AgGridReact modules={[ClientSideRowModelModule]}
    
    /* gridOptions={gridOptions} */
    /* rowClassRules={rowClassRules} */
    /* headerHeight={30}
    rowHeight={20} */
    enableCellChangeFlash={true}
        /* ref={gridRef} // Ref for accessing Grid's API
 */ref={gridRef}
        rowData={rowData} // Row Data for Rows

        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties

        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        /* rowSelection='multiple' */ // Options - allows click selection of rows

      /*   onCellClicked={cellClickedListener} // Optional - registering for Grid Event
       */  />
  </div>
  </div>
    
  )
    }
    
    export default Dashboard;
    