import React, { useState } from 'react';
import DataTable from './components/DataTable';
import { columns, data as initialData } from './data';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      const filtered = initialData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.age.toString().includes(query) ||
        item.email.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(initialData);
    }
  };

  return (
    <div className="App">
      <h1>DATA DISPLAY</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
};

export default App;
