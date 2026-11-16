import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Wrench,
  Settings2,
  Sparkles,
  MessageCircle,
  Phone,
  MapPin,
  Clock3,
  Pause,
  Play,
  ChevronDown,
  Check,
  Bike,
} from "lucide-react";
import { shop, photos, services } from "./content";
import "./styles.css";

const nav = [
  ["Home", "home"],
  ["Services", "services"],
  ["Gallery", "gallery"],
  ["About", "about"],
];

function Brand({ footer = false }) {
  const [logoFailed, setLogoFailed] = useState(false);
  return (
    <a
      href="#home"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="ZenMods home"
    >
      {!logoFailed ? (
        <img
          className="brand-logo"
          src={`${import.meta.env.BASE_URL}images/zenmods-logo.png`}
          alt="ZenMods"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <>
          <span className="brand-symbol">
            <Bike size={25} strokeWidth={1.7} />
          </span>
          <span className="brand-word">
            ZEN<span>MODS</span>
            <small>MOTORCYCLE PARTS & GARAGE</small>
          </span>
        </>
      )}
    </a>
  );
}

function Photo({ src, alt, ...props }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (failed)
    return (
      <div className="photo-fallback" role="img" aria-label={alt}>
        <Bike size={100} strokeWidth={0.7} />
        <span>ZENMODS / PHOTO COMING SOON</span>
      </div>
    );
  return <img src={src} alt={alt} onError={() => setFailed(true)} {...props} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);
  const [request, setRequest] = useState("General inquiry");
  const [copied, setCopied] = useState(false);
  const closeButton = useRef(null);
  const dialogRef = useRef(null);
  const move = (direction) =>
    setSlide((index) => (index + direction + photos.length) % photos.length);
  useEffect(() => {
    if (!playing || hovered) return;
    const timer = window.setInterval(
      () => setSlide((index) => (index + 1) % photos.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [playing, hovered]);
  useEffect(() => {
    if (!modal) return;
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setModal(false);
      if (event.key === "Tab") {
        const items = [
          ...dialogRef.current.querySelectorAll(
            "a[href], button, input, select, textarea",
          ),
        ].filter((el) => !el.disabled);
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [modal]);
  const inquire = (topic) => {
    setRequest(topic);
    setCopied(false);
    setModal(true);
  };
  const inquiryText = `Hi ZenMods! I’d like to ask about ${request.toLowerCase()}. My motorcycle model is: `;
  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(inquiryText);
      setCopied(true);
    } catch {
      setCopied("manual");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span className="status-dot" /> YOUR RIDE. YOUR STYLE. YOUR ZEN.
        <span className="announcement-right">
          PARTS · MAINTENANCE · CUSTOM CULTURE
        </span>
      </div>
      <header className="header">
        <div className="container nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={id === "home" ? "nav-home" : ""}
              >
                {label}
              </a>
            ))}
          </nav>
          <a className="button nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={17} />
          </a>
          <button
            className="menu-toggle icon-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[...nav, ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-bg">
            <Photo src={photos[0].src} alt="" fetchPriority="high" />
          </div>
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow">
              <span className="short-line" /> WELCOME TO ZENMODS
            </div>
            <h1>
              MORE THAN
              <br />A RIDE.
              <br />
              <span>A STATEMENT.</span>
            </h1>
            <p>
              For the daily commute. The weekend escape.
              <br />
              And every little detail that makes it yours.
            </p>
            <div className="hero-actions">
              <a href="#services" className="button button-lime">
                Explore the garage <ArrowUpRight size={19} />
              </a>
              <a href="#gallery" className="text-link">
                See the inspiration <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <div className="container hero-bottom">
            <a href="#services" className="scroll-link">
              <ChevronDown size={18} /> SCROLL TO EXPLORE
            </a>
            <div className="hero-caption">
              <span className="status-dot" /> TWO WHEELS. ENDLESS POSSIBILITIES.
              <small>Accessory build concept</small>
            </div>
          </div>
        </section>
        <div
          className="ticker"
          aria-label="Parts, maintenance, accessories, custom style"
        >
          <div className="container ticker-inner">
            <span>MOTORCYCLE PARTS</span>
            <i>✳</i>
            <span>EVERYDAY MAINTENANCE</span>
            <i>✳</i>
            <span>ACCESSORIES</span>
            <i>✳</i>
            <span>CUSTOM STYLE</span>
            <i>✳</i>
          </div>
        </div>
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow dark-eyebrow">01 / THE GARAGE</div>
                <h2>
                  A better ride starts
                  <br />
                  with the right details.
                </h2>
              </div>
              <p>
                From keeping things smooth to making it your own.
                <br />
                Let’s find what your motorcycle needs next.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = {
                  wrench: Wrench,
                  settings: Settings2,
                  sparkles: Sparkles,
                }[service.icon];
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-top">
                      <Icon size={31} strokeWidth={1.4} />
                      <span>{service.number}</span>
                    </div>
                    <div className="service-tag">{service.tag}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <button
                      className="service-link"
                      onClick={(event) => inquire(service.title, event)}
                    >
                      Ask about this <ArrowUpRight size={20} />
                    </button>
                  </article>
                );
              })}
            </div>
            <p className="demo-note">
              Preview service categories — availability to be confirmed with
              ZenMods.
            </p>
          </div>
        </section>
        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">02 / IN THE SPOTLIGHT</div>
                <h2>
                  Good rides.
                  <br />
                  <span className="muted-heading">Great inspiration.</span>
                </h2>
              </div>
              <div className="gallery-intro">
                <p>
                  BOM X, JVT, and RCB-inspired details.
                  <br />
                  Explore a fully loaded look for your next setup.
                </p>
                <span className="sample-pill">CUSTOM SCOOTER CONCEPTS</span>
              </div>
            </div>
            <div
              className="carousel"
              role="region"
              aria-roledescription="carousel"
              aria-label="Motorcycle inspiration"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  move(1);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  move(-1);
                }
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onFocusCapture={() => setHovered(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  setHovered(false);
              }}
            >
              <div className="slides">
                {photos.map((photo, index) => (
                  <div
                    className={`slide ${index === slide ? "is-active" : ""}`}
                    key={photo.src}
                    aria-hidden={index !== slide}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${photos.length}`}
                  >
                    <Photo src={photo.src} alt={photo.alt} loading="lazy" />
                    <div className="slide-shade" />
                    <div className="slide-copy">
                      <span>{photo.category}</span>
                      <h3>{photo.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-controls">
                <button
                  className="icon-button carousel-arrow"
                  aria-label="Previous photo"
                  onClick={() => move(-1)}
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  className="icon-button carousel-arrow"
                  aria-label="Next photo"
                  onClick={() => move(1)}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="gallery-bottom">
              <span
                className="photo-number"
                aria-live="polite"
                aria-atomic="true"
              >
                0{slide + 1}
                <span> / 0{photos.length}</span>
              </span>
              <div className="dots">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${slide === index ? "active" : ""}`}
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={slide === index ? "true" : undefined}
                    onClick={() => setSlide(index)}
                  />
                ))}
              </div>
              <button className="autoplay" onClick={() => setPlaying(!playing)}>
                {playing ? <Pause size={13} /> : <Play size={13} />}{" "}
                {playing ? "Pause slideshow" : "Play slideshow"}
              </button>
            </div>
            <p className="demo-note light-note">
              AI-generated accessory concepts — illustrative builds, not actual
              ZenMods work.
            </p>
            <div
              className="brand-inspiration"
              aria-label="Accessory brand inspiration"
            >
              <div className="brand-panel-heading">
                <span>BUILD INSPIRATION</span>
                <p>Small details. Your signature.</p>
              </div>
              <ul>
                <li>
                  <strong>BOM X</strong>
                  <span>Wheels & wheel styling</span>
                </li>
                <li>
                  <strong>JVT</strong>
                  <span>Exhaust & heatguard styling</span>
                </li>
                <li>
                  <strong>RCB</strong>
                  <span>Suspension, brakes & controls</span>
                </li>
              </ul>
              <p className="brand-availability">
                Brand references for inspiration. Ask the shop about
                availability and fitment for your model.
              </p>
            </div>
          </div>
        </section>
        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <Photo src={photos[2].src} alt={photos[2].alt} loading="lazy" />
              <div className="about-stamp">
                <Bike size={37} strokeWidth={1.2} />
                <span>
                  MADE FOR
                  <br />
                  <strong>THE RIDE.</strong>
                </span>
              </div>
            </div>
            <div className="about-copy">
              <div className="eyebrow dark-eyebrow">03 / THE ZENMODS WAY</div>
              <h2>
                Your motorcycle.
                <br />
                Your kind of zen.
              </h2>
              <p>
                A motorcycle is part of your everyday story. How you get there,
                how you feel on the road, and how you make it your own.
              </p>
              <p>
                From NMAX and Aerox to Click, Fazzio, and Giorno, scooter
                culture is at the heart of ZenMods. Bring your ideas for your
                next upgrade — other motorcycles are welcome, too.
              </p>
              <div className="about-principles">
                <span>
                  <Check size={17} /> Care for your everyday ride
                </span>
                <span>
                  <Check size={17} /> Make room for your own style
                </span>
                <span>
                  <Check size={17} /> Ask before you upgrade
                </span>
              </div>
              <a href="#contact" className="text-link dark-link">
                Let’s talk about your ride <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-heading">
              <div>
                <div className="eyebrow">04 / LET’S GET STARTED</div>
                <h2>
                  WHAT’S NEXT
                  <br />
                  FOR YOUR <span>RIDE?</span>
                </h2>
              </div>
              <button
                className="button button-lime"
                onClick={(event) => inquire("General inquiry", event)}
              >
                Start a conversation <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="contact-grid">
              <div>
                <MapPin size={21} />
                <span>FIND THE GARAGE</span>
                <p>{shop.address || "Shop address coming soon"}</p>
                {shop.mapsUrl && (
                  <a href={shop.mapsUrl} target="_blank" rel="noreferrer">
                    Get directions ↗
                  </a>
                )}
              </div>
              <div>
                <Clock3 size={21} />
                <span>DROP BY</span>
                <p>{shop.openingHours || "Opening hours to be confirmed"}</p>
              </div>
              <div>
                <MessageCircle size={21} />
                <span>GET IN TOUCH</span>
                {shop.facebookUrl ? (
                  <a href={shop.facebookUrl} target="_blank" rel="noreferrer">
                    Message on Facebook ↗
                  </a>
                ) : (
                  <p>Official Facebook link coming soon</p>
                )}
                {shop.phone && (
                  <a href={`tel:${shop.phone}`}>
                    <Phone size={15} />
                    {shop.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-inner">
          <Brand footer />
          <p>© {new Date().getFullYear()} ZenMods. Make every ride yours.</p>
          <a href="#home">
            BACK TO TOP <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
      {modal && (
        <div
          className="modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setModal(false);
          }}
        >
          <section
            ref={dialogRef}
            className="inquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-title"
            aria-describedby="inquiry-description"
          >
            <button
              ref={closeButton}
              className="icon-button modal-close"
              aria-label="Close inquiry"
              onClick={() => setModal(false)}
            >
              <X size={21} />
            </button>
            <MessageCircle className="modal-icon" size={32} />
            <div className="eyebrow dark-eyebrow">LET’S TALK MOTORCYCLES</div>
            <h2 id="inquiry-title">Start with a hello.</h2>
            <p id="inquiry-description">
              {shop.facebookUrl
                ? "Copy your inquiry and send it to ZenMods."
                : "This is a website preview. ZenMods’ official contact details will be added before launch."}
            </p>
            <label htmlFor="inquiry-message">Your inquiry</label>
            <textarea
              id="inquiry-message"
              value={inquiryText}
              readOnly
              rows={4}
            />
            <button className="button button-dark" onClick={copyInquiry}>
              {copied === true ? (
                <>
                  <Check size={17} /> Inquiry copied
                </>
              ) : (
                <>
                  Copy inquiry <ArrowUpRight size={17} />
                </>
              )}
            </button>
            <span className="copy-status" role="status">
              {copied === true
                ? "Ready to paste into your message."
                : copied === "manual"
                  ? "Copy unavailable. Select the inquiry text and copy it manually."
                  : ""}
            </span>
            {shop.facebookUrl && (
              <a
                className="text-link dark-link"
                href={shop.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Facebook <ArrowUpRight size={17} />
              </a>
            )}
            <p className="modal-note">No message is sent from this website.</p>
          </section>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
