import { useState, createContext } from "react";

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleCloses = () => {
    setOpen(false);
  };

  return (
    <SideBarContext.Provider 
    value={{ 
        open, 
        setOpen, 
        handleCloses 
        }}>
        {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider