"use client"
import React, { useState } from 'react';
import PopupContainer from '../Popup/PopupContainer';
import { CircleMinus, CirclePlus } from 'lucide-react';

const AddPost = ({ setPopup }) => {
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
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

  return (
    <PopupContainer setPopup={setPopup}>
      <form className="w-[40vw] h-fit main rounded-lg p-8">
        <div className="flex flex-col gap-2 text-white">
          <p className='text-xl font-semibold'>Add Question</p>
          <input type='text' className="w-full p-2 outline-none bg-slate-800 rounded-lg text-white"/>

          <p className='text-xl font-semibold mt-4'>Options</p>
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type='text'
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-[75%] p-2 outline-none bg-slate-800 rounded-lg text-white"
                placeholder={`Option ${index + 1}`}
              />
              {index > 1 && (
                <button type="button" className='ml-auto' onClick={() => handleRemoveOption(index)}>
                  <CircleMinus className='text-red-600'/>
                </button>
              )}
            </div>
          ))}
          <button type="button" className='ml-auto text-green-400' onClick={handleAddOption}><CirclePlus className=''/></button>
          <button className='btn-grad text-xl font-semibold'>Post</button>
        </div>
      </form>
    </PopupContainer>
  );
}

export default AddPost;
