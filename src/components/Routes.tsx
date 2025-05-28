// routes.tsx
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { AboutUs } from "./sections/AboutUs";
import { CTA } from "./sections/CallToAction";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ViewProjectPage from "./pages/ViewProjectPage";
import AdminPage from "./pages/AdminPage"; // Ganti dengan file admin panel kamu
import { Footer } from "./elements/Footer";
import NotFoundPage from "./pages/PageNotFound";

export const AppRoutes = () => (
    
  <Routes>  
    <Route
      path="/"
      element={
        <Layout title="D-Project Portfolio">
          <Hero />
          <Services />
          <AboutUs />
          <CTA />
          <Footer />
        </Layout>
      }
    />
    <Route
      path="/projects"
      element={
        <Layout title="Projects">
          <ProjectsPage />
        </Layout>
      }
    />
    <Route
      path="/contact"
      element={
        <Layout title="Contact">
          <ContactPage />
        </Layout>
      }
    />
    <Route
      path="/view-project"
      element={
        <Layout title="View Project">
          <ViewProjectPage />
        </Layout>
      }
    />
    <Route
      path="/admin-91d3f7x"
      element={
        <Layout title="Admin Login">
          <AdminPage />
        </Layout>
      }
    />
    <Route
        path="*"
        element={
            <Layout title="Page Not Found">
            <NotFoundPage />
            </Layout>
        }
    />
  </Routes>
);
