// design_a.jsx — Variante A : « Classique CoinCarriere » (fidèle aux captures).
const DA_CSS = `
.dA{--maxw:1140px;overflow-x:hidden}
@media(max-width:560px){.dA .cta{white-space:normal;text-align:center}}
.dA .wrap{width:100%;max-width:var(--maxw);margin:0 auto;padding-inline:22px}
/* header */
.dA-hd{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.86);backdrop-filter:blur(14px);border-bottom:1px solid rgba(11,46,79,.08)}
.dA-hd-in{display:flex;align-items:center;gap:18px;height:64px}
.dA-logo-img{height:34px;width:auto;display:block}
.dA-foot-logo{display:inline-flex;background:#fff;border-radius:12px;padding:9px 14px;box-shadow:0 8px 22px -12px rgba(0,0,0,.5)}
.dA-foot-logo .dA-logo-img{height:30px}
.dA-nav{display:none;gap:26px;margin-inline-start:14px}
.dA-nav a{color:var(--c-navy);font-weight:600;font-size:15px;opacity:.82;cursor:pointer}
.dA-nav a:hover{opacity:1}
.dA-hd-right{margin-inline-start:auto;display:flex;align-items:center;gap:12px}
.dA-hero{position:relative;overflow:hidden;color:#fff;isolation:isolate}
.dA-hero-bg{position:absolute;inset:0;z-index:-2;background-color:var(--c-navy);background-size:cover;background-position:right center;background-repeat:no-repeat}
.dA-hero-scrim{position:absolute;inset:0;z-index:-1;background:
   linear-gradient(90deg, color-mix(in srgb,var(--c-navy) 95%,#000) 0%, color-mix(in srgb,var(--c-navy) 80%,transparent) 42%, color-mix(in srgb,var(--c-navy) 28%,transparent) 70%, transparent 100%),
   linear-gradient(0deg, color-mix(in srgb,var(--c-navy) 85%,#000) 0%, transparent 38%)}
[dir="rtl"] .dA-hero-bg{transform:scaleX(-1)}
[dir="rtl"] .dA-hero-scrim{background:
   linear-gradient(270deg, color-mix(in srgb,var(--c-navy) 95%,#000) 0%, color-mix(in srgb,var(--c-navy) 80%,transparent) 42%, color-mix(in srgb,var(--c-navy) 28%,transparent) 70%, transparent 100%),
   linear-gradient(0deg, color-mix(in srgb,var(--c-navy) 85%,#000) 0%, transparent 38%)}
.dA-hero-in{display:grid;gap:30px;padding-block:56px 64px;min-height:clamp(440px,72vh,640px);align-content:center}
.dA-h1{font-family:var(--f-head);font-weight:800;font-size:clamp(34px,8.5vw,60px);line-height:1.04;letter-spacing:-.02em;margin:16px 0 0;text-wrap:balance;text-shadow:0 2px 18px rgba(0,0,0,.35)}
.dA-sub{font-size:clamp(16px,4.4vw,20px);line-height:1.5;color:rgba(255,255,255,.92);margin:18px 0 0;max-width:30em;text-shadow:0 1px 10px rgba(0,0,0,.3)}
.dA-hero-cta{margin-top:28px;display:flex;flex-direction:column;gap:18px;align-items:stretch}
.dA-hero-cta .cta{width:100%;justify-content:center;white-space:normal;text-align:center;line-height:1.25}
.dA-hero-cta .cta-note{text-align:center}
.dA-hero-media{position:relative;justify-self:center;width:min(78%,300px)}
.dA-hero-media .media-frame{position:relative;z-index:2;box-shadow:0 30px 70px -20px rgba(0,0,0,.55);border:1px solid rgba(255,255,255,.18)}
.dA-hero-glow{position:absolute;inset:-12% -8%;background:radial-gradient(closest-side,color-mix(in srgb,var(--c-lime) 55%,transparent),transparent);filter:blur(28px);z-index:0}
/* proof */
.dA-proof{padding-block:42px 50px;background:#fff}
.dA-proof-kicker{text-align:center;font-size:12.5px;font-weight:700;letter-spacing:.12em;color:var(--c-muted);margin:0 0 22px}
.dA-testis{display:grid;gap:16px;margin-top:34px}
.dA-testi{margin:0;background:#fff;border:1px solid rgba(11,46,79,.1);border-radius:18px;padding:22px;box-shadow:0 10px 30px -22px rgba(11,46,79,.5)}
.dA-testi .stars{color:var(--c-lime);filter:saturate(.85) brightness(.92)}
.dA-testi-q{font-size:16px;line-height:1.55;color:var(--c-ink);margin:12px 0 18px;font-weight:500}
.dA-testi-cap{display:flex;align-items:center;gap:12px}
.dA-testi-cap>span{display:flex;flex-direction:column}
.dA-testi-nm{font-weight:700;color:var(--c-navy);font-size:15px}
.dA-testi-role{font-size:13px;color:var(--c-muted)}
.dA-testi-head{text-align:center;max-width:30em;margin:40px auto 0}
.dA-testi-head .dA-h2{margin-top:0}
/* témoignages animés */
.at{display:grid;grid-template-columns:1fr;gap:26px;align-items:center;margin-top:24px}
.at-photos{position:relative;height:300px;width:100%;max-width:260px;margin:0 auto}
.at-card{position:absolute;inset:0;border-radius:24px;overflow:hidden;transition:transform .6s cubic-bezier(.4,0,.2,1),opacity .6s ease;transform-origin:bottom center;box-shadow:0 24px 50px -18px rgba(11,46,79,.5)}
.at-card.on{box-shadow:0 30px 64px -16px rgba(11,46,79,.55)}
.at-card img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block}
.at-card-ph{width:100%;height:100%;display:grid;place-items:center;background:color-mix(in srgb,var(--c-primary) 10%,#fff)}
.at-body{text-align:center;display:flex;flex-direction:column;align-items:center}
.at-text{opacity:1}
.at-text .stars{color:var(--c-lime);justify-content:center;margin-bottom:14px}
.at-quote{font-family:var(--f-head);font-weight:600;font-size:clamp(18px,4.8vw,23px);line-height:1.45;color:var(--c-navy);margin:0 auto;max-width:22em;text-wrap:balance}
.at-who{margin-top:18px;display:flex;flex-direction:column;gap:2px}
.at-who strong{font-weight:700;color:var(--c-navy);font-size:16px}
.at-who span{font-size:13.5px;color:var(--c-muted)}
.at-ctrls{display:flex;align-items:center;gap:16px;margin-top:24px}
.at-btn{width:46px;height:46px;border-radius:50%;border:0;background:var(--c-navy);color:#fff;display:grid;place-items:center;cursor:pointer;transition:transform .15s ease,filter .2s ease}
.at-btn:hover{transform:translateY(-2px);filter:brightness(1.12)}
.at-dots{display:flex;gap:8px}
.at-dot{width:8px;height:8px;border-radius:50%;border:0;padding:0;background:color-mix(in srgb,var(--c-navy) 22%,#fff);cursor:pointer;transition:all .2s ease}
.at-dot.on{background:var(--c-lime);width:22px;border-radius:99px}
/* sections */
.dA-sec{padding-block:54px}
.dA-sec-soft{background:var(--c-soft)}
.dA-head{text-align:center;max-width:30em;margin:0 auto}
.dA-h2{font-family:var(--f-head);font-weight:800;font-size:clamp(26px,6.5vw,40px);line-height:1.1;letter-spacing:-.02em;color:var(--c-navy);margin:10px 0 0;text-wrap:balance}
.dA-lead{font-size:clamp(15px,4vw,18px);line-height:1.55;color:var(--c-muted);margin:14px 0 0}
.dA-steps{display:grid;gap:14px;margin-top:36px}
.dA-step{text-align:center;background:#fff;border:1px solid rgba(11,46,79,.08);border-radius:18px;padding:26px 20px;box-shadow:0 10px 30px -24px rgba(11,46,79,.5);transition:transform .25s ease,box-shadow .25s ease}
.dA-step:hover{transform:translateY(-6px);box-shadow:0 22px 44px -22px rgba(11,46,79,.55)}
.dA-steps.reveal.in .dA-step:hover{transform:translateY(-6px)}
/* reveal au scroll (staggered) — caché seulement si JS a armé l'animation */
.dA-steps.reveal:not(.in) .dA-step{opacity:0;transform:translateY(28px)}
.dA-steps.reveal .dA-step{transition:opacity .55s ease,transform .55s cubic-bezier(.2,.7,.2,1)}
.dA-steps.reveal.in .dA-step{opacity:1;transform:none;transition-delay:calc(var(--i) * .12s)}
.dA-steps.reveal:not(.in) .dA-step-num{transform:scale(.4);opacity:0}
.dA-steps.reveal .dA-step-num{transition:transform .5s cubic-bezier(.34,1.56,.64,1),opacity .4s ease}
.dA-steps.reveal.in .dA-step-num{transform:scale(1);opacity:1;transition-delay:calc(var(--i) * .12s + .14s)}
@media(prefers-reduced-motion:reduce){
  .dA-steps.reveal .dA-step,.dA-steps.reveal .dA-step-num{opacity:1;transform:none;transition:none}
}
/* carte active au scroll (mobile) */
@media(max-width:760px){
  .dA-step.active{transform:translateY(-4px) scale(1.015);border-color:var(--c-lime);box-shadow:0 26px 50px -22px rgba(11,46,79,.55)}
  .dA-step.active .dA-step-num{background:var(--c-lime);color:var(--c-navy);transform:scale(1.08)}
}
.dA-step-num{width:46px;height:46px;margin:0 auto 14px;border-radius:14px;display:grid;place-items:center;font-weight:800;font-size:19px;color:#fff;background:var(--c-primary);box-shadow:0 8px 18px -6px color-mix(in srgb,var(--c-primary) 70%,transparent)}
.dA-step-t{font-size:19px;font-weight:700;color:var(--c-navy);margin:0 0 8px}
.dA-step-d{font-size:14.5px;line-height:1.55;color:var(--c-muted);margin:0}
.dA-sec-cta{display:flex;justify-content:center;margin-top:34px}
.dA-feats{display:grid;gap:14px;margin-top:36px}
.dA-feat{background:#fff;border:1px solid rgba(11,46,79,.08);border-radius:18px;padding:24px;box-shadow:0 10px 30px -26px rgba(11,46,79,.5);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.dA-feat:hover{transform:translateY(-6px);box-shadow:0 24px 46px -24px rgba(11,46,79,.5);border-color:color-mix(in srgb,var(--c-primary) 30%,transparent)}
.dA-feat-ic{transition:transform .3s cubic-bezier(.34,1.56,.64,1),background .25s ease,color .25s ease}
.dA-feat:hover .dA-feat-ic{transform:scale(1.08) rotate(-4deg);background:var(--c-primary);color:#fff}
/* reveal au scroll (staggered) — caché seulement si JS a armé l'animation */
.dA-feats.reveal:not(.in) .dA-feat{opacity:0;transform:translateY(28px)}
.dA-feats.reveal .dA-feat{transition:opacity .55s ease,transform .55s cubic-bezier(.2,.7,.2,1),box-shadow .25s ease,border-color .25s ease}
.dA-feats.reveal.in .dA-feat{opacity:1;transform:none;transition-delay:calc(var(--i) * .09s)}
.dA-feats.reveal.in .dA-feat:hover{transform:translateY(-6px);transition-delay:0s}
@media(prefers-reduced-motion:reduce){
  .dA-feats.reveal .dA-feat{opacity:1;transform:none}
}
/* carte active au scroll (mobile) */
@media(max-width:760px){
  .dA-feat.active{transform:translateY(-4px) scale(1.015);border-color:var(--c-primary);box-shadow:0 26px 50px -22px rgba(11,46,79,.5)}
  .dA-feat.active .dA-feat-ic{background:var(--c-primary);color:#fff;transform:scale(1.08) rotate(-4deg)}
}
.dA-feat-ic{width:50px;height:50px;border-radius:14px;display:grid;place-items:center;color:var(--c-primary);background:color-mix(in srgb,var(--c-primary) 12%,#fff);margin-bottom:16px}
.dA-feat-t{font-size:18px;font-weight:700;color:var(--c-navy);margin:0 0 8px}
.dA-feat-d{font-size:14.5px;line-height:1.55;color:var(--c-muted);margin:0}
/* video */
.dA-vid-in{display:grid;gap:26px}
.dA-vid-copy .cta{margin-top:22px}
.dA-vid-media{box-shadow:0 24px 60px -30px rgba(11,46,79,.6);border:1px solid rgba(11,46,79,.1)}
/* stats */
.dA-stats{padding-block:54px;background:#fff}
.dA-stats-head{text-align:center;max-width:28em;margin:0 auto 32px}
.dA-stats-head .dA-h2{margin-top:8px}
.dA-stats-in{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:center}
.dA-stat-num{font-family:var(--f-head);font-weight:800;font-size:clamp(30px,9vw,52px);line-height:1;color:var(--c-navy);letter-spacing:-.02em}
.dA-stat-num.cu{opacity:.001;transform:translateY(14px) scale(.92);transition:opacity .6s ease,transform .7s cubic-bezier(.2,.7,.2,1)}
.dA-stat-num.cu.cu-in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.dA-stat-num.cu{opacity:1;transform:none}}
.dA-stat-num.hl{color:var(--c-primary)}
.dA-stat-lbl{font-size:12.5px;line-height:1.35;color:var(--c-muted);margin-top:8px}
/* final */
.dA-final{position:relative;color:#fff;text-align:center;overflow:hidden;isolation:isolate}
.dA-final-bg{position:absolute;inset:0;z-index:-1;background:linear-gradient(160deg,color-mix(in srgb,var(--c-navy) 96%,#000),var(--c-navy) 60%,color-mix(in srgb,var(--c-primary) 60%,var(--c-navy)))}
.dA-final-in{padding-block:58px;max-width:22em;margin:0 auto;display:flex;flex-direction:column;align-items:center}
.dA-final-in .cta{max-width:100%;white-space:normal;text-align:center;justify-content:center}
.dA-final-h{font-family:var(--f-head);font-weight:800;font-size:clamp(28px,7.5vw,46px);line-height:1.08;letter-spacing:-.02em;margin:8px 0 0;text-wrap:balance}
.dA-final-sub{font-size:clamp(15px,4vw,18px);line-height:1.55;color:rgba(255,255,255,.85);margin:16px 0 28px}
/* footer */
.dA-foot{background:var(--c-navy);color:rgba(255,255,255,.7);padding-block:38px}
.dA-foot-in{display:flex;flex-direction:column;gap:18px;text-align:center;align-items:center}
.dA-foot-tag{font-size:14px;margin:12px 0 0;max-width:24em}
.dA-foot-links{display:flex;gap:18px;flex-wrap:wrap;justify-content:center}
.dA-foot-copy{font-size:12.5px;opacity:.7;margin:0}
@media(min-width:760px){
  .dA-nav{display:flex}
  .dA-hero-in{padding-block:84px 92px;min-height:clamp(520px,76vh,720px)}
  .dA-hero-copy{max-width:34rem}
  .dA-hero-cta{align-items:flex-start}
  .dA-hero-cta .cta{width:auto;white-space:nowrap;text-align:start}
  .dA-hero-cta .cta-note{text-align:start}
  .dA-testis{grid-template-columns:repeat(3,1fr)}
  .at{grid-template-columns:.85fr 1.15fr;gap:48px;margin-top:40px}
  .at-photos{max-width:300px;height:360px}
  .at-body{text-align:start;align-items:flex-start}
  .at-text .stars{justify-content:flex-start}
  .at-quote{margin-inline:0}
  [dir="rtl"] .at-body{text-align:end;align-items:flex-end}
  [dir="rtl"] .at-text .stars{justify-content:flex-end}
  .dA-steps{grid-template-columns:repeat(4,1fr)}
  .dA-feats{grid-template-columns:repeat(3,1fr)}
  .dA-vid-in{grid-template-columns:.9fr 1.1fr;align-items:center}
  .dA-sec{padding-block:76px}
}
`;
function DesignA({ T, E, set, tw, lang, dir, setLang, onPrivacy }) {
  const reg = tw.linkRegister, emp = tw.linkEmployers;
  const cs = (id) => (tw.cta && tw.cta[id]) || {};
  const Ed = (tag, k, cls, st) => (
    <EditableText tag={tag} value={T[k]} editing={E} onCommit={(v) => set(k, v)} className={cls} style={st} />
  );
  const steps = [1, 2, 3, 4].map((n) => ({ t: `step${n}_title`, d: `step${n}_desc`, n }));
  const feats = [
    ["pipeline", "feat1"], ["fast", "feat2"], ["filter", "feat3"],
    ["team", "feat4"], ["tools", "feat5"], ["quality", "feat6"],
  ];
  const testis = [1, 2, 3].map((n) => ({ q: `testi${n}_quote`, nm: `testi${n}_name`, r: `testi${n}_role` }));
  const [stepsRef, stepsIn] = useInView();
  const [featsRef, featsIn] = useInView();
  useCenterActive(stepsRef, ".dA-step");
  useCenterActive(featsRef, ".dA-feat");

  return (
    <div className="dA">
      <style>{DA_CSS}</style>

      <header className="dA-hd">
        <div className="dA-hd-in wrap">
          <img className="dA-logo-img" src="assets/coincarriere-logo.png" alt="CoinCarriere" />
          <nav className="dA-nav">
            <a href="#process">{Ed("span", "nav1")}</a>
            <a href="#adv">{Ed("span", "nav2")}</a>
            <a href="#proof">{Ed("span", "nav3")}</a>
          </nav>
          <div className="dA-hd-right">
            <div className="lang-toggle">
              <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")}>FR</button>
              <button className={lang === "ar" ? "on" : ""} onClick={() => setLang("ar")}>AR</button>
            </div>
            <a className="cta cta-lime cta-sm" href={reg} target="_blank" rel="noopener" style={{ background: cs("header").bg, color: cs("header").fg }}><span>{T.header_cta}</span></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="dA-hero">
        <div className="dA-hero-bg" style={{ backgroundImage: tw.heroImageUrl ? `url('${tw.heroImageUrl}')` : "none" }} />
        <div className="dA-hero-scrim" />
        <div className="wrap dA-hero-in">
          <div className="dA-hero-copy">
            <span className="badge">
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M4 21V8l8-4 8 4v13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 21v-5h6v5" fill="none" stroke="currentColor" strokeWidth="1.7"/></svg>
              {Ed("span", "hero_badge")}
            </span>
            {Ed("h1", "hero_title", "dA-h1")}
            {Ed("p", "hero_sub", "dA-sub")}
            <div className="dA-hero-cta">
              <CTA href={reg} variant="lime" size="lg" bg={cs("hero").bg} fg={cs("hero").fg}>{T.hero_cta}</CTA>
              {Ed("p", "hero_note", "cta-note cta-note-light")}
            </div>
          </div>
        </div>
      </section>

      {/* PREUVE SOCIALE */}
      {tw.showProof && (
        <section className="dA-proof" id="proof">
          <div className="wrap">
            {Ed("p", "proof_kicker", "dA-proof-kicker")}
            <LogoMarquee agencies={tw.agencies} />
            <div className="dA-testi-head">
              {Ed("h2", "testi_title", "dA-h2")}
              {Ed("p", "testi_sub", "dA-lead")}
            </div>
            <AnimatedTestimonials
              dir={dir}
              items={[1, 2, 3].map((nn) => ({
                quote: T[`testi${nn}_quote`],
                name: T[`testi${nn}_name`],
                role: T[`testi${nn}_role`],
                src: tw[`testi${nn}_photo`],
              }))}
            />
            <div className="dA-sec-cta" style={{ marginTop: 12 }}><CTA href={emp} variant="ghost" size="md" bg={cs("proof").bg} fg={cs("proof").fg}>{T.adv_cta}</CTA></div>
          </div>
        </section>
      )}

      {/* PROCESSUS */}
      {tw.showProcess && (
        <section className="dA-sec" id="process">
          <div className="wrap dA-sec-in">
            <div className="dA-head">
              {Ed("p", "process_kicker", "kicker")}
              {Ed("h2", "process_title", "dA-h2")}
              {Ed("p", "process_sub", "dA-lead")}
            </div>
            <div className={"dA-steps reveal" + (stepsIn ? " in" : "")} ref={stepsRef}>
              {steps.map((s, i) => (
                <div className="dA-step" key={i} style={{ "--i": i }}>
                  <div className="dA-step-num">{s.n}</div>
                  {Ed("h3", s.t, "dA-step-t")}
                  {Ed("p", s.d, "dA-step-d")}
                </div>
              ))}
            </div>
            <div className="dA-sec-cta"><CTA href={emp} variant="navy" size="md" bg={cs("process").bg} fg={cs("process").fg}>{T.process_cta}</CTA></div>
          </div>
        </section>
      )}

      {/* AVANTAGES */}
      {tw.showAdv && (
        <section className="dA-sec dA-sec-soft" id="adv">
          <div className="wrap dA-sec-in">
            <div className="dA-head">
              {Ed("p", "adv_kicker", "kicker")}
              {Ed("h2", "adv_title", "dA-h2")}
              {Ed("p", "adv_sub", "dA-lead")}
            </div>
            <div className={"dA-feats reveal" + (featsIn ? " in" : "")} ref={featsRef}>
              {feats.map(([ic, key], i) => (
                <div className="dA-feat" key={i} style={{ "--i": i }}>
                  <div className="dA-feat-ic">{FeatIcons[ic]}</div>
                  {Ed("h3", `${key}_title`, "dA-feat-t")}
                  {Ed("p", `${key}_desc`, "dA-feat-d")}
                </div>
              ))}
            </div>
            <div className="dA-sec-cta"><CTA href={emp} variant="navy" size="md" bg={cs("adv").bg} fg={cs("adv").fg}>{T.adv_cta}</CTA></div>
          </div>
        </section>
      )}

      {/* TÉMOIGNAGE VIDÉO */}
      {tw.showVid && (
        <section className="dA-sec">
          <div className="wrap dA-vid-in">
            <div className="dA-vid-copy">
              {Ed("p", "vid_kicker", "kicker")}
              {Ed("h2", "vid_title", "dA-h2")}
              {Ed("p", "vid_sub", "dA-lead")}
              <CTA href={emp} variant="lime" size="md" bg={cs("vid").bg} fg={cs("vid").fg}>{T.vid_cta}</CTA>
            </div>
            <MediaFrame url={tw.vidVideoUrl} label={T.vid_media} ratio="16 / 10" className="dA-vid-media" controls />
          </div>
        </section>
      )}

      {/* STATISTIQUES */}
      {tw.showStats && (
        <section className="dA-stats">
          <div className="wrap">
            <div className="dA-stats-head">
              {Ed("p", "stats_kicker", "kicker")}
              {Ed("h2", "stats_title", "dA-h2")}
            </div>
            <div className="dA-stats-in">
              {[["stat1_num", "stat1_label"], ["stat2_num", "stat2_label", true], ["stat3_num", "stat3_label"]].map((s, i) => (
                <div className="dA-stat" key={i}>
                  {E
                    ? Ed("div", s[0], "dA-stat-num" + (s[2] ? " hl" : ""))
                    : <CountUp value={T[s[0]]} dir={dir} className={"dA-stat-num" + (s[2] ? " hl" : "")} />}
                  {Ed("div", s[1], "dA-stat-lbl")}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      {tw.showFinal && (
        <section className="dA-final">
          <div className="dA-final-bg" />
          <div className="wrap dA-final-in">
            {Ed("p", "final_kicker", "kicker kicker-lime")}
            {Ed("h2", "final_title", "dA-final-h")}
            {Ed("p", "final_sub", "dA-final-sub")}
            <CTA href={reg} variant="lime" size="lg" bg={cs("final").bg} fg={cs("final").fg}>{T.final_cta}</CTA>
            {Ed("p", "final_note", "cta-note cta-note-light")}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="dA-foot">
        <div className="wrap dA-foot-in">
          <div className="dA-foot-brand">
            <span className="dA-foot-logo"><img className="dA-logo-img" src="assets/coincarriere-logo.png" alt="CoinCarriere" /></span>
            {Ed("p", "footer_tagline", "dA-foot-tag")}
          </div>
          <div className="dA-foot-links">
            <button className="link-btn" onClick={onPrivacy}>{T.footer_privacy}</button>
          </div>
          {Ed("p", "footer_copy", "dA-foot-copy")}
        </div>
      </footer>
    </div>
  );
}
window.DesignA = DesignA;
