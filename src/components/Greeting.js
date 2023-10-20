import React from 'react';

const Greeting = (props) => {
  const { name } = props;
  const greetingName = name || "Param Thakur"; 

  return (
    <div>
      <h1>Hello, {greetingName}!</h1>
    </div>
  );
};

export default Greeting;




{/* <Greeting name='john'/> */}