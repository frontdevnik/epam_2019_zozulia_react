import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";

import { searchByName } from "../../features/filters/actions";

import style from "./sorting.module.scss";

function SortByName({ placeholder, handleSubmit }) {
  const dispatch = useDispatch();

  const handleSearch = ({ search }) => {
    dispatch(searchByName(search));
  };

  return (
    <Form className={style.search} onSubmit={handleSubmit(handleSearch)}>
      <button type="submit" className={style.search} />
      <Field
        name="search"
        component="input"
        type="search"
        placeholder={placeholder}
      />
    </Form>
  );
}

export const TestSortByName = SortByName;

export default reduxForm({
  form: "Filter",
})(SortByName);
