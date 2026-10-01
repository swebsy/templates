for (
  var i = 0, len = (items = document.querySelectorAll("#ihc7")).length;
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
      r = e.querySelector('[data-navbar-part="collapse"]');
    if (!s || !r) return;
    const a = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const a = r.className,
          i = r.style.height,
          n = s.className,
          o = s.getAttribute("aria-expanded");
        let l;
        const c = (e) => {
            (void 0 !== l && t.clearTimeout(l),
              (l = t.setTimeout(
                e,
                (() => {
                  const e = (t.getComputedStyle(r).transitionDuration ?? "0s")
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
            r.classList.contains("show")
              ? r.classList.contains("collapsing") ||
                ((r.style.height = r.getBoundingClientRect().height + "px"),
                r.classList.remove("collapse", "show"),
                r.classList.add("collapsing"),
                r.offsetHeight,
                (r.style.height = "0"),
                c(() => {
                  (r.classList.remove("collapsing"),
                    r.classList.add("collapse"),
                    (r.style.height = ""),
                    s.setAttribute("aria-expanded", "false"),
                    s.classList.add("collapsed"));
                }))
              : r.classList.contains("collapsing") ||
                (r.classList.remove("collapse", "show"),
                r.classList.add("collapsing"),
                (r.style.height = "0"),
                r.offsetHeight,
                (r.style.height = r.scrollHeight + "px"),
                c(() => {
                  (r.classList.remove("collapsing"),
                    r.classList.add("collapse", "show"),
                    (r.style.height = ""),
                    s.setAttribute("aria-expanded", "true"),
                    s.classList.remove("collapsed"));
                }));
          };
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
              void 0 !== l && t.clearTimeout(l),
              (r.className = a),
              (r.style.height = i),
              (s.className = n),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      i = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: a,
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
      a();
    }
  }).bind(items[i])();
var props = {
    i54gh: {
      galleryId: "gal-ccd6ff39",
      loop: !0,
      touchNavigation: !0,
      keyboardNavigation: !0,
      zoomable: !0,
      openEffect: "zoom",
      refreshToken: 1778023145274,
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
    const r = (e) => !0 === e || "true" === e || "1" === e,
      a = (e) => {
        const t = e.getAttribute("src") || "",
          s = e.querySelector("img")?.getAttribute("src") || "",
          r = t || s;
        r ? e.setAttribute("href", r) : e.removeAttribute("href");
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
      o = () => {
        if ((n(), "function" != typeof s.GLightbox)) return;
        (t.querySelectorAll("a[data-glightbox]").forEach(a),
          t.querySelectorAll("a[data-glightbox]").forEach((e) => {
            const s = (t) => {
              (a(e),
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
            loop: r(e.loop),
            touchNavigation: r(e.touchNavigation),
            keyboardNavigation: r(e.keyboardNavigation),
            zoomable: r(e.zoomable),
            openEffect: e.openEffect || "zoom",
          }));
      },
      l = () => {
        const e = s.__swebsyPreviewRuntime;
        return (
          !!e &&
          ((t.__swebsyGalleryUnregister = e.register(t, "gallery", {
            start: o,
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
    if (!l()) {
      if (c) {
        const e = () => l();
        return (
          (t.__swebsyGalleryRuntimeReady = e),
          void s.addEventListener("swebsy:preview-runtime-ready", e, {
            once: !0,
          })
        );
      }
      o();
    }
  }).bind(el)(props[el.id]);
}
var els;
for (
  props = {
    iblpf: { lightboxId: "lbx-4c659167", refreshToken: 3 },
    i20qu: { lightboxId: "lbx-be2da462", refreshToken: 3 },
    il0hn: { lightboxId: "lbx-d728d536", refreshToken: 3 },
    io7op: { lightboxId: "lbx-01a2f86c", refreshToken: 3 },
    isycy: { lightboxId: "lbx-016cc4b0", refreshToken: 3 },
    i15ch: { lightboxId: "lbx-9800f2b0", refreshToken: 3 },
    i5s1k: { lightboxId: "lbx-3b420181", refreshToken: 3 },
    ijxee: { lightboxId: "lbx-6944e4a8", refreshToken: 3 },
    ixebk: { lightboxId: "lbx-43c2c415", refreshToken: 3 },
    iur9f: { lightboxId: "lbx-6e8ae6e2", refreshToken: 3 },
    in5gp: { lightboxId: "lbx-fd721145", refreshToken: 3 },
    inqi2: { lightboxId: "lbx-da32d41f", refreshToken: 3 },
    iqg28: { lightboxId: "lbx-61fade36", refreshToken: 3 },
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
    const r = () => {
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
    if ((r(), t.closest("[data-swebsy-gallery]"))) return;
    const a = String(
      e.lightboxId || t.getAttribute("data-swebsy-lightbox-id") || ""
    );
    if (!a) return;
    t.setAttribute("data-swebsy-lightbox-id", a);
    (() => {
      const e = t.getAttribute("src") || "",
        s = t.querySelector("img")?.getAttribute("src") || "",
        r = e || s;
      r ? t.setAttribute("href", r) : t.removeAttribute("href");
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
            selector: `[data-swebsy-lightbox-id="${a}"]`,
            loop: !1,
            onOpen: () => i(!0),
            onClose: () => i(!1),
          });
        }
      },
      o = () => {
        const e = s.__swebsyPreviewRuntime;
        return (
          !!e &&
          ((t.__swebsyLightboxUnregister = e.register(t, "lightbox", {
            start: n,
            stop: r,
          })),
          !0)
        );
      },
      l = (() => {
        try {
          return s.parent !== s && !!s.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!o()) {
      if (l) {
        const e = () => o();
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
  i = 0, len = (items = document.querySelectorAll("#i4txoz")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView,
      s = e.ownerDocument?.documentElement;
    if (!t || !s) return;
    const r = "swebsy:color-mode",
      a = e.getAttribute("data-mode");
    (e.__swebsyDarkModeSwitchUnregister?.(),
      e.__swebsyDarkModeSwitchRuntimeReady &&
        (t.removeEventListener(
          "swebsy:preview-runtime-ready",
          e.__swebsyDarkModeSwitchRuntimeReady
        ),
        delete e.__swebsyDarkModeSwitchRuntimeReady),
      e.__swebsyDarkModeSwitchCleanup?.());
    const i =
        e.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      n = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = n();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${i}__${t}`), (e.name = `${i}__toggle`));
    }),
      e.querySelectorAll("label[for]").forEach((e) => {
        const t = e.previousElementSibling;
        "INPUT" === t?.tagName && t.id && e.setAttribute("for", t.id);
      }));
    const l = (e) =>
        "system" === e || "light" === e || "dark" === e ? e : null,
      c = (e) => ("system" === e ? "System" : "dark" === e ? "Dark" : "Light"),
      d = (e) => ("system" === e ? "light" : "light" === e ? "dark" : "system"),
      u = (t) => {
        const s = e.querySelector("[data-theme-cycle-button]");
        if (!s) return;
        const r = d(t),
          a = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", a),
          s.setAttribute("title", a),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      y = l(a) || "system",
      b = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          b = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = b() || y;
        a && !b() && a.setSessionValue(r, h);
        const m = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const y = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === y),
              s.classList.toggle("light", "light" === y),
              (s.style.colorScheme = y),
              a?.notifyColorMode(y),
              o &&
                ((s) => {
                  if (a) a.setSessionValue(r, s);
                  else
                    try {
                      t.localStorage?.setItem(r, s);
                    } catch {}
                  t.dispatchEvent(
                    new t.CustomEvent("swebsy:color-mode-preference", {
                      detail: { mode: s, source: e },
                    })
                  );
                })(d));
          },
          g = () => {
            "system" === h && m("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", g),
            i.push(() => c.removeEventListener("change", g)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(g), i.push(() => c.removeListener?.(g))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && m(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && m(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const p = e.querySelector("[data-theme-cycle-button]");
        if (p) {
          const e = () => m(d(h), !0);
          (p.addEventListener("click", e),
            i.push(() => p.removeEventListener("click", e)));
        }
        const w = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && m(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", w),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", w)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", y),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === y;
              }),
              u(y));
          }),
          m(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => b(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      m = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (m) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      b();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#ihc7-2-2")).length;
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
      r = e.querySelector('[data-navbar-part="collapse"]');
    if (!s || !r) return;
    const a = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const a = r.className,
          i = r.style.height,
          n = s.className,
          o = s.getAttribute("aria-expanded");
        let l;
        const c = (e) => {
            (void 0 !== l && t.clearTimeout(l),
              (l = t.setTimeout(
                e,
                (() => {
                  const e = (t.getComputedStyle(r).transitionDuration ?? "0s")
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
            r.classList.contains("show")
              ? r.classList.contains("collapsing") ||
                ((r.style.height = r.getBoundingClientRect().height + "px"),
                r.classList.remove("collapse", "show"),
                r.classList.add("collapsing"),
                r.offsetHeight,
                (r.style.height = "0"),
                c(() => {
                  (r.classList.remove("collapsing"),
                    r.classList.add("collapse"),
                    (r.style.height = ""),
                    s.setAttribute("aria-expanded", "false"),
                    s.classList.add("collapsed"));
                }))
              : r.classList.contains("collapsing") ||
                (r.classList.remove("collapse", "show"),
                r.classList.add("collapsing"),
                (r.style.height = "0"),
                r.offsetHeight,
                (r.style.height = r.scrollHeight + "px"),
                c(() => {
                  (r.classList.remove("collapsing"),
                    r.classList.add("collapse", "show"),
                    (r.style.height = ""),
                    s.setAttribute("aria-expanded", "true"),
                    s.classList.remove("collapsed"));
                }));
          };
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
              void 0 !== l && t.clearTimeout(l),
              (r.className = a),
              (r.style.height = i),
              (s.className = n),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      i = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: a,
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
      a();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#i4txoz-2-2")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView,
      s = e.ownerDocument?.documentElement;
    if (!t || !s) return;
    const r = "swebsy:color-mode",
      a = e.getAttribute("data-mode");
    (e.__swebsyDarkModeSwitchUnregister?.(),
      e.__swebsyDarkModeSwitchRuntimeReady &&
        (t.removeEventListener(
          "swebsy:preview-runtime-ready",
          e.__swebsyDarkModeSwitchRuntimeReady
        ),
        delete e.__swebsyDarkModeSwitchRuntimeReady),
      e.__swebsyDarkModeSwitchCleanup?.());
    const i =
        e.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      n = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = n();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${i}__${t}`), (e.name = `${i}__toggle`));
    }),
      e.querySelectorAll("label[for]").forEach((e) => {
        const t = e.previousElementSibling;
        "INPUT" === t?.tagName && t.id && e.setAttribute("for", t.id);
      }));
    const l = (e) =>
        "system" === e || "light" === e || "dark" === e ? e : null,
      c = (e) => ("system" === e ? "System" : "dark" === e ? "Dark" : "Light"),
      d = (e) => ("system" === e ? "light" : "light" === e ? "dark" : "system"),
      u = (t) => {
        const s = e.querySelector("[data-theme-cycle-button]");
        if (!s) return;
        const r = d(t),
          a = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", a),
          s.setAttribute("title", a),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      y = l(a) || "system",
      b = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          b = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = b() || y;
        a && !b() && a.setSessionValue(r, h);
        const m = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const y = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === y),
              s.classList.toggle("light", "light" === y),
              (s.style.colorScheme = y),
              a?.notifyColorMode(y),
              o &&
                ((s) => {
                  if (a) a.setSessionValue(r, s);
                  else
                    try {
                      t.localStorage?.setItem(r, s);
                    } catch {}
                  t.dispatchEvent(
                    new t.CustomEvent("swebsy:color-mode-preference", {
                      detail: { mode: s, source: e },
                    })
                  );
                })(d));
          },
          g = () => {
            "system" === h && m("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", g),
            i.push(() => c.removeEventListener("change", g)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(g), i.push(() => c.removeListener?.(g))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && m(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && m(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const p = e.querySelector("[data-theme-cycle-button]");
        if (p) {
          const e = () => m(d(h), !0);
          (p.addEventListener("click", e),
            i.push(() => p.removeEventListener("click", e)));
        }
        const w = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && m(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", w),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", w)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", y),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === y;
              }),
              u(y));
          }),
          m(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => b(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      m = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (m) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      b();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#ihc7-2-2-2")).length;
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
      r = e.querySelector('[data-navbar-part="collapse"]');
    if (!s || !r) return;
    const a = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const a = r.className,
          i = r.style.height,
          n = s.className,
          o = s.getAttribute("aria-expanded");
        let l;
        const c = (e) => {
            (void 0 !== l && t.clearTimeout(l),
              (l = t.setTimeout(
                e,
                (() => {
                  const e = (t.getComputedStyle(r).transitionDuration ?? "0s")
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
            r.classList.contains("show")
              ? r.classList.contains("collapsing") ||
                ((r.style.height = r.getBoundingClientRect().height + "px"),
                r.classList.remove("collapse", "show"),
                r.classList.add("collapsing"),
                r.offsetHeight,
                (r.style.height = "0"),
                c(() => {
                  (r.classList.remove("collapsing"),
                    r.classList.add("collapse"),
                    (r.style.height = ""),
                    s.setAttribute("aria-expanded", "false"),
                    s.classList.add("collapsed"));
                }))
              : r.classList.contains("collapsing") ||
                (r.classList.remove("collapse", "show"),
                r.classList.add("collapsing"),
                (r.style.height = "0"),
                r.offsetHeight,
                (r.style.height = r.scrollHeight + "px"),
                c(() => {
                  (r.classList.remove("collapsing"),
                    r.classList.add("collapse", "show"),
                    (r.style.height = ""),
                    s.setAttribute("aria-expanded", "true"),
                    s.classList.remove("collapsed"));
                }));
          };
        (s.addEventListener("click", d),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", d),
              void 0 !== l && t.clearTimeout(l),
              (r.className = a),
              (r.style.height = i),
              (s.className = n),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      i = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: a,
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
      a();
    }
  }).bind(items[i])();
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#i4txoz-2-3")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView,
      s = e.ownerDocument?.documentElement;
    if (!t || !s) return;
    const r = "swebsy:color-mode",
      a = e.getAttribute("data-mode");
    (e.__swebsyDarkModeSwitchUnregister?.(),
      e.__swebsyDarkModeSwitchRuntimeReady &&
        (t.removeEventListener(
          "swebsy:preview-runtime-ready",
          e.__swebsyDarkModeSwitchRuntimeReady
        ),
        delete e.__swebsyDarkModeSwitchRuntimeReady),
      e.__swebsyDarkModeSwitchCleanup?.());
    const i =
        e.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      n = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = n();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${i}__${t}`), (e.name = `${i}__toggle`));
    }),
      e.querySelectorAll("label[for]").forEach((e) => {
        const t = e.previousElementSibling;
        "INPUT" === t?.tagName && t.id && e.setAttribute("for", t.id);
      }));
    const l = (e) =>
        "system" === e || "light" === e || "dark" === e ? e : null,
      c = (e) => ("system" === e ? "System" : "dark" === e ? "Dark" : "Light"),
      d = (e) => ("system" === e ? "light" : "light" === e ? "dark" : "system"),
      u = (t) => {
        const s = e.querySelector("[data-theme-cycle-button]");
        if (!s) return;
        const r = d(t),
          a = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", a),
          s.setAttribute("title", a),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      y = l(a) || "system",
      b = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          b = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = b() || y;
        a && !b() && a.setSessionValue(r, h);
        const m = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const y = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === y),
              s.classList.toggle("light", "light" === y),
              (s.style.colorScheme = y),
              a?.notifyColorMode(y),
              o &&
                ((s) => {
                  if (a) a.setSessionValue(r, s);
                  else
                    try {
                      t.localStorage?.setItem(r, s);
                    } catch {}
                  t.dispatchEvent(
                    new t.CustomEvent("swebsy:color-mode-preference", {
                      detail: { mode: s, source: e },
                    })
                  );
                })(d));
          },
          g = () => {
            "system" === h && m("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", g),
            i.push(() => c.removeEventListener("change", g)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(g), i.push(() => c.removeListener?.(g))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && m(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && m(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const p = e.querySelector("[data-theme-cycle-button]");
        if (p) {
          const e = () => m(d(h), !0);
          (p.addEventListener("click", e),
            i.push(() => p.removeEventListener("click", e)));
        }
        const w = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && m(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", w),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", w)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", y),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === y;
              }),
              u(y));
          }),
          m(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => b(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      m = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (m) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      b();
    }
  }).bind(items[i])();
