import { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus the input</button>
        </div>
    );
};

export default UseRef;