export function initHeaderScroll(): void {
  if (typeof window === "undefined") return

  const header = document.getElementById("site-header")
  if (!header) return

  let last = window.scrollY

  const setTop = () => {
    header.classList.remove("header-solid", "bg-white", "text-black")
    header.classList.add("text-white")
    header.style.transform = "translateY(0)"
  }

  const setSolid = () => {
    header.classList.add("header-solid", "bg-white", "text-black")
    header.classList.remove("text-white")
    header.style.transform = "translateY(0)"
  }

  if (window.scrollY === 0) {
    setTop()
  } else {
    setSolid()
  }

  window.addEventListener("scroll", () => {
    const y = window.scrollY

    if (y === 0) {
      setTop()
    } else if (y > last) {
      header.style.transform = "translateY(-100%)"
    } else {
      setSolid()
    }

    last = y
  })
}
