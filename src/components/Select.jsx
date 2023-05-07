import React from "react";
import ChevronDownIcon from "./icons/ChevronDownIcon";

export const Select = React.forwardRef(({ data, label, onSelect }, ref) => {
  const [options, setOptions] = React.useState(data);
  const [selected, setSelected] = React.useState([]);
  const [isFocused, setIsFocused] = React.useState(false);

  const selectRef = React.useRef(null);

  function handleSelect(id) {
    const selectedItem = options.find((o) => o.id == id);
    selected.push(selectedItem);
    setSelected(selected);

    const filteredOptions = options.filter((o) => o.id !== id);
    setOptions(filteredOptions);
    const assigneesIds = selected.map((s) => s.id);
    onSelect(assigneesIds);
  }

  function handleUnselect(id) {
    const unselectedItem = selected.find((s) => s.id == id);
    options.push(unselectedItem);
    setOptions(options);
    const filteredSelect = selected.filter((s) => s.id !== id);
    setSelected(filteredSelect);
  }

  React.useEffect(() => {
    function handleOuterClick(e) {
      if (!e.target.closest(".select-wrapper")) {
        setIsFocused(false);
      }
    }
    ref.current.addEventListener("click", handleOuterClick);

    return () => {
      ref.current?.removeEventListener("click", handleOuterClick);
    };
  }, []);

  return (
    <div>
      {label && <label>{label}</label>}
      <div className='select-wrapper'>
        <div
          ref={selectRef}
          tabIndex={0}
          className={`${
            isFocused ? "outline" : ""
          } flex flex-wrap items-center gap-3 w-full relative bg-white min-h-[36px] p-2 rounded-md focus-visible:outline-1 outline-blue-700`}
          onClick={() => setIsFocused(true)}
          onFocus={() => setIsFocused(true)}
        >
          {selected?.map((s) => (
            <div
              key={s.id}
              className='relative flex items-center text-sm bg-slate-200 rounded-sm px-1 whitespace-nowrap font-slim'
            >
              {s.fullName}
              <button
                onClick={() => handleUnselect(s.id)}
                className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[9px] leading-none text-red-400 bg-red-100/40 backdrop-blur-md p-[3px] px-[4px] rounded-full'
              >
                &#10005;
              </button>
            </div>
          ))}
          <ChevronDownIcon
            className={"absolute right-0.5 top-1/2 -translate-y-1/2"}
          />
        </div>
        {isFocused && (
          <ul className='bg-white mt-2 rounded-md py-1 drop-shadow-lg'>
            {options.length ? (
              options.map((option) => (
                <li
                  key={option.id}
                  className='hover:bg-slate-100 px-2 py-1 cursor-pointer'
                  onClick={(e) => handleSelect(option.id)}
                >
                  {option.fullName}
                </li>
              ))
            ) : (
              <div className='text-center text-slate-400 font-light italic'>
                No options
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
});

export default Select;
