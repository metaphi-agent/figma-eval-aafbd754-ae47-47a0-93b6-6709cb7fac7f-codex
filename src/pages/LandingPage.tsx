import type { FormEvent, ReactNode } from 'react'
import { useMemo, useState } from 'react'
import { Button } from '../components/ui/Button'
import { TextInput } from '../components/ui/TextInput'
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  StarIcon,
  TwitterIcon,
} from '../components/ui/icons'

type NavItem = { label: string; href: string }

type Card = {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative inline-block">
      <div className="text-4xl font-black tracking-tight text-black sm:text-5xl">
        {title}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 left-1/3 h-4 w-44 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/90"
      />
    </div>
  )
}

function ArrowLink() {
  return (
    <span className="inline-flex items-center justify-center text-black/55 transition-colors group-hover:text-black">
      <ArrowRightIcon className="h-5 w-5" />
    </span>
  )
}

function ProductCard({ card }: { card: Card }) {
  return (
    <a
      href="#"
      className="group block rounded-3xl bg-white transition-transform duration-150 hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-3xl bg-black/5">
        <img
          src={card.imageSrc}
          alt={card.imageAlt}
          loading="lazy"
          className="h-[440px] w-full object-cover sm:h-[520px]"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-xl font-medium text-black">{card.title}</div>
          <div className="mt-1 text-sm text-black/45">{card.subtitle}</div>
        </div>
        <div className="mt-1">
          <ArrowLink />
        </div>
      </div>
    </a>
  )
}

function FavouriteCard({ card }: { card: Card }) {
  return (
    <a href="#" className="group block">
      <div className="overflow-hidden rounded-[28px] bg-black/5">
        <img
          src={card.imageSrc}
          alt={card.imageAlt}
          loading="lazy"
          className="h-[340px] w-full object-cover sm:h-[360px]"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-xl font-medium text-black">{card.title}</div>
          <div className="mt-1 text-sm text-black/45">{card.subtitle}</div>
        </div>
        <div className="mt-1">
          <ArrowLink />
        </div>
      </div>
    </a>
  )
}

function SocialIconButton({
  label,
  children,
  href = '#',
}: {
  label: string
  children: ReactNode
  href?: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)] text-black transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
    >
      {children}
    </a>
  )
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export default function LandingPage() {
  const navItems: NavItem[] = useMemo(
    () => [
      { label: 'CATALOGUE', href: '#catalogue' },
      { label: 'FASHION', href: '#fashion' },
      { label: 'FAVOURITE', href: '#favourite' },
      { label: 'LIFESTYLE', href: '#lifestyle' },
    ],
    []
  )

  const newArrivals: Card[] = useMemo(
    () => [
      {
        title: 'Hoodies & Sweatshirt',
        subtitle: 'Explore Now!',
        imageSrc: './assets/images/arrival-hoodie.png',
        imageAlt: 'Model wearing an orange hoodie',
      },
      {
        title: 'Coats & Parkas',
        subtitle: 'Explore Now!',
        imageSrc: './assets/images/arrival-coat.png',
        imageAlt: 'Model wearing a light coat and beanie',
      },
      {
        title: 'Tees & T-Shirt',
        subtitle: 'Explore Now!',
        imageSrc: './assets/images/arrival-tee.png',
        imageAlt: 'Model wearing a white tee in front of a teal background',
      },
    ],
    []
  )

  const favourites: Card[] = useMemo(
    () => [
      {
        title: 'Trending on instagram',
        subtitle: 'Explore Now!',
        imageSrc: './assets/images/fav-trending.png',
        imageAlt: 'Two friends wearing sunglasses',
      },
      {
        title: 'All Under $40',
        subtitle: 'Explore Now!',
        imageSrc: './assets/images/fav-under40.png',
        imageAlt: 'Smiling model in front of a pink background',
      },
    ],
    []
  )

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 650))
    setStatus('success')
    setTimeout(() => setStatus('idle'), 2500)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] bg-arc-lines">
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-16 pt-8 sm:px-10 sm:pt-10">
        <div className="text-sm font-medium tracking-wide text-black/70">
          www.nickelfox.com
        </div>

        <div className="mt-6 overflow-hidden rounded-[40px] bg-[var(--color-surface)] shadow-[0_18px_70px_rgba(0,0,0,0.09)]">
          <header className="px-6 pb-6 pt-7 sm:px-14 sm:pb-7">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="./assets/icons/brand-mark.svg"
                  alt=""
                  className="h-7 w-7"
                />
                <div className="text-2xl font-black tracking-wide">FASHION</div>
              </div>

              <nav className="hidden items-center gap-12 text-[15px] font-medium tracking-wide text-black/80 lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-black"
                  >
                    {item.label}
                  </a>
                ))}
                <Button size="md" className="rounded-lg px-6">
                  SIGN UP
                </Button>
              </nav>

              <div className="lg:hidden">
                <Button variant="outline" size="sm" className="rounded-lg">
                  Menu
                </Button>
              </div>
            </div>
          </header>

          <main>
            <section className="px-6 pb-8 sm:px-14" id="catalogue">
              <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-hero)] px-6 py-10 sm:px-14 sm:py-14">
                <StarIcon className="absolute left-[46%] top-[20%] h-9 w-9 text-black/10" />
                <StarIcon className="absolute left-[44%] top-[76%] h-9 w-9 text-black/10" />
                <StarIcon className="absolute right-[12%] top-[23%] h-9 w-9 text-black/10" />
                <StarIcon className="absolute right-[4%] top-[70%] h-9 w-9 text-black/10" />

                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
                  <div>
                    <div className="text-[54px] font-black leading-[1.05] tracking-tight text-black sm:text-[78px] lg:text-[92px]">
                      <span className="relative inline-block">
                        <span className="relative z-10">LET&apos;S</span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-2 top-2 -left-4 -right-4 -skew-x-2 bg-white"
                        />
                      </span>
                      <br />
                      EXPLORE
                      <br />
                      <span className="relative inline-block">
                        <span className="relative z-10">UNIQUE</span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-3 top-3 -left-3 -right-6 -skew-x-2 bg-[var(--color-accent)]"
                        />
                      </span>
                      <br />
                      CLOTHES.
                    </div>

                    <p className="mt-6 max-w-[34rem] text-lg text-black/80 sm:text-2xl">
                      Live for Influential and Innovative fashion!
                    </p>

                    <div className="mt-7">
                      <Button size="lg" className="rounded-xl px-10 text-[18px]">
                        Shop Now
                      </Button>
                    </div>
                  </div>

                  <div className="relative flex justify-center lg:justify-end">
                    <img
                      src="./assets/images/hero-model.png"
                      alt="Model posing in a pink coat"
                      className="h-auto w-[520px] max-w-full object-contain sm:w-[640px]"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[var(--color-accent)]">
              <div className="mx-auto w-full max-w-[1600px] px-6 py-9 sm:px-14">
                <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
                  {[
                    { src: './assets/images/brand-hm.png', alt: 'H&M' },
                    { src: './assets/images/brand-obey.png', alt: 'Obey' },
                    { src: './assets/images/brand-shopify.png', alt: 'Shopify' },
                    { src: './assets/images/brand-lacoste.png', alt: 'Lacoste' },
                    { src: './assets/images/brand-levis.png', alt: "Levi's" },
                    { src: './assets/images/brand-amazon.png', alt: 'Amazon' },
                  ].map((b) => (
                    <img
                      key={b.alt}
                      src={b.src}
                      alt={b.alt}
                      className="h-9 w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-6 pt-14 sm:px-14" id="fashion">
              <SectionTitle title="NEW ARRIVALS" />
              <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
                {newArrivals.map((card) => (
                  <ProductCard key={card.title} card={card} />
                ))}
              </div>
            </section>

            <section className="mt-16 bg-[var(--color-accent)] px-6 py-14 sm:px-14">
              <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative flex justify-center">
                  <StarIcon className="absolute left-2 top-10 h-9 w-9 text-white/35" />
                  <StarIcon className="absolute right-6 bottom-6 h-9 w-9 text-white/35" />
                  <img
                    src="./assets/images/payday-model.png"
                    alt="Model smiling in a yellow top"
                    loading="lazy"
                    className="h-auto w-[420px] max-w-full object-contain"
                  />
                </div>

                <div className="max-w-[36rem]">
                  <div className="text-[56px] font-black leading-[1.05] tracking-tight text-black sm:text-[72px]">
                    <span className="relative inline-block">
                      <span className="relative z-10 px-6">PAYDAY</span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -rotate-2 rounded-lg bg-white"
                      />
                    </span>
                    <br />
                    SALE NOW
                  </div>

                  <p className="mt-7 text-lg text-black/80 sm:text-xl">
                    Spend minimal $100 get 30% off voucher code for your next
                    purchase
                  </p>

                  <p className="mt-6 text-xl font-black text-black sm:text-2xl">
                    1 June - 10 June 2021
                  </p>
                  <p className="mt-1 text-lg text-black/80">
                    *Terms &amp; Conditions apply
                  </p>

                  <div className="mt-7">
                    <Button size="lg" className="rounded-xl px-10">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 pb-10 pt-16 sm:px-14" id="favourite">
              <div className="flex flex-col gap-10">
                <SectionTitle title="Young’s Favourite" />
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                  {favourites.map((card) => (
                    <FavouriteCard key={card.title} card={card} />
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-16 pt-10 sm:px-14" id="lifestyle">
              <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="text-4xl font-black tracking-tight text-black sm:text-5xl">
                    DOWNLOAD APP &amp;
                    <br />
                    GET THE VOUCHER!
                  </div>
                  <p className="mt-6 max-w-[30rem] text-base leading-relaxed text-black/45 sm:text-lg">
                    Get 30% off for first transaction using Rondovision mobile
                    app for now.
                  </p>

                  <div className="mt-7 flex items-center gap-4">
                    <img
                      src="./assets/images/badge-appstore.png"
                      alt="Download on the App Store"
                      loading="lazy"
                      className="h-12 w-auto"
                    />
                    <img
                      src="./assets/images/badge-googleplay.png"
                      alt="Get it on Google Play"
                      loading="lazy"
                      className="h-12 w-auto"
                    />
                  </div>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                  <div className="pointer-events-none absolute -inset-10 rounded-full bg-black/5 blur-3xl" />
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.06)_49%,transparent_50%,transparent_60%,rgba(0,0,0,0.06)_61%,transparent_62%,transparent_72%,rgba(0,0,0,0.06)_73%,transparent_74%)]" />
                  <span className="pointer-events-none absolute right-10 top-24 h-5 w-5 rounded-full bg-[var(--color-accent)]" />
                  <span className="pointer-events-none absolute left-6 bottom-24 h-3 w-3 rounded-full bg-black/45" />

                  <img
                    src="./assets/images/phone-mock.png"
                    alt="App mockup on a phone"
                    loading="lazy"
                    className="relative z-10 h-auto w-[380px] max-w-full object-contain sm:w-[420px]"
                  />
                </div>
              </div>
            </section>

            <section className="bg-[var(--color-accent)] px-6 py-14 sm:px-14">
              <div className="mx-auto max-w-[820px] text-center text-white">
                <div className="text-3xl font-black tracking-tight sm:text-4xl">
                  JOIN SHOPPING COMMUNITY TO
                  <br />
                  GET MONTHLY PROMO
                </div>
                <p className="mt-4 text-sm text-white/80 sm:text-base">
                  Type your email down below and be young wild generation
                </p>

                <form
                  className="mx-auto mt-8 flex w-full max-w-[520px] items-stretch gap-2 rounded-2xl bg-white p-2"
                  onSubmit={onSubmit}
                >
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <div className="flex-1">
                    <TextInput
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => {
                        if (email && !isValidEmail(email)) {
                          setError('Please enter a valid email address.')
                        }
                      }}
                      placeholder="Add your email here"
                      error={error}
                      className="h-12 rounded-xl ring-0 focus:ring-0"
                      aria-invalid={!!error}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="md"
                    disabled={status === 'submitting'}
                    className="h-12 rounded-xl px-8 text-[14px] tracking-wide"
                  >
                    {status === 'submitting' ? 'SENDING…' : 'SEND'}
                  </Button>
                </form>

                {status === 'success' ? (
                  <p className="mt-4 text-sm text-white/90">
                    Thanks! You&apos;re subscribed.
                  </p>
                ) : null}
              </div>
            </section>

            <footer className="bg-black px-6 py-14 text-white sm:px-14">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
                <div>
                  <div className="text-3xl font-black tracking-wide">FASHION</div>
                  <p className="mt-4 max-w-[22rem] text-sm leading-relaxed text-white/55">
                    Complete your style with awesome clothes from us.
                  </p>
                  <div className="mt-7 flex items-center gap-3">
                    <SocialIconButton label="Facebook">
                      <FacebookIcon className="h-5 w-5" />
                    </SocialIconButton>
                    <SocialIconButton label="Instagram">
                      <InstagramIcon className="h-5 w-5" />
                    </SocialIconButton>
                    <SocialIconButton label="Twitter">
                      <TwitterIcon className="h-5 w-5" />
                    </SocialIconButton>
                    <SocialIconButton label="LinkedIn">
                      <LinkedInIcon className="h-5 w-5" />
                    </SocialIconButton>
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-3">
                  <div>
                    <div className="text-sm font-medium text-white/70">
                      Company
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-white/45">
                      <li>
                        <a href="#" className="hover:text-white/70">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Support
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-white/70">
                      Quick Link
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-white/45">
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Share Location
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Orders Tracking
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Size Guide
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white/70">
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-white/70">Legal</div>
                    <ul className="mt-4 space-y-3 text-sm text-white/45">
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Terms &amp; conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white/70">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
