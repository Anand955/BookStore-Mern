import React from "react";

const Cards = ( {item} ) => {
  return (
    <>
      <div className="my-5 p-3">
        <div className="card bg-base-100 w-92 shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="card_title">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline py-4 px-4">${item.price}</div>
              <div className="badge badge-outline cursor-pointer py-4 px-4 hover:bg-pink-500 duration-300 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
