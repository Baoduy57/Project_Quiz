import React, { useState } from "react";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox";

export const Question = (props) => {
  const { data, index, handleCheckbox } = props;
  const [isPreviewImage, setIsPreviewImage] = useState(false);

  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleHandleCheckbox = (e, aId, qId) => {
    handleCheckbox(aId, qId);
  };
  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img
            src={`data:image/jpeg;base64,${data.image}`}
            onClick={() => setIsPreviewImage(true)}
            style={{ cursor: "pointer" }}
          />
          {isPreviewImage === true && (
            <Lightbox
              image={`data:image/jpeg;base64,${data.image}`}
              title={`Question Image`}
              onClose={() => setIsPreviewImage(false)}
            ></Lightbox>
          )}
        </div>
      ) : (
        <div className="q-image"></div>
      )}
      <div className="question">
        Question {index + 1}: {data.questionDescription} ?
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((a, index) => {
            return (
              <div key={`answer-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={a.isSelected}
                    onChange={(e) =>
                      handleHandleCheckbox(e, a.id, data.questionId)
                    }
                  />
                  <label className="form-check-label">{a.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
