import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userID } = useParams();
  return (
    <div className="bg-gray-400 text-orange-200 text-xl text-center py-4">
      User: {userID}
    </div>
  );
}

export default User;
