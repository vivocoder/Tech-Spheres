import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import JoinModal from './components/JoinModal';
// import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal font-sans antialiased relative">
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      
      <div className="flex-1 w-full">
        <Home onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      </div>

      <Footer />

      {/* WhatsApp Floating Action Button */}
      {/* <WhatsAppFloatingButton /> */}

      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
