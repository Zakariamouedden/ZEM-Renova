
import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Breadcrumb } from "./Breadcrumb";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbItems?: BreadcrumbItem[];
}

export const PageLayout = ({ children, breadcrumbItems }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
