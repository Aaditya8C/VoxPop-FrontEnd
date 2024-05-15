"use client";
import React, { useState } from "react";
import PopupContainer from "../Popup/PopupContainer";
import { CircleMinus, CirclePlus } from "lucide-react";
import axios from "axios";
import { InputLabel, MenuItem, Select } from "@mui/material";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";

const AddPost = ({ setPopup }) => {
  const [options, setOptions] = useState(["", ""]);
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      question: question,
      options: options,
      category: category,
    };
    try {
      const response = await axios.post(
        "http://localhost:3002/api/polls",
        data,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );
      if (response.data.status) {
        console.log(response.data);
        toast.success(response.data.message);
        // setPopup(false);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <PopupContainer setPopup={setPopup}>
      <form
        className="w-[40vw] h-fit main rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3 text-white">
          <>
            <p className="text-xl font-semibold">Add Question</p>
            <input
              type="text"
              className="w-full p-4 text-xl outline-none bg-slate-600 rounded-lg text-white"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </>
          <>
            <InputLabel
              id="demo-simple-select-label"
              className="text-white text-xl"
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              className="bg-slate-600 text-white text-xl"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"Sports"}>Sports</MenuItem>
              <MenuItem value={"Technology"}>Technology</MenuItem>
              <MenuItem value={"Education"}>Education</MenuItem>
              <MenuItem value={"Business"}>Business</MenuItem>
              <MenuItem value={"Finance"}>Finance</MenuItem>
            </Select>
          </>
          <p className="text-xl font-semibold mt-4">Options</p>
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-[75%] p-2 outline-none bg-slate-600 rounded-lg text-white"
                placeholder={`Option ${index + 1}`}
              />
              {index > 1 && (
                <button
                  type="button"
                  className="ml-auto"
                  onClick={() => handleRemoveOption(index)}
                >
                  <CircleMinus className="text-red-600" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="ml-auto text-green-400"
            onClick={handleAddOption}
          >
            <CirclePlus className="" />
          </button>
          <button
            className="btn-grad text-2xl font-semibold py-2 rounded-lg"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </PopupContainer>
  );
};

export default AddPost;
