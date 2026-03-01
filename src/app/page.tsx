import ProgressBar from '@/components/ProgressBar';
import ClickTimer from '@/components/ClickTimer';
import TicTacToe from '@/components/TicTacToe';
import DarkModeToggle from '@/components/DarkModeToggle';
import Navbar from '@/components/Navbar';
import TextAnalyzer from '@/components/TextAnalyzer';
import QuoteCarousel from '@/components/QuoteCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black pb-20">
      <h1 className="text-4xl font-bold text-center py-10">Hackaton S2</h1>
      
      {/* Reto 1 */}
      <section id="reto-1">
        <ProgressBar />
      </section>
      
      <hr className="my-10 border-t-2 border-gray-200 mx-10" />

      {/* Reto 2 */}
      <section id="reto-2">
        <ClickTimer />
      </section>

      <hr className="my-10 border-t-2 border-gray-200 mx-10" />

      {/* Reto 3 */}
      <section id="reto-3">
        <h2 className="text-2xl font-bold text-center">Reto 3</h2>
        <TicTacToe />
      </section>

      <hr className="my-10 border-t-2 border-gray-200 mx-10" />

      {/* Reto 4 */}
      <section id="reto-4">
        <DarkModeToggle />
      </section>

      <hr className="my-10 border-t-2 border-gray-200 mx-10" />

      {/* Reto 5 */}
      <section id="reto-5">
        <h2 className="text-2xl font-bold text-center mb-4">Reto 5</h2>
        <Navbar />
      </section>

      <hr className="my-10 border-t-2 border-gray-200 mx-10" />

      {/* Reto 6 */}
      <section id="reto-6">
        <h2 className="text-2xl font-bold text-center mb-4">Reto 6</h2>
        <TextAnalyzer />
      </section>

      <hr className="my-10 border-t-2 border-gray-200 mx-10" />

      {/* Reto 7 */}
      <section id="reto-7">
        <h2 className="text-2xl font-bold text-center mb-4">Reto 7</h2>
        <QuoteCarousel />
      </section>
    </main>
  );
}