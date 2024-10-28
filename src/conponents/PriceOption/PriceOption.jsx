import PropTypes from 'prop-types';
import React from 'react';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='border-2 p-3 flex flex-col bg-blue-500 text-white rounded-xl text-center'>
            <h2>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
            }
            </div>
            <button className='mt-12 bg-green-400 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object.isRequired
}
export default PriceOption;