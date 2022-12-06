import React, { useState } from "react";
import WidgetWrapper from "../utils/widgetwrapper/WidgetWrapper";

import classes from "./signal.module.css";

const Signal = () => {
  const [strength, setStrength] = useState(1);

  const setSignalLevel = (lvl) => {
    setStrength(lvl);
  };

  const signalList = [
    {
      id: 5,
      name: classes.signalFive,
      filledName: classes.signalFive__filled,
    },
    {
      id: 4,
      name: classes.signalFour,
      filledName: classes.signalFour__filled,
    },
    {
      id: 3,
      name: classes.signalThree,
      filledName: classes.signalThree__filled,
    },
    {
      id: 2,
      name: classes.signalTwo,
      filledName: classes.signalTwo__filled,
    },
    {
      id: 1,
      name: classes.signalOne,
      filledName: classes.signalOne__filled,
    },
  ];
  return (
    <WidgetWrapper>
      <div className={classes.signal__container}>
        <div className={classes.signal__strength}>
          <span>
            {strength > 3 ? "High" : strength === 3 ? "Average" : "Low"}
          </span>
        </div>

        <div className={classes.signal__level}>
          {signalList.map((item) => {
            return (
              <div
                key={item.id}
                className={`${
                  strength >= item.id ? item.filledName : item.name
                }`}
                onClick={() => setSignalLevel(item.id)}
              ></div>
            );
          })}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default Signal;
