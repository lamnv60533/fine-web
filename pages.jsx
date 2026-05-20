/* pages.jsx — page-level components for the multi-page site.
   Exposes window.FINE_PAGES = { Home, About, Team, Services, Partners, Contact }.
*/
/* global React */
const { useState, useEffect, useRef } = React;
const { VALUES, SERVICES, TEAM, CLIENTS, STATS, CONTACTS } = window.FINE_DATA;
const { PageBanner } = window.FINE_SHELL;

/* ---------- Reusable atoms ---------- */
function DotsStrip() { return <div className="dots-strip reveal" aria-hidden="true"></div>; }
function SectionHead({ title, lead, wide }) {
  return (
    <>
      <DotsStrip />
      <h2 className={"section-heading reveal" + (wide ? " wide" : "")}>{title}</h2>
      {lead && <p className="section-intro reveal">{lead}</p>}
    </>
  );
}
function StatsBand({ lang }) {
  return (
    <section className="stats" data-screen-label="Stats">
      <div className="wrap">
        <div className="stats-grid reveal">
          {STATS.map(s => (
            <div className="stat-cell" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{lang === "en" ? s.label : s.label_vn}</div>
              <div className="label-vn">{lang === "en" ? s.label_vn : s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ HOME */
function Hero({ lang }) {
  return (
    <section id="home" className="hero" data-screen-label="Hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              {lang === "en" ? (
                <>FINE Auditing<br/>Assurance you can <em>trust</em>,<br/>insights that move you forward.</>
              ) : (
                <>Kiểm toán FINE<br/>Niềm tin <em>vững chắc</em>,<br/>hiểu biết dẫn lối tương lai.</>
              )}
            </h1>
            <p className="hero-subtitle">
              {lang === "en"
                ? "Independent professional services firm — audit, tax, accounting & advisory across Vietnam since 2006."
                : "Công ty dịch vụ chuyên nghiệp độc lập — kiểm toán, thuế, kế toán & tư vấn trên phạm vi cả nước từ năm 2006."}
            </p>
            <div className="hero-cta-row">
              <a href="our-services.html" className="btn primary">
                <span>{lang === "en" ? "Our services" : "Dịch vụ"}</span>
                <span className="arrow">→</span>
              </a>
              <a href="contact.html" className="btn">
                <span>{lang === "en" ? "Contact us" : "Liên hệ"}</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <aside className="hero-img-box" aria-label="FINE values">
            <span className="corner-tag">FINE / 2026</span>
            <div>
              <div className="seal">FINE<span>.</span></div>
              <div className="est">Established · Ho Chi Minh City · 2006</div>
            </div>
            <ul className="values-list">
              {VALUES.map(v => (
                <li key={v.word}>
                  <span className="initial">{v.initial}</span>
                  <span className="word">
                    {lang === "en" ? v.word : v.vn}
                    <small>{lang === "en" ? v.vn : v.word}</small>
                  </span>
                  <span className="dot"></span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="dots-strip" aria-hidden="true"></div>

        <div className="hero-body">
          <div className="hero-summary-head">
            {lang === "en" ? "Executive summary" : "Tổng quan"}
          </div>
          {lang === "en" ? (
            <>
              <p>
                <span className="orange">FINE Auditing Limited Liability Company ("FINE")</span> is
                an independent professional services firm providing{" "}
                <span className="orange">auditing, accounting, taxation and financial advisory</span>{" "}
                services to economic organizations across all sectors on a national scale.
              </p>
              <p>
                Our mission is to provide trusted, best-in-class financial solutions that enable
                clients to make informed decisions, drive sustainable growth, and generate enduring
                value — guided by our three core values:{" "}
                <span className="orange">Integrity · Fortunate · Everlasting</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                <span className="orange">Công ty TNHH Kiểm toán FINE ("FINE")</span> là công ty
                dịch vụ chuyên nghiệp độc lập, chuyên cung cấp dịch vụ{" "}
                <span className="orange">kiểm toán, kế toán, tư vấn thuế và tư vấn tài chính</span>{" "}
                cho các tổ chức kinh tế thuộc mọi thành phần trên phạm vi cả nước.
              </p>
              <p>
                Sứ mệnh của chúng tôi là cung cấp các giải pháp tài chính đáng tin cậy và tốt đẹp
                nhất, giúp khách hàng ra quyết định đúng đắn, phát triển bền vững và tạo ra giá trị
                lâu dài — dẫn lối bởi ba giá trị cốt lõi:{" "}
                <span className="orange">Chính trực · Thịnh vượng · Trường tồn</span>.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function WhatWeCanDo({ lang, withCta = true }) {
  // Each row keeps one card expanded; first card of the row by default.
  // ALL cards stay mounted at all times — toggling the expanded card just
  // animates flex-grow on the row + opacity on the inner views, so there is
  // no React unmount/remount flash.
  const [expandedByRow, setExpandedByRow] = useState({ 0: 0, 1: 3 });
  const expand = (rowIdx, cardIdx) => {
    setExpandedByRow(prev => ({ ...prev, [rowIdx]: cardIdx }));
  };

  const cols = 3;
  const rows = [];
  for (let i = 0; i < SERVICES.length; i += cols) rows.push(SERVICES.slice(i, i + cols).map((s, j) => i + j));

  const gridChildren = rows.map((rowIdxs, rIdx) => {
    const expanded = expandedByRow[rIdx];
    return (
      <div key={"row-" + rIdx} className="svc-accordion-row">
        {rowIdxs.map(i => {
          const s = SERVICES[i];
          const isOpen = i === expanded;
          return (
            <div
              key={"card-" + s.num}
              className={"svc-card" + (isOpen ? " is-open" : " is-collapsed")}
              data-num={s.num}
              data-comment-anchor={"svc-" + s.num}
              onClick={() => !isOpen && expand(rIdx, i)}
              role={!isOpen ? "button" : undefined}
              tabIndex={!isOpen ? 0 : undefined}
              aria-label={!isOpen ? s.title : undefined}
            >
              {/* Collapsed view: vertical number + tag */}
              <div className="svc-card-collapsed" aria-hidden={isOpen}>
                <span className="cnum">{s.num}</span>
                <span className="ctag">{s.tag.toUpperCase()}</span>
              </div>

              {/* Expanded view: full content */}
              <div className="svc-card-expanded" aria-hidden={!isOpen}>
                <div className="core-card-img">
                  <div className="placeholder"><span className="num">{s.num}</span></div>
                  <div className="core-card-img-overlay">
                    <div className="title">{lang === "en" ? s.title : s.title_vn}</div>
                    <div className="vn">{lang === "en" ? s.title_vn : s.title}</div>
                  </div>
                </div>
                <div className="core-card-body expanded-body">
                  <div className="expanded-head">
                    <div className="core-card-num">{s.num} · {s.tag.toUpperCase()}</div>
                    <h3 className="expanded-title">
                      <span className="en">{lang === "en" ? s.title : s.title_vn}</span>
                      <span className="vn">{lang === "en" ? s.title_vn : s.title}</span>
                    </h3>
                    <p className="expanded-lead">{lang === "en" ? s.short : s.short_vn}</p>
                  </div>
                  <div className="expanded-cols">
                    <div>
                      <h4>{lang === "en" ? "Scope of services" : "Scope (EN)"}</h4>
                      <ul>{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                    </div>
                    <div>
                      <h4>{lang === "en" ? "Phạm vi dịch vụ" : "Dịch vụ cung cấp"}</h4>
                      <ul>{s.bullets_vn.map(b => <li key={b}>{b}</li>)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <section className="core-services" data-screen-label="What We Can Do">
      <div className="wrap">
        <SectionHead
          title={lang === "en" ? "What we can do" : "Năng lực dịch vụ"}
          lead={lang === "en"
            ? "Six disciplines led by partners who stay actively involved in every engagement — from first meeting to final deliverable."
            : "Sáu lĩnh vực dịch vụ được dẫn dắt trực tiếp bởi các Giám đốc — từ buổi gặp đầu tiên đến sản phẩm cuối cùng."}
        />

        <div className="svc-accordion-stack">{gridChildren}</div>

        {withCta && (
          <div className="section-cta reveal">
            <a href="our-services.html" className="btn primary">
              <span>{lang === "en" ? "Explore all services" : "Xem toàn bộ dịch vụ"}</span>
              <span className="arrow">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function ClientsTeaser({ lang, limit = 12 }) {
  const visible = CLIENTS.slice(0, limit);
  return (
    <section className="clients-teaser" data-screen-label="Clients teaser">
      <div className="wrap">
        <SectionHead
          wide
          title={lang === "en" ? "Trusted by 120+ corporates" : "Đối tác tin cậy của 120+ doanh nghiệp"}
          lead={lang === "en"
            ? "From multinationals and family offices to NGOs and listed groups — a snapshot of who we serve."
            : "Từ tập đoàn đa quốc gia, văn phòng gia đình, đến tổ chức phi chính phủ và công ty niêm yết."}
        />
        <div className="clients-grid reveal">
          {visible.map(c => (
            <div className="client-cell" key={c.name} title={c.name + " — " + c.sector}>
              <img src={c.logo} alt={c.name} loading="lazy" />
              <span className="hover-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <StatsBand lang={lang} />
      <WhatWeCanDo lang={lang} />
      <ClientsTeaser lang={lang} />
    </>
  );
}

/* ============================================================ ABOUT */
function AboutBody({ lang }) {
  return (
    <section className="about" data-screen-label="About body">
      <div className="wrap">
        <SectionHead wide title={lang === "en" ? "About FINE" : "Về FINE"} />
        <div className="about-grid reveal">
          <div className="about-img">
            <div className="since">2006</div>
            <div className="stamp">
              <div className="l1">{lang === "en" ? "Independent · Vietnam" : "Độc lập · Việt Nam"}</div>
              <div className="l2">FINE Auditing Limited Liability Company</div>
              <div className="l3">{lang === "en" ? "Audit · Tax · Accounting · Advisory" : "Kiểm toán · Thuế · Kế toán · Tư vấn"}</div>
            </div>
          </div>
          <div className="about-body">
            {lang === "en" ? (
              <>
                <p>
                  <span className="orange">FINE</span> was incorporated as a limited liability
                  professional services firm providing auditing, accounting, taxation and financial
                  advisory services to economic organizations across all sectors on a{" "}
                  <span className="orange">national scale</span>.
                </p>
                <p>
                  Our mission is to provide trusted, best-in-class financial solutions that enable
                  clients to make informed decisions, drive sustainable growth, and generate
                  enduring value.
                </p>
                <p>
                  FINE distinguishes itself not only through technical excellence but also through a
                  deep commitment to treating our clients' challenges as our own.
                </p>
              </>
            ) : (
              <>
                <p>
                  <span className="orange">FINE</span> được thành lập dưới hình thức công ty trách
                  nhiệm hữu hạn, chuyên cung cấp dịch vụ kiểm toán, kế toán, tư vấn thuế và tư vấn
                  tài chính cho các tổ chức kinh tế thuộc mọi thành phần trên{" "}
                  <span className="orange">phạm vi cả nước</span>.
                </p>
                <p>
                  Sứ mệnh của chúng tôi là cung cấp các giải pháp tài chính đáng tin cậy và tốt đẹp
                  nhất, giúp khách hàng ra quyết định đúng đắn, phát triển bền vững và tạo ra giá
                  trị lâu dài.
                </p>
                <p>
                  FINE khác biệt không chỉ vì khả năng chuyên môn mà còn vì sự cam kết coi vấn đề
                  của khách hàng là của chính mình.
                </p>
              </>
            )}
            <div className="values-row">
              {VALUES.map(v => (
                <div className="value-cell" key={v.word}>
                  <div className="w">{lang === "en" ? v.word : v.vn}</div>
                  <div className="vn">{lang === "en" ? v.vn : v.word}</div>
                  <div className="desc">{lang === "en" ? v.blurb : v.blurb_vn}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ lang }) {
  return (
    <>
      <PageBanner
        eyebrow={lang === "en" ? "01 · About Us" : "01 · Về chúng tôi"}
        title={lang === "en" ? "An independent firm built on three core values." : "Công ty độc lập, xây trên ba giá trị cốt lõi."}
        lead={lang === "en"
          ? "Founded 2006 in Ho Chi Minh City. Audit, tax, accounting and advisory across Vietnam."
          : "Thành lập năm 2006 tại Thành phố Hồ Chí Minh. Dịch vụ kiểm toán, thuế, kế toán và tư vấn trên cả nước."}
      />
      <AboutBody lang={lang} />
      <StatsBand lang={lang} />
    </>
  );
}

/* ============================================================ TEAM */
function TeamBody({ lang }) {
  const [sel, setSel] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    if (sel !== null && ref.current) {
      setTimeout(() => ref.current.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
    }
  }, [sel]);
  return (
    <section data-screen-label="Team body">
      <div className="wrap">
        <SectionHead
          title={lang === "en" ? "Board of Management" : "Ban Giám đốc"}
          lead={lang === "en"
            ? "Our clients work directly with partners who have practised in their fields for an average of over 17 years — actively involved in every engagement."
            : "Khách hàng của FINE luôn được tiếp cận trực tiếp với các Giám đốc có trên 17 năm kinh nghiệm chuyên môn, luôn trực tiếp tham gia từng dịch vụ."}
        />
        <div className="team-grid reveal">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className={"team-card" + (sel === i ? " active" : "")}
              onClick={() => setSel(sel === i ? null : i)}
            >
              <div className="team-photo-wrap">
                {m.photo
                  ? <img src={m.photo} alt={m.name} />
                  : <div className="placeholder">{m.initials}</div>}
                <div className="name-overlay">
                  <div className="nm">{lang === "en" ? m.name : m.name_vn}</div>
                </div>
              </div>
              <div className="role">
                <strong>{m.years} {lang === "en" ? "YEARS" : "NĂM"}</strong>
                {lang === "en" ? m.role : m.role_vn}
              </div>
            </div>
          ))}
        </div>

        {sel !== null && (
          <div className="team-detail" ref={ref}>
            <button className="close-x" onClick={() => setSel(null)}>✕</button>
            <div className="left">
              {TEAM[sel].photo
                ? <img src={TEAM[sel].photo} alt={TEAM[sel].name} />
                : <div className="placeholder">{TEAM[sel].initials}</div>}
            </div>
            <div className="right">
              <div className="role-up">{lang === "en" ? TEAM[sel].role : TEAM[sel].role_vn}</div>
              <h3>{lang === "en" ? TEAM[sel].name : TEAM[sel].name_vn}</h3>
              <div className="quals">{TEAM[sel].quals}</div>
              <p>{lang === "en" ? TEAM[sel].bio : TEAM[sel].bio_vn}</p>
              <p className="vn">{lang === "en" ? TEAM[sel].bio_vn : TEAM[sel].bio}</p>
              <div className="contact-row">
                <div>
                  <div className="lbl">{lang === "en" ? "Experience" : "Kinh nghiệm"}</div>
                  <div className="val">{TEAM[sel].years} {lang === "en" ? "years" : "năm"}</div>
                </div>
                {TEAM[sel].phone && (
                  <div>
                    <div className="lbl">{lang === "en" ? "Direct line" : "Điện thoại"}</div>
                    <div className="val">{TEAM[sel].phone}</div>
                  </div>
                )}
                {TEAM[sel].email && (
                  <div>
                    <div className="lbl">Email</div>
                    <div className="val"><a href={"mailto:" + TEAM[sel].email}>{TEAM[sel].email}</a></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Team({ lang }) {
  return (
    <>
      <PageBanner
        eyebrow={lang === "en" ? "02 · Our Team" : "02 · Đội ngũ"}
        title={lang === "en" ? "Partners with 17+ years on every engagement." : "Các Giám đốc với 17+ năm kinh nghiệm trong từng dịch vụ."}
        lead={lang === "en"
          ? "Each director leads engagements personally — actively involved from first conversation to delivery."
          : "Mỗi Giám đốc trực tiếp dẫn dắt từng dịch vụ — từ buổi gặp đầu tiên đến khi hoàn thành."}
      />
      <TeamBody lang={lang} />
    </>
  );
}

/* ============================================================ SERVICES */
function ServicesAccordion({ lang }) {
  // Open the matching row if URL has hash like #svc-01
  const [expanded, setExpanded] = useState(() => {
    if (typeof window === "undefined") return null;
    const h = window.location.hash.match(/svc-(\d+)/);
    if (!h) return null;
    return SERVICES.findIndex(s => s.num === h[1]);
  });

  // Scroll to the hash target after mount.
  useEffect(() => {
    if (expanded !== null && expanded !== -1) {
      setTimeout(() => {
        const t = document.getElementById("svc-" + SERVICES[expanded].num);
        if (t) {
          const y = t.getBoundingClientRect().top + window.scrollY - 110;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 200);
    }
  }, []);

  // Listen for in-page "open service" events fired by the cards above.
  useEffect(() => {
    const h = (e) => {
      const i = SERVICES.findIndex(s => s.num === e.detail.num);
      if (i !== -1) setExpanded(i);
    };
    window.addEventListener("fine:openSvc", h);
    return () => window.removeEventListener("fine:openSvc", h);
  }, []);

  return (
    <section className="svc-detail" data-screen-label="Services accordion">
      <div className="wrap">
        <SectionHead
          wide
          title={lang === "en" ? "Our services in detail" : "Chi tiết dịch vụ"}
          lead={lang === "en"
            ? "Click any service to expand the full scope. Bilingual EN / VN throughout."
            : "Nhấp vào từng dịch vụ để xem chi tiết phạm vi. Trình bày song ngữ Anh / Việt."}
        />
        <div className="svc-detail-list">
          {SERVICES.map((s, i) => {
            const open = expanded === i;
            return (
              <div key={s.num} id={"svc-" + s.num} className={"svc-row reveal" + (open ? " open" : "")}>
                <button
                  className="svc-row-header"
                  onClick={() => setExpanded(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="svc-row-num">{s.num}</span>
                  <span className="svc-row-title">
                    <span className="en">{lang === "en" ? s.title : s.title_vn}</span>
                    <span className="vn">{lang === "en" ? s.title_vn : s.title}</span>
                  </span>
                  <span className="svc-row-tag">{s.tag}</span>
                  <span className="svc-row-chev" aria-hidden="true">{open ? "−" : "+"}</span>
                </button>
                <div className="svc-row-body" aria-hidden={!open}>
                  <div className="svc-row-body-inner">
                    <p className="svc-row-lead">{lang === "en" ? s.short : s.short_vn}</p>
                    <div className="two-col">
                      <div>
                        <h4>{lang === "en" ? "Scope of services" : "Scope (EN)"}</h4>
                        <ul>{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                      </div>
                      <div>
                        <h4>{lang === "en" ? "Phạm vi dịch vụ" : "Dịch vụ cung cấp"}</h4>
                        <ul>{s.bullets_vn.map(b => <li key={b}>{b}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services({ lang }) {
  return (
    <>
      <PageBanner
        eyebrow={lang === "en" ? "03 · Our Services" : "03 · Dịch vụ"}
        title={lang === "en" ? "Six disciplines, one standard of professional care." : "Sáu lĩnh vực, một tiêu chuẩn dịch vụ chuyên nghiệp."}
        lead={lang === "en"
          ? "Audit, tax, accounting, payroll, business set-up, and M&A advisory — each led by a partner with deep technical credentials. Click any card to read the full scope."
          : "Kiểm toán, thuế, kế toán, tiền lương, thành lập doanh nghiệp và tư vấn M&A — mỗi dịch vụ dẫn dắt bởi Giám đốc có chuyên môn sâu. Nhấp vào từng thẻ để xem chi tiết."}
      />
      <WhatWeCanDo lang={lang} withCta={false} />
    </>
  );
}

/* ============================================================ PARTNERS */
function PartnersBody({ lang }) {
  return (
    <section className="about" data-screen-label="Partners body">
      <div className="wrap">
        <SectionHead title={lang === "en" ? "Our partners" : "Đối tác"} />
        <div className="partners-grid reveal">
          <a className="partner-card" href="https://www.hqco.com.vn/" target="_blank" rel="noopener">
            <div className="logo-slot">H&amp;Q ADVISORY · MORISON GLOBAL</div>
            <h4>H&amp;Q Advisory</h4>
            <div className="role">{lang === "en" ? "Independent Member · Morison Global" : "Thành viên Độc lập · Morison Global"}</div>
            <p>
              {lang === "en"
                ? "Our affiliated advisory firm in Vietnam, founded November 2014. An Independent Member of Morison Global — an international accounting network spanning 75+ countries."
                : "Công ty tư vấn liên kết tại Việt Nam, thành lập tháng 11/2014. Thành viên độc lập của Morison Global — mạng lưới kế toán quốc tế tại hơn 75 quốc gia."}
            </p>
            <span className="visit">Visit hqco.com.vn <span>→</span></span>
          </a>
          <a className="partner-card" href="#" onClick={(e) => e.preventDefault()}>
            <div className="logo-slot">VIET &amp; CO · LEGAL PARTNER</div>
            <h4>Viet &amp; Co</h4>
            <div className="role">{lang === "en" ? "Legal Counsel · Vietnam" : "Cố vấn Pháp lý · Việt Nam"}</div>
            <p>
              {lang === "en"
                ? "Our trusted legal counsel for entity structuring, FDI advisory and cross-border transactions — ensuring every engagement is grounded in compliant, defensible execution."
                : "Đối tác pháp lý tin cậy về cơ cấu pháp lý, tư vấn đầu tư nước ngoài và giao dịch xuyên biên giới — đảm bảo mọi dịch vụ tuân thủ và an toàn pháp lý."}
            </p>
            <span className="visit">{lang === "en" ? "Coming soon" : "Sắp ra mắt"} <span>→</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ClientsBody({ lang }) {
  return (
    <section data-screen-label="Clients body">
      <div className="wrap">
        <SectionHead
          wide
          title={lang === "en" ? "Major clients" : "Khách hàng tiêu biểu"}
          lead={lang === "en"
            ? "From multinationals and family offices to NGOs and listed groups — across manufacturing, logistics, F&B, technology and beyond."
            : "Từ tập đoàn đa quốc gia, văn phòng gia đình, đến tổ chức phi chính phủ và công ty niêm yết — trên các lĩnh vực sản xuất, logistics, F&B, công nghệ và nhiều hơn nữa."}
        />
        <div className="clients-grid reveal">
          {CLIENTS.map(c => (
            <div className="client-cell" key={c.name} title={c.name + " — " + c.sector}>
              <img src={c.logo} alt={c.name} loading="lazy" />
              <span className="hover-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners({ lang }) {
  return (
    <>
      <PageBanner
        eyebrow={lang === "en" ? "04 · Partners & Clients" : "04 · Đối tác & Khách hàng"}
        title={lang === "en" ? "An international network. Local expertise." : "Mạng lưới quốc tế. Chuyên môn địa phương."}
        lead={lang === "en"
          ? "We work alongside an international accounting network and trusted local counsel."
          : "Hợp tác với mạng lưới kế toán quốc tế và đối tác pháp lý địa phương đáng tin cậy."}
      />
      <PartnersBody lang={lang} />
      <ClientsBody lang={lang} />
    </>
  );
}

/* ============================================================ CONTACT (own page) */
function ContactBody({ lang }) {
  return (
    <section className="contact-page" data-screen-label="Contact page">
      <div className="wrap">
        <SectionHead
          wide
          title={lang === "en" ? "Get in touch" : "Liên hệ với chúng tôi"}
          lead={lang === "en"
            ? "Reach out to any director directly. We respond within one business day."
            : "Liên hệ trực tiếp với bất kỳ Giám đốc nào. Phản hồi trong vòng một ngày làm việc."}
        />

        <div className="contact-page-grid reveal">
          <div className="contact-office-block">
            <div className="contact-office">
              <div className="big">FINE Auditing Limited Liability Company</div>
              <div className="addr">14 Truong Quyen, Xuan Hoa Ward,<br/>Ho Chi Minh City, Vietnam</div>
              <div className="phone-row">
                <div>
                  <div className="lbl">Tel</div>
                  <div className="val">+84 28 818 1608</div>
                </div>
                <div>
                  <div className="lbl">Web</div>
                  <div className="val">www.fineaudit.vn</div>
                </div>
              </div>
            </div>
            <a className="btn primary" style={{ marginTop: "2rem" }} href={"mailto:chauntm@fineaudit.vn"}>
              <span>{lang === "en" ? "Start a conversation" : "Bắt đầu trao đổi"}</span>
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="contact-people-block">
            {CONTACTS.map(p => (
              <div className="contact-person-card" key={p.email}>
                <div className="pname">{lang === "en" ? p.name : p.name_vn}</div>
                <div className="prole">{lang === "en" ? p.role : p.role_vn}</div>
                <div className="prow"><span className="lbl">Tel</span> <span>{p.phone}</span></div>
                <div className="prow"><span className="lbl">Email</span> <a href={"mailto:" + p.email}>{p.email}</a></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  return (
    <>
      <PageBanner
        eyebrow={lang === "en" ? "05 · Contact" : "05 · Liên hệ"}
        title={lang === "en" ? "Ready to partner with your business." : "Sẵn sàng đồng hành cùng doanh nghiệp của bạn."}
      />
      <ContactBody lang={lang} />
    </>
  );
}

window.FINE_PAGES = { Home, About, Team, Services, Partners, Contact };
