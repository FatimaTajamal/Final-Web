// HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link
import { fetchHomePageData } from '../homeSlice';
import { fetchDetailsPageData } from '../detailsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.home.data);

  useEffect(() => {
    dispatch(fetchHomePageData());
  }, [dispatch]);

  const handleClick = (emoji) => {
    // Dispatch the action with the selected emoji
    dispatch(fetchDetailsPageData(emoji));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {Array.isArray(homeData) &&
          homeData.map((item) => (
            // Use Link to navigate to the details page
            <li key={item.id}>
              <Link to={`/details/${item.id}`} onClick={() => handleClick(item.emoji)}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
