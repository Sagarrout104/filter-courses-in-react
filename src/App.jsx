import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data.js";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner.jsx";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [err, setErr] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(apiUrl);
      const output = await res.json(); // Save data
      setCourses(output.data);
    } catch (err) {
      setErr(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(category);

  return (
    <>
      {!err ? (
        <div className=" w-[100vw] h-[100vh] grid place-content-center">
          <img
            className=" w-[30rem]"
            src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?w=740&t=st=1705606575~exp=1705607175~hmac=c2b7276061aaecb16a16ee23f1368abe658a44fd56d2b274eecf5a27b71ea11e"
            alt="404_Error"
          />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col bg-gray-600">
          <div className=" sticky top-0 z-10">
            <Navbar></Navbar>
          </div>

          <div>
            <Filter
              filterData={filterData}
              category={category}
              setCategory={setCategory}
            ></Filter>
          </div>

          <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
            {loading ? (
              <Spinner />
            ) : (
              <Cards courses={courses} category={category} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
