// design_c.jsx — Variante C : « Premium éditorial » (clair, aéré, glass).
const DC_CSS = `
.dC{--maxw:1140px;background:#fff;color:var(--c-ink)}
.dC .wrap{width:100%;max-width:var(--maxw);margin:0 auto;padding-inline:24px}
.dC-hd{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.72);backdrop-filter:blur(16px);border-bottom:1px solid rgba(11,46,79,.07)}
.dC-hd-in{display:flex;align-items:center;gap:18px;height:66px}
.dC-nav{display:none;gap:28px;margin-inline-start:18px}
.dC-nav a{font-size:14.5px;font-weight:600;color:var(--c-ink);opacity:.7;cursor:pointer}
.dC-nav a:hover{opacity:1}
.dC-hd-right{margin-inline-start:auto;display:flex;align-items:center;gap:12px}
/* hero */
.dC-hero{position:relative;overflow:hidden;isolation:isolate;background:var(--c-soft)}
.dC-hero-bg{position:absolute;inset:0;z-index:-2;background-size:cover;background-position:right center;background-repeat:no-repeat}
.dC-hero-scrim{position:absolute;inset:0;z-index:-1;background:
   linear-gradient(90deg, #fff 0%, color-mix(in srgb,#fff 86%,transparent) 40%, color-mix(in srgb,#fff 30%,transparent) 66%, transparent 100%),
   linear-gradient(0deg, color-mix(in srgb,#fff 70%,transparent) 0%, transparent 30%)}
.dC-hero-in{display:grid;gap:34px;padding-block:54px 60px;min-height:clamp(460px,72vh,640px);align-content:center}
.dC-eyebrow{display:inline-flex;align-items:center;gap:9px;align-self:flex-start;font-family:var(--f-head);font-weight:700;font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--c-primary);background:color-mix(in srgb,var(--c-primary) 10%,#fff);border:1px solid color-mix(in srgb,var(--c-primary) 22%,transparent);padding:7px 14px;border-radius:999px}
.dC-h1{font-family:var(--f-head);font-weight:700;font-size:clamp(34px,8.5vw,58px);line-height:1.06;letter-spacing:-.025em;color:var(--c-navy);margin:20px 0 0;text-wrap:balance}
.dC-sub{font-size:clamp(16px,4.3vw,20px);line-height:1.55;color:var(--c-muted);margin:20px 0 0;max-width:31em}
.dC-hero-cta{margin-top:28px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.dC-hero-note{font-size:13.5px;color:var(--c-muted)}
.dC-hero-media{position:relative;justify-self:center;width:min(86%,360px)}
.dC-hero-media .media-frame{border-radius:26px;box-shadow:0 40px 80px -30px rgba(11,46,79,.45)}
.dC-glass{position:absolute;inset-inline-start:-14px;bottom:24px;background:rgba(255,255,255,.7);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.8);border-radius:18px;padding:14px 18px;box-shadow:0 18px 40px -16px rgba(11,46,79,.35)}
.dC-glass b{font-family:var(--f-head);font-size:26px;color:var(--c-navy);display:block;line-height:1}
.dC-glass span{font-size:12px;color:var(--c-muted)}
/* proof */
.dC-proof{padding-block:40px 12px}
.dC-proof-kicker{text-align:center;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--c-muted);margin:0 0 20px}
.dC-proof .logo-chip{background:transparent;border:1px solid rgba(11,46,79,.12);box-shadow:none;color:var(--c-navy);opacity:.78}
/* section */
.dC-sec{padding-block:56px}
.dC-head{text-align:center;max-width:30em;margin:0 auto}
.dC-eye{font-family:var(--f-head);font-weight:700;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--c-primary);margin:0}
.dC-h2{font-family:var(--f-head);font-weight:700;font-size:clamp(27px,6.5vw,42px);line-height:1.1;letter-spacing:-.02em;color:var(--c-navy);margin:12px 0 0;text-wrap:balance}
.dC-lead{font-size:clamp(15px,4vw,18px);line-height:1.6;color:var(--c-muted);margin:16px 0 0}
/* featured testimonial */
.dC-feature{margin-top:34px;background:linear-gradient(145deg,color-mix(in srgb,var(--c-primary) 6%,#fff),#fff);border:1px solid rgba(11,46,79,.1);border-radius:26px;padding:32px 26px;text-align:center}
.dC-feature .stars{margin-bottom:16px}
.dC-feature-q{font-family:var(--f-head);font-weight:600;font-size:clamp(19px,5vw,26px);line-height:1.4;color:var(--c-navy);margin:0 auto 20px;max-width:24em;text-wrap:balance}
.dC-feature-cap{display:inline-flex;align-items:center;gap:12px}
.dC-feature-cap span{display:flex;flex-direction:column;text-align:start}
.dC-feature-nm{font-weight:700;color:var(--c-navy)}
.dC-feature-role{font-size:13px;color:var(--c-muted)}
.dC-testis{display:grid;gap:14px;margin-top:14px}
.dC-testi{border:1px solid rgba(11,46,79,.1);border-radius:18px;padding:20px}
.dC-testi .stars{color:var(--c-lime);margin-bottom:10px}
.dC-testi-q{font-size:14.5px;line-height:1.55;color:var(--c-ink);margin:0 0 14px}
.dC-testi-cap{display:flex;align-items:center;gap:10px}
.dC-testi-cap span{display:flex;flex-direction:column}
.dC-testi-nm{font-weight:700;font-size:14px;color:var(--c-navy)}
.dC-testi-role{font-size:12px;color:var(--c-muted)}
/* stepper */
.dC-steps{margin-top:40px;display:grid;gap:26px;counter-reset:s}
.dC-step{display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:start;position:relative}
.dC-step:not(:last-child)::before{content:"";position:absolute;inset-inline-start:21px;top:46px;bottom:-26px;width:1px;background:rgba(11,46,79,.16)}
.dC-step-num{width:44px;height:44px;border-radius:50%;border:1.5px solid var(--c-primary);color:var(--c-primary);display:grid;place-items:center;font-family:var(--f-head);font-weight:700;font-size:18px;background:#fff;z-index:1}
.dC-step-t{font-size:19px;font-weight:700;color:var(--c-navy);margin:8px 0 6px}
.dC-step-d{font-size:14.5px;line-height:1.55;color:var(--c-muted);margin:0}
/* features minimal */
.dC-feats{margin-top:36px;display:grid;gap:18px}
.dC-feat{border:1px solid rgba(11,46,79,.1);border-radius:20px;padding:26px;transition:transform .2s ease,box-shadow .2s ease,border-color .2s}
.dC-feat:hover{transform:translateY(-3px);box-shadow:0 20px 44px -24px rgba(11,46,79,.4);border-color:color-mix(in srgb,var(--c-primary) 30%,transparent)}
.dC-feat-ic{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;color:var(--c-primary);background:color-mix(in srgb,var(--c-primary) 9%,#fff);margin-bottom:16px}
.dC-feat-t{font-size:18px;font-weight:700;color:var(--c-navy);margin:0 0 8px}
.dC-feat-d{font-size:14.5px;line-height:1.55;color:var(--c-muted);margin:0}
/* video */
.dC-vid-in{display:grid;gap:28px}
.dC-vid-media{border-radius:24px;box-shadow:0 30px 70px -34px rgba(11,46,79,.5)}
.dC-vid-copy .cta{margin-top:22px}
/* stats inline */
.dC-stats{padding-block:50px;background:var(--c-soft)}
.dC-stats-in{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;text-align:center}
.dC-stat{position:relative;padding:6px 8px}
.dC-stat:not(:last-child)::after{content:"";position:absolute;inset-inline-end:0;top:18%;bottom:18%;width:1px;background:rgba(11,46,79,.14)}
.dC-stat-num{font-family:var(--f-head);font-weight:700;font-size:clamp(30px,9vw,52px);line-height:1;color:var(--c-navy);letter-spacing:-.02em}
.dC-stat-num.hl{color:var(--c-primary)}
.dC-stat-lbl{font-size:12px;line-height:1.35;color:var(--c-muted);margin-top:8px}
/* final card */
.dC-final{padding-block:60px;background:
   radial-gradient(70% 80% at 50% 0%, color-mix(in srgb,var(--c-primary) 12%,#fff), transparent 70%),#fff}
.dC-final-card{max-width:640px;margin:0 auto;background:var(--c-navy);color:#fff;border-radius:30px;padding:48px 30px;text-align:center;position:relative;overflow:hidden;isolation:isolate}
.dC-final-card::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(80% 120% at 80% 0%,color-mix(in srgb,var(--c-primary) 70%,transparent),transparent 60%)}
.dC-final-h{font-family:var(--f-head);font-weight:700;font-size:clamp(26px,7vw,40px);line-height:1.1;letter-spacing:-.02em;margin:8px 0 0;text-wrap:balance}
.dC-final-sub{font-size:clamp(15px,4vw,18px);line-height:1.55;color:rgba(255,255,255,.84);margin:16px auto 28px;max-width:26em}
.dC-final .cta{margin:0 auto}
/* footer */
.dC-foot{padding-block:40px;border-top:1px solid rgba(11,46,79,.1)}
.dC-foot-in{display:flex;flex-direction:column;gap:16px;text-align:center;align-items:center}
.dC-foot-tag{font-size:14px;color:var(--c-muted);margin-top:8px;max-width:24em}
.dC-foot-copy{font-size:12.5px;color:var(--c-muted);margin:0}
@media(min-width:760px){
  .dC-nav{display:flex}
  .dC-hero-in{padding-block:78px 86px;min-height:clamp(520px,76vh,700px)}
  .dC-hero-copy{max-width:34rem}
  .dC-testis{grid-template-columns:repeat(3,1fr)}
  .dC-feats{grid-template-columns:repeat(3,1fr)}
  .dC-vid-in{grid-template-columns:.95fr 1.05fr;align-items:center}
  .dC-sec{padding-block:80px}
}
`;
function DesignC({ T, E, set, tw, lang, dir, setLang, onPrivacy }) {
  const reg = tw.linkRegister, emp = tw.linkEmployers;
  const Ed = (tag, k, cls, st) => (
    <EditableText tag={tag} value={T[k]} editing={E} onCommit={(v) => set(k, v)} className={cls} style={st} />
  );
  const feats = [["pipeline", "feat1"], ["fast", "feat2"], ["filter", "feat3"], ["team", "feat4"], ["tools", "feat5"], ["quality", "feat6"]];

  return (
    <div className="dC">
      <style>{DC_CSS}</style>

      <header className="dC-hd">
        <div className="dC-hd-in wrap">
          <BrandLogo size={32} />
          <nav className="dC-nav">
            <a href="#process">{Ed("span", "nav1")}</a>
            <a href="#adv">{Ed("span", "nav2")}</a>
            <a href="#proof">{Ed("span", "nav3")}</a>
          </nav>
          <div className="dC-hd-right">
            <div className="lang-toggle">
              <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")}>FR</button>
              <button className={lang === "ar" ? "on" : ""} onClick={() => setLang("ar")}>AR</button>
            </div>
            <a className="cta cta-lime cta-sm" href={reg} target="_blank" rel="noopener"><span>{T.header_cta}</span></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="dC-hero">
        <div className="dC-hero-bg" style={{ backgroundImage: tw.heroImageUrl ? `url('${tw.heroImageUrl}')` : "none" }} />
        <div className="dC-hero-scrim" />
        <div className="wrap dC-hero-in">
          <div className="dC-hero-copy">
            <span className="dC-eyebrow">{Ed("span", "hero_badge")}</span>
            {Ed("h1", "hero_title", "dC-h1")}
            {Ed("p", "hero_sub", "dC-sub")}
            <div className="dC-hero-cta">
              <CTA href={reg} variant="lime" size="lg">{T.hero_cta}</CTA>
              {Ed("span", "hero_note", "dC-hero-note")}
            </div>
          </div>
        </div>
      </section>

      {/* PREUVE */}
      {tw.showProof && (
        <section className="dC-proof" id="proof">
          <div className="wrap">
            {Ed("p", "proof_kicker", "dC-proof-kicker")}
            <LogoMarquee agencies={tw.agencies} />
          </div>
        </section>
      )}

      {/* TÉMOIGNAGES (featured + grid) */}
      {tw.showProof && (
        <section className="dC-sec">
          <div className="wrap">
            <figure className="dC-feature">
              <Stars n={5} />
              {Ed("blockquote", "testi1_quote", "dC-feature-q")}
              <figcaption className="dC-feature-cap">
                <PersonPlaceholder size={50} label={T.testi1_name} src={tw.testi1_photo} />
                <span>{Ed("strong", "testi1_name", "dC-feature-nm")}{Ed("span", "testi1_role", "dC-feature-role")}</span>
              </figcaption>
            </figure>
            <div className="dC-testis">
              {[2, 3].map((n) => (
                <figure className="dC-testi" key={n}>
                  <Stars n={5} />
                  {Ed("blockquote", `testi${n}_quote`, "dC-testi-q")}
                  <figcaption className="dC-testi-cap">
                    <PersonPlaceholder size={42} label={T[`testi${n}_name`]} src={tw[`testi${n}_photo`]} />
                    <span>{Ed("strong", `testi${n}_name`, "dC-testi-nm")}{Ed("span", `testi${n}_role`, "dC-testi-role")}</span>
                  </figcaption>
                </figure>
              ))}
              <figure className="dC-testi" style={{ display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--c-soft)", border: "none" }}>
                <CTA href={emp} variant="primary" size="md">{T.process_cta}</CTA>
              </figure>
            </div>
          </div>
        </section>
      )}

      {/* PROCESSUS — stepper */}
      {tw.showProcess && (
        <section className="dC-sec" id="process" style={{ background: "var(--c-soft)" }}>
          <div className="wrap">
            <div className="dC-head">
              {Ed("p", "process_kicker", "dC-eye")}
              {Ed("h2", "process_title", "dC-h2")}
              {Ed("p", "process_sub", "dC-lead")}
            </div>
            <div className="dC-steps" style={{ maxWidth: "640px", marginInline: "auto" }}>
              {[1, 2, 3, 4].map((n) => (
                <div className="dC-step" key={n}>
                  <div className="dC-step-num">{n}</div>
                  <div>{Ed("h3", `step${n}_title`, "dC-step-t")}{Ed("p", `step${n}_desc`, "dC-step-d")}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AVANTAGES */}
      {tw.showAdv && (
        <section className="dC-sec" id="adv">
          <div className="wrap">
            <div className="dC-head">
              {Ed("p", "adv_kicker", "dC-eye")}
              {Ed("h2", "adv_title", "dC-h2")}
              {Ed("p", "adv_sub", "dC-lead")}
            </div>
            <div className="dC-feats">
              {feats.map(([ic, key], i) => (
                <div className="dC-feat" key={i}>
                  <div className="dC-feat-ic">{FeatIcons[ic]}</div>
                  {Ed("h3", `${key}_title`, "dC-feat-t")}
                  {Ed("p", `${key}_desc`, "dC-feat-d")}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "36px" }}>
              <CTA href={emp} variant="ghost" size="md">{T.adv_cta}</CTA>
            </div>
          </div>
        </section>
      )}

      {/* VIDEO */}
      {tw.showVid && (
        <section className="dC-sec" style={{ background: "var(--c-soft)" }}>
          <div className="wrap dC-vid-in">
            <MediaFrame url={tw.vidVideoUrl} label={T.vid_media} ratio="4 / 3" className="dC-vid-media" />
            <div className="dC-vid-copy">
              {Ed("p", "vid_kicker", "dC-eye")}
              {Ed("h2", "vid_title", "dC-h2")}
              {Ed("p", "vid_sub", "dC-lead")}
              <CTA href={emp} variant="lime" size="md">{T.vid_cta}</CTA>
            </div>
          </div>
        </section>
      )}

      {/* STATS */}
      {tw.showStats && (
        <section className="dC-stats">
          <div className="wrap dC-stats-in">
            {[["stat1_num", "stat1_label"], ["stat2_num", "stat2_label", true], ["stat3_num", "stat3_label"]].map((s, i) => (
              <div className="dC-stat" key={i}>
                {Ed("div", s[0], "dC-stat-num" + (s[2] ? " hl" : ""))}
                {Ed("div", s[1], "dC-stat-lbl")}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FINAL */}
      {tw.showFinal && (
        <section className="dC-final">
          <div className="wrap">
            <div className="dC-final-card">
              {Ed("p", "final_kicker", "kicker kicker-lime")}
              {Ed("h2", "final_title", "dC-final-h")}
              {Ed("p", "final_sub", "dC-final-sub")}
              <CTA href={reg} variant="lime" size="lg">{T.final_cta}</CTA>
            </div>
          </div>
        </section>
      )}

      <footer className="dC-foot">
        <div className="wrap dC-foot-in">
          <BrandLogo size={30} />
          {Ed("p", "footer_tagline", "dC-foot-tag")}
          <button className="link-btn" onClick={onPrivacy}>{T.footer_privacy}</button>
          {Ed("p", "footer_copy", "dC-foot-copy")}
        </div>
      </footer>
    </div>
  );
}
window.DesignC = DesignC;
