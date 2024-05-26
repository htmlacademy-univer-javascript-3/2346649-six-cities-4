import './filter-list.css';
import {filters} from '../consts/cities.tsx';
import {useState} from 'react';


type FiltersProps = {
  handleSort: (choice: string) => void;
}

export default function Filters({handleSort}: FiltersProps): JSX.Element {
  const [filter, setFilter] = useState(filters.POPULAR);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilter = (filterChoice: string) => {
    setFilter(filterChoice);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleDropdown}>
        {filter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      {isDropdownOpen && (
        <ul className="placesoptions placesoptions--custom places__options--opened">
          <li className={filter === filters.POPULAR ? 'placesoption placesoption--active' : 'placesoption'} tabIndex={0} onClick={() => {
            handleFilter(filters.POPULAR);
            handleSort(filters.POPULAR);
          }}
          >{filters.POPULAR}
          </li>
          <li className={filter === filters.LOW_TO_HIGH ? 'placesoption placesoption--active' : 'placesoption'} tabIndex={0} onClick={() => {
            handleFilter(filters.LOW_TO_HIGH);
            handleSort(filters.LOW_TO_HIGH);
          }}
          >{filters.LOW_TO_HIGH}
          </li>
          <li className={filter === filters.HIGH_TO_LOW ? 'placesoption placesoption--active' : 'placesoption'} tabIndex={0} onClick={() => {
            handleFilter(filters.HIGH_TO_LOW);
            handleSort(filters.HIGH_TO_LOW);
          }}
          >{filters.HIGH_TO_LOW}
          </li>
          <li className={filter === filters.TOP_RATED ? 'placesoption placesoption--active' : 'placesoption'} tabIndex={0} onClick={() => {
            handleFilter(filters.TOP_RATED);
            handleSort(filters.TOP_RATED);
          }}
          >{filters.TOP_RATED}
          </li>
        </ul>
      )}
    </form>
  );
}
