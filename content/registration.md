---
title: Anmeldung
date: 2021-12-18T03:10:36.000Z
draft: false
language: de
description: Anmeldung für unsere Repetitorien
---

<!-- @format -->

<section class="lg:pb-24">
  <div class="max-w-screen-md px-4 mx-auto">
      <p class="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
            Hier können Sie sich für unsere Repetitorien anmelden.
    </p>
      <form name="registration" action="https://formsubmit.co/your@email.com" method="POST" class="space-y-8">
          <div class="my-4">
                <label for="anrede" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Anrede:</strong></label>
                <select name="anrede" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" required>
                    <option value="Frau">Frau</option>
                    <option value="Herr">Herr</option></select>
                <label for="title" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Titel:</strong></label>
                <select name="title" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light">
                    <option value="Dr.">Dr.</option>
                    <option value="PD">Prof.</option>
                    <option value="Prof.">PD Dr.</option>
            </select>
            <label for="firstname" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Vorname:</strong></label>
            <input type="text" name="firstname" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Max" required>
            <label for="lastname" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Nachname:</strong></label>
            <input type="text" name="lastname" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Mustermann" required>
            <label for="street" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Straße:</strong></label>
            <input type="text" name="street" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Musterstraße 1" required>
            <label for="zip" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>PLZ:</strong></label>
            <input type="text" name="zip" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="12345" required>
            <label for="city" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Ort:</strong></label>
            <input type="text" name="city" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Musterstadt" required>
            <label for="clinic" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Klinikadresse:</strong></label>
            <input type="text" name="clinic" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Musterstr. 1, 12345 Stadt">
            <label>
              <label for="email" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Ihre eMail Adresse:</strong></label>
              <input type="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="name@example.com" required>
        <label for="profession" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Ihr Beruf:</strong></label>
        <select name="profession" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" required>
            <option value="WA">Arzt/Ärztin in Weiterbilung</option>
            <option value="FA">Facharzt/Fachärztin</option>
        </select>
          </div>
<div class="my-4">
<label for="participation" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Teilnahme an der Veranstaltung in:</strong></label>
<select name="participation" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" required>
    <option value="Präsenz">Präsenz</option>
    <option value="Online">Online</option>
</select>
<label for="comment" class="block mb-2 font-medium text-gray-500 text-sm dark:text-gray-400">Bitte beachten Sie, dass bei einer Online-Teilnahme ein Besuch der Workshops nicht möglich ist.</label>
<label for="efn-number" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>EFN-Nummer:</strong></label>
<input type="text" name="efn-number" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="1234567890">
<label for="heard-about" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Wie haben Sie von uns erfahren?</strong></label>
<select name="heard-about" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light">
    <option value="homepage">Klinikhomepage</option>
    <option value="internet">Internet</option>
    <option value="social-media">Social Media</option>
    <option value="anesthesiology">Anzeige in: Die Anästhesiologie</option>
    <option value="ains">Anzeige in: AINS</option>
    <option value="sonstiges">Sonstiges</option>
</select>
<input type="text" name="other-source" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Sonstiges...">
</div>
<div class="my-4">
<label for="consent-newsletter" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Newsletter:</strong></label>
<input type="checkbox" name="consent-newsletter" class="text-indigo-600 border-gray-300 rounded shadow-sm dark:text-indigo-400 dark:border-gray-600 dark:shadow-sm-light" >
<label for="consent-newsletter" class="text-gray-500 text-sm dark:text-gray-400">Ich möchte den Newsletter abonnieren und bin damit einverstanden, dass meine eMail-Adresse für den Versand des Newsletters gespeichert wird.</label>
<label for="consent-data" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300"><strong>Datenschutz:</strong></label>
<input type="checkbox" name="consent-data" class="text-indigo-600 border-gray-300 rounded shadow-sm dark:text-indigo-400 dark:border-gray-600 dark:shadow-sm-light" required>
<label for="consent-data" class="text-gray-500 text-sm dark:text-gray-400">Ich habe die <a href="/data-protection/" class="text-indigo-600 dark:text-indigo-400">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden.</label>
</div>
          <div class="my-4 sm:col-span-2">
              <label for="message" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-400"><strong>Ihre Nachricht:</strong></label>
              <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div class="mt-6 lg:pb-16">
             <button type="submit" class="px-5 py-3 font-bold text-center text-white bg-indigo-600 rounded-lg text-md sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Senden</button>
          </div>
      </form>
  </div>
</section>
