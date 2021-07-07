import React, { useState, useEffect } from "react";
import { getNames, removeName } from "./routes";
import FormElement from "./modal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Crud = () => {

    const [modal, setModal] = useState("form-group none")
    const [type, setType] = useState("create")
    const [current, setCurrent] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNames())
    }, []);

    const data = useSelector(state => state.user.currentUser)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">

                    <>
                        <div className="header">
                            <h2 className="title">Book List</h2>
                            {modal === "form-group none" && <button className="button" onClick={() => {
                                setModal("form-group active")
                                setType("create")
                            }
                            }>Create</button>}
                        </div>

                        <FormElement
                            modal={modal}
                            setModal={setModal}
                            type={type}
                            current={current}
                        />

                        {data &&
                            data.map((item) => (
                                <div
                                    className="border row mx-2 "
                                    key={item.id}
                                >
                                    <ul className="list-group">
                                        <li className="list-group-item"> Title: {item.name}</li>
                                        <li className="list-group-item"> Author: {item.author}</li>
                                        <li className="list-group-item"> Category: {item.category}</li>
                                        <li className="list-group-item"> ISBN: {item.ISBN}</li>
                                    </ul>

                                    <span
                                        onClick={() => dispatch(removeName(item.id))}
                                        className="icon"
                                    >
                                        <DeleteOutlined className="text-warning " />
                                    </span>
                                    <span className="icon"
                                        onClick={() => {
                                            setModal("form-group active")
                                            setType("update")
                                            setCurrent(item)
                                        }}
                                    >
                                        <EditOutlined className="text-warning"
                                        />
                                    </span>
                                </div>
                            ))}
                    </>
                </div>
            </div>
        </div >
    );
};

export default Crud;