import './globals.css';
import { QuoteProvider } from '../context/QuoteContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import FloatingButtons from '../components/FloatingButtons';

export const metadata = {
  title: {
    default: 'LEOAQUA WATER FILTER SYSTEM | Leading Water Treatment & Purification in Kozhikode, Kerala',
    template: '%s | LEOAQUA WATER FILTER SYSTEM'
  },
  description: 'LEOAQUA WATER FILTER SYSTEM provides advanced RO, UV, & UF water purifiers, water softeners, iron removal plants, and water quality testing in Kozhikode, Kerala. Call 6282 222 390.',
  keywords: 'LEOAQUA WATER FILTER SYSTEM, LeoAqua Water Purifier, Water Purifier Kozhikode, RO Water Purifier Calicut, Water Softeners Kerala, Water Quality Testing, Calicut Water Solutions',
  openGraph: {
    title: 'LEOAQUA WATER FILTER SYSTEM | Leading Water Treatment in Kerala',
    description: 'Discover premium domestic and industrial water treatment systems, filters, water softeners, and professional water analysis in Kerala.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QuoteProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <QuoteModal />
          <FloatingButtons />
        </QuoteProvider>
      </body>
    </html>
  );
}
