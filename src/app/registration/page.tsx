'use client';

import { useState } from 'react';
import HeroSection from "@/components/HeroSection";
import ContentContainer from "@/components/ContentContainer";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import Button from "@/components/Button";
import { FormSection, FormCheckbox, SuccessMessage } from "@/components/FormComponents";

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
      <SuccessMessage
        title="Anmeldung erfolgreich!"
        message="Vielen Dank für Ihre Anmeldung. Sie erhalten in Kürze eine Bestätigungs-E-Mail mit weiteren Informationen."
        buttonText="Neue Anmeldung"
        onReset={() => {
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
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Anmeldung"
        description="Hier können Sie sich für unsere Repetitorien anmelden."
        backgroundClass="bg-gray-100"
      />

      <ContentContainer maxWidth="2xl" paddingY="xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <FormSection title="Persönliche Angaben">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormSelect
                id="anrede"
                name="anrede"
                label="Anrede"
                value={formData.anrede}
                onChange={handleInputChange}
                required
                options={[
                  { value: 'Frau', label: 'Frau' },
                  { value: 'Herr', label: 'Herr' }
                ]}
              />

              <FormSelect
                id="title"
                name="title"
                label="Titel"
                value={formData.title}
                onChange={handleInputChange}
                options={[
                  { value: '', label: 'Kein Titel' },
                  { value: 'Dr.', label: 'Dr.' },
                  { value: 'Prof.', label: 'Prof.' },
                  { value: 'PD Dr.', label: 'PD Dr.' }
                ]}
              />

              <FormInput
                id="firstname"
                name="firstname"
                label="Vorname"
                type="text"
                value={formData.firstname}
                onChange={handleInputChange}
                required
                placeholder="Max"
              />

              <FormInput
                id="lastname"
                name="lastname"
                label="Nachname"
                type="text"
                value={formData.lastname}
                onChange={handleInputChange}
                required
                placeholder="Mustermann"
              />
            </div>
          </FormSection>

          {/* Address Information */}
          <FormSection title="Adresse">
            <div className="space-y-4">
              <FormInput
                id="street"
                name="street"
                label="Straße"
                type="text"
                value={formData.street}
                onChange={handleInputChange}
                required
                placeholder="Musterstraße 1"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  id="zip"
                  name="zip"
                  label="PLZ"
                  type="text"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                  placeholder="12345"
                />

                <FormInput
                  id="city"
                  name="city"
                  label="Ort"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="Musterstadt"
                />
              </div>

              <FormInput
                id="clinic"
                name="clinic"
                label="Klinikadresse"
                type="text"
                value={formData.clinic}
                onChange={handleInputChange}
                placeholder="Musterstr. 1, 12345 Stadt"
              />
            </div>
          </FormSection>

          {/* Contact and Professional Information */}
          <FormSection title="Kontakt & Beruf">
            <div className="space-y-4">
              <FormInput
                id="email"
                name="email"
                label="E-Mail-Adresse"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="name@example.com"
              />

              <FormSelect
                id="profession"
                name="profession"
                label="Ihr Beruf"
                value={formData.profession}
                onChange={handleInputChange}
                required
                options={[
                  { value: '', label: 'Bitte wählen' },
                  { value: 'WA', label: 'Arzt/Ärztin in Weiterbildung' },
                  { value: 'FA', label: 'Facharzt/Fachärztin' }
                ]}
              />

              <FormInput
                id="efnNumber"
                name="efnNumber"
                label="EFN-Nummer"
                type="text"
                value={formData.efnNumber}
                onChange={handleInputChange}
                placeholder="1234567890"
              />
            </div>
          </FormSection>

          {/* Event Information */}
          <FormSection title="Veranstaltung">
            <div className="space-y-4">
              <div>
                <FormSelect
                  id="participation"
                  name="participation"
                  label="Teilnahme an der Veranstaltung in"
                  value={formData.participation}
                  onChange={handleInputChange}
                  required
                  options={[
                    { value: 'Präsenz', label: 'Präsenz' },
                    { value: 'Online', label: 'Online' }
                  ]}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Bitte beachten Sie, dass bei einer Online-Teilnahme ein Besuch der Workshops nicht möglich ist.
                </p>
              </div>

              <FormSelect
                id="heardAbout"
                name="heardAbout"
                label="Wie haben Sie von uns erfahren?"
                value={formData.heardAbout}
                onChange={handleInputChange}
                options={[
                  { value: 'homepage', label: 'Klinikhomepage' },
                  { value: 'kollegen', label: 'Kollegen' },
                  { value: 'social-media', label: 'Social Media' },
                  { value: 'newsletter', label: 'Newsletter' },
                  { value: 'andere', label: 'Andere' }
                ]}
              />
            </div>
          </FormSection>

          {/* Agreements */}
          <FormSection title="Einverständniserklärungen">
            <div className="space-y-4">
              <FormCheckbox
                id="newsletter"
                name="newsletter"
                label="Ich möchte den Newsletter erhalten"
                checked={formData.newsletter}
                onChange={handleInputChange}
              />

              <FormCheckbox
                id="dataProtection"
                name="dataProtection"
                label={
                  <>
                    Ich habe die{' '}
                    <a href="/data-protection" className="text-blue-600 hover:text-blue-800 underline">
                      Datenschutzerklärung
                    </a>{' '}
                    gelesen und akzeptiert *
                  </>
                }
                checked={formData.dataProtection}
                onChange={handleInputChange}
                required
              />
            </div>
          </FormSection>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anmeldung absenden'}
            </Button>
          </div>

          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
            </div>
          )}
        </form>
      </ContentContainer>
    </div>
  );
}
