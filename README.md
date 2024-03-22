
# react-lovely-popup

react-lovely-popup provides a lightweight React component for creating lovely popups with ease. With simple integration and flexible options, it enhances user experience by allowing seamless toggling of popups triggered by various UI elements.


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


## Documentation



## lovelyPopUp({})
This function sets up a lovely popup component.

## Parameters
An object containing options for configuring the lovely popup component.

## buttonRef:
A React ref for the toggle button or element that triggers the popup.
## toggleRef:
A React ref for the popup itself.
## callBack:
A callback function that return a boolean value indicating whether the popup should be open or closed.

## Example

Here's how you can use your package in your code:
```javascript
import { useRef, useState } from "react";
// This is the package you need to import 
import { lovelyPopUp } from "react-lovely-popup";

function App() {
  
  const [open, setOpen] = useState(false);

  const btnRef = useRef();
  const popupRef = useRef();

  lovelyPopUp({
    clickRef: btnRef,
    toggleRef: popupRef,
    callBack: setOpen,
  });

  return (
    <>
        {/* you have to add the onClick Event for basic toggle */}
      <button ref={btnRef} onClick={() => setOpen(!open)}>
        Toggle Popup
      </button>
      <div ref={popupRef}>
        {open && <p>I am a popup</p>}
      </div>
    </>
  );
}

export default App;


```



## License

[Apache-2.0](https://github.com/Shahriar-30/react-lovely-popup?tab=Apache-2.0-1-ov-file#readme)
