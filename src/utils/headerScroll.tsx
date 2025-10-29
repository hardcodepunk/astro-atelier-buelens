export function initHeaderScroll(): void {
  if (typeof window === "undefined") return

  window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header") as HTMLElement | null
    if (!header) return

    let lastScrollY = 0

    const setTopState = () => {
      header.classList.remove("bg-white", "text-black", "header-solid")
      header.classList.add("text-white")
      header.style.transform = "translateY(0)"
    }

    const setSolidState = () => {
      header.classList.add("bg-white", "text-black", "header-solid")
      header.classList.remove("text-white")
      header.style.transform = "translateY(0)"
    }

    window.addEventListener("scroll", () => {
      const y = window.scrollY

      if (y <= 0) {
        setTopState()
      } else if (y > lastScrollY) {
        // scrolling down → hide header
        header.style.transform = "translateY(-100%)"
      } else {
        // scrolling up → show solid header
        setSolidState()
      }

      lastScrollY = y
    })
  })
}
