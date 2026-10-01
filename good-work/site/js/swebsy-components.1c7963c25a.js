for (
  var i = 0, len = (items = document.querySelectorAll("#iqcl")).length;
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
  i = 0, len = (items = document.querySelectorAll("#iqcl-2-6")).length;
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
    ij5vuh: {
      galleryId: "gal-be6d4af6",
      loop: !0,
      touchNavigation: !0,
      keyboardNavigation: !0,
      zoomable: !0,
      openEffect: "zoom",
      refreshToken: 1784691240166,
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
    ilahlh: { lightboxId: "lbx-2adcbc0c", refreshToken: 15 },
    iwm6vi: { lightboxId: "lbx-30dd6440", refreshToken: 16 },
    i42crx: { lightboxId: "lbx-4d4b0a3c", refreshToken: 7 },
    "i42crx-4": { lightboxId: "lbx-4d4b0a3c", refreshToken: 3 },
    "i42crx-3": { lightboxId: "lbx-4d4b0a3c", refreshToken: 3 },
    "i42crx-2": { lightboxId: "lbx-4d4b0a3c", refreshToken: 5 },
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
  i = 0, len = (items = document.querySelectorAll("#iqcl-2-2")).length;
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
  i = 0, len = (items = document.querySelectorAll("#i0qhxf")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument,
      s = t?.defaultView;
    if (!t || !s) return;
    const a = (e) => (e ?? "").trim().startsWith("/__forms/"),
      r = (s, a = !1) => {
        const r = (() => {
          let s = e.querySelector("[data-swebsy-form-status]");
          return (
            s ||
              ((s = t.createElement("p")),
              s.setAttribute("data-swebsy-form-status", ""),
              s.setAttribute("role", "alert"),
              s.setAttribute("tabindex", "-1"),
              (s.style.cssText =
                "margin:.75rem 0 0;font-size:.875rem;line-height:1.5"),
              e.appendChild(s)),
            s
          );
        })();
        ((r.style.color = a
          ? "var(--color-success,currentColor)"
          : "var(--color-danger,currentColor)"),
          (r.hidden = !1),
          (r.textContent = s),
          r.focus({ preventScroll: !0 }));
      },
      i = () => {
        const t = e.querySelector("[data-swebsy-form-status]");
        t && (t.hidden = !0);
      },
      n = () => {
        ((e.__swebsyTurnstileToken = void 0),
          e.__swebsyTurnstileWidget &&
            s.turnstile &&
            s.turnstile.reset(e.__swebsyTurnstileWidget));
      };
    ((async () => {
      if (
        !s.__swebsyPreviewRuntime &&
        a(e.getAttribute("action")) &&
        !e.__swebsyTurnstileWidget &&
        !e.__swebsyTurnstileLoading
      ) {
        e.__swebsyTurnstileLoading = !0;
        try {
          const a = await s.fetch("/__forms/turnstile", {
            headers: { Accept: "application/json" },
          });
          if (!a.ok) throw new Error("config unavailable");
          const r = await a.json();
          if (((e.__swebsyNonce = r.nonce), !r.siteKey)) return;
          if (
            ((e.__swebsyTurnstileRequired = !0),
            s.turnstile ||
              (await new Promise((e, s) => {
                const a = t.querySelector("script[data-swebsy-turnstile]"),
                  r = a ?? t.createElement("script");
                (r.addEventListener("load", () => e(), { once: !0 }),
                  r.addEventListener("error", () => s(), { once: !0 }),
                  a ||
                    ((r.src =
                      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"),
                    (r.async = !0),
                    (r.defer = !0),
                    r.setAttribute("data-swebsy-turnstile", ""),
                    t.head.appendChild(r)));
              })),
            !s.turnstile)
          )
            throw new Error("widget unavailable");
          const i = t.createElement("div");
          i.setAttribute("data-swebsy-turnstile", "");
          const l = e.querySelector("[type=submit]") ?? null;
          ((l?.parentElement ?? e).insertBefore(i, l),
            (e.__swebsyTurnstileWidget = s.turnstile.render(i, {
              sitekey: r.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: (t) => {
                ((e.__swebsyTurnstileToken = t),
                  (e.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": n,
              "error-callback": () => {
                ((e.__swebsyTurnstileToken = void 0),
                  (e.__swebsyTurnstileFailed = !0));
              },
            })));
        } catch {
          e.__swebsyTurnstileFailed = !0;
        } finally {
          e.__swebsyTurnstileLoading = !1;
        }
      }
    })(),
      e.__swebsyFormSubmitHandler &&
        e.removeEventListener("submit", e.__swebsyFormSubmitHandler, !0));
    const l = (l) => {
      const o = s.__swebsyPreviewRuntime,
        c = e.getAttribute("action");
      if (o && !o.active)
        return (
          l.preventDefault(),
          l.stopImmediatePropagation(),
          void r("Use Preview to test this form.")
        );
      if (
        !((e) => {
          const t = (e ?? "").trim();
          if (!t || "#" === t) return !1;
          if (
            /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
              t
            )
          )
            return !1;
          if (
            (t.startsWith("/") && !t.startsWith("//")) ||
            t.startsWith("./") ||
            t.startsWith("../") ||
            /^https:\/\//i.test(t)
          )
            return !0;
          try {
            const e = new URL(t);
            return (
              "http:" === e.protocol &&
              ["localhost", "127.0.0.1", "[::1]"].includes(e.hostname)
            );
          } catch {
            return !1;
          }
        })(c)
      )
        return (
          l.preventDefault(),
          l.stopImmediatePropagation(),
          void r(
            o
              ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
              : "This form is not accepting submissions yet."
          )
        );
      if (a(c))
        return (
          l.preventDefault(),
          l.stopImmediatePropagation(),
          o
            ? void r(
                "Test mode — submissions are delivered from your published site.",
                !0
              )
            : (i(),
              void (async (a) => {
                if (
                  (e.__swebsyTurnstileRequired || e.__swebsyTurnstileFailed) &&
                  !e.__swebsyTurnstileToken
                )
                  return void r(
                    e.__swebsyTurnstileFailed
                      ? "The security check could not load. Refresh and try again."
                      : "Complete the security check to continue."
                  );
                const i = Array.from(e.querySelectorAll("[type=submit]"));
                i.forEach((e) => (e.disabled = !0));
                const l = new FormData(e);
                e.__swebsyNonce && l.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const i = await s.fetch(a, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: l,
                  });
                  if (!i.ok) {
                    const e = await i.json().catch(() => null);
                    return (
                      r(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void n()
                    );
                  }
                  const o = e.getAttribute("data-redirect");
                  if (o) return void (s.location.href = o);
                  const c =
                      e.getAttribute("data-success-message") ||
                      "Thanks — your message has been sent.",
                    d = t.createElement("p");
                  (d.setAttribute("role", "status"),
                    d.setAttribute("tabindex", "-1"),
                    d.setAttribute("data-swebsy-form-done", ""),
                    (d.textContent = c),
                    e.replaceChildren(d),
                    d.focus({ preventScroll: !0 }));
                } catch {
                  (n(), r("Could not reach the server. Please try again."));
                } finally {
                  i.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((i(), o?.active)) {
        l.preventDefault();
        const t = e.getAttribute("target");
        e.setAttribute("target", "_blank");
        try {
          HTMLFormElement.prototype.submit.call(e);
        } finally {
          null === t
            ? e.removeAttribute("target")
            : e.setAttribute("target", t);
        }
      }
    };
    ((e.__swebsyFormSubmitHandler = l), e.addEventListener("submit", l, !0));
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#iqcl-2-3")).length;
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
  i = 0, len = (items = document.querySelectorAll("#iqcl-2-4")).length;
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
