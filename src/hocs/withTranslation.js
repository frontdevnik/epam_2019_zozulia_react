import React from "react";
import ukr from "../intl/ukr";
import eng from "../intl/eng";

const withTranslation = (words) => (WrappedComponent) => {
  const lang = localStorage.getItem("selectedLanguage");

  const selectedLang = lang === "ukr" ? ukr : eng;

  const selectedWords = {};

  words.forEach((word) => {
    if (word in selectedLang) {
      selectedWords[word] = selectedLang[word];
    }
  });

  const NewComponent = (props) => (
    <WrappedComponent {...props} {...selectedWords} />
  );

  return NewComponent;
};

export default withTranslation;
