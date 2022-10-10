import { memo, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import html2canvas from "html2canvas";

import case_lower from "../../assets/images/case_lower.png";
import case_upper from "../../assets/images/case_upper.png";

const DesignContent = ({ handleSetImage }) => {
  const [file, setFile] = useState(null);

  const inputEl = useRef();
  const thumbnail = useRef();

  useEffect(() => {
    html2canvas(thumbnail.current, {}).then((canvas) => {
      canvas.toBlob((blob) => handleSetImage(file, blob), "image/png");
    });
  }, [file, handleSetImage]);

  const handleStop = () => {
    html2canvas(thumbnail.current, {}).then((canvas) => {
      canvas.toBlob((blob) => handleSetImage(file, blob), "image/png");
    });
  };

  return (
    <div className=" col-9 px-5">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h3>Design Board</h3>
      </div>
      <button
        className="btn btn-outline-secondary"
        onClick={() => inputEl.current.click()}
      >
        UPLOAD IMAGE
      </button>
      <input
        type="file"
        className="d-none"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "600px", width: "600px" }}
          ref={thumbnail}
        >
          <div className="d-flex justify-content-center align-items-center position-relative">
            <img
              style={{ height: "500px" }}
              src={case_lower}
              alt="case_lower"
              draggable={false}
            />
            <img
              className="position-absolute h-100 w-100 "
              style={{ zIndex: 30, pointerEvents: "none" }}
              src={case_upper}
              alt="case_upper"
              draggable={false}
            />

            {file && (
              <div
                className="position-absolute h-100 w-100 "
                style={{
                  overflow: "hidden",
                }}
              >
                <Rnd
                  default={{ x: 0, y: 0, height: 200 }}
                  lockAspectRatio={true}
                  style={{ zIndex: 20 }}
                  onDragStop={handleStop}
                  onResizeStop={handleStop}
                >
                  <img
                    style={{ height: "100%", objectFit: "cover" }}
                    src={file ? URL.createObjectURL(file) : null}
                    alt="uploadImage"
                    draggable={false}
                    crossOrigin="Anonymous"
                  />
                </Rnd>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DesignContent);
