import React from "react";
import {MdEdit, MdDelete} from 'react-icons/md'
const List = ({ id, task, setUpdateUI, updateMode }) => {
    return (
        <li>
            {task}
            <section className="icon-holder">
                <MdEdit className="icon" />
                <MdDelete className="icon" />
            </section>
        </li>
    )
}

export default List;