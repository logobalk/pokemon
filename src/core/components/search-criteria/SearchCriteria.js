import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { Input } from "antd";

const SearchCriteria = (props) => {
  const { children } = props;
  return (
    <div>
      <Input.Search
        allowClear
        showCount
        maxLength={50}
        onSearch={props.onSearch}
      />
    </div>
  );
};
export default SearchCriteria;
