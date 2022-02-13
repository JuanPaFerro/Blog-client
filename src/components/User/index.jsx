import React, { useContext } from "react";
import { Context } from "../../Context";

const User = () => {
  const { removeAuth } = useContext(Context);

  return (
    <div>
      <span>User image</span>
      <span>User Name</span>
      <button onClick={removeAuth}>Log Out</button>
    </div>
  );
};

export default User;
