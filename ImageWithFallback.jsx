import { useState } from 'react'

export default function ImageWithFallback({ src, fallback = '/images/fallback.svg', alt = '', className, style, onClick }) {
  const [err, setErr] = useState(false)
  const proxied = src?.startsWith('http') ? `/img-proxy?u=${encodeURIComponent(src)}` : src
  const finalSrc = err ? fallback : proxied
  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErr(true)}
      onClick={onClick}
    />
  )
}
