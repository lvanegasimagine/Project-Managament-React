import { useState } from "react";

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

const ProjectFilter = () => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleFilter = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter By:</p>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilter(filter)}
            className={currentFilter === filter ? "active" : ""}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
