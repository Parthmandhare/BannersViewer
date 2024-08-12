import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayBanner = () => {
  const [banners, setBanners] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/").then(async function (res) {
      const data = await res.json();
      console.log(data);
      setBanners(data);
    });
  }, []);

  return (
    <>
      {banners.map((banner) => {
        return (
          <div key={banner.ID}>
            <div
              className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill m-10"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
              }}
            >
              <div className="md:w-1/2">
                <p className="font-bold text-sm uppercase">{banner.Title}</p>
                <p className="text-3xl font-bold">{banner.Timer}</p>
                <p className="text-2xl mb-10 leading-none">
                  {banner.Description}
                </p>
                <a
                  href={banner.Link}
                  className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayBanner;
