/**
 * Swebsy Scroll Observer
 *
 * Exported pages auto-start. The Studio canvas exposes the same idempotent
 * runtime but starts/stops it through the Preview lifecycle coordinator.
 */
(function () {
  var zone = null;
  var edge = null;
  var atBottom = false;

  function targets() {
    return document.querySelectorAll('[data-animate-trigger="scroll"]');
  }

  function revealAll(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("animate-visible");
    }
  }

  function isOnce(el) {
    return el.getAttribute("data-animate-once") !== "false";
  }

  // The zone observer's -10% bottom margin keeps reveals off the very edge, but
  // content in the last 10% of the page can never cross it — the page runs out
  // of scroll first. A second, margin-free observer tracks what is really
  // visible (horizontal bounds and clipping included), and at the page bottom
  // that counts too. One state per element keeps the two from fighting over
  // repeatable (once=false) animations.
  function update(el) {
    if (el._swebsyInZone || (el._swebsyOnScreen && atBottom)) {
      el.classList.add("animate-visible");
      if (isOnce(el)) {
        zone.unobserve(el);
        edge.unobserve(el);
      }
    } else if (!isOnce(el)) {
      el.classList.remove("animate-visible");
    }
  }

  function track(key) {
    return function (entries) {
      entries.forEach(function (entry) {
        entry.target[key] = entry.isIntersecting;
        update(entry.target);
      });
    };
  }

  function onScroll() {
    var doc = document.documentElement;
    var bottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
    if (bottom === atBottom) return;
    atBottom = bottom;
    var elements = targets();
    for (var i = 0; i < elements.length; i++) update(elements[i]);
  }

  function stop() {
    window.removeEventListener("scroll", onScroll);
    if (zone) zone.disconnect();
    if (edge) edge.disconnect();
    zone = edge = null;
    atBottom = false;
  }

  function start() {
    stop();
    var elements = targets();
    if (!elements.length) return;

    if (typeof IntersectionObserver !== "function") {
      revealAll(elements);
      return;
    }

    try {
      zone = new IntersectionObserver(track("_swebsyInZone"), {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      });
      edge = new IntersectionObserver(track("_swebsyOnScreen"), {
        threshold: 0.1,
      });

      for (var i = 0; i < elements.length; i++) {
        elements[i]._swebsyInZone = elements[i]._swebsyOnScreen = false;
        zone.observe(elements[i]);
        edge.observe(elements[i]);
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    } catch (e) {
      stop();
      revealAll(elements);
    }
  }

  window.SwebsyScrollObserver = {
    start: start,
    stop: stop,
    refresh: start,
  };

  var inEditorCanvas = false;
  try {
    inEditorCanvas =
      window.parent !== window && !!window.parent.__swebsyEditorCanvas;
  } catch (e) {
    inEditorCanvas = false;
  }

  if (!inEditorCanvas) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", start, { once: true });
    } else {
      start();
    }
  }
})();
