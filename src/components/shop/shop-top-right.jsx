import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import {handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const ShopTopRight = ({selectHandleFilter}) => {
  const dispatch = useDispatch()
  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-start">
      <div className="tp-shop-top-select">
        <NiceSelect
          options={[
            { value: "Default Sorting", text: "پیش فرض" },
            { value: "Low to High", text: "قیمت کم به زیاد" },
            { value: "High to Low", text: "قیمت زیاد به کم" },
            { value: "New Added", text: "جدیدترین" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name='مرتب سازی'
        />
      </div>
      <div className="tp-shop-top-filter">
        <span className="tp-filter-btn">
          مرتب سازی
        </span>
      </div>
    </div>
  );
};

export default ShopTopRight;
