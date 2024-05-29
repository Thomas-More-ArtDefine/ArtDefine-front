import React, { useCallback, useState } from "react";
import { ReactComponent as FireIcon } from "../../assets/vectors/material-symbols_mode-heat.svg";
import { ReactComponent as RisingIcon } from "../../assets/vectors/material-symbols_arrow-up-rounded.svg";
import { ReactComponent as HotIcon } from "../../assets/vectors/material-symbols_stars-rounded.svg";
import { ReactComponent as TopIcon } from "../../assets/vectors/material-symbols_mountain-flag-rounded.svg";

interface CriteriaComponentProps {
  setClose: () => void;
}

const CriteriaComponent: React.FC<CriteriaComponentProps> = ({ setClose }) => {
  const [sortOption, setSortOption] = useState<string>("hot");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mediumFilter, setMediumFilter] = useState<string>("");
  const [orientationFilter, setOrientationFilter] = useState<string>("");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleMediumFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMediumFilter(event.target.value);
  };

  const handleOrientationFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOrientationFilter(event.target.value);
  };

  const applyFilters = useCallback(() => {
    console.log("Filters applied");
    closeWindow();
  }, [
    sortOption,
    searchQuery,
    mediumFilter,
    orientationFilter,
  ]);

  const closeWindow = useCallback(() => {
    setClose();
  }, [setClose]);

return (
    <div className="search-criteria-overlay form">
 
        <div className="header flex  justify-spacebetween align-center">
            <h4>Filter</h4>
            <button onClick={closeWindow}>X</button>
        </div>
        <div className="padding pd16">
            <div className="sort">
                <div className="font fs20 eaves heavy align-left padding pd-8">
                    Sort
                </div>
                <div className="divider"></div>
                <div className="flex justify-spacebetween">
                    <button
                        className="btn text-under-icon red "
                        onClick={() => setSortOption("new")}
                    >
                        <FireIcon  className={`opacity ${sortOption === "new" ? "p100 active" : "p75"}`} />
                        New
                    </button>
                    <button
                        className="btn text-under-icon red"
                        onClick={() => setSortOption("rising")}
                    >
                        <RisingIcon  className={`opacity ${sortOption === "rising" ? "p100 active" : "p75"}`} />
                        Rising
                    </button>
                    <button
                        className="btn text-under-icon red"
                        onClick={() => setSortOption("hot")}
                    >
                        <HotIcon className={`opacity ${sortOption === "hot" ? "p100 active" : "p75"}`} />
                        Hot
                    </button>
                    <button
                        className="btn text-under-icon red"
                        onClick={() => setSortOption("top")}
                    >
                        <TopIcon className={`opacity ${sortOption === "top" ? "p100 active" : "p75"}`} />
                        Top
                    </button>
                </div>
            </div>

            <div className="flex direction-column form-item tags">
                <label className="font fs20 eaves heavy align-left padding pd-8 " >
                    Tags
                </label>
                <div className="divider"></div>
                <textarea
                    value={searchQuery}
                    onChange={handleSearchChange}
                    rows={4}
                />
            </div>
            <div className="filter">
                <div >
                    <div className="font fs20 eaves heavy align-left padding pd-8 ">
                        Filter
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="flex direction-column form-item">
                    <label className=" font fs24 eaves book align-left padding pd-8">
                        Medium
                    </label>

                    <select value={mediumFilter} onChange={handleMediumFilterChange}>
                        <option value="">All</option>
                        <option value="canvas">Canvas</option>
                        <option value="paper">Paper</option>
                        <option value="digital">Digital</option>
                    </select>
                </div>
                <div className="flex direction-column form-item">
                    <label className="font fs24 eaves book align-left padding pd-8">
                        Orientation
                    </label>

                    <select
                        value={orientationFilter}
                        onChange={handleOrientationFilterChange}
                    >
                        <option value="">All</option>
                        <option value="portrait">Portrait</option>
                        <option value="landscape">Landscape</option>
                        <option value="square">Square</option>
                    </select>
                </div>
            </div>
        </div>

        <button className="btn" onClick={applyFilters}>Apply</button>
    
    </div>
);
};

export default CriteriaComponent;
