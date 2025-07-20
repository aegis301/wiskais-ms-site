'use client';

import { useState } from 'react';

export default function Registration() {
  const [formData, setFormData] = useState({
    anrede: '',
    title: '',
    firstname: '',
    lastname: '',
    street: '',
    zip: '',
    city: '',
    clinic: '',
    email: '',
    profession: '',
    participation: '',
    efnNumber: '',
    heardAbout: '',
    workshops: [],
    newsletter: false,
    dataProtection: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Anmeldung erfolgreich!</h2>
          <p className="text-gray-600 mb-6">
            Vielen Dank für Ihre Anmeldung. Sie erhalten in Kürze eine Bestätigungs-E-Mail mit weiteren Informationen.
          </p>
          <button
            onClick={() => {
              setSubmitStatus('idle');
              setFormData({
                anrede: '',
                title: '',
                firstname: '',
                lastname: '',
                street: '',
                zip: '',
                city: '',
                clinic: '',
                email: '',
                profession: '',
                participation: '',
                efnNumber: '',
                heardAbout: '',
                workshops: [],
                newsletter: false,
                dataProtection: false,
              });
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Neue Anmeldung
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Anmeldung
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Hier können Sie sich für unsere Repetitorien anmelden.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Persönliche Angaben</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="anrede" className="block text-sm font-medium text-gray-700 mb-1">
                    Anrede *
                  </label>
                  <select
                    id="anrede"
                    name="anrede"
                    required
                    value={formData.anrede}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Frau">Frau</option>
                    <option value="Herr">Herr</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Titel
                  </label>
                  <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Kein Titel</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                    <option value="PD Dr.">PD Dr.</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Max"
                  />
                </div>

                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mustermann"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Adresse</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                    Straße *
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    required
                    value={formData.street}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Musterstraße 1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                      PLZ *
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="12345"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      Ort *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Musterstadt"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="clinic" className="block text-sm font-medium text-gray-700 mb-1">
                    Klinikadresse
                  </label>
                  <input
                    type="text"
                    id="clinic"
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Musterstr. 1, 12345 Stadt"
                  />
                </div>
              </div>
            </div>

            {/* Contact and Professional Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Kontakt & Beruf</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihr Beruf *
                  </label>
                  <select
                    id="profession"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="WA">Arzt/Ärztin in Weiterbildung</option>
                    <option value="FA">Facharzt/Fachärztin</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="efnNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    EFN-Nummer
                  </label>
                  <input
                    type="text"
                    id="efnNumber"
                    name="efnNumber"
                    value={formData.efnNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="1234567890"
                  />
                </div>
              </div>
            </div>

            {/* Event Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Veranstaltung</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="participation" className="block text-sm font-medium text-gray-700 mb-1">
                    Teilnahme an der Veranstaltung in *
                  </label>
                  <select
                    id="participation"
                    name="participation"
                    required
                    value={formData.participation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Präsenz">Präsenz</option>
                    <option value="Online">Online</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Bitte beachten Sie, dass bei einer Online-Teilnahme ein Besuch der Workshops nicht möglich ist.
                  </p>
                </div>

                <div>
                  <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-1">
                    Wie haben Sie von uns erfahren?
                  </label>
                  <select
                    id="heardAbout"
                    name="heardAbout"
                    value={formData.heardAbout}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="homepage">Klinikhomepage</option>
                    <option value="kollegen">Kollegen</option>
                    <option value="social-media">Social Media</option>
                    <option value="newsletter">Newsletter</option>
                    <option value="andere">Andere</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Ich möchte den Newsletter erhalten
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="dataProtection"
                    name="dataProtection"
                    type="checkbox"
                    required
                    checked={formData.dataProtection}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="dataProtection" className="text-sm text-gray-700">
                    Ich habe die <a href="/data-protection" className="text-blue-600 hover:text-blue-800 underline">Datenschutzerklärung</a> gelesen und akzeptiert *
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-md font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anmeldung absenden'}
              </button>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
