import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-200">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-center gap-8 mb-8 sm:mb-0 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6 px-4 text-center sm:mb-6 lg:text-left lg:mb-0">
              <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
                MSREP
              </h1>
              <h2 className="pb-2 text-3xl font-light text-gray-800 md:text-4xl">
                Repetitoriumsveranstaltungen Münster
              </h2>
              <p className="max-w-xl mx-auto mb-6 font-normal text-gray-900 lg:mx-0 xl:mb-2 md:text-lg xl:text-xl">
                Website der münsteraner Anästhesie- und Intensivmedizin Repetitorien.
              </p>
            </div>
            <div className="col-span-6">
              <Image 
                src="/images/beutel.jpg" 
                alt="Medical Equipment" 
                width={576} 
                height={576}
                className="w-full max-w-xl mx-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative my-16">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-8 lg:py-0">
            <div className="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
              <div className="overflow-hidden shadow-xl rounded-2xl">
                <Image 
                  src="/images/pages/monitor.jpg" 
                  alt="Medical Monitor" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Wer wir sind
              </h2>
              <div className="mt-6 text-gray-600 space-y-6">
                <p className="text-lg">
                  Hier könnten wir lang und breit beschreiben wer wir sind und was wir tun. 
                  Insbesondere, dass wir wirklich ganz ganz toll sind und sehr gut lange Texte schreiben können.
                </p>
                <p className="text-lg">
                  Also wirklich, ganz toll. Und unsere Redner erst, die sind noch besser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="relative my-16">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Was wir machen
              </h2>
              <div className="mt-6 text-gray-600 space-y-6">
                <p className="text-lg">
                  Hier könnten wir z.B. sehr lang und sehr breit erklären was wir eigentlich machen. 
                  Dass wir zum Beispiel ganz tolle Repetitorien veranstalten, mit noch tolleren Vorträgen. 
                  Vielleicht können wir das ganze auch als Website des WISKAIS selbst aufziehen.
                </p>
              </div>
            </div>
          </div>
          <div className="relative sm:py-8 lg:py-0">
            <div className="relative w-full h-auto px-4 py-6 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:py-20">
              <div className="overflow-hidden shadow-xl rounded-2xl">
                <Image 
                  src="/images/pages/spritzen.jpg" 
                  alt="Medical Syringes" 
                  width={600} 
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
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
              Bei uns treten ganz ganz tolle Referent:innen aus ganz Deutschland auf. 
              Wir haben sowieso die besten Referent:innen allerzeiten. Jemals.
            </p>
            <div className="mt-8">
              <Link 
                href="/registration"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Melden Sie sich an
              </Link>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center">
              <Image 
                src="/images/global/Universitätsklinikum_Münster_Logo.svg" 
                alt="Universitätsklinikum Münster" 
                width={120} 
                height={80}
                className="h-12 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image 
                src="/images/global/Universitätsklinikum_Aachen_Logo.svg" 
                alt="Universitätsklinikum Aachen" 
                width={120} 
                height={80}
                className="h-12 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image 
                src="/images/global/Logo_UKSH.svg" 
                alt="UKSH" 
                width={120} 
                height={80}
                className="h-12 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image 
                src="/images/global/Logo_Charite.svg" 
                alt="Charité" 
                width={120} 
                height={80}
                className="h-12 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image 
                src="/images/global/Klinikum_rechts_der_Isar_logo.svg" 
                alt="Klinikum rechts der Isar" 
                width={120} 
                height={80}
                className="h-12 object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image 
                src="/images/global/Logo_University_Hospital_Dresden_2024-06-01.svg" 
                alt="University Hospital Dresden" 
                width={120} 
                height={80}
                className="h-12 object-contain"
              />
            </div>
          </div>
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
              Unser ganz toller und ganz intelligenter Newsletter. Wir nerven auch nicht, versprochen.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email Adresse"
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
