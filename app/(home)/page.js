import Aboutus from "@/components/Aboutus";
import Article from "@/components/Article";
import Blog from "@/components/blog/Blog";
import CaseStudyArticulations from "@/components/CaseStudyArticulations";
import Clients from "@/components/Clients";
import Cta from "@/components/Cta";
import DummyBranding from "@/components/DummyBranding";
import Footer from "@/components/Footer";
import GlobalTraction from "@/components/GlobalTraction";
import Hutchicons from "@/components/hutchicons/Hutchicons";
import Carousel from "@/components/ImageSlider";
import ImageSlider from "@/components/ImageSlider";
import Insights from "@/components/insights/Insights";
import Podcast from "@/components/podcast/Podcast";
import Portfolio from "@/components/Portfolio";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Workwithus from "@/components/Workwithus";

export default function Home() {
  return (
    <div className="w-full h-full">
      <ImageSlider />
      <DummyBranding />
      <Hutchicons />
      <Services />
      <Clients />
      <Portfolio />
      <GlobalTraction />
      <Review />
      <Cta />
      <Blog />
      <Article />
      <CaseStudyArticulations />
      <Podcast />
      <Insights />
      <Aboutus />
      <Workwithus />
      <Footer />
    </div>
  );
}
