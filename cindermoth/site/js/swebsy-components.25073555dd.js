for (
  var i = 0, len = (items = document.querySelectorAll("#if1q7w2-2-6")).length;
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
          d = () => {
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
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
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
    ilfxpt: {
      galleryId: "gal-9397f1c7",
      loop: !0,
      touchNavigation: !0,
      keyboardNavigation: !0,
      zoomable: !0,
      openEffect: "zoom",
      refreshToken: 12,
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
for (
  props = {
    im0w9l: { lightboxId: "lbx-cd19ed45", refreshToken: 2 },
    i6lmyy: { lightboxId: "lbx-030ab3de", refreshToken: 2 },
    iemwtq: { lightboxId: "lbx-95c07528", refreshToken: 2 },
    iktrxl: { lightboxId: "lbx-4c9528c8", refreshToken: 2 },
    iry7ee: { lightboxId: "lbx-0a5b9a03", refreshToken: 2 },
    iaf5pb: { lightboxId: "lbx-532a95b6", refreshToken: 2 },
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
  i = 0, len = (items = document.querySelectorAll("#if1q7w2-2-2")).length;
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
          d = () => {
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
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
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
for (
  i = 0,
    len = (items = document.querySelectorAll("#ibf0sid, #iahcopv, #is7wj88"))
      .length;
  i < len;
  i++
)
  (function () {
    const e = this.ownerDocument,
      t = e?.defaultView;
    if (!e || !t) return;
    t.__swebsyCopyHandler &&
      e.removeEventListener("click", t.__swebsyCopyHandler);
    const s = (s) => {
        let a = e.getElementById("swebsy-live");
        a ||
          ((a = e.createElement("div")),
          (a.id = "swebsy-live"),
          a.setAttribute("role", "status"),
          a.setAttribute("aria-live", "polite"),
          (a.style.cssText =
            "position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0"),
          e.body.appendChild(a));
        const r = a;
        ((r.textContent = ""),
          t.setTimeout(() => {
            r.textContent = s;
          }, 60));
      },
      a = (t) => {
        const s = e.createElement("textarea");
        ((s.value = t),
          s.setAttribute("readonly", ""),
          (s.style.cssText =
            "position:fixed;top:0;left:0;opacity:0;pointer-events:none"),
          e.body.appendChild(s),
          s.select(),
          s.setSelectionRange(0, t.length));
        let a = !1;
        try {
          a = e.execCommand("copy");
        } catch {
          a = !1;
        }
        return (
          s.remove(),
          a ? Promise.resolve() : Promise.reject(new Error("copy-unavailable"))
        );
      },
      r = (r) => {
        const i = r.target,
          n = i?.closest?.("[data-swebsy-copy]");
        if (!n) return;
        const l = ((t) => {
          const s = t.getAttribute("data-swebsy-copy-text");
          if (s) return s.trim();
          const a = t.getAttribute("data-swebsy-copy-from"),
            r = t.parentElement ?? e.body,
            i = (e, t) => {
              try {
                return e.querySelector(t);
              } catch {
                return null;
              }
            },
            n = a
              ? (i(r, a) ?? i(e, a))
              : ((e, s) => {
                  const a = Array.from(e.querySelectorAll("*")),
                    r = a.indexOf(t);
                  if (r < 0) return null;
                  let i = null,
                    n = Number.POSITIVE_INFINITY;
                  for (let e = 0; e < a.length; e++) {
                    const t = a[e];
                    if (!t.matches(s)) continue;
                    const l = Math.abs(e - r);
                    l < n && ((i = t), (n = l));
                  }
                  return i;
                })(r, "pre,code,kbd,input,textarea");
          if (!n) return "";
          const l = n.value;
          return "string" == typeof l
            ? l.trim()
            : (n.innerText ?? n.textContent ?? "").trim();
        })(n);
        l &&
          ((e) => {
            const s = t.navigator?.clipboard;
            return s?.writeText ? s.writeText(e).catch(() => a(e)) : a(e);
          })(l).then(
            () => {
              (((e) => {
                const s = e.querySelector('[data-copy-icon="idle"]'),
                  a = e.querySelector('[data-copy-icon="done"]');
                (e.setAttribute("data-copied", ""),
                  s && (s.hidden = !0),
                  a && (a.hidden = !1));
                const r = e;
                (t.clearTimeout(r.__copyTimer),
                  (r.__copyTimer = t.setTimeout(() => {
                    (e.removeAttribute("data-copied"),
                      s && (s.hidden = !1),
                      a && (a.hidden = !0));
                  }, 1400)));
              })(n),
                s("Copied to clipboard"));
            },
            () => s("Copy failed")
          );
      };
    ((t.__swebsyCopyHandler = r), e.addEventListener("click", r));
  }).bind(items[i])();
for (
  props = {
    i0z6hs: {
      galleryId: "gal-e89a4d2b",
      loop: !0,
      touchNavigation: !0,
      keyboardNavigation: !0,
      zoomable: !0,
      openEffect: "zoom",
      refreshToken: 0,
    },
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
    izsr3a: { lightboxId: "lbx-9cd8d352", refreshToken: 0 },
    iyf47z: { lightboxId: "lbx-867eaec3", refreshToken: 0 },
    ipsc52: { lightboxId: "lbx-99ad4d17", refreshToken: 0 },
    i83iuy: { lightboxId: "lbx-22d3ec8d", refreshToken: 0 },
    i97ykq: { lightboxId: "lbx-18b5c8eb", refreshToken: 0 },
    ivxwog: { lightboxId: "lbx-d04350c5", refreshToken: 0 },
    ijyw4d: { lightboxId: "lbx-e8426ffa", refreshToken: 0 },
    ivzm0h: { lightboxId: "lbx-4672a7d6", refreshToken: 0 },
    ite7mu: { lightboxId: "lbx-6fc6e88e", refreshToken: 0 },
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
  i = 0, len = (items = document.querySelectorAll("#if1q7w2-2-3")).length;
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
          d = () => {
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
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
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
for (
  i = 0, len = (items = document.querySelectorAll("#if1q7w2-2-4")).length;
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
          d = () => {
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
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
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
  i = 0, len = (items = document.querySelectorAll("#if1q7w2-2-5")).length;
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
          d = () => {
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
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
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
