# CLAUDE.md — @nidhiabroad Product

> This is the living product bible. Update it as decisions are made.

---

## 1. The Business

**Brand:** @nidhiabroad
**Founders:** Nidhi (face of brand) + Partner (behind the scenes)
**Story:** Indian → Europe (Germany / Netherlands) journey — sharing the full abroad experience: work, study, immigration, and life
**Traction:** 10,000 followers in 2 months on Instagram
**Newsletter:** Already running on Substack
**Mission:** Be the most honest, actionable, and beautifully designed resource for Indians (and South Asians) navigating life abroad

---

## 2. The Product — MVP

We are building **nidhiabroad.com** — a creator commerce hub that monetises the brand across 3 revenue streams at launch:

### Revenue Streams (MVP)
| # | Product | Model | Tool |
|---|---------|-------|------|
| 1 | **Digital Guides / Roadmaps** | One-time purchase | Lemon Squeezy |
| 2 | **1:1 Consultations** | Paid booking | Cal.com |
| 3 | **Community / Membership** | Recurring subscription | Lemon Squeezy or Whop |
| 4 | **Newsletter** | Free (lead gen) | Substack (already exists) |

### Future Roadmap (NOT MVP)
- AI-powered tools (visa tracker, resume builder, etc.)
- Course / cohort-based offering

---

## 3. Design System

Inherited from the Technical Recruiter Roadmap HTML (`nidhiabroad/technical_recruiter.html`).
Live reference: https://nidhiabroad-tech-recruiter.netlify.app/

### Tokens
```
--bg:        #0A0A0F   (base dark)
--bg2:       #121218
--bg3:       #1A1A24
--bg4:       #22222E
--purple:    #9B6DFF   (primary accent)
--purple-lo: #6B3FD4
--purple-hi: #C4A4FF
--gold:      #F5C842   (secondary accent)
--teal:      #4ECDC4
--rose:      #FF6B9D
--white:     #F0EFF8
--grey1:     #8B8AA0
--grey2:     #3A3A4E
```

### Typography
- **Headings:** Syne (800 weight)
- **Body:** DM Sans
- **Mono/Code:** DM Mono

### Style Rules
- Dark base always (`#0A0A0F`)
- Purple → Gold gradients for brand moments
- Glassmorphism nav and cards (`backdrop-filter: blur`)
- Noise texture overlay at 40% opacity
- 12px base border-radius, 20px large
- Smooth cubic-bezier transitions (`0.35s cubic-bezier(0.23, 1, 0.32, 1)`)

---

## 4. Tech Stack

Principle: **Minimal cost, maximum scalability, zero over-engineering.**

| Layer | Choice | Why |
|-------|--------|-----|
| **Frontend** | Next.js 14 (App Router) | React, file-based routing, built-in API routes, free on Vercel |
| **Styling** | Tailwind CSS + custom CSS vars | Speed + the exact design system above |
| **Hosting** | Vercel | Free tier, instant deploys from GitHub |
| **Database** | Supabase (Postgres) | Free tier, auth included, real-time, row-level security |
| **Auth** | Supabase Auth | Email magic link + Google OAuth |
| **Payments** | Lemon Squeezy | No setup fee, handles EU VAT automatically (critical for Europe-based creator), digital products + subscriptions |
| **Booking** | Cal.com | Free self-hosted or $0 cloud plan, embeddable |
| **Email** | Resend | Free 3k/month, works with Supabase |
| **CMS** | Notion API or MDX files | Blog posts, guide descriptions, no extra cost |
| **Analytics** | Plausible or Vercel Analytics | Privacy-first, GDPR compliant (Europe matters here) |

### Why NOT (decisions made)
- ❌ Shopify — overkill, costs money, bad UX for digital products
- ❌ Webflow — can't own the code
- ❌ Gumroad — takes 10% cut, ugly checkout, no membership
- ❌ WordPress — too heavy, not the aesthetic

---

## 5. Site Architecture (MVP Pages)

```
/                     → Hero + social proof + product showcase
/about                → Nidhi's story (the India → Europe journey)
/guides               → All digital guides listing
/guides/[slug]        → Individual guide page + buy
/consult              → 1:1 booking page (Cal.com embed)
/community            → Membership landing page + join
/newsletter           → Substack embed / redirect
/dashboard            → (members only) downloads, resources
/blog                 → Free content / SEO
```

---

## 6. Database Schema (Supabase)

```sql
-- Core tables
users           (id, email, name, instagram_handle, created_at)
products        (id, title, slug, description, price, type[guide|membership], file_url, preview_url)
purchases       (id, user_id, product_id, lemon_order_id, created_at)
consultations   (id, user_id, cal_booking_id, status, notes, created_at)
memberships     (id, user_id, status[active|cancelled], plan, lemon_sub_id, expires_at)
```

---

## 7. Target Audience

**Primary:** Indians aged 22–32 planning to move or already in Europe for work/study
**Secondary:** South Asians navigating immigration, job search, cultural adjustment in Europe
**Pain points they have:**
- No single trusted source for Europe-specific guidance (most content is US-focused)
- Don't know where to start (visa → job → housing → taxes)
- Need someone who looks like them and has done it

---

## 8. Tone & Copy Voice

- Honest and direct (not salesy)
- Warm but credible (friend who figured it out)
- Specific over vague ("Get a job in Germany" not "Achieve your dreams abroad")
- English primary, occasional Hindi/Hinglish for cultural warmth

---

## 9. Key Principles

1. **Ship the MVP** — perfect is the enemy of launched
2. **One source of truth** — this file + Supabase
3. **GDPR compliant from day 1** — audience is Europe-adjacent
4. **Mobile first** — 90%+ traffic from Instagram = mobile
5. **Simple wins** — don't build what a free tool already does well

---

## 10. Open Decisions / TODOs

- [ ] Confirm domain: nidhiabroad.com (check availability)
- [ ] Confirm Lemon Squeezy vs Whop for membership
- [ ] First digital guide to launch with (the technical recruiter one is already built!)
- [ ] Nidhi's headshots / brand photos for About page
- [ ] Cal.com booking link / Calendly if preferred
- [ ] Substack newsletter URL
- [ ] Instagram embed API or screenshot approach for social proof
- [ ] Set up GitHub repo
- [ ] Set up Vercel + Supabase projects
- [ ] Set up Lemon Squeezy account (needs to be in Nidhi's name for payouts)

---

## 11. Environment Variables (to populate)

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
LEMON_SQUEEZY_API_KEY=
LEMON_SQUEEZY_WEBHOOK_SECRET=
RESEND_API_KEY=
NEXT_PUBLIC_CAL_LINK=
```

---

*Last updated: 2026-03-17*
