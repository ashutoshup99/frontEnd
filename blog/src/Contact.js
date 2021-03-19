import React, { useEffect, useState } from "react";
// This is Functional Component
function ClassCompContact(props) {
  let data = "Contact info"; /// Exampe of jsx (javascript xml)(use html in js)
  // vscode://vscode.github-authentication/did-authenticate?windowid=1&code=acec02b3e243bdff164e&state=ad98bdfd-ebd0-4660-9cb6-087aa13e9be6
  const [names, setNames] = useState("contact us on facebook");
  const [name2, setName2] = useState("Connect us on Github");
  // useEffect(() => {
  //   console.warn("hello from hook");
  // }, [name2]);
  // useEffect(() => {
  //   console.warn("hello from props", props.name);
  // });
  // const test = (e) => {
  //   //e stands for event
  //   console.warn("text function", e.target.value);
  // };
  return (
    <div>
      <h2>{data}</h2>
      <h2>Social Media: {props.name}</h2>
      <h2>Code Media: {name2}</h2>
      <button onClick={() => setNames("Twitter")}> Update Social media </button>
      <button onClick={() => setName2("Slack")}> Update code media</button>
      <div>
        <h3>contact us on FB</h3>
      </div>
      <div>
        <h4>contact us on Twitter</h4>
      </div>
      {/* <input type="text" onChange={test} />
      <button onClick={test}>enter string</button> */}
    </div>
  );
}
export default ClassCompContact;
