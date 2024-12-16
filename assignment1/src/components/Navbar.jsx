import React, { useState } from 'react';
import './Navbar.css';
import iconArrowDown from '../images/iconArrowDown.svg';
import iconArrowUp from '../images/iconArrowUp.svg';
import iconTodo from '../images/iconTodo.svg';
import iconCalender from '../images/iconCalendar.svg';
import iconReminders from '../images/iconReminders.svg';
import iconPlanning from '../images/iconPlanning.svg';

const Navbar = () => {
    const [selectedFeature, setSelectedFeature] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [isFeatureDropdownOpen, setFeatureDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setCompanyDropdownOpen] = useState(false);

    const handleFeatureChange = (value) => {
        setSelectedFeature(value);
        setFeatureDropdownOpen(false)
    };
    const handleCompanyChange =(value)=>{
      setSelectedCompany(value);
      setCompanyDropdownOpen(false);
    };

    const toggleFeatureDropdown = () => {
      setFeatureDropdownOpen(!isFeatureDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
      setCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

    return (
        <nav className='navbar'>
            <div className='navbarList'>
                <div className='logo'>
                    <h1>snap</h1>
                </div>
                <ul>
                    <li>
                        <div className="custom-dropdown">
                            <button className="dropdown-button" onClick={toggleFeatureDropdown}>{selectedFeature || "Features"}
                              <img src={isFeatureDropdownOpen ? iconArrowUp : iconArrowDown} style={{marginLeft: '3px'}}/>
                            </button>
                            {isFeatureDropdownOpen && (
                            <div className="dropdown-options">
                                <div className="dropdown-option" onClick={() => handleFeatureChange("Todo List")}>
                                    <img src={iconTodo} alt="Todo Icon" style={{ width: '10px', marginRight: '8px' }} />
                                    Todo List
                                </div>
                                <div className="dropdown-option" onClick={() => handleFeatureChange("Calendar")}>
                                <img src={iconCalender} alt="Todo Icon" style={{ width: '10px', marginRight: '8px' }} />
                                    Calendar
                                </div>
                                <div className="dropdown-option" onClick={() => handleFeatureChange("Reminders")}>
                                <img src={iconReminders} alt="Todo Icon" style={{ width: '10px', marginRight: '8px' }} />
                                    Reminders
                                </div>
                                <div className="dropdown-option" onClick={() => handleFeatureChange("Planning")}>
                                <img src={iconPlanning} alt="Todo Icon" style={{ width: '10px', marginRight: '8px' }} />
                                    Planning
                                </div>
                            </div>
  )}
                        </div>
                    </li>
                    <li>
                        
                            <div className="custom-dropdown">
                            <button className="dropdown-button" onClick={toggleCompanyDropdown}>{selectedCompany || "Company"}
                            <img src={isCompanyDropdownOpen ? iconArrowUp : iconArrowDown} style={{marginLeft: '3px'}}/>
                            </button>
                            { isCompanyDropdownOpen && (
                            <div className="dropdown-options">
                                <div className="dropdown-option" onClick={() => handleCompanyChange("History")}>
                                    History
                                </div>
                                <div className="dropdown-option" onClick={() => handleCompanyChange("Our Team")}>
                                    Our Team
                                </div>
                                <div className="dropdown-option" onClick={() => handleCompanyChange("Blog")}>
                                    Blog
                                </div>
                               
                            </div>
                            )}
                        </div>
                    </li>
                    <li style={{paddingTop:'3px', marginRight: '20px'}}>Career</li>
                    <li style={{paddingTop:'3px'}}>About</li>
                    
                </ul>
            </div>

            <div className='navButton'>
                <div className='loginBtn'>
                    <button>Login</button>
                </div>
                <div className='regBtn'>
                    <button>Register</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
