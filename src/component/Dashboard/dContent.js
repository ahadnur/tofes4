import React from 'react'


export const DashContent = () => {
    return (
        <>
            <div className="dash__content__wrapper" >
                <div className="dash__content" style={{
                    backgroundImage: `url('images/oref_hp_bg.png')`,
                    objectFit: 'contain'
                }}>
                    <ul>
                        <li><a href="">Update personal detail</a></li>
                        <li><a href="">Opening a new portfolio</a></li>
                        <li><a href="">My bags</a></li>
                    </ul>
                    <div className="Dbutton__part">
                        <h3>My bags</h3>
                        <button>Open a new file</button>
                    </div>
                </div>

            </div>
            <div className="dash__filter">
                <h5>Clear filter(icon)</h5>
                <div className="dash_filter__option">
                    <p>Filter by</p>
                    <div className="filter__button">
                        <select className="filter__item">
                            <option>Type of structure</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <select className="filter__item">
                            <option>Type of duplication</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <input className="filter__item" type="date" placeholder="Form submission date" />
                        <input className="filter__item" type="date" placeholder="" />
                        <select className="filter__item">
                            <option>Status</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <input  type="button" className="filter__item" value="Filter" />
                    </div>
                </div>
            </div>
            
        </>
    )
}
