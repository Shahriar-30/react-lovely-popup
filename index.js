import React, { useEffect, useState } from "react";

export function lovelyPopUp({ toggleRef, clickRef, callBack }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (
        !toggleRef.current.contains(e.target) &&
        !clickRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
      if (clickRef.current.contains(e.target)) {
        setOpen((prevOpen) => !prevOpen); 
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [toggleRef, clickRef]);

  // Return The Value By callBack()
  useEffect(() => {
    callBack(open);
  }, [open, callBack]);
}
