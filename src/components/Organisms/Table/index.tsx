import React, { useState } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import GlobalFillter from "../../Atoms/GlobalFillter";

const Table = ({ columns, data, maxPageCount }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    state,
    gotoPage,
    preGlobalFilteredRows,
    setGlobalFilter,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: currentPageIndex },
    },
    useGlobalFilter,
    usePagination
  );

  function handlePageClick(pageIndex) {
    setCurrentPageIndex(pageIndex);
    gotoPage(pageIndex);
  }

  const showPrevEllipsis = currentPageIndex - (maxPageCount - 2) > 1;
  const showNextEllipsis =
    currentPageIndex + (maxPageCount - 2) < pageCount - 2;
  const firstPageIndex =
    currentPageIndex > Math.floor(maxPageCount / 2)
      ? currentPageIndex - Math.floor(maxPageCount / 2)
      : 0;
  const lastPageIndex =
    currentPageIndex > Math.floor(maxPageCount / 2)
      ? currentPageIndex + Math.ceil(maxPageCount / 2) - 1
      : maxPageCount - 1;

  const pageButtons = Array.from(
    { length: lastPageIndex - firstPageIndex + 1 },
    (_, i) => i + firstPageIndex
  );

  return (
    <div className="w-full flex flex-col gap-2">
      <GlobalFillter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()} className=" box-border">
        <thead className="border-b border-black text-center">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="border border-black"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="border border-black"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full flex gap-3">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button
          onClick={() => handlePageClick(currentPageIndex - 1)}
          disabled={currentPageIndex === 0}
        >
          {"<"}
        </button>{" "}
        {showPrevEllipsis && (
          <>
            <button onClick={() => handlePageClick(0)}>1</button>
            <span>...</span>
          </>
        )}
        {pageButtons.map((pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageClick(pageIndex)}
            disabled={currentPageIndex === pageIndex}
          >
            {pageIndex + 1}
          </button>
        ))}
        {showNextEllipsis && (
          <>
            <span>...</span>
            <button onClick={() => handlePageClick(pageCount - 1)}>
              {pageCount}
            </button>
          </>
        )}
        <button
          onClick={() => handlePageClick(currentPageIndex + 1)}
          disabled={currentPageIndex === 0}
        >
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
