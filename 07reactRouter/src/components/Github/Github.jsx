import { React, useEffect } from "react";
// import useState from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export const githubInforLoader = async () => {
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
  return response.json();
};

function Github() {
  const data = useLoaderData();
  console.log(data);
  //   const [data, setData] = useState([]);
  //   const { userName } = useParams();

  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/${userName ? userName : "nwaliaez"}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="py-5 text-center text-2xl bg-amber-500">
        Github followers: {data.followers}
      </div>
      <img src={data.avatar_url} alt="profile pic" width={300} />
    </>
  );
}

export default Github;
