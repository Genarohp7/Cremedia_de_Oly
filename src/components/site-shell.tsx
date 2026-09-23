import { siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href={assetPath("/")} aria-label="Ir al inicio">
        <span className="brand-mark">D</span>
        <span><strong>{siteConfig.businessName}</strong><small>{siteConfig.claim}</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="header-cta" href={assetPath("/#contacto")}>Contáctanos</a>
      <details className="mobile-menu">
        <summary aria-label="Abrir menú"><span /><span /><span /></summary>
        <nav aria-label="Navegación móvil">
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div><strong>{siteConfig.businessName}</strong><span>{siteConfig.claim}</span></div>
      <nav aria-label="Navegación del pie">
        {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <p>© {year} {siteConfig.businessName}</p>
    </footer>
  );
}
