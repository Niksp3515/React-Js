import { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

const UseContext = () =>{
  const [message, setMessage] = useState("Hello World!");

  return (
  
    <MessageContext.Provider value={{ message, setMessage }}>
      <div>
        <ShowMessage />
        <ChangeMessage />
      </div>
    </MessageContext.Provider>
  );
}

function ShowMessage() {
 const { message } = useContext(MessageContext);
  return <h1>{message}</h1>;
}

function ChangeMessage() {
  const { setMessage } = useContext(MessageContext);
  
  return (
    <button onClick={() => setMessage("New Message!")}>
      Change Message
    </button>
  );
}

export default UseContext;