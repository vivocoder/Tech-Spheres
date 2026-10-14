import React, { useState } from "react";
import Hero from "../sections/Hero";
import StatsTicker from "../sections/StatsTicker";
import WhyCommunity from "../sections/WhyCommunity";
import Founders from "../sections/Founders";
import LatestUpdates from "../sections/LatestUpdates";
// import UpcomingEvent from "../sections/UpcomingEvent";
import CommunityMembers from "../sections/CommunityMembers";
import NearbyCommunities from "../sections/NearbyCommunities";
import ConnectedGallery from "../sections/ConnectedGallery";
import Suggestions from "../sections/Suggestions";
import JoinCommunity from "../sections/JoinCommunity";
import FinalCTA from "../sections/FinalCTA";
import JoinModal from "../components/JoinModal";

export default function Home({ onOpenJoinModal, onOpenEventPopup }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenJoin = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal();
    } else {
      setModalOpen(true);
    }
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full py-2 sm:py-4">
      {/* Hero Section */}
      <Hero
        onJoinClick={handleOpenJoin}
        onEventsClick={onOpenEventPopup || (() => handleScrollToSection("events"))}
      />

      {/* Sliding Marquee Stats Ticker */}
      <StatsTicker />

      {/* Why TechSphere Section */}
      <WhyCommunity />

      {/* Meet the Founders Section */}
      <Founders />

      {/* Latest Updates Section */}
      <LatestUpdates onViewAll={onOpenEventPopup || (() => handleScrollToSection("events"))} />

      {/* Our Next Event Section */}
      {/* <UpcomingEvent onViewAllEvents={onOpenEventPopup || (() => handleScrollToSection("events"))} /> */}

      {/* Community Members Section */}
      <CommunityMembers onOpenJoinModal={handleOpenJoin} />

      {/* Nearby Communities Section */}
      <NearbyCommunities />

      {/* Stay Connected & Community Moments Gallery */}
      <ConnectedGallery onViewGallery={() => handleScrollToSection("gallery")} />

      {/* Share Your Suggestions Section */}
      <Suggestions />

      {/* Join Udgir Community Section */}
      <JoinCommunity onOpenDetailed={handleOpenJoin} />

      {/* Final Call to Action Banner */}
      <FinalCTA onJoinClick={handleOpenJoin} />

      {/* Global Interactive Join Modal */}
      <JoinModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

