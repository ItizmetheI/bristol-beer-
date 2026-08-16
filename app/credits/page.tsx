const CREDITS: { file: string; title: string; url: string; creator: string; license: string }[] = [
  { file: "angry-orchard", title: "The impeachapple emperor- made with a shot of peach Ciroc and a bottle of angry orchard or your favorite hard cider- This cocktail is also known as I M E M- Created on a an emperor island raft, a handful of fr 2014-07-04 23-54", url: "https://commons.wikimedia.org/w/index.php?curid=33751963", creator: "User:Rdotchhun", license: "CC BY-SA" },
  { file: "bud-light", title: "Canadian Ire", url: "https://www.flickr.com/photos/37804160@N00/2963852896", creator: "SqueakyMarmot", license: "CC BY-SA" },
  { file: "coors-light", title: "Free cold beer pint glass", url: "https://www.rawpixel.com/image/5917001/image-public-domain-glass-free", creator: "Unknown", license: "CC CC0" },
  { file: "corona-extra", title: "Corona Extra beer bottle (2019)", url: "https://commons.wikimedia.org/w/index.php?curid=78718516", creator: "Bruce The Deus", license: "CC BY-SA" },
  { file: "dogfish-head-60min", title: "Three British craft brewery beer cans", url: "https://commons.wikimedia.org/w/index.php?curid=115690355", creator: "JIP", license: "CC BY-SA" },
  { file: "founders-all-day-ipa", title: "My first Good People 6-pack", url: "https://www.flickr.com/photos/29218907@N00/5521415866", creator: "acnatta", license: "CC BY" },
  { file: "guinness-draught", title: "313:365", url: "https://www.flickr.com/photos/37543635@N00/6014513303", creator: "stormwarning.", license: "CC BY-SA" },
  { file: "hero-store", title: "DSCF2701", url: "https://www.flickr.com/photos/13951072@N00/2509042354", creator: "bradleygee", license: "CC BY" },
  { file: "mighty-swell", title: "Chuhai Japanese Hard Seltzer", url: "https://commons.wikimedia.org/w/index.php?curid=109494100", creator: "Pigment-Ink", license: "CC BY-SA" },
  { file: "miller-lite", title: "The Making of Harry Potter 29-05-2012", url: "https://www.flickr.com/photos/28752865@N08/7472381344", creator: "Karen Roe", license: "CC BY" },
  { file: "modelo-especial", title: "Negra Modelo", url: "https://www.flickr.com/photos/67975030@N00/2878339035", creator: "Bernt Rostad", license: "CC BY" },
  { file: "neshaminy-creek", title: "3 floors, different offerings. Taproom- Craft beer, bottled punch, whiskeys, lunch. Parlor- Small plates, punch, 72 historically-accurate cocktails Occasional Room- Holding Room for Parlor, Whisky Tasting Station, private parties", url: "https://commons.wikimedia.org/w/index.php?curid=127359306", creator: "loustejskal.com", license: "CC BY" },
  { file: "rtd-buzzballz", title: "Homemade Wine & Honey Plum Cocktail (recipe in description)", url: "https://www.flickr.com/photos/156097806@N07/35503203443", creator: "NuCastiel", license: "CC BY" },
  { file: "rtd-cayman-jack", title: "Margarita 410", url: "https://www.flickr.com/photos/72949902@N00/5076907896", creator: "TheCulinaryGeek", license: "CC BY" },
  { file: "rtd-cutwater", title: "Summertime Sunshine", url: "https://www.flickr.com/photos/12037949632@N01/3608116008", creator: "Stewart", license: "CC BY" },
  { file: "rtd-happy-dad", title: "RANCH WATER Hard Seltzer", url: "https://www.flickr.com/photos/47121680@N00/49974743938", creator: "joncutrer", license: "CC BY" },
  { file: "rtd-high-noon", title: "Alka Seltzer", url: "https://www.flickr.com/photos/15507194@N00/1412762050", creator: "Spencer E Holtaway", license: "CC BY-ND" },
  { file: "rtd-lone-river", title: "RANCH WATER Hard Seltzer", url: "https://www.flickr.com/photos/47121680@N00/49974743938", creator: "joncutrer", license: "CC BY" },
  { file: "rtd-stateside", title: "Ameretto Sour", url: "https://www.flickr.com/photos/34883952@N02/4242448204", creator: "StuartWebster", license: "CC BY" },
  { file: "rtd-surfside", title: "C-ICE Cannabis Ice Tea", url: "https://www.flickr.com/photos/36514345@N00/2697333507", creator: "wstryder", license: "CC BY" },
  { file: "slush-blue-raspberry", title: "Bombay Martini", url: "https://www.flickr.com/photos/34883952@N02/4203728077", creator: "StuartWebster", license: "CC BY" },
  { file: "slush-machine", title: "ICEE Machine in the Office", url: "https://www.flickr.com/photos/91609964@N00/2827915057", creator: "nodomain1", license: "CC BY" },
  { file: "slush-peach-mango", title: "smoothie", url: "https://www.flickr.com/photos/18161271@N00/5182744112", creator: "shannonkringen", license: "CC BY-SA" },
  { file: "slush-pineapple-coconut", title: "Pina Colada 430", url: "https://www.flickr.com/photos/72949902@N00/5076908250", creator: "TheCulinaryGeek", license: "CC BY" },
  { file: "slush-red-white-berry", title: "cherry slush", url: "https://www.flickr.com/photos/23307937@N04/7238068148", creator: "frankieleon", license: "CC BY" },
  { file: "slush-strawberry-lemon", title: "City Java smoothies", url: "https://www.flickr.com/photos/49978063@N00/5476579629", creator: "khawkins04", license: "CC BY" },
  { file: "slush-watermelon", title: "No 9: I love my blender", url: "https://www.flickr.com/photos/11399912@N00/887886846", creator: "basykes", license: "CC BY" },
  { file: "stella-artois", title: "JUST TASTED", url: "https://www.flickr.com/photos/60417477@N00/8513521471", creator: "whologwhy", license: "CC BY" },
  { file: "store-interior", title: "DSCF2701", url: "https://www.flickr.com/photos/13951072@N00/2509042354", creator: "bradleygee", license: "CC BY" },
  { file: "twisted-tea", title: "Late night iced honey lemon tea with @mywifescookin! #need #caffeine #sweet #tart #refreshing #honey #lemon #tea #food #instafood #foodporn", url: "https://www.flickr.com/photos/34665120@N03/8099258181", creator: "dchantastic", license: "CC BY" },
  { file: "victory-hop-devil", title: "Kel's Beer Selections - 6/18/10", url: "https://www.flickr.com/photos/35835590@N07/4722665133", creator: "Kel and Val", license: "CC BY" },
  { file: "vizzy-variety", title: "Paradise Found", url: "https://www.flickr.com/photos/51035768826@N01/19921805", creator: "Afroswede", license: "CC BY" },
  { file: "yuengling-traditional", title: "beertaccini's lablanche 2014 - IMG_0424", url: "https://www.flickr.com/photos/15216811@N06/14346781869", creator: "Nicola since 1972", license: "CC BY" },
];

export default function CreditsPage() {
  return (
    <div className="mx-auto max-w-[900px] px-[clamp(20px,5vw,72px)] pb-25 pt-20">
      <div className="kicker">Attribution</div>
      <h1 className="mt-3.5 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.04em] text-[var(--color-text)]">Photo &amp; video credits</h1>
      <p className="mt-3.5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--text-muted)]">
        Product and store photography on this site is sourced from openly-licensed images via{" "}
        <a href="https://openverse.org" target="_blank" rel="noopener" className="text-[var(--color-orange-light)]">
          Openverse
        </a>
        . Most require attribution under their Creative Commons license, credited below by the local filename used on the site.
      </p>
      <p className="mt-2.5 max-w-[60ch] text-[15px] leading-relaxed text-[var(--text-muted)]">
        The homepage hero video,{" "}
        <a href="https://mixkit.co/free-stock-video/filling-a-mug-with-beer-on-a-dark-background-8692/" target="_blank" rel="noopener" className="text-[var(--color-orange-light)]">
          &quot;Filling a mug with beer on a dark background,&quot;
        </a>{" "}
        is courtesy of Mixkit under the{" "}
        <a href="https://mixkit.co/license/#videoLicense" target="_blank" rel="noopener" className="text-[var(--color-orange-light)]">
          Mixkit Stock Video Free License
        </a>{" "}
        (no attribution required, credited here anyway).
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {["Image", "Title", "Creator", "License"].map((h) => (
                <th key={h} className="border-b border-[var(--border-soft)] px-3 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CREDITS.map((c) => (
              <tr key={c.file}>
                <td className="border-b border-[var(--border-soft)] px-3 py-2.5 align-top text-[var(--text-muted)]">{c.file}</td>
                <td className="border-b border-[var(--border-soft)] px-3 py-2.5 align-top">
                  <a href={c.url} target="_blank" rel="noopener" className="text-[var(--color-orange-light)]">
                    {c.title}
                  </a>
                </td>
                <td className="border-b border-[var(--border-soft)] px-3 py-2.5 align-top text-[var(--text-muted)]">{c.creator}</td>
                <td className="border-b border-[var(--border-soft)] px-3 py-2.5 align-top text-[var(--text-muted)]">{c.license}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="/" className="mt-7 inline-block text-[var(--color-orange-light)]">
        ← Back to Bristol Beer Co.
      </a>
    </div>
  );
}
