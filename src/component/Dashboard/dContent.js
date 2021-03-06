import {React, useState} from 'react' 
import {Link} from 'react-router-dom'
import { DCollapes } from './DCollapes'
import Footer from '../home/Footer'
import DashNav from '../common/DashNav'
import CategoryTab from '../common/CategoryTab'
import {AiOutlineClear} from 'react-icons/ai'


export const DashContent = () => {
    const [display, setDisplay] = useState(false)
    const handleMainMenu = () => {
        setDisplay(!display);
      };
    
      
    return (
        <div>
        <DashNav />
            <div className="dash__content__wrapper" >
                <div className="dash__content" style={{
                    backgroundImage: `url('images/oref_hp_bg.png')`,
                    objectFit: 'contain'
                }}>
                    <ul>
                        <li><Link to="">Update personal detail</Link></li>
                        <li><Link to="/caseform">Opening a new portfolio</Link></li>
                        <li><Link to="">My bags</Link></li>
                    </ul>
                    <div className="Dbutton__part">
                        <h3>My bags</h3>
                        <Link to="/caseform"><button>Open a new file</button></Link>
                    </div>
                </div>

            </div>
            <div className="dash__filter">
                <h5 style={{paddingLeft: '20px'}}><AiOutlineClear></AiOutlineClear> Clear filter</h5>
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
                        <input type="button" className="filter__item" value="Filter" />
                        <input onMouseEnter={handleMainMenu} type="button" className="filter__item" value="????????????????" />
                    </div>
                </div>
            </div>
            <CategoryTab display={display} />
            <DCollapes />
        <Footer />
        </div>
    )
}
