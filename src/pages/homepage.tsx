import { useState, useEffect } from "react";

export default function Homepage() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    async function getHomepage() {
      const data = await fetch("http://127.0.0.1:5000/homepage");
      console.log(data);
      const res = await data.json();
      console.log(res);
      if (test == false) {
        setTest(!test);
      }
    }
    getHomepage();
  }, [test]);

  return (
    <>
      <div>{test ? "True" : "False"}</div>
    </>
  );
}
