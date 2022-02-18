const language = navigator.language;
const headerTitle = document.getElementById('header-title');
const persChar = document.getElementById('personal-character');
const firstNameHeading = document.getElementById('firstname-heading');
const lastNameHeading = document.getElementById('lastname-heading');
const ageHeading = document.getElementById('age-heading');
const residentHeading = document.getElementById('resident-heading');
const apprenticeshipHeading = document.getElementById('apprenticeship-heading');
const apprenticeship = document.getElementById('apprenticeship');
const hobby = document.getElementById('hobby');
const synopsisText = document.getElementById('synopsis-text');
const pageLeft = document.getElementById('page-left');
const pageMiddle = document.getElementById('page-middle');
const pageRight = document.getElementById('page-right');
const contactHeading = document.getElementById('contact-heading');


if(language === 'de' || language ==='de-DE' || language === 'de-CH' || language === 'de-LI' || language === 'de-AT'){
    console.log(language);
    headerTitle.innerHTML = 'Portfolio von Rolf Karlen';
    persChar.innerHTML = 'Steckbrief:';
    firstNameHeading.innerHTML = 'Vorname:';
    lastNameHeading.innerHTML = 'Nachname:';
    ageHeading.innerHTML = 'Alter:';
    residentHeading.innerHTML = 'Wohnhaft:';
    apprenticeshipHeading.innerHTML = 'Ausbildung:';
    apprenticeship.innerHTML = 'Werkzeugmacher EFZ';
    hobby.innerHTML = 'Fitness, Kochen, Videospiele';
    synopsisText.innerHTML = 'Mein Interesse in Web-Design geht auf das Jahr 2003 zurück. Damals erstellte ich zwei Webseiten und legte das Webdesign wieder auf Eis. Seit einem Jahr befasse ich mich nun wieder eingehend mit dem Erstellen von Webseiten. Mit dem Web Development Online Lehrgang von codecademy.com brachte ich mir die Grundlagen zu HTML, CSS, Bash, Git, relationale Datenbanken und vertieftes Wissen in JavaScript bei. Diese Seite soll Ihnen meine seit einem Jahr laufende Aneignung der erwähnten Webtechnologien näherbringen.';
    pageLeft.innerHTML = 'Diese Webseite soll einem Benutzer beim Erstellen eines wöchentlichen Menüplans helfen. Die Webapp ist im JavaScript Framework React geschrieben.';
    pageMiddle.innerHTML = 'Auf der Webseite Beispiele stelle ich meine kleinen Webapps vor. Die Seite ist mithilfe von HTML, CSS, JavaScript und PHP entstanden.';
    pageRight.innerHTML = 'Multiplication Table ist eine Seite zum Üben der Multiplikations-Reihen. Die Webapp ist im JavaScript Framework React geschrieben.';
    contactHeading.innerHTML = 'Kontaktieren Sie mich:';
}
else{
    console.log(language, 'I\'m switching to English!');
    headerTitle.innerHTML = 'Portfolio of Rolf Karlen';
    persChar.innerHTML = 'Character:';
    firstNameHeading.innerHTML = 'Firstname:';
    lastNameHeading.innerHTML = 'Lastname:';
    ageHeading.innerHTML = 'Age:';
    residentHeading.innerHTML = 'Resident:';
    apprenticeshipHeading.innerHTML = 'ATT:';
    apprenticeship.innerHTML = 'Toolmaker VET Diploma';
    hobby.innerHTML = 'Fitness, Cooking, Gaming';
    synopsisText.innerHTML = 'My interest in web design dates back to 2003. At that time I created two websites and put the web design on hold again. For a year now I have been dealing with the creation of websites again. With the web development online course from codecademy.com, I taught myself the basics of HTML, CSS, Bash, Git, relational databases and in-depth knowledge of JavaScript. This page is intended to bring you closer to my acquisition of the mentioned web technologies, which has been going on for a year.';
    pageLeft.innerHTML = 'This webpage is intended to help a user create a weekly menu plan. The web app is written in JavaScript Framework React.';
    pageMiddle.innerHTML = 'On the website examples I present my webapps. The site is made using HTML, CSS, JavaScript and PHP.';
    pageRight.innerHTML = 'Multiplication Table is a site for practicing the multiplication series. The web app is written in the JavaScript Framework React.';
    contactHeading.innerHTML = 'Contact me:';
}