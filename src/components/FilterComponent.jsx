import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FilterComponent = ({ onFilter }) => {
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = () => {
    const filters = {
      fromCountry,
      toCountry,
      selectedDate,
    };

    onFilter(filters);
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="dropdown">
        <button
          className="btn btn-success dropdown-toggle"
          type="button"
          id="dropdown-from"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          From Country
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown-from">
          <li>
            <button className="dropdown-item" onClick={() => setFromCountry('Country 1')}>
              Country 1
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setFromCountry('Country 2')}>
              Country 2
            </button>
          </li>
          {/* Add more countries as needed */}
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-success dropdown-toggle"
          type="button"
          id="dropdown-to"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          To Country
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown-to">
          <li>
            <button className="dropdown-item" onClick={() => setToCountry('Country 1')}>
              Country 1
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setToCountry('Country 2')}>
              Country 2
            </button>
          </li>
          {/* Add more countries as needed */}
        </ul>
      </div>
      <div>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
