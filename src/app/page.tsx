import HeaderSection from '@/components/HeaderSection';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ConstraintsSection from '@/components/ConstraintsSection';
import StorySection from '@/components/StorySection';
import InboundSection from '@/components/InboundSection';
import ResultsSection from '@/components/ResultsSection';
import BootcampSection from '@/components/BootcampSection';
import ProgramSection from '@/components/ProgramSection';
import AISection from '@/components/AISection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ChoiceSection from '@/components/ChoiceSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderSection />
      <HeroSection />
      <ProblemSection />
      <ConstraintsSection />
      <StorySection />
      <InboundSection />
      <ResultsSection />
      <BootcampSection />
      <ProgramSection />
      <AISection />
      <ComparisonSection />
      <TestimonialsSection />
      <ChoiceSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}
