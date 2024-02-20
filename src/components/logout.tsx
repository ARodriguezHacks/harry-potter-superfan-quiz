import { FormEvent } from "react";
// interface Props {}

function Logout() {
  // const {} = props
  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/logout", {
      method: "DELETE",
      mode: "cors",
    });

    const output = await response.json();
    console.log(output);
    // setValues(initialValues);
    return output;
  };

  return (
    <div>
      <button className={`rounded-full bg-orange-200`} onSubmit={handleSubmit}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
