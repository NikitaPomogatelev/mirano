import classNames from "classnames";
import "./choices.scss";
import { useState } from "react";

export const Choices = ({ children, buttonLabel, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    console.log("e", e);
    console.log("isOpen", isOpen);
    setIsOpen((oldIsOpen) => !oldIsOpen);
  };

  return (
    <div className={classNames("choices", className)}>
      <button className="choices__btn" type="button" onClick={handleToggle}>
        {buttonLabel}
      </button>

      {isOpen && <div className="choices__box">{children}</div>}
    </div>
  );
};
