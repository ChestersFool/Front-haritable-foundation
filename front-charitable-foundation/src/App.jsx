import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DonationForm from './components/DonationForm';
import HelpRequestForm from './components/HelpRequestForm';
import Reports from './components/Reports';
import VolunteerForm from './components/VolunteerForm';
import EventList from './components/EventList';
import EventRegistrationForm from './components/EventRegistrationForm';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/help-request" element={<HelpRequestForm />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/register/:eventId" element={<EventRegistrationForm />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
