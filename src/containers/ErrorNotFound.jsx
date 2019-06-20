import React from "react";
import errorNotFoundImage from "../style/lib/icons/404.svg";

function ErrorNotFound() {
  return (
    <div className="border component not-found">
      <img src={errorNotFoundImage} alt="404" />
      <h2>Brak strony</h2>
      <h4>Coś poszło nie tak</h4>
    </div>
  );
}

export default ErrorNotFound;
