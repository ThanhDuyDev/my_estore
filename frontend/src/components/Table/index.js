import React from "react";

const CustomTable = ({ row = 3, data, columns = "col_3" }) => {
  return (
    <div>
      <tbody>
        <table className="customTable">
          {data.map((item, index) => (
            <tr className={`customTable_item ${columns}`} key={index}>
              {Object.values(item).map((itemColumn, i) => (
                <td key={i}>{itemColumn}</td>
              ))}
            </tr>
          ))}
        </table>
      </tbody>
    </div>
  );
};

export default CustomTable;
