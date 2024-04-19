import React, { useEffect, useState } from "react";
import "./Edit.css";
import { useDispatch, useSelector } from "react-redux";
import { addToUsers } from "../../context/usersSlice";
import { IoCloseCircle } from "react-icons/io5";
import { editUser } from "../../context/editSlice";

function Edit({ data }) {
  let editModul = useSelector((state) => state.edit.value);
  let getId = useSelector((state) => state.id.value);
  let findUser = data?.find((el) => el.id === +getId);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    if (findUser) {
      setName(findUser.name);
      setProfession(findUser.profession);
      setAge(findUser.age);
      setGender(findUser.gender);
    }
  }, [findUser]);
  return (
    <div className={`edit ${editModul ? "edit-show" : ""}`}>
      <button className="edit-btn-1" onClick={() => dispatch(editUser())}>
        <IoCloseCircle />
      </button>
      <h4>Edit</h4>
      <form className="create__user-form" action="">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          required
          placeholder="name"
        />
        <input
          onChange={(e) => setProfession(e.target.value)}
          value={profession}
          type="text"
          required
          placeholder="profession"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          required
          placeholder="age"
        />
        <select
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          name=""
          id=""
          required
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default Edit;
