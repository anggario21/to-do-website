import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title); // Teruskan "title" sebagai argument
    setTitle("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  // Periksa apakah function "handleChangeTitle" berfungsi
  console.log(title);

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title} // Atur nilai dari input sesuai dengan state  "title"
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    height: "66px",
    width: "40%",
    fontSize: "16px",
    padding: "0 16px",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #444",
  },
  button: {
    height: "72px",
    fontSize: "16px",
    backgroundColor: "#BB0000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default TodoForm;
