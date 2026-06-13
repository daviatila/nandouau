import HeroCarousel from "../components/HeroCarousel";
import FeaturedSong from "../components/FeaturedSong";
import GalleryPreview from "../components/GalleryPreview";
import TeaserSection from "../components/TeaserSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <FeaturedSong />

      <TeaserSection />

      <GalleryPreview />

      <Footer />
    </main>
  );
}