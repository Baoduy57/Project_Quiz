import React from "react";
import { CountDown } from "./CountDown";

export const RightContent = (props) => {
  const { dataQuiz, handleFinishQuiz } = props;
  const onTimeUp = () => {
    handleFinishQuiz();
  };

  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>

      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div key={`question-abc-${index}`} className="question">
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};
