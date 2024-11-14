(()=>{function i(o){return res={},o.length===0||(keys=Object.keys(o[0]),keys.forEach(e=>res[e]=o.map(a=>a[e]))),res}function d(o,e){o.on("rowClick",function(a,t){let r=`${e.id}_row_clicked`;console.log(r,t.getData()),Shiny.onInputChange(r,t.getData())}),o.on("rowClick",(a,t)=>{let r=`${e.id}_rows_selected:rtabulator.data`,s=o.getSelectedRows().map(n=>n.getData());console.log(r,s),Shiny.onInputChange(r,{data:i(s)})}),o.on("cellEdited",function(a){let t=`${e.id}_cell_edited`;console.log(t,a.getData()),Shiny.onInputChange(t,a.getData())}),o.on("dataFiltered",function(a,t){let r=`${e.id}_data_filtered:rtabulator.data`,s=t.map(n=>n.getData());console.log(r,s),Shiny.onInputChange(r,{data:i(s)})})}function u(o,e,a){a.forEach(([t,r])=>{if(t==="getData"){let s=`${o.id}_data:rtabulator.data`;console.log("custom call",s),Shiny.setInputValue(s,{data:i(e.getData())},{priority:"event"});return}if(t==="deleteSelectedRows"){console.log("custom call"),e.getSelectedRows().forEach(n=>{console.log(n.getIndex()),e.deleteRow(n.getIndex())});return}if(t==="getSheetData"){let s=`${o.id}_sheet_data:rtabulator.sheet_data`;console.log("custom call",s),Shiny.setInputValue(s,{data:e.getSheetData()},{priority:"event"});return}console.log(t,r),e[t](...r)})}var c=class{constructor(e,a,t){t.data=a,this._container=e,console.log("columns",t.columns),a!==null&&t.columns==null&&(t.autoColumns=!0),t.spreadsheet&&t.spreadsheetData==null&&(t.spreadsheetData=[]),this._table=new Tabulator(this._container,t),typeof Shiny=="object"&&(d(this._table,this._container),this._addShinyMessageHandler())}_addShinyMessageHandler(){let e=`tabulator-${this._container.id}`;Shiny.addCustomMessageHandler(e,a=>{console.log(a),u(this._container,this._table,a.calls)})}getTable(){return this._table}};function g(o,e,a){let t=null;function r(n){console.log(n),n.stylesheetText&&document.head.insertAdjacentHTML("beforeend",`<style>${n.stylesheetText}</style>`),n.options===null&&(n.options={});let l=null;n.options.spreadsheet===!0?n.options.spreadsheetData=n.data:l=HTMLWidgets.dataframeToD3(n.data),t=new c(o,l,n.options).getTable()}function s(n,l){}return{renderValue:r,resize:s}}HTMLWidgets.widget({name:"rtabulator",type:"output",factory:g});})();