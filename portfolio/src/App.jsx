import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EntryScreen from './components/EntryScreen';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  return (
    <main className="bg-deep-black min-h-screen font-sans text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {!isInitialized ? (
          <motion.div
            key="entry"
            exit={{ 
              opacity: 0, 
              scale: 1.2, 
              filter: "blur(20px)" 
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <EntryScreen onEnter={() => setIsInitialized(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-screen w-full"
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}