import React, { useState } from "react";
import { Input } from "antd"
import { useDispatch } from "react-redux"
import { createName, updateName } from "./routes";
import { Link } from "react-router-dom";

const FormElement = ({ modal, setModal, type, current }) => {

  const [form, setForm] = useState({
    name: "",
    author: "",
    category: "",
    ISBN: "",
  })

  const dispatch = useDispatch()

  const changeHandler = event => {
    setForm({
      ...form, [event.target.name]: event.target.value
    })
  }

  return (
    < div className={modal} >

      {type === "update" && <div className="placeholder">

        <div> name: {current.name}</div>
        <div> author: {current.author}</div>
        <div> category: {current.category}</div>
        <div> ISBN: {current.ISBN}</div>
        <h3> You can update this Item</h3>
      </div>}


      {type === "create" && <div className="placeholder">
        <h3> You can create Item</h3>
      </div>}


      <div>
        <label className="placeholder"> <h5>Title</h5>  </label>
        <Input
          type="text"
          placeholder={current.name}
          onChange={changeHandler}
          name="name"
          autoFocus
          required
        />

        <label className="placeholder"><h5>Author</h5></label>
        <Input
          type="text"
          placeholder={current.author}
          onChange={changeHandler}
          name="author"
          autoFocus
          required
        />

        <label className="placeholder"><h5>Category</h5></label>
        <Input
          type="text"
          placeholder={current.category}
          onChange={changeHandler}
          name="category"
          autoFocus
          required
        />

        <label className="placeholder"> <h5>ISBN</h5>  </label>
        <Input
          type="number"
          placeholder={current.ISBN}
          onChange={changeHandler}
          name="ISBN"
          autoFocus
          required
        />
      </div>

      <br />

      {(form.name !== "" && form.author !== "" && form.category !== "" && form.ISBN !== "") === true ?
        type === "update" ?
          <button className="btn btn-primary mt-1" onClick={() => dispatch(updateName(form, current.id))} >Update</button>
          :
          <button className="btn btn-primary mt-1" onClick={() => dispatch(createName(form))} >Create</button>
        :
        <button className="btn btn-primary mt-1" onClick={() => alert("Please fill in all fields , ISBN only number")} >ADD</button>
      }

      <Link to={`/`}>
        <button className="btn btn-danger mt-1" onClick={() => {
          setModal("form-group none")
        }}>
          Cancel
        </button>
      </Link>
    </div >

  )
};

export default FormElement;