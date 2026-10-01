for (
  var i = 0, len = (items = document.querySelectorAll("#i2ux")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView;
    if (!t) return;
    if ("1" === e.dataset.navbarCollapseInit && !t.__swebsyPreviewRuntime)
      return;
    (e.__swebsyNavbarUnregister?.(),
      e.__swebsyNavbarRuntimeReady &&
        (t.removeEventListener(
          "swebsy:preview-runtime-ready",
          e.__swebsyNavbarRuntimeReady
        ),
        delete e.__swebsyNavbarRuntimeReady),
      e.__swebsyNavbarCleanup?.());
    const s = e.querySelector('[data-navbar-part="toggler"]'),
      a = e.querySelector('[data-navbar-part="collapse"]');
    if (!s || !a) return;
    const r = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const r = a.className,
          i = a.style.height,
          n = s.className,
          l = s.getAttribute("aria-expanded");
        let o;
        const c = (e) => {
            (void 0 !== o && t.clearTimeout(o),
              (o = t.setTimeout(
                e,
                (() => {
                  const e = (t.getComputedStyle(a).transitionDuration ?? "0s")
                      .split(",")
                      .map((e) => {
                        const t = parseFloat(e.trim());
                        return e.trim().endsWith("ms") ? t : 1e3 * t;
                      }),
                    s = Math.max(...e);
                  return Number.isFinite(s) && s > 0 ? s : 0;
                })()
              )));
          },
          b = () => {
            a.classList.contains("show")
              ? a.classList.contains("collapsing") ||
                ((a.style.height = a.getBoundingClientRect().height + "px"),
                a.classList.remove("collapse", "show"),
                a.classList.add("collapsing"),
                a.offsetHeight,
                (a.style.height = "0"),
                c(() => {
                  (a.classList.remove("collapsing"),
                    a.classList.add("collapse"),
                    (a.style.height = ""),
                    s.setAttribute("aria-expanded", "false"),
                    s.classList.add("collapsed"));
                }))
              : a.classList.contains("collapsing") ||
                (a.classList.remove("collapse", "show"),
                a.classList.add("collapsing"),
                (a.style.height = "0"),
                a.offsetHeight,
                (a.style.height = a.scrollHeight + "px"),
                c(() => {
                  (a.classList.remove("collapsing"),
                    a.classList.add("collapse", "show"),
                    (a.style.height = ""),
                    s.setAttribute("aria-expanded", "true"),
                    s.classList.remove("collapsed"));
                }));
          };
        (s.addEventListener("click", b),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", b),
              void 0 !== o && t.clearTimeout(o),
              (a.className = r),
              (a.style.height = i),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      i = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: r,
            stop: () => e.__swebsyNavbarCleanup?.(),
          })),
          !0)
        );
      },
      n = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!i()) {
      if (n) {
        const s = () => i();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      r();
    }
  }).bind(items[i])();
var props = {
    iuhwj: {
      galleryId: "gal-38a4aef1",
      loop: !0,
      touchNavigation: !0,
      keyboardNavigation: !0,
      zoomable: !0,
      openEffect: "zoom",
      refreshToken: 1778131319213,
    },
  },
  ids = Object.keys(props)
    .map(function (e) {
      return "#" + e;
    })
    .join(",");
for (i = 0, len = (els = document.querySelectorAll(ids)).length; i < len; i++) {
  var el = els[i];
  (function (e) {
    const t = this,
      s = t.ownerDocument?.defaultView;
    if (!s) return;
    (t.__swebsyGalleryUnregister?.(),
      t.__swebsyGalleryRuntimeReady &&
        (s.removeEventListener(
          "swebsy:preview-runtime-ready",
          t.__swebsyGalleryRuntimeReady
        ),
        delete t.__swebsyGalleryRuntimeReady));
    const a = (e) => !0 === e || "true" === e || "1" === e,
      r = (e) => {
        const t = e.getAttribute("src") || "",
          s = e.querySelector("img")?.getAttribute("src") || "",
          a = t || s;
        a ? e.setAttribute("href", a) : e.removeAttribute("href");
      },
      i = String(e.galleryId || t.getAttribute("data-swebsy-gallery-id") || "");
    if (!i) return;
    t.setAttribute("data-swebsy-gallery-id", i);
    const n = () => {
        t.__swebsyGalleryClickCleanups?.splice(0).forEach((e) => e());
        const e = t.__swebsyGallery;
        if (e && "function" == typeof e.destroy)
          try {
            e.destroy();
          } catch {}
        delete t.__swebsyGallery;
      },
      l = () => {
        if ((n(), "function" != typeof s.GLightbox)) return;
        (t.querySelectorAll("a[data-glightbox]").forEach(r),
          t.querySelectorAll("a[data-glightbox]").forEach((e) => {
            const s = (t) => {
              (r(e),
                e.getAttribute("href") ||
                  (t.preventDefault(), t.stopImmediatePropagation()));
            };
            (e.addEventListener("click", s, { capture: !0 }),
              (t.__swebsyGalleryClickCleanups ??= []),
              t.__swebsyGalleryClickCleanups.push(() =>
                e.removeEventListener("click", s, { capture: !0 })
              ));
          }));
        !!t.querySelector("a[data-glightbox]") &&
          (t.__swebsyGallery = s.GLightbox({
            selector: `[data-swebsy-gallery-id="${i}"] a[data-glightbox]`,
            loop: a(e.loop),
            touchNavigation: a(e.touchNavigation),
            keyboardNavigation: a(e.keyboardNavigation),
            zoomable: a(e.zoomable),
            openEffect: e.openEffect || "zoom",
          }));
      },
      o = () => {
        const e = s.__swebsyPreviewRuntime;
        return (
          !!e &&
          ((t.__swebsyGalleryUnregister = e.register(t, "gallery", {
            start: l,
            stop: n,
          })),
          !0)
        );
      },
      c = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!o()) {
      if (c) {
        const e = () => o();
        return (
          (t.__swebsyGalleryRuntimeReady = e),
          void s.addEventListener("swebsy:preview-runtime-ready", e, {
            once: !0,
          })
        );
      }
      l();
    }
  }).bind(el)(props[el.id]);
}
var els;
for (
  props = {
    "is0cg-7": { lightboxId: "lbx-280a6c9f", refreshToken: 45 },
    "is0cg-4": { lightboxId: "lbx-280a6c9f", refreshToken: 46 },
    "is0cg-3": { lightboxId: "lbx-280a6c9f", refreshToken: 42 },
    "is0cg-7-2": { lightboxId: "lbx-280a6c9f", refreshToken: 46 },
    "is0cg-4-2": { lightboxId: "lbx-280a6c9f", refreshToken: 47 },
    is0cg: { lightboxId: "lbx-280a6c9f", refreshToken: 43 },
    "is0cg-6": { lightboxId: "lbx-280a6c9f", refreshToken: 43 },
    i1ult: { lightboxId: "lbx-d3e16114", refreshToken: 43 },
  },
    ids = Object.keys(props)
      .map(function (e) {
        return "#" + e;
      })
      .join(","),
    i = 0,
    len = (els = document.querySelectorAll(ids)).length;
  i < len;
  i++
) {
  el = els[i];
  (function (e) {
    const t = this,
      s = t.ownerDocument?.defaultView;
    if (!s) return;
    (t.__swebsyLightboxUnregister?.(),
      t.__swebsyLightboxRuntimeReady &&
        (s.removeEventListener(
          "swebsy:preview-runtime-ready",
          t.__swebsyLightboxRuntimeReady
        ),
        delete t.__swebsyLightboxRuntimeReady));
    const a = () => {
      const e = t.__swebsyLightbox;
      if (e && "function" == typeof e.destroy)
        try {
          e.destroy();
        } catch {}
      (delete t.__swebsyLightbox,
        t.ownerDocument
          .querySelector(".glightbox-container")
          ?.classList.remove("swebsy-lightbox-single"));
    };
    if ((a(), t.closest("[data-swebsy-gallery]"))) return;
    const r = String(
      e.lightboxId || t.getAttribute("data-swebsy-lightbox-id") || ""
    );
    if (!r) return;
    t.setAttribute("data-swebsy-lightbox-id", r);
    (() => {
      const e = t.getAttribute("src") || "",
        s = t.querySelector("img")?.getAttribute("src") || "",
        a = e || s;
      a ? t.setAttribute("href", a) : t.removeAttribute("href");
    })();
    const i = (e) => {
        const s = t.ownerDocument.querySelector(".glightbox-container");
        s && s.classList.toggle("swebsy-lightbox-single", e);
      },
      n = () => {
        if (
          "function" == typeof s.GLightbox &&
          t.matches("a[data-glightbox]")
        ) {
          if (
            !t.ownerDocument.querySelector(
              'style[data-swebsy-lightbox-style="true"]'
            )
          ) {
            const e = t.ownerDocument.createElement("style");
            (e.setAttribute("data-swebsy-lightbox-style", "true"),
              (e.textContent =
                ".glightbox-container.swebsy-lightbox-single .gnext,.glightbox-container.swebsy-lightbox-single .gprev{display:none!important;}"),
              t.ownerDocument.head.appendChild(e));
          }
          t.__swebsyLightbox = s.GLightbox({
            selector: `[data-swebsy-lightbox-id="${r}"]`,
            loop: !1,
            onOpen: () => i(!0),
            onClose: () => i(!1),
          });
        }
      },
      l = () => {
        const e = s.__swebsyPreviewRuntime;
        return (
          !!e &&
          ((t.__swebsyLightboxUnregister = e.register(t, "lightbox", {
            start: n,
            stop: a,
          })),
          !0)
        );
      },
      o = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!l()) {
      if (o) {
        const e = () => l();
        return (
          (t.__swebsyLightboxRuntimeReady = e),
          void s.addEventListener("swebsy:preview-runtime-ready", e, {
            once: !0,
          })
        );
      }
      n();
    }
  }).bind(el)(props[el.id]);
}
for (
  i = 0, len = (items = document.querySelectorAll("#i2ux-3")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView;
    if (!t) return;
    if ("1" === e.dataset.navbarCollapseInit && !t.__swebsyPreviewRuntime)
      return;
    (e.__swebsyNavbarUnregister?.(),
      e.__swebsyNavbarRuntimeReady &&
        (t.removeEventListener(
          "swebsy:preview-runtime-ready",
          e.__swebsyNavbarRuntimeReady
        ),
        delete e.__swebsyNavbarRuntimeReady),
      e.__swebsyNavbarCleanup?.());
    const s = e.querySelector('[data-navbar-part="toggler"]'),
      a = e.querySelector('[data-navbar-part="collapse"]');
    if (!s || !a) return;
    const r = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const r = a.className,
          i = a.style.height,
          n = s.className,
          l = s.getAttribute("aria-expanded");
        let o;
        const c = (e) => {
            (void 0 !== o && t.clearTimeout(o),
              (o = t.setTimeout(
                e,
                (() => {
                  const e = (t.getComputedStyle(a).transitionDuration ?? "0s")
                      .split(",")
                      .map((e) => {
                        const t = parseFloat(e.trim());
                        return e.trim().endsWith("ms") ? t : 1e3 * t;
                      }),
                    s = Math.max(...e);
                  return Number.isFinite(s) && s > 0 ? s : 0;
                })()
              )));
          },
          b = () => {
            a.classList.contains("show")
              ? a.classList.contains("collapsing") ||
                ((a.style.height = a.getBoundingClientRect().height + "px"),
                a.classList.remove("collapse", "show"),
                a.classList.add("collapsing"),
                a.offsetHeight,
                (a.style.height = "0"),
                c(() => {
                  (a.classList.remove("collapsing"),
                    a.classList.add("collapse"),
                    (a.style.height = ""),
                    s.setAttribute("aria-expanded", "false"),
                    s.classList.add("collapsed"));
                }))
              : a.classList.contains("collapsing") ||
                (a.classList.remove("collapse", "show"),
                a.classList.add("collapsing"),
                (a.style.height = "0"),
                a.offsetHeight,
                (a.style.height = a.scrollHeight + "px"),
                c(() => {
                  (a.classList.remove("collapsing"),
                    a.classList.add("collapse", "show"),
                    (a.style.height = ""),
                    s.setAttribute("aria-expanded", "true"),
                    s.classList.remove("collapsed"));
                }));
          };
        (s.addEventListener("click", b),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", b),
              void 0 !== o && t.clearTimeout(o),
              (a.className = r),
              (a.style.height = i),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      i = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: r,
            stop: () => e.__swebsyNavbarCleanup?.(),
          })),
          !0)
        );
      },
      n = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!i()) {
      if (n) {
        const s = () => i();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      r();
    }
  }).bind(items[i])();
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#i2ux-3-2")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView;
    if (!t) return;
    if ("1" === e.dataset.navbarCollapseInit && !t.__swebsyPreviewRuntime)
      return;
    (e.__swebsyNavbarUnregister?.(),
      e.__swebsyNavbarRuntimeReady &&
        (t.removeEventListener(
          "swebsy:preview-runtime-ready",
          e.__swebsyNavbarRuntimeReady
        ),
        delete e.__swebsyNavbarRuntimeReady),
      e.__swebsyNavbarCleanup?.());
    const s = e.querySelector('[data-navbar-part="toggler"]'),
      a = e.querySelector('[data-navbar-part="collapse"]');
    if (!s || !a) return;
    const r = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const r = a.className,
          i = a.style.height,
          n = s.className,
          l = s.getAttribute("aria-expanded");
        let o;
        const c = (e) => {
            (void 0 !== o && t.clearTimeout(o),
              (o = t.setTimeout(
                e,
                (() => {
                  const e = (t.getComputedStyle(a).transitionDuration ?? "0s")
                      .split(",")
                      .map((e) => {
                        const t = parseFloat(e.trim());
                        return e.trim().endsWith("ms") ? t : 1e3 * t;
                      }),
                    s = Math.max(...e);
                  return Number.isFinite(s) && s > 0 ? s : 0;
                })()
              )));
          },
          b = () => {
            a.classList.contains("show")
              ? a.classList.contains("collapsing") ||
                ((a.style.height = a.getBoundingClientRect().height + "px"),
                a.classList.remove("collapse", "show"),
                a.classList.add("collapsing"),
                a.offsetHeight,
                (a.style.height = "0"),
                c(() => {
                  (a.classList.remove("collapsing"),
                    a.classList.add("collapse"),
                    (a.style.height = ""),
                    s.setAttribute("aria-expanded", "false"),
                    s.classList.add("collapsed"));
                }))
              : a.classList.contains("collapsing") ||
                (a.classList.remove("collapse", "show"),
                a.classList.add("collapsing"),
                (a.style.height = "0"),
                a.offsetHeight,
                (a.style.height = a.scrollHeight + "px"),
                c(() => {
                  (a.classList.remove("collapsing"),
                    a.classList.add("collapse", "show"),
                    (a.style.height = ""),
                    s.setAttribute("aria-expanded", "true"),
                    s.classList.remove("collapsed"));
                }));
          };
        (s.addEventListener("click", b),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", b),
              void 0 !== o && t.clearTimeout(o),
              (a.className = r),
              (a.style.height = i),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      i = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: r,
            stop: () => e.__swebsyNavbarCleanup?.(),
          })),
          !0)
        );
      },
      n = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!i()) {
      if (n) {
        const s = () => i();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      r();
    }
  }).bind(items[i])();
