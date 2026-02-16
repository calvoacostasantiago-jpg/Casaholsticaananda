import { useState } from 'react';
import HomePage from '@/app/components/HomePage';
import ModuleDetail from '@/app/components/ModuleDetail';
import EscuelaEspiritualContent from '@/app/components/EscuelaEspiritualContent';

export default function App() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const handleModuleClick = (moduleId: string) => {
    setSelectedModule(moduleId);
  };

  const handleCloseModule = () => {
    setSelectedModule(null);
  };

  return (
    <>
      {/* Home Page - siempre visible como base */}
      <HomePage onModuleClick={handleModuleClick} />

      {/* Module Details - se muestra como modal/overlay */}
      {selectedModule && (
        <ModuleDetail moduleId={selectedModule} onClose={handleCloseModule}>
          {selectedModule === 'escuela-espiritual' && (
            <EscuelaEspiritualContent />
          )}
        </ModuleDetail>
      )}
    </>
  );
}
