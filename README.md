# Destina Aesthetics — Website

Statische One-Page-Website für **Destina Aesthetics**, ein Kosmetikstudio für
Gesichtsbehandlungen, Brauen, Wimpern und Zahnästhetik.

**Live:** https://36ilyas.github.io/destina-aesthetics/

---

## Aufbau

```
index.html                 Gesamte Seite (Hero, Leistungen, Studio, Ablauf, Kontakt)
assets/css/styles.css      Design-System, Layout, Animationen
assets/js/main.js          Header-Zustand, Mobile-Menü, Reveal-on-Scroll
assets/img/hero.jpg        Studio-Aussenansicht (Hero-Hintergrund)
assets/img/studio.jpg      Behandlungsbild (Stockfoto, siehe unten)
assets/img/favicon.svg     Monogramm-Favicon
design-source/             Ursprüngliche Design-Datei (.dc.html) inkl. Runtime
```

Kein Build-Schritt, keine Abhängigkeiten. `index.html` lässt sich direkt öffnen;
für lokales Testen mit korrekten Pfaden:

```bash
python -m http.server 4321
```

## Technisches

- Vanilla HTML/CSS/JS, keine Frameworks
- Schriften: Cormorant Garamond + Jost (Google Fonts)
- Responsive ab ca. 320 px, Mobile-Menü unter 900 px
- Reveal-Animationen via `IntersectionObserver`, respektiert
  `prefers-reduced-motion`
- Reveal ist nur aktiv, wenn JS läuft (`html.js`) — ohne JS bleibt die Seite
  vollständig lesbar
- SEO: Meta-Description, Open Graph, `BeautySalon`-JSON-LD

Die ursprüngliche Datei `Destina Aesthetics.dc.html` nutzte ein Komponenten-Format
(`<x-dc>`, `sc-if`, `style-hover`, 69 KB `support.js`-Runtime), das auf GitHub
Pages nicht läuft. Sie wurde in statisches HTML/CSS/JS überführt — das Design ist
unverändert. Die Quelldatei liegt zur Referenz in `design-source/`.

## Bilder

- `assets/img/hero.jpg` — Foto des Studios (aus dem Projektordner, von 2,5 MB auf
  377 KB optimiert).
- `assets/img/studio.jpg` — **Platzhalter-Stockfoto** von Unsplash
  (Unsplash-Lizenz, freie kommerzielle Nutzung, keine Namensnennung nötig).
  Quelle: <https://images.unsplash.com/photo-1570172619644-dfd03ed5d881>
  Im ursprünglichen Entwurf stand hier nochmals das Hero-Bild. Sobald ein
  eigenes Behandlungsfoto vorliegt, einfach die Datei gleichen Namens ersetzen.

## Offene Punkte

- **Impressum und Datenschutzerklärung fehlen.** Für eine geschäftlich genutzte
  Website in Deutschland sind beide verpflichtend (§ 5 DDG, Art. 13 DSGVO). Die
  dafür nötigen Angaben (vollständige Anschrift, Inhaberin, ggf. USt-IdNr.) lagen
  nicht vor und wurden bewusst nicht erfunden.
- Google Fonts wird von Google-Servern geladen. Datenschutzfreundlicher wäre ein
  lokales Self-Hosting der beiden Schriften.
- Öffnungszeiten und Adresse sind nicht hinterlegt; sie könnten im JSON-LD
  (`openingHours`, `address`) und im Kontaktbereich ergänzt werden.
