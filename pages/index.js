import { useState } from "react";
import Head from "next/head";
import ProcessSection from "components/ProcessSection/ProcessSection";
import HomeSection from "components/Home/HomeSection";
import Navbar from "components/Navbar/Navbar";
import ServicesSection from "components/Services/ServicesSection";
import AboutUsSection from "components/AboutUs/AboutUsSection";
import BenefitsSection from "components/AboutUs/BenefitsSection";
import SolutionsSection from "components/Solutions/SolutionsSection";
import BoxSection from "components/BoxSection/BoxSection";
import FinalSection from "components/HowCanHelpYou/FinalSection";
import FormSection from "components/FormSection/FormSection";
import Footer from "components/Footer";
import SubmitModal from "components/SubmitModal";

export default function HomePage() {
  const [status, setStatus] = useState(null);

  return (
    <>
      <Head>
        <title>Guarda y Custodia - Administración y guarda documental</title>
        <meta
          name='description'
          content='Ahorra espacio físico en tus oficinas y asegura el buen cuidado de tus archivos en nuestras instalaciones dedicadas y preparadas para la gestión de documentos.'
        />
        <link rel='canonical' href={process.env.NEXT_PUBLIC_HOSTNAME} />
        <meta
          property='og:title'
          content='Guarda y Custodia - Administración y guarda documental'
        />
        <meta
          property='og:description'
          content='Ahorra espacio físico en tus oficinas y asegura el cuidado de tus archivos en nuestras instalaciones preparadas para la gestión de documentos.'
        />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_HOSTNAME} />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/_next/image?url=%2Fassets%2Flogo.png&w=384&q=75`}
        />
        <meta property='twitter:card' content='photo' />
        <meta
          property='twitter:title'
          content='Guarda y Custodia - Administración y guarda documental'
        />
        <meta
          property='twitter:description'
          content='Ahorra espacio físico en tus oficinas y asegura el buen cuidado de tus archivos en nuestras instalaciones dedicadas y preparadas para la gestión de documentos.'
        />
        <meta
          property='twitter:url'
          content={process.env.NEXT_PUBLIC_HOSTNAME}
        />
        <meta
          property='twitter:image'
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/_next/image?url=%2Fassets%2Flogo.png&w=384&q=75`}
        />
      </Head>
      <Navbar />
      <main>
        <HomeSection />
        <ServicesSection />
        <ProcessSection />
        <AboutUsSection />
        <BenefitsSection />
        <SolutionsSection />
        <BoxSection />
        <FinalSection />
        <FormSection setStatus={setStatus} />
      </main>
      <Footer />
      {status && <SubmitModal status={status} setStatus={setStatus} />}
    </>
  );
}
