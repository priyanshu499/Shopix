import { createContext, useContext, useMemo, useState } from 'react'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  // Theme
  const toggleTheme = () => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
    const next = theme === 'dark' ? 'light' : 'dark'
    document.body.setAttribute('data-theme', next)
  }
  // Initialize theme attribute
  if (typeof document !== 'undefined') {
    document.body.setAttribute('data-theme', theme)
  }

  // Cart helpers
  const addToCart = (product, options = {}, qty = 1) => {
    setCart(prev => {
      const key = `${product.id}-${options.size ?? ''}-${options.color ?? ''}`
      const idx = prev.findIndex(i => i.key === key)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty }
        return copy
      }
      return [...prev, { key, product, options, qty }]
    })
  }
  const removeFromCart = key => setCart(prev => prev.filter(i => i.key !== key))
  const updateQty = (key, qty) => setCart(prev => prev.map(i => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)))

  // Wishlist
  const toggleWishlist = productId =>
    setWishlist(prev => (prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]))

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0)
    const discount = cart.reduce((sum, i) => sum + (i.product.discount ?? 0) * i.qty, 0)
    const shipping = subtotal > 3000 ? 0 : 99
    const total = subtotal - discount + (cart.length ? shipping : 0)
    return { subtotal, discount, shipping, total }
  }, [cart])

  const value = {
    theme,
    toggleTheme,
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    wishlist,
    toggleWishlist,
    totals
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}

