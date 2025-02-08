import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/donate">Зробити пожертву</Link>
      <Link to="/help-request">Потрібна допомога</Link>
      <Link to="/volunteer">Допомога фонду</Link>
      <Link to="/reports">Звітність</Link>
      <Link to="/events">Події</Link>
      <Link to="/news">Новини</Link>
    </nav>
  );
}

export default Navbar;