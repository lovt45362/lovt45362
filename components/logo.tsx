import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Official New Flooring Process Ltd logo lockup (chevron mark + wordmark +
 * tagline). The artwork uses navy text, so place it on a light surface.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-full.png"
      alt="New Flooring Process Ltd — Flooring, Fit-Outs, Refurbishments"
      width={1512}
      height={1008}
      priority
      className={cn('h-auto w-auto object-contain', className)}
    />
  )
}
