import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Workspace.scss";
import { Button } from "../../UI/Button/Button";
import { AddField } from "../Fields/Add/AddField";
import { ChangeField } from "../Fields/Change/ChangeField";
import { DeleteField } from "../Fields/Delete/DeleteField";
import { OrdersList } from "../Fields/OdersList/OrdersList";

interface Workspace {
  item: any;
  index: number;
}

export const Workspace = (item: Workspace) => {
  const [toggle, setToggle] = useState(false);
  
  const renderField = (fieldType: number) => {
    switch (fieldType) {
      case 0:
        return <AddField />;
      case 1:
        return <ChangeField />;
      case 2:
        return <DeleteField />;
      case 3:
        return <OrdersList render={false} />;
    }
  };

  return (
    <React.Fragment>
      <div className={"title-container"}>
        <div className={"title"}>
          <span>{item.item.span}</span>
          <Button onClick={() => setToggle(!toggle)}>
            {!toggle ? item.item.logo : "✖"}
          </Button>
        </div>
      </div>
      <CSSTransition
        in={toggle}
        timeout={400}
        mountOnEnter
        unmountOnExit
        classNames={"workspace"}
      >
        <div className={"workspace"}>{renderField(item.index)}</div>
      </CSSTransition>
    </React.Fragment>
  );
};
