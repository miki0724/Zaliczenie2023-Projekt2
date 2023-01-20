const productData = [
  {
    id: 1,
    nameK: "BAKALLAND ",
    name: "Orzeszki ziemne",
    image: "../images/ziemne.jpg",
    price: 6.49,
    rating: 5,
    description:
      "Orzeszki ziemne, znane również jako orzeszki arachidowe lub fistaszki, to jedna z najpopularniejszych i najczęściej wybieranych przekąsek. Niezastąpione do chrupania w trakcie oglądania ulubionego filmu lub serialu oraz jako przekąska na imprezę. Orzeszki ziemne Bakalland są idealnie wypieczone,...",
  },
  {
    id: 2,
    nameK: "Bio Planet",
    name: "Migdały 1 kg ",
    image: "../images/migdaly.jpg",
    price: 69.99,
    rating: 5,
    description:
      "Ekologiczne migdały to doskonały produkt do spożywania pod każdą postacią. Polecamy jako samodzielną przekąskę w szkole lub w pracy, a także jako dodatek do wypieków, deserów, musli, do porannej owsianki oraz likierów i nalewek owocowych.",
  },
  {
    id: 3,
    nameK: "Bio Planet",
    name: "Orzechy nerkowca",
    image: "../images/nerkowca.jpg",
    price: 61.99,
    rating: 5,
    description:
      "Ekologiczne orzechy nerkowca charakteryzują się delikatnym, lekko słodkim smakiem. Stanowią pożywną przekąskę, a także ciekawy dodatek do duszonych lub pieczonych warzyw, ciast, deserów i sałatek.",
  },
  {
    id: 4,
    nameK: "Bio Planet",
    name: "Orzechy włoskie ",
    image: "../images/wloskie.jpg",
    price: 59.99,
    rating: 5,
    description:
      "Ekologiczne ORZECHY WŁOSKIE charakteryzują się ciekawym słodko-gorzkim smakiem. Polecamy jako dodatek do sałatek (najlepiej lekko podprażone) lub jako samodzielną przekąskę.",
  },
  {
    id: 5,
    nameK: "Bio Planet",
    name: "Orzechy laskowe",
    image: "../images/laskowe.jpg",
    price: 58.99,
    rating: 5,
    description:
      "Ekologiczne ORZECHY LASKOWE to bardzo pożywny owoc leszczyny. Są podstawowym składnikiem mieszanki studenckiej. Zmielone grubo lub na mąkę wchodzą w skład ciast, past i innych deserów. Doskonale smakują jako dodatek do pieczenia chleba lub do porannej owsianki.",
  },
  {
    id: 6,
    nameK: "HOUSE OF ASIA",
    name: "Mleczko kokosowe",
    image: "../images/coconut_milk.jpg",
    price: 10.26,
    rating: 5,
    description:
      "Mleczko kokosowe premium to bardzo wysokiej jakości produkt, uzyskiwany z pierwszego tłoczenia świeżego bielma kokosowego. Ma pyszny kokosowy smak i gładką konsystencję. Jest doskonała dla osób z nietolerancją laktozy oraz dla wegetarian. Śmietanka kokosowa to produkt w 100% pochodzenia roślinnego....",
  },
  {
    id: 7,
    nameK: "Hortex  ",
    name: "Mieszanka warzywna",
    image: "../images/meksyk.jpg",
    price: 5.49,
    rating: 5,
    description:
      "warzywa w zmiennych proporcjach: marchew, fasola szparagowa, KUKURYDZA, groch zielony, papryka, fasola czerwona blanszowana, cebula",
  },
  {
    id: 8,
    nameK: "Auchan ",
    name: "Mięso mielone",
    image: "../images/mieso.jpg",
    price: 10.99,
    rating: 5,
    description:
      "Mięso mielone – mięso bez kości, które zostało rozdrobnione na kawałki i zawiera mniej niż 1% soli. Produkt ten zaliczany jest do grupy produktów nieprzetworzonych lub przetworzonych w niewielkim stopniu.",
  },
  {
    id: 9,
    nameK: "Bio Planet",
    name: "Jogurt proteinowya",
    image: "../images/jogurt.jpg",
    price: 2.55,
    rating: 5,
    description:
      "Ważną rolę w diecie mężczyzny odgrywa białko. Ten składnik odżywczy pomaga w utrzymaniu odpowiedniej masy mięśniowej, jak również zapobiega nadmiernemu przybieraniu na wadze. Białka pełnią podstawowe funkcje budulcowe w naszym organizmie, są podstawową strukturą wszystkich żywych komórek. Jest niezbędne w codziennej diecie, a aminokwasy, których dostarcza, pozwalają na bieżąco odbudowywać proteiny naszego organizmu. Jest ono niezwykle cennym składnikiem żywieniowym intensyfikującym przemianę materii, ponieważ do jego trawienia organizm zużywa duże pokłady energii.",
  },
  {
    id: 10,
    nameK: "Perła",
    name: "Piwo bezalkoholowe ",
    image: "../images/perla.webp",
    price: 3.59,
    rating: 5,
    description:
      "Orzeźwiające piwo będące kwintesencją tradycyjnych metod produkcji i najnowszych rozwiązań stosowanych w browarnictwie. Posiada charakterystyczny, zdecydowany smak, złocisty kolor oraz subtelny zapach aromatycznego chmielu. Walory te sprawiają, że w większości po Perłę Export sięgają młodzi konsumenci. Perła Export dostępna jest w dystrybucji ogólnopolskiej.",
  },
  {
    id: 11,
    nameK: "Targroch  ",
    name: "Erytrol",
    image: "../images/erytrol.webp",
    price: 45.09,
    rating: 5,
    description:
      "Erytrytol to poliol o słodkim smaku, zbliżonym do smaku zwykłego buraczanego cukru. Charakteryzuje go znikoma kaloryczność wynosząca w przybliżeniu 0 kcal. Używany w nadmiarze może wywołać efekt przeczyszczający lub przyspieszający materię zwłaszcza dla osób nieprzyzwyczajonych. ",
  },
  {
    id: 12,
    nameK: "Rabenhorst",
    name: "Bogactwo Żelaza",
    image: "../images/plus.webp",
    price: 27.37,
    rating: 5,
    description:
      "sok bogactwo żelaza sprawdził się podczas mojej pierwszej i drugiej ciąży w których miałam niedobór żelaza a nie chciałam brać tabletek, dlatego polecam zwłaszcza wszystkim kobietom w ciąży i innym osobom cierpiącym na niedobór żelaza",
  },
  {
    id: 13,
    nameK: "Yango",
    name: "Dziurawiec 90 Kapsułek",
    image: "../images/dziurawiec.webp",
    price: 36.99,
    rating: 5,
    description:
      "zalecane dzienne spożycie: 1 kapsułka raz dziennie. Kapsułkę połknąć i popić dużą ilością wody, po posiłku. Nie należy przekraczać zalecanej porcji do spożycia w ciągu dnia.",
  },
  {
    id: 14,
    nameK: "Bioagros",
    name: "Dolmadakia (Greckie Gołąbki)",
    image: "../images/dolma.webp",
    price: 21.99,
    rating: 5,
    description:
      "Dolmadakia (Greckie Gołąbki) kapsułka raz dziennie. Kapsułkę połknąć i popić dużą ilością wody, po posiłku. Nie należy przekraczać zalecanej porcji do s",
  },
];
export default productData;
