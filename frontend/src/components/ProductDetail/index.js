import React from "react";
import DataList from "../ListData";
import CustomTable from "../Table";
const configData = [
  {
    name: "Mainboard",
    promo: "ASUS ROG STRIX Z690-F GAMING WIFI DDR5",
    price: "36 Tháng",
  },
  {
    name: "Mainboard",
    promo: "ASUS ROG STRIX Z690-F GAMING WIFI DDR5",
    price: "36 Tháng",
  },
  {
    name: "Mainboard",
    promo: "ASUS ROG STRIX Z690-F GAMING WIFI DDR5",
    price: "36 Tháng",
  },
  {
    name: "Mainboard",
    promo: "ASUS ROG STRIX Z690-F GAMING WIFI DDR5",
    price: "36 Tháng",
  },
  {
    name: "Mainboard",
    promo: "ASUS ROG STRIX Z690-F GAMING WIFI DDR5",
    price: "36 Tháng",
  },
  {
    name: "Mainboard",
    promo: "ASUS ROG STRIX Z690-F GAMING WIFI DDR5",
    price: "36 Tháng",
  },
  {
    name: "Mainboard",
    promo: "ASUS ROG STRIX Z690-F GAMING WIFI DDR5",
    price: "36 Tháng",
  },
];

const configDetailData = [
  {
    title: "Tản nhiệt ASUS ROG RYUJIN II 360",
    content:
      "ASUS ROG RYUJIN II 360 với thiết kế mới giúp toàn bộ linh kiện PC tăng cường độ bền duy trì hiệu suất hoạt động tốt. Đây được xem là mảnh ghép cuối cùng dành cho bộ máy chơi game hoàn hảo. ",
    img: "",
  },
  {
    title: "Tản nhiệt ASUS ROG RYUJIN II 360",
    content:
      "ASUS ROG RYUJIN II 360 với thiết kế mới giúp toàn bộ linh kiện PC tăng cường độ bền duy trì hiệu suất hoạt động tốt. Đây được xem là mảnh ghép cuối cùng dành cho bộ máy chơi game hoàn hảo. ",
    img: "",
  },
  {
    title: "Tản nhiệt ASUS ROG RYUJIN II 360",
    content:
      "ASUS ROG RYUJIN II 360 với thiết kế mới giúp toàn bộ linh kiện PC tăng cường độ bền duy trì hiệu suất hoạt động tốt. Đây được xem là mảnh ghép cuối cùng dành cho bộ máy chơi game hoàn hảo. ",
    img: "",
  },
  {
    title: "Tản nhiệt ASUS ROG RYUJIN II 360",
    content:
      "ASUS ROG RYUJIN II 360 với thiết kế mới giúp toàn bộ linh kiện PC tăng cường độ bền duy trì hiệu suất hoạt động tốt. Đây được xem là mảnh ghép cuối cùng dành cho bộ máy chơi game hoàn hảo. ",
    img: "",
  },
];
const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="intro">
        <div className="imgWrap">
          <img src={require("../../assets/images/lap1.png")} alt="product" />
        </div>
        <div className="contentWrap">
          <h1 className="name">GVN PHANTOM Plus i3070Ti</h1>
          <p>Khuyễn mãi dặc biệt</p>
        </div>
      </div>
      <div className="config">
        <CustomTable data={configData} />
      </div>
      <div className="configDetail">
        a
        <DataList data={configDetailData} />
      </div>
    </div>
  );
};

export default ProductDetail;
