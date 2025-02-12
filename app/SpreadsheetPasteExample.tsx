"use client";
import React, { useState } from "react";

export default function SpreadsheetPasteExample() {
  const [pastedData, setPastedData] = useState<string[][]>([]);

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();

    // Get clipboard data
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData("text");

    // Split into rows and columns
    const rows = pastedText.split(/\r\n|\n|\r/).filter((row) => row.trim());
    const parsedData = rows.map((row) => row.split("\t"));

    setPastedData(parsedData);
  };

  return (
    <div className="w-full p-4">
      <div
        aria-label="Excel paste area"
        className="max-w-4xl border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4 min-h-32 focus:outline-none focus:border-blue-500"
        onPaste={handlePaste}
        role="textbox"
        tabIndex={0}
      >
        <p className="text-gray-500 mb-2">
          Paste spreadsheet data here (Ctrl+V or Cmd+V)
        </p>
      </div>
      {pastedData.length > 0 && (
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <tbody>
              {pastedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="border border-gray-300 p-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
