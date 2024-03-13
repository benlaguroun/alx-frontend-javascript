/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row`, row);

const updatedRow: RowElement = {
  ...row,
  age: 23
};
const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${updatedRowID}`, updatedRow);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);

