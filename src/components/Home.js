import React from 'react';
import '../styles/Home.scss';
const Home = () => (
    <div
        className="home"
    >
        <div
            className="home_vheader"
        >
            <div className="home_vheader_overlay">
                <div className="home_vheader_overlay_content">
                    <h4>Welcome to Roy's Markdown.</h4>
                    <p>You can make your own Markdown + Html5 Document.</p>
                </div>   
            </div>
            <div className="home_vheader_vcontent">
                <video src="https://s3.ap-northeast-2.amazonaws.com/markdownpdf/final.mov" 
                autoPlay={true} loop={true} 
                width='100vw' height="auto"
                />
            </div>
        </div>
        <div
            className="home_section"
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo nobis provident quam cum dolores, officia repellendus quae, est iusto minus amet, libero nulla perferendis nihil. Optio veniam atque molestias expedita fuga sequi ea obcaecati! Pariatur saepe aliquam animi officiis consequatur iste placeat veritatis debitis ab, enim nihil id distinctio?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo nobis provident quam cum dolores, officia repellendus quae, est iusto minus amet, libero nulla perferendis nihil. Optio veniam atque molestias expedita fuga sequi ea obcaecati! Pariatur saepe aliquam animi officiis consequatur iste placeat veritatis debitis ab, enim nihil id distinctio?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo nobis provident quam cum dolores, officia repellendus quae, est iusto minus amet, libero nulla perferendis nihil. Optio veniam atque molestias expedita fuga sequi ea obcaecati! Pariatur saepe aliquam animi officiis consequatur iste placeat veritatis debitis ab, enim nihil id distinctio?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo nobis provident quam cum dolores, officia repellendus quae, est iusto minus amet, libero nulla perferendis nihil. Optio veniam atque molestias expedita fuga sequi ea obcaecati! Pariatur saepe aliquam animi officiis consequatur iste placeat veritatis debitis ab, enim nihil id distinctio?</p>
            
        </div>
    </div>
);
export default Home;