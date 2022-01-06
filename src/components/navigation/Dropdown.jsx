import "../../pages/Dashboard/Pages/News/steyle.css";
import { useEffect, useState } from "react";

function Dropdown({
  selected = -1,
  setSelected,
  data = [],
  placeholder = "Choose one",
  name = "",
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log({ data });
  }, []);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected === -1
          ? placeholder
          : data.find((option) => option.id == selected).name}
        <i class="bx bxs-down-arrow"></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div
            onClick={() => {
              setSelected({ value: -1, name });
              setIsActive(false);
            }}
            className="dropdown-item"
          >
            None
          </div>
          {data.map((option, i) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
              key={option?.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
