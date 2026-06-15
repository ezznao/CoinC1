// design_b.jsx — Variante B : « Bold conversion » (lime-forward, urgence, timeline).
const DB_CSS = `
.dB{--maxw:1120px;background:#fff}
.dB .wrap{width:100%;max-width:var(--maxw);margin:0 auto;padding-inline:22px}
.dB-hd{position:sticky;top:0;z-index:40;background:var(--c-navy);color:#fff}
.dB-hd-in{display:flex;align-items:center;gap:16px;height:62px}
.dB-hd .brand-word>span:first-child{color:#8fc0ea !important}
.dB-hd .brand-word>span:last-child{color:#fff !important}
.dB-hd-right{margin-inline-start:auto;display:flex;align-items:center;gap:12px}
.dB-hd .lang-toggle{background:rgba(255,255,255,.14)}
.dB-hd .lang-toggle button{color:#fff}
.dB-hd .lang-toggle button.on{background:var(--c-lime);color:var(--c-navy)}
/* hero */
.dB-hero{position:relative;overflow:hidden;color:#fff;isolation:isolate;background:var(--c-navy)}
.dB-hero-bg{position:absolute;inset:0;z-index:-2;background-color:var(--c-navy);background-size:cover;background-position:right center;background-repeat:no-repeat}
.dB-hero-scrim{position:absolute;inset:0;z-index:-1;background:
   linear-gradient(90deg, color-mix(in srgb,var(--c-navy) 96%,#000) 0%, color-mix(in srgb,var(--c-navy) 82%,transparent) 44%, color-mix(in srgb,var(--c-navy) 26%,transparent) 72%, transparent 100%),
   linear-gradient(0deg, color-mix(in srgb,var(--c-navy) 88%,#000) 0%, transparent 40%)}
.dB-hero-in{display:grid;gap:28px;padding-block:46px 56px;min-height:clamp(480px,76vh,680px);align-content:center}
.dB-urgent{display:inline-flex;align-items:center;gap:9px;align-self:flex-start;background:var(--c-lime);color:var(--c-navy);font-family:var(--f-head);font-weight:800;font-size:13px;padding:8px 15px;border-radius:999px;letter-spacing:.01em}
.dB-urgent i{width:9px;height:9px;border-radius:50%;background:var(--c-navy);animation:dBpulse 1.3s infinite}
@keyframes dBpulse{0%,100%{opacity:1}50%{opacity:.25}}
.dB-h1{font-family:var(--f-head);font-weight:800;font-size:clamp(36px,9.5vw,68px);line-height:1;letter-spacing:-.03em;margin:18px 0 0;text-wrap:balance}
.dB-h1 em{font-style:normal;background:linear-gradient(transparent 62%,color-mix(in srgb,var(--c-lime) 85%,transparent) 0);padding:0 .05em}
.dB-sub{font-size:clamp(16px,4.5vw,20px);line-height:1.5;color:rgba(255,255,255,.85);margin:18px 0 0;max-width:30em}
.dB-hero-cta{margin-top:26px;display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.dB-trust{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:24px}
.dB-trust span{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;color:rgba(255,255,255,.8);font-weight:600}
.dB-trust svg{color:var(--c-lime)}
.dB-hero-media{position:relative}
.dB-hero-media .media-frame{box-shadow:0 30px 70px -24px rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.16)}
.dB-hero-stat{position:absolute;inset-inline-end:-6px;bottom:18px;background:#fff;color:var(--c-navy);border-radius:16px;padding:12px 16px;box-shadow:0 16px 40px -14px rgba(0,0,0,.5)}
.dB-hero-stat b{font-family:var(--f-head);font-size:24px;display:block;line-height:1;color:var(--c-primary)}
.dB-hero-stat span{font-size:11.5px;color:var(--c-muted)}
/* proof dark */
.dB-proof{background:color-mix(in srgb,var(--c-navy) 96%,#000);color:#fff;padding-block:34px 44px}
.dB-proof-kicker{text-align:center;font-size:12.5px;font-weight:700;letter-spacing:.12em;color:rgba(255,255,255,.6);margin:0 0 22px}
.dB-proof .logo-chip{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.14);color:#fff}
.dB-proof .logo-chip svg{color:var(--c-lime)}
.dB-testis{display:grid;gap:14px;margin-top:30px}
.dB-testi{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:22px}
.dB-testi-q{font-size:15.5px;line-height:1.55;margin:12px 0 16px;color:#fff;font-weight:500}
.dB-testi-cap{display:flex;align-items:center;gap:11px}
.dB-testi-cap .person-ph{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);color:rgba(255,255,255,.7)}
.dB-testi-cap span{display:flex;flex-direction:column}
.dB-testi-nm{font-weight:700;font-size:14.5px}
.dB-testi-role{font-size:12.5px;color:rgba(255,255,255,.6)}
/* section */
.dB-sec{padding-block:52px}
.dB-soft{background:var(--c-soft)}
.dB-head{max-width:30em}
.dB-h2{font-family:var(--f-head);font-weight:800;font-size:clamp(28px,7vw,44px);line-height:1.05;letter-spacing:-.025em;color:var(--c-navy);margin:10px 0 0;text-wrap:balance}
.dB-lead{font-size:clamp(15px,4vw,18px);line-height:1.55;color:var(--c-muted);margin:14px 0 0}
/* timeline */
.dB-steps{margin-top:34px;display:grid;gap:0}
.dB-step{display:grid;grid-template-columns:auto 1fr;gap:18px;padding-bottom:26px;position:relative}
.dB-step:not(:last-child)::before{content:"";position:absolute;inset-inline-start:23px;top:48px;bottom:-2px;width:2px;background:repeating-linear-gradient(var(--c-primary) 0 6px,transparent 6px 12px);opacity:.4}
.dB-step-num{width:48px;height:48px;border-radius:14px;background:var(--c-lime);color:var(--c-navy);display:grid;place-items:center;font-family:var(--f-head);font-weight:800;font-size:20px;z-index:1}
.dB-step-t{font-size:20px;font-weight:800;color:var(--c-navy);margin:6px 0 6px}
.dB-step-d{font-size:14.5px;line-height:1.55;color:var(--c-muted);margin:0 0 0}
/* features compact */
.dB-feats{margin-top:32px;display:grid;gap:12px}
.dB-feat{display:grid;grid-template-columns:auto 1fr;gap:14px;background:#fff;border:1px solid rgba(11,46,79,.1);border-radius:16px;padding:18px 20px;align-items:start}
.dB-feat-ic{width:42px;height:42px;border-radius:11px;display:grid;place-items:center;color:var(--c-navy);background:var(--c-lime)}
.dB-feat-ic svg{width:21px;height:21px}
.dB-feat-t{font-size:17px;font-weight:800;color:var(--c-navy);margin:2px 0 5px}
.dB-feat-d{font-size:14px;line-height:1.5;color:var(--c-muted);margin:0}
.dB-sec-cta{display:flex;margin-top:30px}
/* video */
.dB-vid-in{display:grid;gap:24px}
.dB-vid-media{box-shadow:0 24px 60px -30px rgba(11,46,79,.6)}
.dB-vid-copy .cta{margin-top:20px}
/* stats lime band */
.dB-stats{background:var(--c-lime);color:var(--c-navy);padding-block:42px}
.dB-stats-in{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:center}
.dB-stat-num{font-family:var(--f-head);font-weight:800;font-size:clamp(32px,9.5vw,56px);line-height:1;letter-spacing:-.02em}
.dB-stat-lbl{font-size:12.5px;line-height:1.35;margin-top:8px;font-weight:600;color:color-mix(in srgb,var(--c-navy) 78%,transparent)}
/* final */
.dB-final{background:var(--c-navy);color:#fff;text-align:center}
.dB-final-in{padding-block:58px 92px;max-width:23em;margin:0 auto;display:flex;flex-direction:column;align-items:center}
.dB-final-h{font-family:var(--f-head);font-weight:800;font-size:clamp(30px,8vw,48px);line-height:1.05;letter-spacing:-.025em;margin:8px 0 0;text-wrap:balance}
.dB-final-h em{font-style:normal;color:var(--c-lime)}
.dB-final-sub{font-size:clamp(15px,4vw,18px);line-height:1.55;color:rgba(255,255,255,.85);margin:16px 0 28px}
/* footer */
.dB-foot{background:color-mix(in srgb,var(--c-navy) 96%,#000);color:rgba(255,255,255,.7);padding-block:34px 96px}
.dB-foot-in{display:flex;flex-direction:column;gap:16px;text-align:center;align-items:center}
.dB-foot-tag{font-size:14px;margin-top:10px;max-width:24em}
.dB-foot-copy{font-size:12.5px;opacity:.7;margin:0}
/* sticky mobile CTA */
.dB-sticky{position:fixed;inset-inline:0;bottom:0;z-index:55;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);border-top:1px solid rgba(11,46,79,.12);padding:12px 16px calc(12px + env(safe-area-inset-bottom));display:flex}
.dB-sticky .cta{flex:1}
@media(min-width:760px){
  .dB-hero-in{align-items:center;padding-block:64px 80px;min-height:clamp(540px,80vh,720px)}
  .dB-hero-copy{max-width:36rem}
  .dB-testis{grid-template-columns:repeat(3,1fr)}
  .dB-feats{grid-template-columns:repeat(2,1fr)}
  .dB-vid-in{grid-template-columns:1.05fr .95fr;align-items:center}
  .dB-sec{padding-block:74px}
  .dB-sticky{display:none}
  .dB-foot{padding-bottom:34px}
}
`;
function DesignB({ T, E, set, tw, lang, dir, setLang, onPrivacy }) {
  const reg = tw.linkRegister, emp = tw.linkEmployers;
  const Ed = (tag, k, cls, st) => (
    <EditableText tag={tag} value={T[k]} editing={E} onCommit={(v) => set(k, v)} className={cls} style={st} />
  );
  const steps = [1, 2, 3, 4];
  const feats = [["pipeline", "feat1"], ["fast", "feat2"], ["filter", "feat3"], ["team", "feat4"], ["tools", "feat5"], ["quality", "feat6"]];
  const testis = [1, 2, 3];
  const check = <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;

  return (
    <div className="dB">
      <style>{DB_CSS}</style>

      <header className="dB-hd">
        <div className="dB-hd-in wrap">
          <BrandLogo size={32} dark />
          <div className="dB-hd-right">
            <div className="lang-toggle">
              <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")}>FR</button>
              <button className={lang === "ar" ? "on" : ""} onClick={() => setLang("ar")}>AR</button>
            </div>
            <a className="cta cta-lime cta-sm" href={reg} target="_blank" rel="noopener"><span>{T.header_cta}</span></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="dB-hero">
        <div className="dB-hero-bg" style={{ backgroundImage: tw.heroImageUrl ? `url('${tw.heroImageUrl}')` : "none" }} />
        <div className="dB-hero-scrim" />
        <div className="wrap dB-hero-in">
          <div className="dB-hero-copy">
            <span className="dB-urgent"><i />{Ed("span", "hero_badge")}</span>
            {Ed("h1", "hero_title", "dB-h1")}
            {Ed("p", "hero_sub", "dB-sub")}
            <div className="dB-hero-cta">
              <CTA href={reg} variant="lime" size="lg">{T.hero_cta}</CTA>
              {Ed("p", "hero_note", "cta-note cta-note-light")}
            </div>
            <div className="dB-trust">
              <span>{check} 473+ agences</span>
              <span>{check} 5 137+ offres</span>
              <span>{check} 100% gratuit</span>
            </div>
          </div>
        </div>
      </section>

      {/* PREUVE */}
      {tw.showProof && (
        <section className="dB-proof" id="proof">
          <div className="wrap">
            {Ed("p", "proof_kicker", "dB-proof-kicker")}
            <LogoMarquee agencies={tw.agencies} />
            <div className="dB-testis">
              {testis.map((n) => (
                <figure className="dB-testi" key={n}>
                  <Stars n={5} />
                  {Ed("blockquote", `testi${n}_quote`, "dB-testi-q")}
                  <figcaption className="dB-testi-cap">
                    <PersonPlaceholder size={44} label={T[`testi${n}_name`]} src={tw[`testi${n}_photo`]} />
                    <span>{Ed("strong", `testi${n}_name`, "dB-testi-nm")}{Ed("span", `testi${n}_role`, "dB-testi-role")}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="dB-sec-cta" style={{ justifyContent: "center", marginTop: 28 }}><CTA href={emp} variant="lime" size="md">{T.adv_cta}</CTA></div>
          </div>
        </section>
      )}

      {/* PROCESSUS — timeline */}
      {tw.showProcess && (
        <section className="dB-sec" id="process">
          <div className="wrap">
            <div className="dB-head">
              {Ed("p", "process_kicker", "kicker")}
              {Ed("h2", "process_title", "dB-h2")}
              {Ed("p", "process_sub", "dB-lead")}
            </div>
            <div className="dB-steps">
              {steps.map((n) => (
                <div className="dB-step" key={n}>
                  <div className="dB-step-num">{n}</div>
                  <div>
                    {Ed("h3", `step${n}_title`, "dB-step-t")}
                    {Ed("p", `step${n}_desc`, "dB-step-d")}
                  </div>
                </div>
              ))}
            </div>
            <div className="dB-sec-cta"><CTA href={emp} variant="navy" size="md">{T.process_cta}</CTA></div>
          </div>
        </section>
      )}

      {/* AVANTAGES */}
      {tw.showAdv && (
        <section className="dB-sec dB-soft" id="adv">
          <div className="wrap">
            <div className="dB-head">
              {Ed("p", "adv_kicker", "kicker")}
              {Ed("h2", "adv_title", "dB-h2")}
              {Ed("p", "adv_sub", "dB-lead")}
            </div>
            <div className="dB-feats">
              {feats.map(([ic, key], i) => (
                <div className="dB-feat" key={i}>
                  <div className="dB-feat-ic">{FeatIcons[ic]}</div>
                  <div>{Ed("h3", `${key}_title`, "dB-feat-t")}{Ed("p", `${key}_desc`, "dB-feat-d")}</div>
                </div>
              ))}
            </div>
            <div className="dB-sec-cta"><CTA href={emp} variant="navy" size="md">{T.adv_cta}</CTA></div>
          </div>
        </section>
      )}

      {/* VIDEO */}
      {tw.showVid && (
        <section className="dB-sec">
          <div className="wrap dB-vid-in">
            <div className="dB-vid-copy">
              {Ed("p", "vid_kicker", "kicker")}
              {Ed("h2", "vid_title", "dB-h2")}
              {Ed("p", "vid_sub", "dB-lead")}
              <CTA href={emp} variant="lime" size="md">{T.vid_cta}</CTA>
            </div>
            <MediaFrame url={tw.vidVideoUrl} label={T.vid_media} ratio="16 / 10" className="dB-vid-media" />
          </div>
        </section>
      )}

      {/* STATS */}
      {tw.showStats && (
        <section className="dB-stats">
          <div className="wrap dB-stats-in">
            {[1, 2, 3].map((n) => (
              <div key={n}>{Ed("div", `stat${n}_num`, "dB-stat-num")}{Ed("div", `stat${n}_label`, "dB-stat-lbl")}</div>
            ))}
          </div>
        </section>
      )}

      {/* FINAL */}
      {tw.showFinal && (
        <section className="dB-final">
          <div className="wrap dB-final-in">
            {Ed("p", "final_kicker", "kicker kicker-lime")}
            {Ed("h2", "final_title", "dB-final-h")}
            {Ed("p", "final_sub", "dB-final-sub")}
            <CTA href={reg} variant="lime" size="lg">{T.final_cta}</CTA>
            {Ed("p", "final_note", "cta-note cta-note-light")}
          </div>
        </section>
      )}

      <footer className="dB-foot">
        <div className="wrap dB-foot-in">
          <BrandLogo size={30} dark />
          {Ed("p", "footer_tagline", "dB-foot-tag")}
          <button className="link-btn" onClick={onPrivacy}>{T.footer_privacy}</button>
          {Ed("p", "footer_copy", "dB-foot-copy")}
        </div>
      </footer>

      {/* barre CTA mobile fixe */}
      <div className="dB-sticky"><CTA href={reg} variant="lime" size="md" block>{T.hero_cta}</CTA></div>
    </div>
  );
}
window.DesignB = DesignB;
