import HeroCarousel from "../components/HeroCarousel";
import FeaturedSong from "../components/FeaturedSong";
import GalleryPreview from "../components/GalleryPreview";
import TeaserSection from "../components/TeaserSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <TeaserSection />

      <FeaturedSong />

      <GalleryPreview />
    </main>
  );
}