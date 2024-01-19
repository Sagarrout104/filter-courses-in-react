import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };
  return (
    <div className=" w-11/12 max-w-max flex flex-wrap space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-gray-950 hover:bg-opacity-60 border-2 transition-all duration-300 ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
