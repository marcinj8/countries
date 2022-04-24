import React from 'react';

import './asyncView.css';

const AsyncView = ({ loading, error, errorMessage }) => {
  return (
    <div className='asyncView-container'>
      {loading && <div className='spinner'>Loading...</div>}
      {error && <h4 className='acyncView-errorMessage'>{errorMessage}</h4>}
    </div>
  );
};

export default AsyncView;
