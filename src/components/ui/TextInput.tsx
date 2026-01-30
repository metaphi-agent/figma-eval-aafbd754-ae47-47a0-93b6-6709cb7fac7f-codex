import type { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  error?: string
}

export function TextInput({ className, error, ...props }: TextInputProps) {
  return (
    <div className="w-full">
      <input
        className={clsx(
          'h-12 w-full rounded-xl bg-white px-4 text-[15px] text-black placeholder:text-black/35 ' +
            'ring-1 ring-black/10 outline-none transition-shadow ' +
            'focus:ring-2 focus:ring-black/20',
          error ? 'ring-2 ring-red-500/60 focus:ring-red-500/60' : null,
          className
        )}
        {...props}
      />
      {error ? (
        <p className="mt-2 text-sm text-red-700">{error}</p>
      ) : null}
    </div>
  )
}

