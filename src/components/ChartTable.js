import React from "react";
import { Table } from "react-bootstrap";
export default function ChartTable({ inputTerm, setInputTerm }) {
 
  return (
    <Table className="rtl my-5" striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> نام شرکت</th>
      <th>اصلاعات قرارداد</th>
      <th>اطلاعات مجوز</th>
      <th>اطلاعات درخواست</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     {inputTerm && inputTerm.map(elem=>console.log(elem[1]))}     
    </tr>
  </tbody>
</Table>
  );
}
