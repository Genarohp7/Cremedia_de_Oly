import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { hasContact, siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: siteConfig.businessName,
    description: siteConfig.description,
    logo: siteConfig.logo
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <Image
              src={assetPath("/images/generated/hero-gourmet.png")}
              alt=""
              width={1536}
              height={1024}
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-content">
            <p className="claim">{siteConfig.claim}</p>
            <h1 id="hero-title">{siteConfig.businessName}</h1>
            <p className="hero-copy">{siteConfig.description}</p>
            <div className="hero-actions" aria-label="Acciones principales">
              <a href={assetPath("/productos/")}>Conoce nuestros productos</a>
              <a href={siteConfig.contact.whatsappUrl} rel="noopener noreferrer" target="_blank">Contáctanos</a>
            </div>
          </div>
          <Image
            className="hero-engraving"
            src={assetPath("/images/illustrations/cheese-wheel.svg")}
            alt=""
            width={430}
            height={320}
            aria-hidden="true"
          />
          <span className="hero-side-note" aria-hidden="true">
            Quesos / Artesanal / Gourmet
          </span>
        </section>

        <section className="home-catalog" id="productos" aria-labelledby="products-title">
          <div className="home-catalog-inner">
            <div className="home-catalog-copy">
              <p>Una selección para disfrutar</p>
              <h2 id="products-title">Nuestros productos</h2>
              <p>
                Una selección de quesos, semillas, productos artesanales y especialidades gourmet para disfrutar los buenos sabores.
              </p>
              <a href={assetPath("/productos/")}>Explorar nuestro catálogo</a>
            </div>
            <figure className="home-catalog-visual is-contain">
              <Image
                alt="Queso Panela de Cremería D’Oly"
                height={960}
                sizes="(min-width: 900px) 46vw, 92vw"
                src={assetPath("/images/products/client/web/queso-panela.webp")}
                width={1200}
              />
            </figure>
          </div>
        </section>

        <section className="editorial-break" aria-label="Frase editorial">
          <Image src={assetPath("/images/illustrations/gourmet-pattern.svg")} alt="" width={380} height={220} aria-hidden="true" />
          <p>
            Pequeños detalles.
            <br />
            Grandes sabores.
          </p>
        </section>

        <section className="about" id="nosotros" aria-labelledby="about-title">
          <div className="about-copy">
            <p>Nosotros</p>
            <h2 id="about-title">El gusto por elegir bien</h2>
            <div>
              <p>
                En Cremería D’Oly reunimos una selección de productos pensados para quienes disfrutan los buenos sabores y valoran la calidad en cada detalle.
              </p>
              <p>Una pequeña gran experiencia gourmet, cercana y hecha para disfrutarse todos los días.</p>
            </div>
          </div>
          <figure className="history-frame">
            <Image
              src={siteConfig.logo}
              alt="Logo oficial de Cremería D’Oly en blanco sobre negro"
              width={222}
              height={170}
              sizes="(min-width: 900px) 36vw, 88vw"
            />
          </figure>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div className="contact-copy">
              <div>
                <p>Contacto</p>
                <h2 id="contact-title">Hablemos</h2>
              </div>
              <p>
                ¿Buscas información sobre nuestros productos o quieres conocer más de Cremería D’Oly? Estamos para ayudarte.
              </p>

              {hasContact ? (
                <div className="contact-links">
                  <a
                    aria-label="Contactar a Cremería D’Oly por WhatsApp"
                    className="whatsapp-link"
                    href={siteConfig.contact.whatsappUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg aria-hidden="true" viewBox="0 0 32 32">
                      <path d="M16.01 3A12.8 12.8 0 0 0 5.1 22.5L3 29l6.7-2.02A12.95 12.95 0 1 0 16.01 3Zm0 23.73c-2.1 0-4.14-.58-5.91-1.68l-.42-.25-3.97 1.2 1.24-3.86-.27-.44a10.58 10.58 0 1 1 9.33 5.03Zm5.8-7.92c-.32-.16-1.88-.92-2.17-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.58 9.58 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.29 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z" />
                    </svg>
                  </a>
                </div>
              ) : (
                <p className="pending-contact">Los medios de contacto se integrarán cuando el cliente los confirme.</p>
              )}
            </div>

            <div className="location-block">
              <div className="location-heading">
                <p>Visítanos</p>
                <h3>Encuéntranos en Google Maps</h3>
              </div>
              <div className="location-map">
                <iframe
                  aria-hidden="true"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={siteConfig.location.mapsEmbedUrl}
                  tabIndex={-1}
                  title="Mapa de ubicación de Cremería D’Oly"
                />
                <a
                  aria-label="Ver ubicación de Cremería D’Oly en Google Maps"
                  href={siteConfig.location.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Ver ubicación en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
