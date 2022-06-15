import React from 'react';
import './home.css';

const HomePage = () => {
  const HomeDate = {
    title: 'Welcome To Our Page',
    text1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita!!',
    text2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita!!',
  };

  const { title, text1, text2 } = HomeDate;

  return (
    <section className="home-wrapper">
      <h2>{title}</h2>
      <div className="body-wrapper">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </section>
  );
};
export default HomePage;
