import React from 'react';

const DataList = ({data = []}) => {
    return (
        <div className='dataList'>
            {data.map((item, i) => (
                <div className='dataItem'>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    <img alt=''src={require('../../assets/images/lap1.png')}/>
                </div>
            ))}
        </div>
    );
};

export default DataList;