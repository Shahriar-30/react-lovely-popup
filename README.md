# Demo

[Demo](https://codesandbox.io/p/sandbox/react-lovely-popup-sjhlhs?file=%2Fsrc%2FApp.js%3A1%2C1-43%2C1)

# react-lovely-popup

react-lovely-popup provides a lightweight function for creating lovely popups. With simple integration and flexible options, it enhances user experience by allowing seamless toggling of popups triggered by various UI elements.

## Installation

You can install this package via npm.

```bash
  npm i react-lovely-popup
```

## Usage

Here's how you can use your package in your code:

```javascript
// The package you need to import
import { lovelyPopUp } from "react-lovely-popup";
```

# Documentation

## lovelyPopUp({})

This function sets up a lovely popup component.

## Parameters

An object containing options for configuring the lovely popup component.

| Parameter   | Type       | Description                                                                                                            |
| :---------- | :--------- | :--------------------------------------------------------------------------------------------------------------------- |
| `clickRef`  | `ref/ele`  | `A React ref for the toggle button or element that triggers the popup.`                                                |
| `toggleRef` | `ref/ele`  | `A React ref for the popup itself.`                                                                                    |
| `callBack`  | `function` | `A callback function that return a boolean value indicating whether the popup should be open or closed. default value false` |

## Example

Here's how you can use your package in your code:

```javascript
import React, { useRef, useState } from "react";
// import react-lovely-popup
import { lovelyPopUp } from "react-lovely-popup";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  let btn = useRef();
  let toggle = useRef();

  // react-lovely-popup
  let popUp = lovelyPopUp({
    clickRef: btn,
    toggleRef: toggle,
    callBack: (e) => {
      setOpen(e);
    },
  });

  return (
    <>
      <div className="container center">
        <div className="box center">
          <button ref={btn}>Click Me</button>
          <div ref={toggle}>
            {open && (
              <div className="toggle center">
                <p>Toggle Ele</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
```

## License

[Apache-2.0](https://github.com/Shahriar-30/react-lovely-popup?tab=Apache-2.0-1-ov-file#readme)
