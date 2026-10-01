for (
  var i = 0, len = (items = document.querySelectorAll("#iluz")).length;
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
  i = 0, len = (items = document.querySelectorAll("#i7o6255-2-2")).length;
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
      m = l(a) || "system",
      y = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = y() || m;
        a && !y() && a.setSessionValue(r, h);
        const b = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              a?.notifyColorMode(m),
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
          p = () => {
            "system" === h && b("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", p),
            i.push(() => c.removeEventListener("change", p)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(p), i.push(() => c.removeListener?.(p))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && b(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && b(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const w = e.querySelector("[data-theme-cycle-button]");
        if (w) {
          const e = () => b(d(h), !0);
          (w.addEventListener("click", e),
            i.push(() => w.removeEventListener("click", e)));
        }
        const v = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && b(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", v),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", v)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === m;
              }),
              u(m));
          }),
          b(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => y(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      b = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (b) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      y();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#iluz-2-2")).length;
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
  i = 0, len = (items = document.querySelectorAll("#i7o6255-2-3")).length;
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
      m = l(a) || "system",
      y = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = y() || m;
        a && !y() && a.setSessionValue(r, h);
        const b = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              a?.notifyColorMode(m),
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
          p = () => {
            "system" === h && b("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", p),
            i.push(() => c.removeEventListener("change", p)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(p), i.push(() => c.removeListener?.(p))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && b(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && b(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const w = e.querySelector("[data-theme-cycle-button]");
        if (w) {
          const e = () => b(d(h), !0);
          (w.addEventListener("click", e),
            i.push(() => w.removeEventListener("click", e)));
        }
        const v = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && b(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", v),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", v)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === m;
              }),
              u(m));
          }),
          b(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => y(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      b = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (b) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      y();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#iluz-2-3")).length;
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
  i = 0, len = (items = document.querySelectorAll("#irr7k4")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument,
      s = t?.defaultView;
    if (!t || !s) return;
    const r = (e) => (e ?? "").trim().startsWith("/__forms/"),
      a = (s, r = !1) => {
        const a = (() => {
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
        ((a.style.color = r
          ? "var(--color-success,currentColor)"
          : "var(--color-danger,currentColor)"),
          (a.hidden = !1),
          (a.textContent = s),
          a.focus({ preventScroll: !0 }));
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
        r(e.getAttribute("action")) &&
        !e.__swebsyTurnstileWidget &&
        !e.__swebsyTurnstileLoading
      ) {
        e.__swebsyTurnstileLoading = !0;
        try {
          const r = await s.fetch("/__forms/turnstile", {
            headers: { Accept: "application/json" },
          });
          if (!r.ok) throw new Error("config unavailable");
          const a = await r.json();
          if (((e.__swebsyNonce = a.nonce), !a.siteKey)) return;
          if (
            ((e.__swebsyTurnstileRequired = !0),
            s.turnstile ||
              (await new Promise((e, s) => {
                const r = t.querySelector("script[data-swebsy-turnstile]"),
                  a = r ?? t.createElement("script");
                (a.addEventListener("load", () => e(), { once: !0 }),
                  a.addEventListener("error", () => s(), { once: !0 }),
                  r ||
                    ((a.src =
                      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"),
                    (a.async = !0),
                    (a.defer = !0),
                    a.setAttribute("data-swebsy-turnstile", ""),
                    t.head.appendChild(a)));
              })),
            !s.turnstile)
          )
            throw new Error("widget unavailable");
          const i = t.createElement("div");
          i.setAttribute("data-swebsy-turnstile", "");
          const o = e.querySelector("[type=submit]") ?? null;
          ((o?.parentElement ?? e).insertBefore(i, o),
            (e.__swebsyTurnstileWidget = s.turnstile.render(i, {
              sitekey: a.siteKey,
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
    const o = (o) => {
      const l = s.__swebsyPreviewRuntime,
        c = e.getAttribute("action");
      if (l && !l.active)
        return (
          o.preventDefault(),
          o.stopImmediatePropagation(),
          void a("Use Preview to test this form.")
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
          o.preventDefault(),
          o.stopImmediatePropagation(),
          void a(
            l
              ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
              : "This form is not accepting submissions yet."
          )
        );
      if (r(c))
        return (
          o.preventDefault(),
          o.stopImmediatePropagation(),
          l
            ? void a(
                "Test mode — submissions are delivered from your published site.",
                !0
              )
            : (i(),
              void (async (r) => {
                if (
                  (e.__swebsyTurnstileRequired || e.__swebsyTurnstileFailed) &&
                  !e.__swebsyTurnstileToken
                )
                  return void a(
                    e.__swebsyTurnstileFailed
                      ? "The security check could not load. Refresh and try again."
                      : "Complete the security check to continue."
                  );
                const i = Array.from(e.querySelectorAll("[type=submit]"));
                i.forEach((e) => (e.disabled = !0));
                const o = new FormData(e);
                e.__swebsyNonce && o.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const i = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: o,
                  });
                  if (!i.ok) {
                    const e = await i.json().catch(() => null);
                    return (
                      a(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void n()
                    );
                  }
                  const l = e.getAttribute("data-redirect");
                  if (l) return void (s.location.href = l);
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
                  (n(), a("Could not reach the server. Please try again."));
                } finally {
                  i.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((i(), l?.active)) {
        o.preventDefault();
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
    ((e.__swebsyFormSubmitHandler = o), e.addEventListener("submit", o, !0));
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#i7o6255-2-4")).length;
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
      m = l(a) || "system",
      y = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = y() || m;
        a && !y() && a.setSessionValue(r, h);
        const b = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              a?.notifyColorMode(m),
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
          p = () => {
            "system" === h && b("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", p),
            i.push(() => c.removeEventListener("change", p)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(p), i.push(() => c.removeListener?.(p))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && b(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && b(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const w = e.querySelector("[data-theme-cycle-button]");
        if (w) {
          const e = () => b(d(h), !0);
          (w.addEventListener("click", e),
            i.push(() => w.removeEventListener("click", e)));
        }
        const v = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && b(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", v),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", v)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === m;
              }),
              u(m));
          }),
          b(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => y(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      b = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (b) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      y();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#iluz-2-4")).length;
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
  i = 0, len = (items = document.querySelectorAll("#i7o6255-2-5")).length;
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
      m = l(a) || "system",
      y = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = y() || m;
        a && !y() && a.setSessionValue(r, h);
        const b = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              a?.notifyColorMode(m),
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
          p = () => {
            "system" === h && b("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", p),
            i.push(() => c.removeEventListener("change", p)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(p), i.push(() => c.removeListener?.(p))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && b(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && b(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const w = e.querySelector("[data-theme-cycle-button]");
        if (w) {
          const e = () => b(d(h), !0);
          (w.addEventListener("click", e),
            i.push(() => w.removeEventListener("click", e)));
        }
        const v = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && b(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", v),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", v)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === m;
              }),
              u(m));
          }),
          b(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => y(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      b = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (b) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      y();
    }
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#iluz-2-5")).length;
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
  i = 0, len = (items = document.querySelectorAll("#i7o6255-2-6")).length;
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
      m = l(a) || "system",
      y = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let h = y() || m;
        a && !y() && a.setSessionValue(r, h);
        const b = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((h = d),
              e.setAttribute("data-mode", d),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              a?.notifyColorMode(m),
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
          p = () => {
            "system" === h && b("system");
          };
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", p),
            i.push(() => c.removeEventListener("change", p)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(p), i.push(() => c.removeListener?.(p))),
          o.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== h && b(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== h && b(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const w = e.querySelector("[data-theme-cycle-button]");
        if (w) {
          const e = () => b(d(h), !0);
          (w.addEventListener("click", e),
            i.push(() => w.removeEventListener("click", e)));
        }
        const v = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && b(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", v),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", v)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === m;
              }),
              u(m));
          }),
          b(h));
      },
      h = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => y(s),
              stop: () => e.__swebsyDarkModeSwitchCleanup?.(),
            }
          )),
          !0)
        );
      },
      b = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!h()) {
      if (b) {
        const s = () => h();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      y();
    }
  }).bind(items[i])();
