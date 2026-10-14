import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import JoinModal from './components/JoinModal';
import EventPopupModal from './components/EventPopupModal';
// import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);

  // Automatically show event popup on first load after short delay for smooth experience
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('techsphere_summit_popup_seen');
    // If not seen in current session, auto open after 800ms
    const timer = setTimeout(() => {
      setIsEventPopupOpen(true);
      sessionStorage.setItem('techsphere_summit_popup_seen', 'true');
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const [modalConfig, setModalConfig] = useState({
    title: 'Join the TechSphere Community',
    badge: 'Membership Application',
    eventName: '',
  });

  const handleOpenJoinModal = () => {
    setModalConfig({
      title: 'Join the TechSphere Community',
      badge: 'Membership Application',
      eventName: '',
    });
    setIsJoinModalOpen(true);
  };

  const handleExploreEvent = () => {
    setIsEventPopupOpen(false);
    setModalConfig({
      title: 'Register for TechSphere Udgir Event 2026',
      badge: 'Event Registration',
      eventName: 'TechSphere Udgir First Session (Oct 21, 2026)',
    });
    setIsJoinModalOpen(true);
  };

  const handleViewAllEvents = () => {
    setIsEventPopupOpen(false);
    handleExploreEvent();
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal font-sans antialiased relative">
      <Navbar
        onOpenJoinModal={handleOpenJoinModal}
        onOpenEventPopup={() => setIsEventPopupOpen(true)}
      />
      
      <div className="flex-1 w-full">
        <Home
          onOpenJoinModal={handleOpenJoinModal}
          onOpenEventPopup={() => setIsEventPopupOpen(true)}
        />
      </div>

      <Footer />

      {/* Floating Summit Pill Button for convenient re-triggering */}
      <button
        onClick={() => setIsEventPopupOpen(true)}
        type="button"
        title="View TechSphere Innovation Summit 2026"
        className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 hover:bg-white text-charcoal text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(23,33,43,0.12)] border border-[#E8DED2] hover:border-brown-500/40 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue"></span>
        </span>
        <span className="text-charcoal group-hover:text-blue transition-colors">Event 2026</span>
        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-beige-100 text-brown-600">
          Oct 21
        </span>
      </button>

      {/* WhatsApp Floating Action Button */}
      {/* <WhatsAppFloatingButton /> */}

      {/* Global Interactive Join Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        title={modalConfig.title}
        badge={modalConfig.badge}
        eventName={modalConfig.eventName}
      />

      {/* Upcoming Event Popup Modal */}
      <EventPopupModal
        isOpen={isEventPopupOpen}
        onClose={() => setIsEventPopupOpen(false)}
        onExploreEvent={handleExploreEvent}
        onViewAllEvents={handleViewAllEvents}
      />
    </div>
  );
}
