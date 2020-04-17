function breakpoint() {
  // Define Breakpoints / Viewport Width
  let breakpoints = {
    tablet: 768,
    desktop: 1024,
    desktophd: 1200,
    widescreen: 1800,
  };
  let viewport_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (viewport_width < breakpoints.tablet) {
    return "Mobile";
  } else if (viewport_width < breakpoints.desktop) {
    return "Tablet";
  } else if (viewport_width < breakpoints.desktophd) {
    return "Desktop";
  } else if (viewport_width < breakpoints.widescreen) {
    return "Desktop HD";
  } else if (viewport_width >= breakpoints.widescreen) {
    return "Widescreen";
  }
}

// Reset breakpoint on window resize
window.addEventListener("resize", function () {
  active_breakpoint = breakpoint();
});

// Export functions
export var active_breakpoint = breakpoint();
