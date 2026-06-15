// components.jsx — composants partagés à toutes les variantes de design.
const { useState, useRef, useEffect } = React;

/* ---------- Logo CoinCarriere (formes simples, recréé en CSS/SVG) ---------- */
function BrandLogo({ dark = false, size = 34 }) {
  const wordA = dark ? "#7FB7E6" : "var(--c-primary)";
  const wordB = dark ? "#FFFFFF" : "var(--c-navy)";
  return (
    <span className="brand" style={{ gap: size * 0.28 }}>
      <span className="brand-mark" style={{ width: size, height: size, borderRadius: size * 0.28 }}>
        <svg viewBox="0 0 32 32" width={size * 0.62} height={size * 0.62} aria-hidden="true">
          <path d="M22 9.5a9 9 0 1 0 0 13" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3.1" fill="var(--c-primary)" />
        </svg>
      </span>
      <span className="brand-word" style={{ lineHeight: 0.92 }}>
        <span style={{ color: wordA, fontWeight: 600 }}>Coin</span>
        <span style={{ color: wordB, fontWeight: 800, letterSpacing: "-.01em" }}>CARRIERE</span>
      </span>
    </span>);

}

/* ---------- Texte éditable en place ---------- */
function EditableText({ tag = "span", value, editing, onCommit, className, style, dir }) {
  const ref = useRef(null);
  if (editing) {
    return React.createElement(tag, {
      ref,
      className: (className || "") + " ed-on",
      style,
      dir,
      contentEditable: true,
      suppressContentEditableWarning: true,
      spellCheck: false,
      onBlur: (e) => {
        const txt = e.currentTarget.innerText.replace(/\n{2,}/g, "\n").trim();
        if (txt !== value) onCommit(txt);
      }
    }, value);
  }
  return React.createElement(tag, { className, style, dir }, value);
}

/* ---------- Bouton CTA ---------- */
function CTA({ href, children, variant = "lime", size = "md", block = false, arrow = true }) {
  return (
    <a className={`cta cta-${variant} cta-${size}${block ? " cta-block" : ""}`} href={href} target="_blank" rel="noopener" style={{ color: "rgb(11, 46, 79)" }}>
      {arrow &&
      <svg className="cta-ic" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      }
      <span style={{ color: "rgb(255, 255, 255)" }}>{children}</span>
    </a>);

}

/* ---------- Bandeau de logos défilant ---------- */
function LogoMarquee({ agencies, speed = 48 }) {
  const norm = (a) => typeof a === "string" ? { name: a, logo: "" } : a;
  const list = (agencies || []).map(norm);
  const items = [...list, ...list];
  return (
    <div className="marquee" aria-label="Agences partenaires">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {items.map((a, i) =>
        <div className="logo-chip" key={i}>
            {a.logo ?
          <img className="logo-img" src={a.logo} alt={a.name} loading="lazy" /> :

          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M4 21V8l8-4 8 4v13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M9 21v-5h6v5M9 11h.01M15 11h.01M9 14h.01M15 14h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
          }
            <span>{a.name}</span>
          </div>
        )}
      </div>
    </div>);

}

/* ---------- Cadre média (vidéo ou placeholder) ---------- */
function MediaFrame({ url, label, className, style, ratio = "9 / 16" }) {
  const isVideoFile = url && /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url);
  const isEmbed = url && !isVideoFile;
  return (
    <div className={`media-frame ${className || ""}`} style={{ aspectRatio: ratio, ...style }}>
      {isVideoFile &&
      <video src={url} autoPlay muted loop playsInline className="media-el" />
      }
      {isEmbed &&
      <iframe src={url} className="media-el" allow="autoplay; encrypted-media" allowFullScreen title={label} />
      }
      {!url &&
      <div className="media-ph">
          <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <path d="M10 8.5v7l6-3.5z" fill="currentColor" />
          </svg>
          <span className="media-ph-label">{label}</span>
          <span className="media-ph-hint">Déposez votre vidéo via le menu Tweaks</span>
        </div>
      }
    </div>);

}

/* ---------- Étoiles ---------- */
function Stars({ n = 5 }) {
  return (
    <div className="stars" aria-label={`${n} sur 5`}>
      {Array.from({ length: n }).map((_, i) =>
      <svg key={i} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor" />
        </svg>
      )}
    </div>);

}

/* ---------- Photo de profil (témoin) ---------- */
function PersonPlaceholder({ size = 52, label, src }) {
  if (src) {
    return (
      <img className="person-photo" src={src} alt={label} title={label}
      style={{ width: size, height: size }} loading="lazy" />);

  }
  return (
    <div className="person-ph" style={{ width: size, height: size }} title={label} aria-label={label}>
      <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} aria-hidden="true">
        <path d="M12 13c2.4 0 4-2 4-4.5S14.4 4 12 4 8 6 8 8.5 9.6 13 12 13z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 21c0-3.6 3.1-6 7-6s7 2.4 7 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>);

}

/* ---------- Icônes des avantages ---------- */
const FeatIcons = {
  pipeline:
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 4h4v16H4zM10 4h4v10h-4zM16 4h4v13h-4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>,

  fast:
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M13 2L4 14h6l-1 8 9-12h-6z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>,

  filter:
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M3 5h18l-7 8v6l-4 2v-8z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>,

  team:
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><path d="M16 6.5a3 3 0 0 1 0 5.6M17 15c2.5.4 4 2.2 4 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>,

  tools:
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><circle cx="16" cy="7" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.7" /><circle cx="8" cy="17" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.7" /></svg>,

  quality:
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 21.5 7.5 18.2 8.5 12.7 4.5 8.8 10 8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>

};

/* ---------- Témoignages animés (pile de cartes rotatives, autoplay) ---------- */
function AnimatedTestimonials({ items, dir = "ltr", autoplay = true }) {
  const [active, setActive] = useState(0);
  const n = items.length;
  // rotations stables (déterministes) pour chaque carte
  const rots = useRef(items.map((_, i) => i * 37 % 15 - 7));
  const next = React.useCallback(() => setActive((p) => (p + 1) % n), [n]);
  const prev = () => setActive((p) => (p - 1 + n) % n);
  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [autoplay, next]);
  const isAr = dir === "rtl";

  return (
    <div className="at" dir={dir}>
      <div className="at-photos">
        {items.map((it, i) => {
          const on = i === active;
          const r = on ? 0 : rots.current[i];
          return (
            <div
              key={i}
              className={"at-card" + (on ? " on" : "")}
              style={{
                transform: `rotate(${r}deg) scale(${on ? 1 : 0.92}) translateY(${on ? 0 : 14}px)`,
                opacity: on ? 1 : 0.32,
                zIndex: on ? n : n - Math.abs(i - active)
              }}>
              
              {it.src ?
              <img src={it.src} alt={it.name} draggable={false} /> :
              <div className="at-card-ph"><PersonPlaceholder size={84} label={it.name} /></div>}
            </div>);

        })}
      </div>

      <div className="at-body">
        <div className="at-text">
          <Stars n={5} />
          <blockquote className="at-quote">“{items[active].quote}”</blockquote>
          <div className="at-who">
            <strong>{items[active].name}</strong>
            <span>{items[active].role}</span>
          </div>
        </div>
        <div className="at-ctrls">
          <button className="at-btn" onClick={prev} aria-label="Précédent">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style={{ transform: isAr ? "scaleX(-1)" : "none" }}><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="at-dots">
            {items.map((_, i) =>
            <button key={i} className={"at-dot" + (i === active ? " on" : "")} onClick={() => setActive(i)} aria-label={`Témoignage ${i + 1}`} />
            )}
          </div>
          <button className="at-btn" onClick={next} aria-label="Suivant">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style={{ transform: isAr ? "scaleX(-1)" : "none" }}><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>);

}

/* ---------- Hook : déclenche au scroll (une seule fois, avec filets de sécurité) ---------- */
function useInView(opts) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (seen) return;
    const el = ref.current;
    if (!el) {setSeen(true);return;}
    // 1) déjà visible au montage ?
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) {setSeen(true);return;}
    // 2) IntersectionObserver
    let io;
    try {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {if (e.isIntersecting) {setSeen(true);io && io.disconnect();}});
      }, { threshold: 0.2, ...(opts || {}) });
      io.observe(el);
    } catch (e) {setSeen(true);}
    // 3) filet de sécurité : si l'IO ne se déclenche jamais, on révèle quand même
    const t = setTimeout(() => {setSeen(true);io && io.disconnect();}, 1200);
    return () => {io && io.disconnect();clearTimeout(t);};
  }, [seen]);
  return [ref, seen];
}

/* ---------- Compteur animé (compte jusqu'à la valeur quand visible) ---------- */
function CountUp({ value, className, dir = "ltr", duration = 1500 }) {
  // sépare : préfixe non-numérique, nombre (avec espaces/séparateurs), suffixe
  const str = String(value);
  const m = str.match(/([^\d]*)([\d  ,.\u00A0\u202F]*\d)?(.*)/);
  const prefix = m && m[1] || "";
  const numPart = m && m[2] || "";
  const suffix = m && m[3] || "";
  const target = parseInt(numPart.replace(/[^\d]/g, ""), 10);
  const hasNum = numPart !== "" && !isNaN(target);
  const grouped = /[  \u00A0\u202F,]/.test(numPart); // espace/virgule de milliers présent ?
  const [ref, seen] = useInView({ threshold: 0.4 });
  const [n, setN] = useState(hasNum ? 0 : null);

  useEffect(() => {
    if (!hasNum || !seen) return;
    let raf, start;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);else
      setN(target);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [seen, hasNum, target, duration]);

  const fmt = (x) => grouped ? x.toLocaleString(dir === "rtl" ? "ar-MA" : "fr-FR") : String(x);
  return (
    <div className={className} ref={ref} dir={dir}>
      {hasNum ? `${prefix}${fmt(n)}${suffix}` : str}
    </div>);

}

Object.assign(window, {
  BrandLogo, EditableText, CTA, LogoMarquee, MediaFrame, Stars, PersonPlaceholder, FeatIcons, AnimatedTestimonials, useInView, CountUp
});