import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { hasContact, siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

const contactItems = [
  { label: "WhatsApp", value: siteConfig.contact.whatsapp, href: siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}` : "" },
  { label: "Teléfono", value: siteConfig.contact.phone, href: siteConfig.contact.phone ? `tel:${siteConfig.contact.phone}` : "" },
  { label: "Email", value: siteConfig.contact.email, href: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "" },
  { label: "Facebook", value: siteConfig.social.facebook, href: siteConfig.social.facebook },
  { label: "Instagram", value: siteConfig.social.instagram, href: siteConfig.social.instagram }
].filter((item) => item.value && item.href);

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
              <a href="#contacto">Contáctanos</a>
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
            <figcaption>Identidad visual oficial de la marca.</figcaption>
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
                  {contactItems.map((item) => (
                    <a key={item.label} href={item.href}>
                      {item.label}
                    </a>
                  ))}
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
