
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailsPageData } from '../detailsSlice';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.details.data);

  useEffect(() => {
  
  }, []);

  return (
    <div>
      <h1>Details Page</h1>
      {detailsData ? (
        <div>
          <h2>{detailsData.name}</h2>
          <p>Category: {detailsData.category}</p>
          <p>Group: {detailsData.group}</p>
          <p>HTML Code: {detailsData.htmlCode.join(', ')}</p>
          <p>Unicode: {detailsData.unicode.join(', ')}</p>
        </div>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
};

export default DetailsPage;
