import React, { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export const Questions = (props) => {
  const options = [
    { value: "chocolate", label: "chocolate" },
    { value: "orange", label: "orange" },
    { value: "apple", label: "apple" },
    { value: "banana", label: "banana" },
    { value: "grape", label: "grape" },
    { value: "strawberry", label: "strawberry" },
    { value: "pineapple", label: "pineapple" },
    { value: "watermelon", label: "watermelon" },
  ];
  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label>Select Quiz</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mt-3">Add Questions:</div>
        <div>
          <div className="questions-content">
            <div className="form-floating description">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
              />
              <label>Description</label>
            </div>
            <div className="group-upload">
              <label className="label-up">Upload Image</label>
              <input type="file" hidden />
              <span>No flie is uploaded</span>
            </div>
            <div className="btn-add">
              <span>
                <FaPlusCircle className="icon-add" />
              </span>
              <span>
                <FaMinusCircle className="icon-remove" />
              </span>
            </div>
          </div>
          <div className="answers-content">
            <input className="form-check-input iscorrect" type="checkbox" />
            <div className="form-floating answer-name">
              <input
                type="text"
                className="form-control"
                placeholder="Answer 1"
              />
              <label>Answer 1</label>
            </div>
            <div className="btn-group">
              <span>
                <FaPlus className="icon-add" />
              </span>
              <span>
                <FaMinus className="icon-remove" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
