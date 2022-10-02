function cvview() {
  document.getElementById("content").innerHTML = `
  <div class="cvcontent">
  <div class="personalia">
      <h1>CV</h1>
      <br>
      <h2>Kontaktinfo:</h2>
      <b>Navn</b>
      <p>Charlotte Aimée Bugge</p>
      <b>Adresse</b>
      <p>Storgata 25 Larvik</p>
      <b>Mobil</b>
      <p>97603332</p>
      <b>Epost</b>
      <p>charlottebugge3d@gmail.com</p>
  </div>
  <div class="imagecontainer">
      <img class="cvimage" src="./images/cv_bilde.png" alt="Picture of me">
  </div>
  <div class="experienceandcompetences aboutme">
      <h2>Om meg:</h2>
      <p>
          Blir ofte beskrevet som en kreativ person og kjenner jeg blir lett engasjert og fokusert når jeg jobber med
          kreative oppgaver.
          <br><br>
          Jeg liker å formidle orginalitet men har alltid ett ekstra øye til trender, gøy å bli inspirert på den måten.
          <br><br>
          Setter utrolig pris på å jobbe med design av alle typer, kjempegøy å drive med frontend.
          <br><br>
          Det å kunne utføre oppgaver med flid, utføre en god jobb og være en god kollega er viktig for meg.
          <br><br>
          Jeg har alltid blitt dratt mot det å jobbe med håndtverk, men har med åra opplevd at det å kunne utrykke dette digitalt og
          innafor de rammene er veldig givende og spesielt hvis det gleder noen eller oppleves på en positiv måte.
      </p>
  </div>
  <div class="experienceandcompetences education">
      <h2>Utdanning:</h2>
      <br>
      <b>Mars 2020 – Oktober 2021</b>
      <p>GET academy</p>
      <p>IT-utvikling og nøkkelkompetanser.</p>
      <p>Teamarbeid og basiskunnskaper innen Html, CSS, Javascript, C#.</p>
      <br>
      <b>August 2015 - Juni 2017</b>
      <p>Høyskolen Kristiania</p>
      <p>Fagskole 3D & animasjon</p>
      <p>
      3D modellering, 3D skulpturering, lage animasjoner og filmredigering.
      Bruke programmer som Illustrator, Photoshop, After Effects, Cinema 4D, Substance painter og Z-Brush.
      Produksjon i film og spill, kundeoppdrag, timelines, planlegging, teamarbeid og andre kreative prosesser.
      </p>
      <br>
      <b>August 2013 - Juni 2015</b>
      <p>Strykejernet Kunstskole</p>
      <p>Kunst</p>
      <p>Maling, Tegning, Skulptur, Glass, Grafikk, Foto, material- og fargelære, konseptkunst, performance, 
          improvisasjon, installasjon, kunsthistorie og kunstteori.</p>
      <br>
      <b>August 2012 - Juni 2013</b>
      <p>Skiringssal folkehøyskole</p>
      <p>Tegning, Maling og Kunstreise</p>
      <p>Teknisk tegning og maleteknikker.</p>
  </div>
  <div class="experienceandcompetences workexperience">
      <h2>Arbeidserfaring:</h2>
      <br>
      <b>November 2020 - November 2022</b>
      <p>Plusoffice AS</p>
      <p>Web Designer</p>
      <p>Lage sider designmessig (frontend/mockups/css), tilpasse systemets css til kunders designprofiler,
          css redesign av crm-system, css redesign av HMS-kurs, lage grafikk, vektorbasert grafikk,
          illustrasjoner, animasjon, designe stand, reklameskilt, flyers, brukerveiledninger, designe apper,
          utvikle design til en nettside, har også jobbet med javascript, jQuery, bootstrap, php, litt ajax og bittelitt SQL. </p>
      <a>Se design her</a>
      <br>
      <br>
      <b>Juli 2019 - Mars 2020</b>
      <p>Interflora Hammond Blomster</p>
      <p>Butikkmedarbeider</p>
      <p>Ekspedere kassa, kundeservice, lage buketter og enkle dekorasjoner, vaske og holde det rent,
          ta bestillinger, vareopptelling, generelt butikkarbeid som lage oppstilling, bære og pakke ut.</p>
      <br>
      <br>
      <b>November 2010 - Juni 2011</b>
      <p>Cubus Larvik Sentrum</p>
      <p>Ekstrahjelp</p>
      <p>Ekspedere kassa, pakke ut og brette klær, holde det ryddig , gi kundeservice og assistere kunder,
          selge, mer-salg , stenge og låse.</p>
      <br>
      <b>2008</b>
      <p>Fulfillment AS</p>
      <p>Selger</p>
      <p>Salg av medlemskap for frivillige organisasjoner.</p>
      <br>
      <b>November 2004 - Nå</b>
      <p>Privat utleie</p>
      <p>Fastboende og korttidsleie</p>
      <p>Skrive annonser, møte potenielle leietakere, skrive regnskap og vedlikehold.</p>
  </div>
  <div class="experienceandcompetences competences">
      <h2>Programmer:</h2>
      <p>Affinity Designer, Photoshop , Illustrator, After Effects, Visual Studio Code, Php Storm,
          Microsoft office pakka, Cinema 4d, Substance Painter og Z-brush.</p>
  </div>
  <div class="experienceandcompetences languages">
      <h2>Språk:</h2>
      <p>Norsk Morsmål</p>
      <p>Engelsk godt muntlig og skriftlig</p>
  </div>
</div>
<div class="footer">© 2022 Charlotte Aimée Bugge</div>
    `;
}
function designview() {
  document.getElementById("content").innerHTML = `
  <div class="designcontent">
  <div class="divider aboutme">
      <h2>Om meg:</h2>
      <p>
          Blir ofte beskrevet som en kreativ person og kjenner jeg blir lett engasjert og fokusert når jeg jobber med
          kreative oppgaver.
          <br><br>
          Jeg liker å formidle orginalitet men har alltid ett ekstra øye til trender, gøy å bli inspirert på den måten.
          <br><br>
          Setter utrolig pris på å jobbe med design av alle typer, kjempegøy å drive med frontend.
          <br><br>
          Det å kunne utføre oppgaver med flid, utføre en god jobb og være en god kollega er viktig for meg.
          <br><br>
          Jeg har alltid blitt dratt mot det å jobbe med håndtverk, men har med åra opplevd at det å kunne utrykke dette digitalt og
          innafor de rammene er veldig givende og spesielt hvis det gleder noen eller oppleves på en positiv måte.
      </p>
  </div>
  <div class="divider competences">
      <h2>Om meg:</h2>
      <p>
          Blir ofte beskrevet som en kreativ person og kjenner jeg blir lett engasjert og fokusert når jeg jobber med
          kreative oppgaver.
          <br><br>
          Jeg liker å formidle orginalitet men har alltid ett ekstra øye til trender, gøy å bli inspirert på den måten.
          <br><br>
          Setter utrolig pris på å jobbe med design av alle typer, kjempegøy å drive med frontend.
          <br><br>
          Det å kunne utføre oppgaver med flid, utføre en god jobb og være en god kollega er viktig for meg.
          <br><br>
          Jeg har alltid blitt dratt mot det å jobbe med håndtverk, men har med åra opplevd at det å kunne utrykke dette digitalt og
          innafor de rammene er veldig givende og spesielt hvis det gleder noen eller oppleves på en positiv måte.
      </p>
  </div>
</div>
<div class="footer">© 2022 Charlotte Aimée Bugge</div>
      `;
}
function graphicview() {
  document.getElementById("content").innerHTML = `
      <div>Grafikk</div>
      `;
}
function animationview() {
  document.getElementById("content").innerHTML = `
      <div>Animasjon</div>
      `;
}
function illustrationview() {
  document.getElementById("content").innerHTML = `
      <div>Illustrasjon</div>
      `;
}
function avatarview() {
  document.getElementById("content").innerHTML = `
      <div>Avatar</div>
      `;
}
function feedmeview() {
  document.getElementById("content").innerHTML = `
      <div>Mat meg</div>
      `;
}
