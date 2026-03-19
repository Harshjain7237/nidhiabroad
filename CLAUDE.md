# CLAUDE.md — nidhiabroad / @nidhiduhan
> Living product bible. Update every session.

---

## 1. The Brand

**Creator:** Nidhi Duhan
**Handles:** @nidhiabroad (Instagram, YouTube, Substack) · @nidhiduhan (LinkedIn)
**Tagline:** "Building careers that belong anywhere."
**Mission:** Help non-technical professionals break into tech, land international opportunities, and build career confidence.
**Audience:** India, US, Europe — people wanting global, portable careers. Primarily non-engineers.

### Platforms
| Platform | URL |
|----------|-----|
| Instagram | https://instagram.com/nidhiabroad |
| Substack | https://substack.com/@nidhiabroad |
| YouTube | https://youtube.com/@nidhiabroad |
| LinkedIn | https://linkedin.com/in/nidhiduhan |

---

## 2. Content Series

### 🎙️ Non-Technical Tech Jobs (Instagram + Web)
Flagship series. Each episode = one non-engineering role in tech. Standalone HTML roadmap pages.
- Episode 1: Technical Recruiter (LIVE at https://nidhiabroad-tech-recruiter.netlify.app/)

### 📚 Careers Decoded (Instagram)
Explainer content: career paths, industries, job market trends.

### 💪 Career Confidence (Instagram)
Mindset, personal branding, soft-skill content.

### 📬 Inner Circle (Substack — bi-weekly)
Deeper dives, behind-the-scenes, career resources not shared publicly.

---

## 3. Monetization — Current & Planned

| Stream | Status | Platform |
|--------|--------|----------|
| 1:1 Coaching Calls | Active / in dev | Cal.com |
| Resume Reviews | Active / in dev | Cal.com |
| Digital Products | First product built | Gumroad |
| Cohort Course | Planned — waitlist live | Website |
| Brand Collaborations | Planned | — |

### Booking Links (Cal.com)
- 15-min: https://cal.com/nidhiabroad/15min
- 30-min: https://cal.com/nidhiabroad/30min

---

## 4. Digital Products

### Product 1: "The Architect" (LIVE on Gumroad)
- Type: Notion habit tracker template
- Price: ~$9–$19
- Features: XP system, leveling, streaks, badges — gamified productivity
- Aesthetic: premium dark (purple + gold on near-black)

### Planned Products
- LinkedIn post templates
- Job application tracker
- Financial planner
- Career growth tools
- Cohort course (waitlist capturing)

---

## 5. Design System

| Token | Value |
|-------|-------|
| Background | `#0A0A0F` |
| Background 2 | `#121218` |
| Background 3 | `#1A1A24` |
| Background 4 | `#22222E` |
| Primary Purple | `#9B6DFF` |
| Purple Low | `#6B3FD4` |
| Purple High | `#C4A4FF` |
| Gold | `#F5C842` |
| Gold Low | `#B8920A` |
| Teal | `#4ECDC4` |
| Rose | `#FF6B9D` |
| White | `#F0EFF8` |
| Grey 1 | `#8B8AA0` |
| Grey 2 | `#3A3A4E` |

### Typography
- **Headings:** Playfair Display (editorial, premium feel)
- **Body:** DM Sans
- **Mono:** DM Mono

### Aesthetic Rules
- Dark base always (`#0A0A0F`)
- Purple → Gold gradients for brand moments
- Glassmorphism nav + cards (`backdrop-filter: blur`)
- Noise texture overlay at 40% opacity
- 12px base radius, 20px large radius
- `0.35s cubic-bezier(0.23, 1, 0.32, 1)` transitions
- **Mobile-first** — 90%+ traffic from Instagram

### Known Mobile Failure Points (avoid these)
- Fixed `minmax()` grid values — use `auto-fit` with fluid mins
- Missing `overflow-x: auto` on tab/scroll components
- Absent small-screen breakpoints on paddings

---

## 6. Tech Stack

| Layer | Choice | Cost |
|-------|--------|------|
| Frontend + Hosting | Next.js 14 + Vercel | Free |
| Database + Auth | Supabase | Free |
| Payments / Digital Products | Gumroad (existing) → Lemon Squeezy (future) | 0 fixed |
| Bookings | Cal.com | Free |
| Email | Resend | Free (3k/mo) |
| Analytics | Vercel Analytics | Free |

**Live site:** https://nidhiabroad.vercel.app/
**GitHub:** https://github.com/Harshjain7237/nidhiabroad
**Domain (to connect):** nidhiabroad.com (GoDaddy, €0.01 first year)

---

## 7. Site Architecture (MVP)

```
/              → Hero + offerings + social proof + newsletter CTA
/about         → Nidhi's story + credibility
/guides        → Non-Technical Tech Jobs series + digital products
/consult       → 1:1 booking (Cal.com embed — 15min + 30min)
/community     → Inner Circle newsletter + cohort waitlist
/dashboard     → Members-only: downloads, resources
```

---

## 8. Database Schema (Supabase)

```sql
users           (id, email, name, created_at)
products        (id, title, slug, description, price, type, gumroad_url, file_url)
purchases       (id, user_id, product_id, order_ref, created_at)
consultations   (id, user_id, cal_booking_id, type[15min|30min], status, created_at)
waitlist        (id, email, source[cohort|product], created_at)
```

---

## 9. Copy & Tone

- **Voice:** Honest, warm, direct — a smart friend who figured it out
- **Not:** Salesy, vague, hype-y
- **English** primary — occasional Hindi warmth
- **Specific over generic:** "Land a PM role in 6 months" not "achieve your dreams"

---

## 10. Engineering Rules

1. **`"use client"` required for any event handlers** — `onMouseEnter`, `onMouseLeave`, `onClick` etc. in a Server Component cause silent export failures. Either add `"use client"` or use CSS-only hover. Pages with `async` data fetching are Server Components by default.
2. **Mobile-first always** — test at 375px
2. **Surgical edits** — fix only what's broken, don't disturb surroundings
3. **Dark premium aesthetic** — never lighten the background
4. **Ship MVP** — perfect is the enemy of launched
5. **Simple wins** — don't build what a free tool does well

---

## 11. Open TODOs

- [x] Domain secured: nidhiabroad.com ✓
- [x] GitHub repo: https://github.com/Harshjain7237/nidhiabroad ✓
- [x] Vercel deployed: https://nidhiabroad.vercel.app/ ✓
- [x] Supabase connected ✓
- [ ] **FIX: Update font from Syne → Playfair Display in codebase**
- [ ] Connect nidhiabroad.com custom domain to Vercel
- [ ] Build /consult page with Cal.com embeds (15min + 30min)
- [ ] Build /community page with Substack embed + cohort waitlist form
- [ ] Build /guides page with product cards
- [ ] Wire "The Architect" Gumroad link into /guides
- [ ] Add Lemon Squeezy when moving beyond Gumroad

---

## 12. Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_CAL_15MIN=https://cal.com/nidhiabroad/15min
NEXT_PUBLIC_CAL_30MIN=https://cal.com/nidhiabroad/30min
NEXT_PUBLIC_SUBSTACK_URL=https://substack.com/@nidhiabroad
NEXT_PUBLIC_GUMROAD_ARCHITECT_URL=
```

---

*Last updated: 2026-03-17*
