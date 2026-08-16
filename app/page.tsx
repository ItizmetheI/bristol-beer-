import Hero from "@/components/Hero";
import Lineup from "@/components/Lineup";
import ShowcaseBento from "@/components/ShowcaseBento";
import Specialties from "@/components/Specialties";
import RtdSpotlight from "@/components/RtdSpotlight";
import CommunityBento from "@/components/CommunityBento";
import VisitCard from "@/components/VisitCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Lineup />
      <ShowcaseBento />
      <Specialties />
      <RtdSpotlight />
      <CommunityBento />
      <VisitCard />
    </>
  );
}
