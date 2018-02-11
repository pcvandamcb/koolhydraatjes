const products = Object.freeze([
  {
    id: 1,
    name: 'stroopwafel',
    brand: 'AH',
    kh100gr: 50, // Koolhydraten per 100 gram
    serving: 50, // Portie/stuk gewicht in gram
    notes: 'lekkah lekkah'
  },
  {
    id: 2,
    name: "M&M's",
    brand: 'AH',
    kh100gr: 80,
    serving: 60,
    notes: 'veel kleurtjes, veel smaken'
  },
  {
    id: 3,
    name: 'aardappelpartjes',
    brand: 'cela vita',
    kh100gr: 45,
    serving: 150,
    notes: 'inclusief kruiden'
  }
]);

export default products;
