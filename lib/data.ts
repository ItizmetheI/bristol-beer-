export type CategorySlug = "domestic" | "import" | "craft" | "malt-seltzer";

export interface Category {
  slug: CategorySlug;
  label: string;
  blurb: string;
}

export const categories: Category[] = [
  { slug: "domestic", label: "Domestic", blurb: "The everyday lineup. Cold by the register, cases stacked deep in back." },
  { slug: "import", label: "Import", blurb: "Mexican lagers, Irish stout, Belgian pilsner. The stuff that travels." },
  { slug: "craft", label: "Craft", blurb: "Local and regional breweries, rotated as fast as they sell." },
  { slug: "malt-seltzer", label: "Malt & Seltzer", blurb: "Hard tea, cider, and seltzer for the cooler that isn't beer." },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  subcat: string;
  size: string;
  price: number;
  abv: string;
  inStock: boolean;
  description: string;
  img: string;
}

export const products: Product[] = [
  { id: "yuengling-traditional", slug: "yuengling-traditional", name: "Yuengling Traditional", category: "domestic", subcat: "Domestic lager", size: "24 pk", price: 26.99, abv: "4.5%", inStock: true, description: "America's oldest brewery, brewed forty minutes up the road in Pottsville. The default case on the wall.", img: "/images/yuengling-traditional.jpg" },
  { id: "miller-lite", slug: "miller-lite", name: "Miller Lite", category: "domestic", subcat: "Domestic light", size: "30 pk", price: 27.99, abv: "4.2%", inStock: true, description: "Light, crisp, and the first thing that goes on a hot Saturday.", img: "/images/miller-lite.jpg" },
  { id: "coors-light", slug: "coors-light", name: "Coors Light", category: "domestic", subcat: "Domestic light", size: "30 pk", price: 27.99, abv: "4.2%", inStock: true, description: "Cold-activated cans, straight off the truck into the cold box.", img: "/images/coors-light.jpg" },
  { id: "bud-light", slug: "bud-light", name: "Bud Light", category: "domestic", subcat: "Domestic light", size: "24 pk", price: 23.99, abv: "4.2%", inStock: true, description: "The one everyone's uncle asks for by name.", img: "/images/bud-light.jpg" },
  { id: "corona-extra", slug: "corona-extra", name: "Corona Extra", category: "import", subcat: "Import lager", size: "24 pk", price: 29.99, abv: "4.6%", inStock: true, description: "Bring your own lime. We just keep it cold.", img: "/images/corona-extra.jpg" },
  { id: "modelo-especial", slug: "modelo-especial", name: "Modelo Especial", category: "import", subcat: "Import lager", size: "24 pk", price: 29.99, abv: "4.4%", inStock: true, description: "Passed Corona as the top seller in the import cooler two summers running.", img: "/images/modelo-especial.jpg" },
  { id: "guinness-draught", slug: "guinness-draught", name: "Guinness Draught", category: "import", subcat: "Import stout", size: "8 pk", price: 15.99, abv: "4.2%", inStock: true, description: "Widget cans, poured slow if you've got the patience.", img: "/images/guinness-draught.jpg" },
  { id: "stella-artois", slug: "stella-artois", name: "Stella Artois", category: "import", subcat: "Import lager", size: "12 pk", price: 17.99, abv: "5.0%", inStock: true, description: "Belgian pilsner, the chalice glass optional.", img: "/images/stella-artois.jpg" },
  { id: "victory-hop-devil", slug: "victory-hop-devil", name: "Victory Hop Devil", category: "craft", subcat: "Craft IPA", size: "12 pk", price: 18.99, abv: "6.7%", inStock: true, description: "Downingtown's flagship IPA, unapologetically bitter.", img: "/images/victory-hop-devil.jpg" },
  { id: "dogfish-head-60min", slug: "dogfish-head-60-minute", name: "Dogfish Head 60 Minute", category: "craft", subcat: "Craft IPA", size: "12 pk", price: 19.99, abv: "6.0%", inStock: true, description: "Continuously hopped for the full boil. A session IPA that isn't shy about it.", img: "/images/dogfish-head-60min.jpg" },
  { id: "neshaminy-creek", slug: "neshaminy-creek", name: "Neshaminy Creek", category: "craft", subcat: "Craft local", size: "6 pk", price: 12.99, abv: "5.4%", inStock: true, description: "Croydon-brewed, as local as the cold box gets.", img: "/images/neshaminy-creek.jpg" },
  { id: "founders-all-day-ipa", slug: "founders-all-day-ipa", name: "Founders All Day IPA", category: "craft", subcat: "Craft session", size: "15 pk", price: 21.99, abv: "4.7%", inStock: true, description: "A session IPA built for the whole cooler, not just the first round.", img: "/images/founders-all-day-ipa.jpg" },
  { id: "twisted-tea", slug: "twisted-tea-original", name: "Twisted Tea Original", category: "malt-seltzer", subcat: "Malt", size: "12 pk", price: 18.99, abv: "5.0%", inStock: true, description: "Hard iced tea, unsweetened enough to still taste like tea.", img: "/images/twisted-tea.jpg" },
  { id: "angry-orchard", slug: "angry-orchard-crisp", name: "Angry Orchard Crisp", category: "malt-seltzer", subcat: "Cider", size: "12 pk", price: 17.99, abv: "5.0%", inStock: true, description: "Crisp apple cider, the go-to for the one guest who doesn't drink beer.", img: "/images/angry-orchard.jpg" },
  { id: "vizzy-variety", slug: "vizzy-variety-pack", name: "Vizzy Variety", category: "malt-seltzer", subcat: "Hard seltzer", size: "12 pk", price: 18.99, abv: "5.0%", inStock: true, description: "Vitamin-C-boosted seltzer in a mixed case, so nobody fights over flavors.", img: "/images/vizzy-variety.jpg" },
  { id: "mighty-swell", slug: "mighty-swell", name: "Mighty Swell", category: "malt-seltzer", subcat: "Hard seltzer", size: "12 pk", price: 17.99, abv: "5.0%", inStock: false, description: "Low-cal seltzer, sold out most weekends before it hits the shelf.", img: "/images/mighty-swell.jpg" },
];

export function productsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export interface Slush {
  no: string;
  slug: string;
  name: string;
  note: string;
  description: string;
  img: string;
}

export const slushes: Slush[] = [
  { no: "01", slug: "red-white-berry", name: "Red, White & Berry", note: "Cherry, citrus and blue raspberry, spun cold.", description: "The one people build a whole trip around. Cherry, citrus, and blue raspberry layered in the same cup.", img: "/images/slush-red-white-berry.jpg" },
  { no: "02", slug: "peach-mango", name: "Peach Mango", note: "The one that sells out on Saturdays.", description: "Peach and mango, spun heavy on the fruit. Machine runs dry most Saturday afternoons.", img: "/images/slush-peach-mango.jpg" },
  { no: "03", slug: "pineapple-coconut", name: "Pineapple Coconut", note: "Tropical, heavy on the coconut.", description: "Pina-colada energy without the blender. Heavier on coconut than most versions.", img: "/images/slush-pineapple-coconut.jpg" },
  { no: "04", slug: "strawberry-lemon", name: "Strawberry Lemon", note: "Tart, cold, gone in five minutes.", description: "Tart lemon cut with strawberry. Goes fast, doesn't last long in the cup either.", img: "/images/slush-strawberry-lemon.jpg" },
  { no: "05", slug: "blue-raspberry", name: "Blue Raspberry", note: "House favorite with the after-work crowd.", description: "Classic blue raspberry, the one the after-work regulars order without looking at the board.", img: "/images/slush-blue-raspberry.jpg" },
  { no: "06", slug: "watermelon", name: "Watermelon", note: "Summer only, while the machines hold up.", description: "Watermelon, summer-only, running until the machine gives out for the season.", img: "/images/slush-watermelon.jpg" },
];

export interface Rtd {
  slug: string;
  name: string;
  kind: string;
  abv: string;
  price: number;
  description: string;
  img: string;
}

export const rtds: Rtd[] = [
  { slug: "high-noon-peach", name: "High Noon Peach", kind: "Vodka seltzer", abv: "4.5%", price: 16.99, description: "Real vodka and real peach juice, no malt base hiding underneath.", img: "/images/rtd-high-noon.jpg" },
  { slug: "surfside-iced-tea", name: "Surfside Iced Tea", kind: "Vodka tea", abv: "4.5%", price: 16.99, description: "Vodka iced tea, canned cold, the porch-drink of the RTD aisle.", img: "/images/rtd-surfside.jpg" },
  { slug: "cutwater-margarita", name: "Cutwater Margarita", kind: "Tequila cocktail", abv: "12.5%", price: 13.99, description: "Real tequila margarita in a can, stronger than most of the shelf next to it.", img: "/images/rtd-cutwater.jpg" },
  { slug: "stateside-lemonade", name: "Stateside Lemonade", kind: "Vodka cocktail", abv: "6%", price: 15.99, description: "Vodka lemonade, built for the cooler at a cookout.", img: "/images/rtd-stateside.jpg" },
  { slug: "cayman-jack-margarita", name: "Cayman Jack Margarita", kind: "Malt cocktail", abv: "5.8%", price: 14.99, description: "Malt-based margarita, easy-drinking and priced for a full case.", img: "/images/rtd-cayman-jack.jpg" },
  { slug: "buzzballz-chillers", name: "Buzzballz Chillers", kind: "Cocktail ball", abv: "15%", price: 3.49, description: "The single-serve cocktail ball. Grab one on the way to the register.", img: "/images/rtd-buzzballz.jpg" },
  { slug: "lone-river-ranch-water", name: "Lone River Ranch Water", kind: "Hard seltzer", abv: "4%", price: 16.99, description: "Texas ranch water, lime-forward and low-cal.", img: "/images/rtd-lone-river.jpg" },
  { slug: "happy-dad-variety", name: "Happy Dad Variety", kind: "Hard seltzer", abv: "5%", price: 15.99, description: "Mixed-flavor case, the one the younger crowd asks for by name.", img: "/images/rtd-happy-dad.jpg" },
];

export interface Review {
  name: string;
  quote: string;
}

export const reviews: Review[] = [
  { name: "Jemlnlx", quote: "Deepest craft selection on this side of Route 13. They'll special-order a case if you ask." },
  { name: "Kaitlynn O'Neill", quote: "The peach mango slush alone is worth the drive on a Saturday." },
  { name: "Sydney Schukei", quote: "Prices beat the state store every time, and they carry stuff nobody else stocks." },
  { name: "Samuel Ainscough", quote: "Parking right out front, in and out with a case in five minutes." },
  { name: "Meaghan Kavanagh", quote: "Asked about a seasonal IPA and the guy behind the counter knew the ABV off the top of his head." },
  { name: "Marcus Feliciano", quote: "Six slush machines and they're never all out of flavor at once. Rare." },
];

export const brands = [
  "Yuengling", "Modelo", "Victory", "Guinness", "Dogfish Head", "Twisted Tea",
  "High Noon", "Surfside", "Angry Orchard", "Neshaminy Creek", "Founders", "Stella Artois",
];

export const rtdSpotlightBrands = ["High Noon", "Cutwater", "Surfside", "Lone River", "Cayman Jack", "Happy Dad"];
