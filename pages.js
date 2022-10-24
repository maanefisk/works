function cvview() {
  document.getElementById("content").innerHTML = `
  <div class="innercontent cvcontent">
  <div class="personalia">
      <h1>CV</h1>
      <br>
      <h2>Kontaktinfo:</h2>
      <b>Navn</b>
      <p>Charlotte Aimée Bugge</p>
      <b>Adresse</b>
      <p>Storgata 25 3256 Larvik</p>
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
  <div class="innercontent designcontent">
                <div class="divider section1">
                  <h1>Design</h1>
                    <div class="explanation">
                        <h2>Kundetilpassede system</h2>
                    <p>
                        Noen ganger vil kundene at systemet skal passe inn med deres egne designmanualer, og ha sin egen logo.
                        <br>
                        Her jobber jeg ut ifra at innloggingen og menyen skal ha samme oppsett men kan tilpasse farger, justere mellomrom,
                        overganger og eksempelvis <b>:hover</b> effekter. Alt ettersom hva kunden er vant med, eller som er spesifisert i deres designmanual.
                        <br>
                        <br>
                        <b>Her er noen eksempler på forskjellige tilpasninger som jeg har gjort:</b>
                    </p>
                    </div>
                    <div class="images">
                        <img class="single" src="./images/design/banners.svg" alt="Custom banners">
                        <img class="single" src="./images/design/tease.png" alt="A little teaseto show some of the inside">
                        <div class="explanation withborder">
                        <p>
                            Noen ganger har kundene bilder fra før, og andre ganger krever det litt kreativitet.
                            <br>
                            (Som i eksemplet over. Hos bua lagde jeg en grafikk i menyen for å bryte med blokk-fargene, hos Østerbo
                                videregående skole ville jeg lage en banner som var litt trendbasert og hos Krimek eller KM lage litt grafikk
                                som matchet retropreget i logoen dems.)
                            <br>
                            <br>
                            Det er jo blant annet viktig at det er god kontrast, så tekst synes. Det er ikke alltid sånn og da må jeg prøve
                            så godt jeg kan å tilpasse det ved å duse ut, legge noen overlays eller lage grafikk enten av deres egen grafikk
                            eller noe jeg finner på som kan passe deres design.
                            <br>
                            <br>
                            Her kan det være strenge begrensninger og regler skrevet i designmanualen og da er det viktig å respektere dette,
                            også skal det se pent ut i systemet også!
                            <br>
                            Prøver å tenke på universal utforming når jeg lager design. Det er ikke alltid så lett å vite om jeg treffer på
                            riktig kontrast.. Prøver å ha som regel at det skal være minst 60% kontrast på den viktigste informasjonen, og
                            gjerne sette opp tekststørrelsen der det lar seg gjøre.
                            Dette tilpasses også kundens behov, og jeg prøver å finne en balanse der.
                        </p>
                        </div>
                        <img class="single" src="./images/design/alba_kaffe.png" alt="Albatrossenkaffe login">
                        <img class="single" src="./images/design/ghlogin.png" alt="Grendland Havn login">
                        <img class="single" src="./images/design/bua.png" alt="Bua login">
                        <img class="single" src="./images/design/everyhair.png" alt="Everyhair login">
                        <img class="single" src="./images/design/fargerike.png" alt="Fargerike login">
                        <img class="single" src="./images/design/kleva.png" alt="Kleva login">
                        <img class="single" src="./images/design/petxl.png" alt="Pet XL login">
                        <img class="single" src="./images/design/sfjbb.png" alt="Sandefjord Bredbånd login">
                        <img class="single" src="./images/design/sjosport.png" alt="Sjøsport login">
                        <img class="single" src="./images/design/solcellespesialisten.png" alt="Solcellespesialisten login">
                        <div class="explanation withborder">
                        <p>
                        Å jobbe med kundetilpasninger har vært en stor glede! Så moro når kunden kommer tilbake og forteller de er fornøyd!
                        </p>
                        </div>
                        <img class="single" src="./images/design/tease2.png" alt="Logintease">
                        <img class="single" src="./images/design/tease3.png" alt="Logintease">
                        <img class="single" src="./images/design/tease4.png" alt="Logintease">
                    </div>
                </div>
                <div class="divider section2">
                    <div class="explanation">
                        <h2 class="child">App design</h2>
                        <p class="child">
                        Her fikk jeg i oppgave å designe en app.
                        Dette er mockviews fra appens sider.
                        </p>
                    </div>
                    <div class="images">
                        <img class="single" src="./images/design/app1.jpg" alt="App Mock views">
                        <div class="explanation withborder">
                            <p class="child">
                                Det ble ikke noe av denne appen, men det var utrolig gøy å få være med på å utvikle!
                                <br><br>
                                Her ble fargene i designet, inspirert av lyset på snøen i vintermørket og formene av glass og is.
                                <br><br>
                                Elementene formet som glass er svg-elementer, så de er 100% skalérbare. Jeg elsker å jobbe med SVG!
                                Synes rett å slett man kan gjøre utrolig mye artig designmessig med denne filtypen og tilpasser seg
                                responsivt design godt. 
                                <br><br>
                                <b class="child">Det skal jo se bra ut på alle enheter.</b>
                            </p>
                            </div>
                    </div>
                </div>
                <div class="divider rowsections section3">
                    <div class="explanation">
                        <h2>App design 2</h2>
                        <p>
                        En annen app, her med bilder fra html'en.
                        <br><br>
                        Her fikk jeg utfordre meg med css animasjoner og responsivt design.
                        <br><br>
                        Eksempelvis ser man punkter på vei opp fjellet. For hver oppgave skulle det komme ett nytt punkt, for hver oppgave
                        fullført endres den striplede linja til en solid linje. 
                        <br><br>
                        Man skulle også kunne slette punkter, og de måtte faktisk se ut
                        som at de klatret oppover fjellet som en ekte turrute.
                        <br><br>
                        I tillegg skulle det fungere responsivt og tilpasse seg forskjellige
                        enheter. Dermed brukte jeg SVG og oppdaterte den via javascript. 
                        </p>
                    </div>
                    <div class="images">
                        <img class="single" src="./images/design/app2.png" alt="App Mock views">
                    </div>
                </div>
                <div class="divider rowsections section4">
                    <div class="explanation">
                        <h2>Kortstokk design</h2>
                        <p>
                        Så en litt egenartet og artig oppgave jeg fikk, hva med å lage ett kortstokk design til en A2 kortstokk?
                        <br>
                        <br>
                        Jeg lastet ned en ferdig pakke med mønster og snirkler og prøvde å sette sammmen mønsterene til å bli en bakgrunn
                        på kortene som ville se mest mulig klassisk kortstokk ut.
                        <br><br>
                        Pluss å implementere firmaets logo i designet på en subtil måte.
                        <br><br>
                        Her kom det en uventet ekstra utfordring! Hvis man snur kortet, skal man ikke vite hvem vei som er opp eller ned.
                        Derfor var det viktig at kortet kan rotere uten at man ser forskjell.
                        </p>
                    </div>
                    <div class="images">
                        <img class="single carddeck" src="./images/design/card_design.png" alt="Carddeck design">
                    </div>
                </div>
                <div class="divider rowsections section5">
                    <div class="explanation">
                        <h2>Magasin front</h2>
                        <p>
                        Jeg har ei venninne som driver med blomsterbinding og hun skulle delta i en konkurranse om å lage det beste
                        liksom-coveret for ett blomstermagasin. Hun gjorde blomsterbindingen og tok bilde, jeg tok meg av resten i Photoshop :)
                        <br><br>
                        Hun vant! :)
                        </p>
                    </div>
                    <div class="images">
                        <img class="single" src="./images/design/6.png" alt="Blomsterbinding liksomcover">
                    </div>
                </div>
              </div>
              <div class="footer">© 2022 Charlotte Aimée Bugge</div>
      `;
}
function graphicview() {
  document.getElementById("content").innerHTML = `
  <div class="innercontent graphiccontent">
  <div class="divider section1">
    <h1>Grafikk</h1>
      <div class="explanation">
          <h2>Måloppnåelse positiv/negativ</h2>
      <p>
          Her prøvde jeg å lage grafikk som reflekterte grad av måloppnåelse med litt humor. <b>Gamification</b> er en del av
          tankegangen her.
          <br><br>
      </p>
      </div>
      <div class="images">
          <img class="single" src="./images/graphics/graphics2.png" alt="Custom banners">
          <div class="explanation withborder">
          <p>
              Det kan være litt vanskelig når man må formidle noe negativt, så i denne settingen prøvde jeg å lage negative
              grafikker som iallefall hadde litt humor og var litt søte likevel.
          </p>
          </div>
      </div>
  </div>
  <div class="divider section2">
      <div class="explanation">
          <h2>Iskrem etikett for firma</h2>
          <p>
              Her er det meningen å bli lagt merke til!
              <br><br>
              Litt humor, knalle farger og runde former kan kanskje trekke litt oppmerksomhet?
              <br><br>
              Hvis man er heldig, kanskje det rykka litt i smilebånda. 
          </p>
      </div>
      <div class="images">
          <img class="single" src="./images/graphics/is_etikett.png" alt="App Mock views">
      </div>
  </div>
  <div class="divider section3">
      <div class="explanation">
          <h2>Yeti</h2>
          <p>
          Her laget jeg resten av kroppen til en ferdiglaget overkropp av Yeti. Det var i forbindelse med den ene appen jeg var med
          på å designe. 
          <br><br>
          Kroppen måtte også ha ledd som kunne roteres for senere animasjon, så det var viktig å tenkte på dette under
          tegneprosessen. Resten av kroppen måtte også se proposjonal riktig ut, iallefall det man skulle kunne forvente av ett
          snømonster.
          </p>
      </div>
      <div class="images">
          <img class="single" src="./images/graphics/campingyeti.png" alt="Yeti sitting">
      </div>
  </div>
  <div class="divider section4">
      <div class="explanation">
          <h2>Pikselgrafikk</h2>
          <p>
          Dette var til ett gruppesamarbeid jeg hadde på skolen. Vi ville lage ett tamagotchi spill og da lagde jeg noen 8-bit aktige
          figurer som kunne brukes i spillet.
          </p>
      </div>
      <div class="images">
          <img class="single" src="./images/graphics/pixelkunst.png" alt="Pixelkunst">
      </div>
  </div>
</div>
<div class="footer">© 2022 Charlotte Aimée Bugge</div>
      `;
}
function animationview() {
  document.getElementById("content").innerHTML = `
  <div class="innercontent anicontent">
    <div class="divide">
        <h1>Animasjon</h1>
        <div class="explanationani">
            <h2>Aftereffects og lottiefiles</h2>
        <p>
            Det finnes en kjempestilig plugin for Aftereffects som heter <a href="https://lottiefiles.com/" target="_blank">Lottiefiles</a>. Etter hva jeg skjønner er det AirBNB som
            utviklet dette iallefall i starten.
            <br>
            <br>
            Denne pluginen tillater å exportere animasjon fra Aftereffects med visse kriterier, over til lottiefiles. Herfra
            kan man eksportere animasjonen som JSON, GIF. Man kan tilogmed få animasjonen til å reagere på f.eks. museklikk.
            <br><br>
        </p>
        </div>
        <div class="animations">
            <lottie-player src="https://lottie.host/5315976d-de01-439e-aed6-dcebd34bb1ad/alXKtaBAAu.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
            <lottie-player src="https://lottie.host/bc0ebe82-6683-4d19-a677-948d533db21a/qnnzL0N5Cf.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
            <lottie-player src="https://lottie.host/bbe80f19-e253-4e9d-b4f0-2f90ca5e9099/y6GbBDSz1v.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
        </div>
        <div class="explanationani withborder">
            <p>
                Spillerne av animasjonen skal visstnok ikke være så krevende å dra.
                Low end mobile throttling i browseren min er iallefall enig :)
                <br>
                <br>
                Før var de gratis, nå må man betale litt årlig. Men vel verdt det når man ser hvilket potensiale for webdesign dette kan ha!
                Jeg hadde masse animasjoner der, før de gjorde det store skifte. Etter ble alle sammen borte og glemte å ta backup av mye av dette.
                Men jeg fant noen jeg kunne laste opp igjen!
            </p>
        </div>
    </div>
    <div class="divide divide2">
        <div class="explanationani">
            <h2>Tidligere animasjoner fra aftereffektss</h2>
        <p>
            Jenta og nøkken er fra ett felles prosjekt vi hadde når jeg gikk på Høyskolen Kristiania.
            Jeg var en av tre som animerte bildene vi fikk fra illustrasjon.
            De andre er animasjoner jeg har gjort selv.
            Promovideo for UT appen var fiktiv.
            <br>
            Craigmillar Bookfestival i Edinburgh trengte animert logo, så jeg stilte opp.
            Boo logoen og process games logo animasjonene var fiktive oppgaver.
            Gyroskopet her er en veldig kort video. Her lagde jeg en enkel 3d-figur, som jeg animerte med litt matematikk. Looper man den går den sømløst.
        </p>
        </div>
        <div class="animations youtube">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xdCoCARqI_U" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OfDbHPnjIiY" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/13QXXwwf2yk" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/POjGosS9e0w" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hnOqWU6HhCI" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K497b3KeUZE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="explanationani withborder">
            <p>
                Det er en stund siden jeg animerte disse, som man ser på iPhonen i UT videoen. Den er ut rett å slett, hehe.
                Men jeg holder det meste av basic animasjonskunnskap vedlike, og finner det utrolig morro å holde på med.
                <br>
                <br>
                Verdt å legge til at man kan animere masse bare med enkel css også, så bruker mye av kunnskapen jeg lærte på 3d & animasjon når
                jeg animererer med CSS.
            </p>
        </div>
    </div>
</div>
<div class="footer">© 2022 Charlotte Aimée Bugge</div>
      `;
}
function illustrationview() {
  document.getElementById("content").innerHTML = `
  <div class="innercontent illucontent">
  <div class="divider section1">
    <h1>Illustrasjon</h1>
      <div class="explanation">
          <h2>Digital tegning</h2>
      <p>
          Klikk eller ta musepeker over for å se full størrelse.
      </p>
      </div>
      <div class="images">
        <div class="imagecontainer"><img class="single" src="./images/illustration/5.png" alt="Vannvesen illustrasjon"></div>
        <div class="imagecontainer"><img class="single" src="./images/illustration/Ilder.png" alt="Ilder illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/inthecontrolpanel.jpg" alt="Meditasjon illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/IdreamtIdweltinmarbleHalls.jpg" alt="Healing illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/Uten navn-1.png" alt="Ying og yang illustrasjon"></div>
          <div class="explanation withborder">
              <p>
                  Jeg liker godt å tegne på tegnebrett, rett i photoshop. <br>
                  Når jeg tegner personlig liker jeg å la meg inspirere av fantasyverdenen, formidle følelser, meditasjon og spirituelle følelser.
              </p>
          </div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/drage2.png" alt="Drage illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/This_cave_is_full_of_love_nnaana_lucia2.png" alt="Romvesen illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/frekvensian.jpg" alt="Natttegning illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/Speedy_raven_sensei.jpg" alt="Ravnerobot illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/Speedy_Robogurl_50000.jpg" alt="Robot alien illustrasjon"></div>
          <div class="imagecontainer"><img class="single" src="./images/illustration/Spirit.png" alt="Englevakt illustrasjon"></div>
          <div class="explanation withborder">
          <p>
            Tegninger fra natten.
          </p>
          </div>
      </div>
  </div>
  <div class="divider section1 section2">
      <div class="explanation">
          <h2 class="child">3D</h2>
          <p class="child">
              Legger ved det siste 3D prosjektet jeg hadde på Høyskolen Kristiania. Pluss en delfin jeg lagde på gøy.
          </p>
      </div>
      <div class="images">
            <div class="imagecontainer"><img class="single" src="./images/illustration/Diorama_Poster2.png" alt="Diorma 3D figur"></div>
            <div class="imagecontainer"><img class="single" src="./images/illustration/ForeverDolphinLove.png" alt="Delfin 3D figur"></div>
      </div>
  </div>
</div>
<div class="footer">© 2022 Charlotte Aimée Bugge</div>
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
