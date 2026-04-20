// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


// console.log('Hieronder moet je waarschijnlijk nog wat veranderen')
// Doe een fetch naar de data die je nodig hebt
// const apiResponse = await fetch('...')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
// const apiResponseJSON = await apiResponse.json()

// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

const apiURL = 'https://fdnd-agency.directus.app/items/adconnect_'


// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {
   // Render index.liquid uit de Views map
   // Geef hier eventueel data aan mee
   response.render('index.liquid')
})

// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
   // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
   // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
   response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
   // Toon een bericht in de console en geef het poortnummer door
   console.log(`Application started on http://localhost:${app.get('port')}`)
})

// nieuws pagina routes

app.get('/talent-awards', async function (request, response) {
   const awardsResponse = await fetch(apiURL + 'nominations')
   const awardsResponseJSON = await awardsResponse.json()
   response.render('talent-awards.liquid', {
      nominations: awardsResponseJSON.data,
      path: request.path
   })
})

app.get('/talent-awards/:year', async function (request, response) {
   const awardsResponse = await fetch(apiURL + 'nominations')
   const awardsResponseJSON = await awardsResponse.json()
   response.render('talent-awards-year.liquid', {
      nominations: awardsResponseJSON.data,
      path: request.path
   })
})


app.get('/talent-awards/:year/:id', async function (request, response) {

   // kandidaat data ophalen uit de database
   const candidateParams = new URLSearchParams({
      'filter[id]': request.params.id
   })
   const candidateResponse = await fetch(apiURL + 'nominations?' + candidateParams)
   const candidateResponseJSON = await candidateResponse.json()
   // fake api data
   const fakeData = [
      {
         id: 1,
         body: '<p>Mijn naam is Rhod&eacute; Treur, 22 jaar oud, woon in Woudenberg en ik volg de Ad-opleiding Human Resource Management aan de Hogeschool Utrecht. Momenteel zit ik in het tweede jaar van deze Ad-opleiding en ben ik bezig met mijn eindstage bij Timon jeugd- en (jong)volwassenenzorg. In mijn vrije tijd werk ik als douanedeclarant bij een transportbedrijf en sport ik graag. &nbsp;<br>&nbsp;<br>Ik heb voor een Ad-opleiding gekozen, omdat je hier de kennis en vaardigheden die je opdoet, direct in de praktijk kan brengen door middel van projecten. Ook is er in de opleiding veel aandacht voor je persoonlijke ontwikkeling. Daarnaast vind ik het een voordeel dat het een tweejarige hbo-opleiding is, met de mogelijkheid om door te stromen in de bachelorvariant. &nbsp;<br>&nbsp;<br>Mijn keuze voor Human Resource Management komt voort uit de wens om het menselijke en het zakelijke aspect te combineren. Ik zie het als een uitdaging om medewerkers op de beste manier in te zetten binnen een organisatie, zodat zij op een plek zitten waar ze gelukkig zijn en waar hun talenten het beste uitkomen. Binnen de opleiding vraag ik actief om feedback van zowel medestudenten als docenten. Aan de hand daarvan reflecteer ik op mijn denken en handelen en stel ik doelen op die bijdragen aan mijn professionele ontwikkeling. &nbsp;<br>&nbsp;<br>Na het afronden van mijn Ad-opleiding zie ik mijzelf doorstromen in de deeltijdvariant van de bachelor. Hierdoor kan ik mijn kennis en vaardigheden dagelijks toepassen in de praktijk en kan ik mij blijven ontwikkelen in de rol als HR-officer.&nbsp;</p>',
         education_variant: 'Voltijd',
         previous_course: " mbo bol",
         course: "Ad Human Resource Management (HRM)",
         institution: "Hogeschool Utrecht ",
         institution_body: 'Thijs is een student op wie wij enorm trots zijn. Als SLBer heb ik Thijs leren kennen als een betrokken, bescheiden en zeer leergierige Ad-professional, die zijn vakmanschap vooral laat zien door zijn houding en handelen, en niet door zichzelf op de voorgrond te plaatsen. Voor een project in leerjaar 1 nam hij hierbij het voortouw om op zijn stage een preventieve activiteit met Alpaca’s te regelen voor cliënten, wat een groot succes was! In samenwerking met medestudenten, docenten en het werkveld is Thijs respectvol, betrouwbaar en proactief.Hij neemt verantwoordelijkheid, werkt zelfstandig en denkt actief mee over oplossingen voor praktijkvraagstukken. Zijn integriteit is hierin opvallend: Thijs oordeelt niet en blijft altijd zorgvuldig in hoe hij over anderen spreekt. Deze houding is van grote waarde in het werken met de complexe doelgroep, die vaak te maken krijgt met vooroordelen en stigma.Thijs benadert cliënten consequent oordeelloos en mensgericht. Wat Thijs daarnaast onderscheidt, is zijn sterk lerend vermogen.Hij reflecteert eerlijk op zijn eigen handelen en neemt regie over zijn ontwikkeling en vervolgstappen als Ad- professional. Dat maakt hem in onze ogen een zeer terechte kandidaat voor de Ad Talent Award 2026, want als er al een prachtige prijs als deze gegeven mag worden aan een student binnen het werkveld van Zorg en Veiligheid, dan verdiend Thijs Kiens het wel. Fransien Hummel, SLBer bij opleiding Ad Zorg en Veiligheid, óók namens het gehele docententeam en de Academie) ',
         external_stake_holder: 'Lisa van Zuilen, sociaal beheerder bij Cazas Wonen',
         external_stake_holder_body: '“Thijs heeft alles op orde, beantwoordt vragen met een lach en is hulpvaardig. Vanaf de start van zijn stage bij sociaal beheer neemt hij zelf de verantwoordelijkheid voor zijn leerproces. Op dag 1 kreeg hij zijn spullen, de dag erna liep hij met iemand mee en op dag 3 heeft hij, op eigen initiatief, zelfstandig bewoners bezocht. Thijs legt makkelijk contact, hij is een verbinder. Aan het begin van de stage had hij een overleg met wijkagenten, stelde zich voor als ‘de nieuwe directeur’ maar uiteraard met een lach. Het ijs was direct gebroken. Een bewoner die 40 jaar bij Cazas woonde krijgt normaliter bezoek vanuit coöperatie, dat lukte echter niet overdag en dus maakte Thijs in de avond tijd vrij om langs te gaan. Of die keer dat hij kacheltjes verzamelde toen er een gaslek op de Eikenlaan was. Kortom; Thijs is van alle markten thuis.”',
         header: "nominatie",
         slug: 'rhode-treur',
         title: "Rhodé Treur",
         date: "2024-01-11",
         profile_picture: "383622d7-ed2f-4e84-8c0a-9476c5c53826",
         year: 2026
      }
   ]
   const fakeCandidate = fakeData[0]

   // comments kandidaat inladen
   const commentParams = new URLSearchParams({
      'filter[nomination]': request.params.id,
      'sort': '-date_created'
   })
   const commentResponse = await fetch(apiURL + 'nominations_comments?' + commentParams)
   const commentResponseJSON = await commentResponse.json()

   response.render('talent-candidate.liquid', {
      // uncomment wanneer api het doet
      candidate: candidateResponseJSON.data[0],
      fakeData: fakeCandidate,
      year: request.params.year,
      comments: commentResponseJSON.data
   })
})

app.post('/talent-awards/:year/:id', async function (request, response) {

   try {
      await fetch(apiURL + 'nominations_comments', {
         method: 'POST',
         body: JSON.stringify({
            nomination: request.params.id,
            name: request.body.name,
            comment: request.body.comment
         }),
         headers: {
            'Content-Type': 'application/json;charset=UTF-8'

         }
      })
      console.log(request.body)
      response.redirect(303, `/talent-awards/${request.params.year}/${request.params.id}`)
   } catch (error) {
      console.log(error)
      response.redirect(303, `/talent-awards/${request.params.year}/${request.params.id}`)

   }


})

// nieuws pagina routes

app.get('/nieuws', async function (request, response) {
   const newsResponse = await fetch(apiURL + 'news')
   const newsResponseJSON = await newsResponse.json()

   response.render('news.liquid', {
      path: request.path,
      news: newsResponseJSON.data
   })
})

app.get('/nieuws/:uuid', async function (request, response) {
   const newsParams = new URLSearchParams({
      'filter[uuid]': request.params.uuid
   })
   const newsResponse = await fetch(apiURL + 'news?' + newsParams)
   const newsResponseJSON = await newsResponse.json()

   const commentParams = new URLSearchParams({
      'filter[news]': request.params.uuid,
      'sort': '-date_created'
   })
   const commentResponse = await fetch(apiURL + 'news_comments?' + commentParams)
   const commentResponseJSON = await commentResponse.json()

   response.render('news-article.liquid', {
      path: request.path,
      news: newsResponseJSON.data[0],
      comments: commentResponseJSON.data
   })
})

// alle pagina's

app.get('/over-ons', async function (request, response) {
   response.render('over-ons.liquid')
})

app.get('/contact', async function (request, response) {
   response.render('contact.liquid')
})

app.get('/over-ad', async function (request, response) {
   response.render('over-ad.liquid')
})

app.get('/over-ad/faq', async function (request, response) {
   response.render('faq.liquid')
})


app.get('/publicaties', async function (request, response) {
   response.render('publicaties.liquid')
})

app.get('/publicatie/:title', async function (request, response) {
   response.render('publicatie.liquid')
})

app.get('/lado', async function (request, response) {
   response.render('lado.liquid')
})

app.get('/events', async function (request, response) {
   response.render('events.liquid')
})

app.get('/events/:name', async function (request, response) {
   response.render('events.liquid')
})

// 404 page

app.use((request, response, next) => {
   //   response.status(404).send("Sorry can't find that!")
   response.render('404.liquid')

})