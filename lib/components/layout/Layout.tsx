import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="px-4 py-6 border-b border-gray-200 bg-white shadow-sm">
        <a href="/" className="block w-30">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tighter">
            KATARO
          </h1>
        </a>
      </header>

      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default Layout;
