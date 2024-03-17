<template>
  <div class="interactive-table">
    <!-- The AG Grid component -->
    <Suspense>
      <ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height:100%" class="ag-theme-quartz-auto-dark">
      </ag-grid-vue>
    </Suspense>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';
import { ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-balham.css"; // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"; // AG Grid Component

function getHeadersFromSheet(worksheet, sheetName) {
  const csvSheet = XLSX.utils.sheet_to_csv(worksheet.Sheets[sheetName]);
  return csvSheet.split('\n')[0].split(',');
}

async function parseSpreadsheetFromUrl(url, sheetName) {
  try {
      const { data, pending, error, refresh } = await useFetch(url);
      const buffer = await data.value.arrayBuffer();
      const parsedWorksheet = XLSX.read(buffer);
      const jsonSheet = XLSX.utils.sheet_to_json(parsedWorksheet.Sheets[sheetName]);
      const headers = getHeadersFromSheet(parsedWorksheet, sheetName).map((col) => { return { "field": col }});
      console.log(headers);
      return {
        "sheetData": jsonSheet,
        "sheetHeaders": headers 
      }
  } catch(error) {
    console.log("got error when fetching sheet from " + url);
    console.log(error);
  } 
  finally {
    console.log("tried to parse spreadsheet");
  }
};

export default {
  name: "App",
  components: {
    AgGridVue, // Add AG Grid Vue3 component
  },
  props: {
    "dataExcelUrl": {
      type: String
    },
    "sheetName": {
      type: String,
      default: "Sheet1"
    }
  },
  data() {
    return {
      excelData: {},
      excelHeaders: []
    }
  },

  async mounted() {
    console.log('fetching ' + this.dataExcelUrl);
    const parsedSheet = await parseSpreadsheetFromUrl(this.dataExcelUrl, this.sheetName);

    this.rowData = parsedSheet.sheetData;
    this.colDefs = parsedSheet.sheetHeaders;
  },
  setup(props) {
    const excelData = ref({});
    console.log(props.dataExcelUrl);

    // Row Data: The data to be displayed.
    const rowData = ref([]);

    // Column Definitions: Defines the columns to be displayed.
    const colDefs = ref([]);

    const defaultColDef = {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    };

    return {
      rowData,
      colDefs,
      defaultColDef
    };
  }
};
</script>

<style>
div.interactive-table {
  height: 500px;
  padding-bottom: 20px;
}
</style>