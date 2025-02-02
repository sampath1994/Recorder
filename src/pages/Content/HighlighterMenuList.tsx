import React from 'react';
import './HighlighterMenuList.css';

interface MenuItem {
  icon: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { icon: '📝', text: 'Capture visible text' },
  { icon: '📄', text: 'Capture HTML' },
];

const HighlighterMenuList: React.FC = () => {
  return (
    <div className="menu-container">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-text">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlighterMenuList;
