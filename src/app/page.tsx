import Image from "next/image";
import { hasContact, siteConfig } from "@/data/site";

const contactItems = [
  { label: "WhatsApp", value: siteConfig.contact.whatsapp, href: siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}` : "" },
  { label: "Teléfono", value: siteConfig.contact.phone, href: siteConfig.contact.phone ? `tel:${siteConfig.contact.phone}` : "" },
  { label: "Email", value: siteConfig.contact.email, href: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "" },
  { label: "Facebook", value: siteConfig.social.facebook, href: siteConfig.social.facebook },
  { label: "Instagram", value: siteConfig.social.instagram, href: siteConfig.social.instagram }
].filter((item) => item.value && item.href);

function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#inicio" aria-label="Ir al inicio">
        <span className="brand-mark">D</span>
        <span>
          <strong>{siteConfig.businessName}</strong>
          <small>{siteConfig.claim}</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {siteConfig.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contacto">
        Contáctanos
      </a>

      <details className="mobile-menu">
        <summary aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </summary>
        <nav aria-label="Navegación móvil">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}

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
  const year = new Date().getFullYear();

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/images/generated/hero-gourmet.png"
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
              <a href="#productos">Conoce nuestros productos</a>
              <a href="#contacto">Contáctanos</a>
            </div>
          </div>
          <Image
            className="hero-engraving"
            src="/images/illustrations/cheese-wheel.svg"
            alt=""
            width={430}
            height={320}
            aria-hidden="true"
          />
          <span className="hero-side-note" aria-hidden="true">
            Quesos / Artesanal / Gourmet
          </span>
        </section>

        <section className="products" id="productos" aria-labelledby="products-title">
          <div className="section-intro">
            <p>Una selección para disfrutar</p>
            <h2 id="products-title">Productos</h2>
            <span>Productos elegidos para quienes disfrutan los buenos sabores y los pequeños detalles.</span>
          </div>

          <div className="product-list">
            {siteConfig.categories.map((category, index) => (
              <article className="product-row" key={category.id}>
                <div className="product-number">{category.number}</div>
                <div className="product-visual">
                  <Image
                    src={category.image}
                    alt={`Ambientación visual de ${category.title.toLowerCase()}`}
                    width={1024}
                    height={1536}
                    sizes="(min-width: 900px) 34vw, 88vw"
                  />
                  <Image
                    className="product-illustration"
                    src={category.illustration}
                    alt=""
                    width={220}
                    height={160}
                    aria-hidden="true"
                  />
                </div>
                <div className="product-copy">
                  <h3>{category.title}</h3>
                  <p>{category.intro}</p>
                  <span>{index === 0 ? "Selección confirmada" : "Categoría confirmada"}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-break" aria-label="Frase editorial">
          <Image src="/images/illustrations/gourmet-pattern.svg" alt="" width={380} height={220} aria-hidden="true" />
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
              alt="Logo original de Cremería D’Oly con ilustración de queso en blanco sobre negro"
              width={554}
              height={554}
              sizes="(min-width: 900px) 36vw, 88vw"
            />
            <figcaption>Identidad visual original de la marca.</figcaption>
          </figure>
        </section>

        <section className="locations" id="sucursales" aria-labelledby="locations-title">
          <div>
            <p>Sucursales</p>
            <h2 id="locations-title">Encuentra tu D’Oly</h2>
          </div>

          {siteConfig.locations.length > 0 ? (
            <div className="location-list">
              {siteConfig.locations.map((location) => (
                <article key={location.id}>
                  <h3>{location.name}</h3>
                  {location.address ? <p>{location.address}</p> : null}
                  {location.hours ? <p>{location.hours}</p> : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="locations-empty">
              <Image src="/images/illustrations/register-mark.svg" alt="" width={160} height={160} aria-hidden="true" />
              <p>Próximamente encontrarás aquí nuestras ubicaciones y horarios.</p>
              <span>El espacio está preparado para agregar direcciones reales cuando el cliente las confirme.</span>
            </div>
          )}
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <div className="contact-inner">
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
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>{siteConfig.businessName}</strong>
          <span>{siteConfig.claim}</span>
        </div>
        <nav aria-label="Navegación del pie">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p>© {year} {siteConfig.businessName}</p>
      </footer>
    </>
  );
}
