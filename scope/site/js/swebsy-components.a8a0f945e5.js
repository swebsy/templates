for (
  var i = 0, len = (items = document.querySelectorAll("#i90b-2-7")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = a.className,
          r = a.style.height,
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
              (a.className = i),
              (a.style.height = r),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      r = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: i,
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
    if (!r()) {
      if (n) {
        const s = () => r();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      i();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#i90b-2-2")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = a.className,
          r = a.style.height,
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
              (a.className = i),
              (a.style.height = r),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      r = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: i,
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
    if (!r()) {
      if (n) {
        const s = () => r();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      i();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#i90b-2-3")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = a.className,
          r = a.style.height,
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
              (a.className = i),
              (a.style.height = r),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      r = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: i,
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
    if (!r()) {
      if (n) {
        const s = () => r();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      i();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#i90b-2-4")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = a.className,
          r = a.style.height,
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
              (a.className = i),
              (a.style.height = r),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      r = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: i,
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
    if (!r()) {
      if (n) {
        const s = () => r();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      i();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#i90b-2-5")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = a.className,
          r = a.style.height,
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
              (a.className = i),
              (a.style.height = r),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      r = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: i,
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
    if (!r()) {
      if (n) {
        const s = () => r();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      i();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#i90b-2-6")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = a.className,
          r = a.style.height,
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
              (a.className = i),
              (a.style.height = r),
              (s.className = n),
              null === l
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", l),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      r = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyNavbarUnregister = s.register(e, "navbar", {
            start: i,
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
    if (!r()) {
      if (n) {
        const s = () => r();
        return (
          (e.__swebsyNavbarRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      i();
    }
  }).bind(items[i])();
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#i42228v")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument,
      s = t?.defaultView;
    if (!t || !s) return;
    const a = (e) => (e ?? "").trim().startsWith("/__forms/"),
      i = (s, a = !1) => {
        const i = (() => {
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
        ((i.style.color = a
          ? "var(--color-success,currentColor)"
          : "var(--color-danger,currentColor)"),
          (i.hidden = !1),
          (i.textContent = s),
          i.focus({ preventScroll: !0 }));
      },
      r = () => {
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
          const i = await a.json();
          if (((e.__swebsyNonce = i.nonce), !i.siteKey)) return;
          if (
            ((e.__swebsyTurnstileRequired = !0),
            s.turnstile ||
              (await new Promise((e, s) => {
                const a = t.querySelector("script[data-swebsy-turnstile]"),
                  i = a ?? t.createElement("script");
                (i.addEventListener("load", () => e(), { once: !0 }),
                  i.addEventListener("error", () => s(), { once: !0 }),
                  a ||
                    ((i.src =
                      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"),
                    (i.async = !0),
                    (i.defer = !0),
                    i.setAttribute("data-swebsy-turnstile", ""),
                    t.head.appendChild(i)));
              })),
            !s.turnstile)
          )
            throw new Error("widget unavailable");
          const r = t.createElement("div");
          r.setAttribute("data-swebsy-turnstile", "");
          const l = e.querySelector("[type=submit]") ?? null;
          ((l?.parentElement ?? e).insertBefore(r, l),
            (e.__swebsyTurnstileWidget = s.turnstile.render(r, {
              sitekey: i.siteKey,
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
          void i("Use Preview to test this form.")
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
          void i(
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
            ? void i(
                "Test mode — submissions are delivered from your published site.",
                !0
              )
            : (r(),
              void (async (a) => {
                if (
                  (e.__swebsyTurnstileRequired || e.__swebsyTurnstileFailed) &&
                  !e.__swebsyTurnstileToken
                )
                  return void i(
                    e.__swebsyTurnstileFailed
                      ? "The security check could not load. Refresh and try again."
                      : "Complete the security check to continue."
                  );
                const r = Array.from(e.querySelectorAll("[type=submit]"));
                r.forEach((e) => (e.disabled = !0));
                const l = new FormData(e);
                e.__swebsyNonce && l.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const r = await s.fetch(a, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: l,
                  });
                  if (!r.ok) {
                    const e = await r.json().catch(() => null);
                    return (
                      i(
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
                  (n(), i("Could not reach the server. Please try again."));
                } finally {
                  r.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((r(), o?.active)) {
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
