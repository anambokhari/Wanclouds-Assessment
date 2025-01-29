import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; 
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <Menu size={20} />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <Link to="/" className="link" onClick={toggleSidebar}>
            Form
          </Link>
          <Link to="/Content" className="link" onClick={toggleSidebar}>
            Display Data
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
