import React from 'react';

const DisplayProduct = ({ product }) => {

    const { title, description, image, category } = product

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt={category} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p> {description} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayProduct;