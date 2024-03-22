// react-lovely-popup.js
import React, { useEffect } from "react";

export function lovelyPopUp({ toggleRef, clickRef, callBack }) {
  useEffect(() => {
    let handler = (e) => {
      if (
        !toggleRef.current.contains(e.target) &&
        e.target !== toggleRef.current &&
        e.target !== clickRef.current
      ) {
        callBack(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [toggleRef, clickRef, callBack]);
}
