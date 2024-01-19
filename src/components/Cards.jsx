import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      let allCourse = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourse.push(course);
        });
      });
      return allCourse;
    } else {
      return courses[category];
    }
  };

  return (
    <div>
      {courses.length === 0 ? (
        <div className=" grid place-content-center">
          <h1 className=" text-3xl font-semibold  ">Data Not Found</h1>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {getCourses().map((course) => {
            return (
              <Card
                key={course.id}
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cards;
