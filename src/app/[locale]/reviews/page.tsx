import { getTranslations } from "next-intl/server";
import ReviewsTabs, { type Review } from "@/components/ReviewsTabs";

const cattleyaReviews: Review[] = [
  {
    name: "Sara",
    date: "aprile 2026",
    text: "Ho soggiornato in questo appartamento per 1 mese; è andato tutto bene ed è in una buona posizione per chi lavora all'Ospedale San Raffaele (a 6 minuti dalla linea della metropolitana). Supermercato raggiungibile a piedi in 5 minuti. Host attento e disponibile. Balcone fantastico; l'appartamento gode di molta luce naturale.",
  },
  {
    name: "Bipasha",
    date: "giugno 2025",
    text: "Luisa è una host adorabile: molto accomodante, accogliente, reattiva e calorosa. La mia richiesta di check-in e check-out flessibili è stata accolta immediatamente. L'appartamento in sé è abbastanza confortevole: sebbene situato un po' lontano dal centro città, ha offerto una pausa tanto necessaria dalle strade e dai quartieri trafficati e rumorosi. Anche la fornitura di un frigorifero e di una lavatrice ha aiutato molto! La cucina è anche ben attrezzata con tutto il necessario per la preparazione dei pasti. La mia parte preferita era il balcone privato, molto spazioso, con una splendida vista e un ambiente accogliente per gustare una tazza di caffè al mattino presto o un aperitivo fresco la sera!",
  },
  {
    name: "Kadhim",
    location: "Calgary, Canada",
    date: "aprile 2025",
    text: "Ho trascorso un ottimo soggiorno a casa di Luisa, è a pochi passi dalla linea della metropolitana e dalla stazione degli autobus, a meno di 20 minuti di metropolitana dal Duomo e direttamente alla stazione centrale. Il posto è tranquillo di notte e pulito. Faceva cambiare le lenzuola e gli asciugamani ogni settimana. Lo consiglio vivamente.",
  },
  {
    name: "Madigan",
    date: "ottobre 2024",
    text: "Luisa è un'ottima host, è super reattiva e amichevole! L'appartamento è vicino alla metropolitana, il che rende facile spostarsi in città",
  },
  {
    name: "Anna",
    date: "marzo 2025",
    text: "Grazie alla padrona di casa per l'ottimo appartamento e per la calorosa accoglienza e la disponibilità!",
  },
  {
    name: "Irina",
    date: "dicembre 2023",
    text: "Splendido appartamento con fantastica vista sulla città. Accogliente e confortevole. Molti supermercati sono vicini alla posizione. La stazione della metropolitana si trova a soli 5 minuti dall'appartamento. Luisa è una super host. Assolutamente consigliata",
  },
  {
    name: "Ekaterina",
    date: "agosto 2023",
    text: "Grazie Luisa! Incredibile appartamento, vicinissimo alla metro, molto pulito e hai tutto il necessario! Sono stato molto felice di vivercisi! Un caro saluto a tutti, lo consiglio vivamente a tutti! Grazie mille ❤",
  },
  {
    name: "Howard",
    date: "settembre 2022",
    text: "Luisa è stata una host eccellente. Ha comunicato con noi prima del nostro arrivo e si è presa del tempo per personalizzare le istruzioni per muoversi in città in base ai piani che avevamo stabilito (non parliamo italiano e non abbiamo esperienza con i viaggi all'estero - inutile dirlo, ci saremmo persi). Non ha mai mancato di fare quel passo in più, ci ha aiutato a procurarci un taxi per raggiungere l'aeroporto e ha persino mandato sua figlia a trovarci quel primo giorno. L'appartamento era perfetto: pulito, confortevole e ben attrezzato. Aveva anche una bellissima vista sulla città con una terrazza che si estende da 2 lati. I supermercati erano vicini e abbiamo potuto conservare gli snack, i cibi per la colazione e gli avanzi dei ristoranti locali per gustarli più tardi sulla terrazza (che era attrezzata con tavolo e sedie e piante incantevoli). Non posso dire abbastanza cose positive sulla nostra host Luisa e su queste splendide sistemazioni",
  },
  {
    name: "Mikayla",
    location: "Ontario, Canada",
    date: "luglio 2022",
    text: "Posto fantastico. Ho soggiornato qui per quasi 5 mesi ed è stato perfetto. Tutto ciò di cui hai bisogno (inclusi supermercato, farmacia e metropolitana della linea verde) a 5 minuti a piedi. Ottima comunicazione con Luisa. Tutti i problemi che si sono verificati (pochissimi) sono stati risolti rapidamente. Il balcone è la parte migliore: è davvero enorme. Lo consiglierei a chiunque!",
  },
  {
    name: "Paolo",
    date: "ottobre 2022",
    text: "Tutto per il meglio. Il monolocale è molto accogliente, luminoso e silenzioso, in un quartiere ben fornito di tutto e ben collegato. È stato un soggiorno piacevole e comodo.",
  },
  {
    name: "Oradee",
    date: "dicembre 2022",
    text: "L'alloggio è molto buono, esattamente come nella foto. Il padrone di casa è molto gentile. Mi sono ammalato durante il mio soggiorno, e il padrone di casa si è preso cura di me e mi ha aiutato molto bene. Altamente consigliato ;)",
  },
  {
    name: "Nora",
    date: "ottobre 2022",
    text: "Luisa ci ha dato un caloroso benvenuto, mi è piaciuta subito come host. Inoltre, vive nella porta accanto e risponde rapidamente per app, se succede qualcosa. L'appartamento è davvero carino e perfetto per una persona (come me) ma anche per una coppia. Mi sono sentita subito \"a casa\". La parte migliore è sicuramente la grande finestra con vista e tanta luce solare al mattino. La metropolitana è a circa cinque minuti a piedi e ci sono un sacco di negozi e un grande supermercato in strada. Ci torneremo sicuramente.",
  },
  {
    name: "Matteo",
    date: "aprile 2021",
    text: "Appartamento molto carino e confortevole con una fantastica vista sullo skyline dei grattacieli di Milano. Posizione ottima, a pochi minuti a piedi dalla metro verde e dal naviglio della Martesana. Luisa è stata un'ottima host, attenta ai dettagli e disponibile al bisogno. Decisamente raccomandato!",
  },
  {
    name: "Stefano",
    date: "maggio 2019",
    text: "Monolocale ottimo, a poca distanza dalla metro di Cimiano; nella zona ci sono supermercati e altre attività. Vista unica sulla città di Milano dal bellissimo terrazzo. Appartamento attrezzato e completo di tutto, pulito e curato nei dettagli. Luisa è molto cordiale, precisa e accogliente e si è assicurata molte volte che non mi mancasse nulla. Ottimo per un viaggio a Milano o per chi come me ci viene per lavoro e si deve fermare per un po'.",
  },
  {
    name: "Lorenzo",
    date: "luglio 2019",
    text: "Appartamento a pochi minuti a piedi (circa 5) dalla fermata della Metro Verde CIMIANO. L'abitazione è molto confortevole e curata nei dettagli; a disposizione forno a microonde, lavatrice, stendibiancheria, macchinetta del Caffè. L'host ha continuamente fornito assistenza, sia prima dell'arrivo che durante il soggiorno. Sicuramente torneremo e ne consiglieremo questo appartamento.",
  },
];

const sakuraReviews: Review[] = [
  {
    name: "Chloe",
    location: "Cleveland, Ohio",
    date: "aprile 2026",
    text: "Mi è piaciuto molto il mio soggiorno qui! L'alloggio in sé è molto pulito e ordinato, ed era persino più grande di quanto mi aspettassi: offre lo spazio perfetto per far sentire a proprio agio una persona, soprattutto grazie al portico privato quando fa caldo. La cosa che mi è piaciuta di più è stata la posizione: ovviamente, si trova in una comoda posizione vicino alla metropolitana, ma anche a pochi minuti a piedi dal grazioso canale in una direzione e dallo splendido e ampio Parco Lambro nell'altra direzione. A pochi minuti a piedi si trovano anche ottimi negozi di alimentari (panetteria, macelleria, frutta e verdura). Ho trascorso un soggiorno fantastico!",
  },
  {
    name: "Patrise",
    date: "dicembre 2025",
    text: "Mi sono sentita davvero a casa durante il mio soggiorno. L'appartamento è vicinissimo alla metropolitana, il che ha reso estremamente facile spostarsi. Nell'appartamento, tutto è nuovissimo. La cucina è completamente attrezzata e il riscaldamento funziona perfettamente, il che è stato essenziale durante l'inverno.\nC'è un balcone fantastico, purtroppo, dato che era inverno, è stato più difficile goderne quanto avrei voluto.\nLuisa è stata meravigliosa, sempre disponibile e molto gentile, il che mi ha fatto sentire completamente a mio agio. Ogni settimana, una signora molto gentile veniva a cambiare gli asciugamani e le lenzuola, il che è stato un ottimo tocco in più.\nNel complesso, un soggiorno davvero eccellente. Lo consiglierei sicuramente!",
  },
  {
    name: "Miguel",
    date: "novembre 2025",
    text: "Mi sentivo a casa. Luisa è una host eccezionale, cordiale, che si assicura sempre che tutto vada bene. La descrizione e le foto corrispondono al 100%. È un alloggio altamente consigliato. Grazie mille di tutto, Luisa!",
  },
  {
    name: "Christian",
    date: "ottobre 2025",
    text: "Ogni volta che vado in Italia, mi ritrovo a soggiornare a casa sua, perché è molto pulita e comodissima per raggiungere la metro, il supermercato e tutto il necessario. Questo posto è il migliore. Un ringraziamento speciale a Luisa!",
  },
  {
    name: "Natalia",
    date: "ottobre 2025",
    text: "Ottimo monolocale con un enorme balcone incantevole, ho soggiornato qui per un mese per lavoro e viaggi, lo consiglio vivamente. Segnale Wi-Fi forte, tutti i servizi necessari sono forniti. Molto vicino alla stazione della metropolitana, a 30 minuti dal centro della città. Luisa è una host meravigliosa, sempre felice di aiutare e dare consigli. Consigliatissimo per soggiorni brevi e lunghi.",
  },
  {
    name: "Margot",
    location: "Halifax, Canada",
    date: "luglio 2025",
    text: "Grazie Luisa per il bellissimo soggiorno! L'appartamento è pulito e perfetto per una persona. Il patio è fantastico durante l'estate e l'aria condizionata è stata un vero toccasana! Il fiume Martesana è molto vicino ed era bellissimo a luglio. Mi è piaciuto molto il mio soggiorno, grazie mille!",
  },
  {
    name: "Tobias",
    date: "giugno 2025",
    text: "Questa posizione è perfetta per soggiorni di media durata, molto pulita, ben collegata al centro città tramite la metropolitana e vicino a un grande supermercato che copre tutte le esigenze quotidiane. L'aria condizionata è stata un piacere nelle giornate calde durante il mio soggiorno, e le serate sono state abbastanza piacevoli sul grande balcone. Luisa è una host molto reattiva e cordiale, mi ha aiutato a orientarmi a Milano, anche per trovare l'opzione migliore per il biglietto della metropolitana. Ogni volta che avevo una domanda, rispondeva immediatamente. Posso solo consigliare di soggiornare in questo alloggio!",
  },
  {
    name: "Najwa",
    location: "New York, Stato di New York",
    date: "aprile 2025",
    text: "Sono molto felice di aver soggiornato in questo alloggio, che era pulito e carino, 🥰 vicino alla stazione della metropolitana, a circa 7 minuti. Luisa è stata molto gentile e amichevole. Mi ha permesso di lasciare i bagagli prima dell'orario di check-in. Ho trascorso un piacevole soggiorno, lo consiglio vivamente 😍 😍",
  },
  {
    name: "Gustavo",
    date: "febbraio 2025",
    text: "Sono stato al posto per un mese intero e sono molto soddisfatto. L'appartamento è molto bello e ci si può sentire subito a casa non appena si entra. La proprietaria Luisa è stata estremamente accogliente, risponde rapidamente ed è disponibile. La posizione è ottima. Tutto era come nelle foto che avevo visto prima.",
  },
  {
    name: "Náyia",
    date: "giugno 2024",
    text: "Ho avuto l'opportunità di soggiornare a Milano per due mesi per impegni professionali presso l'Ospedale San Raffaele. Il trasporto per l'ospedale è stato molto comodo, anche se si trova leggermente lontano dal centro città.\nLa signora Luisa è stata una host eccezionale, dimostrando cordialità e disponibilità per tutta la durata del mio soggiorno. La casa era pulitissima e in ordine.\nConsiglio vivamente questo alloggio a chiunque stia pensando di trascorrere un breve soggiorno a Milano.",
  },
  {
    name: "Nils",
    date: "aprile 2024",
    text: "Soggiornare in questo alloggio è stato un piacere assoluto. La calorosa ospitalità di Luisa mi ha fatto sentire davvero a casa fin dal momento in cui siamo arrivati. Non solo la posizione era comodamente vicina alla metropolitana, ma l'host si è impegnato al massimo per garantire il nostro comfort per tutta la durata del nostro soggiorno.",
  },
  {
    name: "Julia",
    date: "ottobre 2022",
    text: "Sono stata due mesi per motivi di lavoro a Milano nel mini-appartamento e mi sono trovata bene. Ci sono tutte le cose essenziali come descritto. Nelle vicinanze ci sono supermercati e un parco lungo il Naviglio Martesana per passeggiare o correre. L'aspetto più importante è stato però il collegamento con i mezzi pubblici e quindi ero contenta di avere la M2 vicino. Inoltre Luisa è stata molto gentile e disponibile per qualsiasi domanda. Grazie e lo consiglio veramente per un breve soggiorno!",
  },
];

export default async function ReviewsPage() {
  const t = await getTranslations("reviews");

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
          {t("title")}
        </p>
        <h1 className="mt-3 font-praise text-5xl text-[#9B51E0]">
          {t("subtitle")}
        </h1>
        <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-[#9B51E0] to-[#ED3FC1]" />

        <ReviewsTabs
          cattleyaReviews={cattleyaReviews}
          sakuraReviews={sakuraReviews}
          matchaReviews={[]}
        />
      </section>
    </div>
  );
}
