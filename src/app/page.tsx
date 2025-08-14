import PartnerLogos from "@/components/PartnerLogos";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import Button from "@/components/Button";

const partnerLogos = [
  {
    src: "/images/global/partner-logos/Universitätsklinikum_Münster_Logo.svg",
    alt: "Universitätsklinikum Münster"
  },
  {
    src: "/images/global/partner-logos/Alexianer_Clemenshospital_Logo.svg",
    alt: "Clemenshospital Münster"
  },
  {
    src: "/images/global/partner-logos/Alexianer_Raphaelsklinik_Logo.svg",
    alt: "Raphaelsklinik Münster"
  },
  {
    src: "/images/global/partner-logos/Franziskus_Muenster.png",
    alt: "St. Franziskus-Hospital Münster"
  },
  {
    src: "/images/global/partner-logos/Herz_Jesu_Hiltrup.png",
    alt: "Herz-Jesu-Krankenhaus Hiltrup"
  },
  {
    src: "/images/global/partner-logos/Hornheide.png",
    alt: "Fachklinik Hornheide"
  },
  {
    src: "/images/global/partner-logos/Klinikum_Osnabrueck_Green_Hospital_Logo.svg",
    alt: "Klinikum Osnabrück"
  },
  {
    src: "/images/global/partner-logos/logo-ukm-marienhospital-web.png",
    alt: "Marienhospital Steinfurt"
  }
];

const contentSections = [
  {
    title: "Wer wir sind",
    content: [
      "Ut sint proident et reprehenderit amet nisi. Reprehenderit minim incididunt nisi eu.",
      "Est amet sunt anim quis commodo nostrud occaecat fugiat mollit deserunt est aliqua minim aute sunt. Amet fugiat nisi eiusmod do cupidatat proident officia tempor et cillum exercitation. Ex elit sint in ex et ad amet veniam.",
    ],
    imageSrc: "/images/pages/monitor.jpg",
    imageAlt: "Medical Monitor",
    imageOnLeft: true
  },
  {
    title: "Was wir machen",
    content: "Do eiusmod amet occaecat in Lorem cupidatat irure voluptate ad occaecat magna aliquip et. Officia cillum reprehenderit velit aliquip esse. Tempor ipsum amet laborum proident incididunt adipisicing pariatur dolor aute eiusmod. Est ea eu enim ex irure reprehenderit veniam reprehenderit et.",
    imageSrc: "/images/pages/spritzen.jpg",
    imageAlt: "Medical Syringes",
    imageOnLeft: false
  }
];

export default function Home() {
  return (
    <div>
      <HeroSection
        title="WISKAIS"
        subtitle="Wissenschaftlicher Arbeitskreis"
        description="Anästhesie, Intensiv- und Schmerzmedizin Münster"
        backgroundClass="bg-gray-200"
      />

      {/* Content Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-
6 lg:px-8">
          {contentSections.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              content={section.content}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              imageOnLeft={section.imageOnLeft}
            />
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Referent:innen aus ganz Deutschland
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Wir arbeiten mit renommierten Expertinnen und Experten aus Kliniken der Region zusammen.
            </p>
            <div className="mt-8">
              <Button
                href="/registration"
                variant="primary"
                size="lg"
              >
                Melden Sie sich an
              </Button>
            </div>
          </div>

          <PartnerLogos 
            logos={partnerLogos} 
            title=""
            className="mt-12"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Melden Sie sich für unseren Newsletter an
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Erhalten Sie regelmäßige Updates und Neuigkeiten zu unseren Veranstaltungen.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email Adresse"
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 focues:outline-none"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  Anmelden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
