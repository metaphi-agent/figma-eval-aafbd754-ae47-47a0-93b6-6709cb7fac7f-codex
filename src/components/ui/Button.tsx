import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white ' +
  'disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-black text-white hover:bg-black/90 active:bg-black/85 active:translate-y-px',
  ghost:
    'bg-transparent text-black hover:bg-black/5 active:bg-black/10 active:translate-y-px',
  outline:
    'bg-white text-black ring-1 ring-black/15 hover:bg-black/5 active:bg-black/10 active:translate-y-px',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-14 px-7 text-[18px]',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
    </button>
  )
}

