import React from "react";

/* function Hello(){ //default export
    return (
        <h1>Hello World</h1>
    )
} */

/* export const User = function () {
  //Name export.. must use {} for import from parent class
  return <h1>Hello User</h1>;
 
}; */

const Hello = (props) => {
  //console.log(props);
  //props.name = "kamal" //error//props are immutable
  return (
    <div>
      <h2>
        I am {props.name} and I am {props.age} years old
      </h2>
      <h2>{props.children}</h2>
    </div>
  );
};
export default Hello;
