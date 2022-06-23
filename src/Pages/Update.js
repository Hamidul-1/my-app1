import React from 'react';

const Update = () => {
    return (
        <div className='text-center my-28'>
            <h3 className='text-primary text-xl font-bold'>Update</h3>
            <h1 className='text-4xl'>Our Update</h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Update;