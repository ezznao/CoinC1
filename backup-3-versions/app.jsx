// app.jsx — assemble tout : état Tweaks, langue, switch de design, modal confidentialité.
const { useState: uS, useEffect: uE } = React;

const FONT_OPTS = ["Plus Jakarta Sans", "Manrope", "Poppins"];
const COL_PRIMARY = ["#1E78C8", "#0E6FB8", "#2563EB", "#0EA5A0"];
const COL_NAVY = ["#0B2E4F", "#0A2540", "#102A43", "#1A1B3A"];
const COL_LIME = ["#C4DE00", "#A3E635", "#FFC400", "#34D399"];
const COL_SOFT = ["#EDF5FB", "#F1F5F9", "#F4F1EA", "#FFFFFF"];

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const [privacy, setPrivacy] = uS(false);
  const lang = t.lang === "ar" ? "ar" : "fr";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const T = t[lang];
  const editing = !!t.editText;

  // commit d'un texte éditable dans la bonne langue
  const set = (key, val) => setTweak(lang, { ...t[lang], [key]: val });
  const setLang = (l) => setTweak("lang", l);

  // variables CSS (couleurs + polices)
  uE(() => {
    const r = document.documentElement;
    r.style.setProperty("--c-primary", t.cPrimary);
    r.style.setProperty("--c-navy", t.cNavy);
    r.style.setProperty("--c-lime", t.cLime);
    r.style.setProperty("--c-soft", t.cSoft);
    r.style.setProperty("--c-ink", "#13314e");
    r.style.setProperty("--c-muted", "#5b7488");
    r.style.setProperty("--f-head", `'${t.fontHeading}', ${lang === "ar" ? "'Cairo'," : ""} system-ui, sans-serif`);
    r.style.setProperty("--f-body", `${lang === "ar" ? "'Cairo'," : ""} '${t.fontBody}', system-ui, sans-serif`);
    r.setAttribute("dir", dir);
    r.setAttribute("lang", lang);
  }, [t.cPrimary, t.cNavy, t.cLime, t.cSoft, t.fontHeading, t.fontBody, lang, dir]);

  const Design = t.design === "b" ? window.DesignB : t.design === "c" ? window.DesignC : window.DesignA;
  const dprops = { T, E: editing, set, tw: t, lang, dir, setLang, onPrivacy: () => setPrivacy(true) };

  return (
    <div className="app-root" style={{ zoom: t.fontScale }}>
      <Design {...dprops} />

      {/* switcher de design flottant */}
      <div className="design-switch" data-omelette-chrome="" dir="ltr">
        <span className="ds-lbl">Design</span>
        {["a", "b", "c"].map((d) => (
          <button key={d} className={t.design === d ? "on" : ""} onClick={() => setTweak("design", d)}>
            {d.toUpperCase()}
          </button>
        ))}
      </div>

      {privacy && <PrivacyModal lang={lang} dir={dir} onClose={() => setPrivacy(false)} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Affichage" />
        <TweakRadio label="Design" value={t.design}
          options={[{ value: "a", label: "A" }, { value: "b", label: "B" }, { value: "c", label: "C" }]}
          onChange={(v) => setTweak("design", v)} />
        <TweakRadio label="Langue" value={t.lang}
          options={[{ value: "fr", label: "Français" }, { value: "ar", label: "العربية" }]}
          onChange={(v) => setTweak("lang", v)} />
        <TweakToggle label="Éditer les textes sur la page" value={t.editText}
          onChange={(v) => setTweak("editText", v)} />
        <TweakSlider label="Taille générale" value={t.fontScale} min={0.8} max={1.25} step={0.05}
          onChange={(v) => setTweak("fontScale", v)} />

        <TweakSection label="Couleurs" />
        <TweakColor label="Bleu principal" value={t.cPrimary} options={COL_PRIMARY} onChange={(v) => setTweak("cPrimary", v)} />
        <TweakColor label="Bleu foncé" value={t.cNavy} options={COL_NAVY} onChange={(v) => setTweak("cNavy", v)} />
        <TweakColor label="Accent (CTA)" value={t.cLime} options={COL_LIME} onChange={(v) => setTweak("cLime", v)} />
        <TweakColor label="Fond clair" value={t.cSoft} options={COL_SOFT} onChange={(v) => setTweak("cSoft", v)} />

        <TweakSection label="Typographie" />
        <TweakSelect label="Police titres" value={t.fontHeading} options={FONT_OPTS} onChange={(v) => setTweak("fontHeading", v)} />
        <TweakSelect label="Police texte" value={t.fontBody} options={FONT_OPTS} onChange={(v) => setTweak("fontBody", v)} />

        <TweakSection label="Sections" />
        <TweakToggle label="Preuve sociale" value={t.showProof} onChange={(v) => setTweak("showProof", v)} />
        <TweakToggle label="Processus" value={t.showProcess} onChange={(v) => setTweak("showProcess", v)} />
        <TweakToggle label="Avantages" value={t.showAdv} onChange={(v) => setTweak("showAdv", v)} />
        <TweakToggle label="Témoignage vidéo" value={t.showVid} onChange={(v) => setTweak("showVid", v)} />
        <TweakToggle label="Statistiques" value={t.showStats} onChange={(v) => setTweak("showStats", v)} />
        <TweakToggle label="CTA final" value={t.showFinal} onChange={(v) => setTweak("showFinal", v)} />

        <TweakSection label="Liens (CTA)" />
        <TweakText label="Inscription" value={t.linkRegister} onChange={(v) => setTweak("linkRegister", v)} />
        <TweakText label="Employeurs" value={t.linkEmployers} onChange={(v) => setTweak("linkEmployers", v)} />

        <TweakSection label="Médias" />
        <TweakText label="Image hero (URL)" value={t.heroImageUrl} placeholder="assets/hero.png" onChange={(v) => setTweak("heroImageUrl", v)} />
        <TweakText label="Vidéo témoignage (URL)" value={t.vidVideoUrl} placeholder="https://youtube.com/embed/…" onChange={(v) => setTweak("vidVideoUrl", v)} />

        <TweakSection label="Textes clés" />
        <TweakText label="Titre hero" value={T.hero_title} onChange={(v) => set("hero_title", v)} />
        <TweakText label="CTA hero" value={T.hero_cta} onChange={(v) => set("hero_cta", v)} />
        <TweakText label="Stat 1 — chiffre" value={T.stat1_num} onChange={(v) => set("stat1_num", v)} />
        <TweakText label="Stat 2 — chiffre" value={T.stat2_num} onChange={(v) => set("stat2_num", v)} />
        <TweakText label="Stat 3 — chiffre" value={T.stat3_num} onChange={(v) => set("stat3_num", v)} />
        <div className="twk-hint">Astuce : activez « Éditer les textes » pour modifier n'importe quel texte directement sur la page.</div>
      </TweaksPanel>
    </div>
  );
}

/* ---------- Modal Politique de confidentialité ---------- */
function PrivacyModal({ lang, dir, onClose }) {
  const data = window.PRIVACY[lang] || window.PRIVACY.fr;
  uE(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, []);
  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm" dir={dir} onClick={(e) => e.stopPropagation()}>
        <div className="pm-hd">
          <div>
            <h2>{data.title}</h2>
            <p className="pm-upd">{data.updated}</p>
          </div>
          <button className="pm-x" onClick={onClose} aria-label="Fermer">✕</button>
        </div>
        <div className="pm-body">
          {data.sections.map((s, i) => (
            <section key={i} className="pm-sec">
              <h3>{s.h}</h3>
              {s.p.map((p, j) => <p key={j}>{p}</p>)}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
