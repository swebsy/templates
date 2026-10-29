for (
  var i = 0, len = (items = document.querySelectorAll("#ixr7")).length;
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
  i = 0, len = (items = document.querySelectorAll("#irppht")).length;
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
      h = (a) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const i = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          h = () => {
            if (a) return l(a.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let y = h() || m;
        a && !h() && a.setSessionValue(r, y);
        const b = (i, o = !1) => {
            const d = l(i);
            if (!d) return;
            ((y = d),
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
            "system" === y && b("system");
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
              t && t !== y && b(t, !0);
            };
            (e.addEventListener("change", t),
              i.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== y && b(s, !0);
            };
            (e.addEventListener("click", t),
              i.push(() => e.removeEventListener("click", t)));
          }));
        const v = e.querySelector("[data-theme-cycle-button]");
        if (v) {
          const e = () => b(d(y), !0);
          (v.addEventListener("click", e),
            i.push(() => v.removeEventListener("click", e)));
        }
        const g = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && b(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", g),
          i.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", g)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (i.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              n().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === m;
              }),
              u(m));
          }),
          b(y));
      },
      y = () => {
        const s = t.__swebsyPreviewRuntime;
        return (
          !!s &&
          ((e.__swebsyDarkModeSwitchUnregister = s.register(
            e,
            "dark-mode-switch",
            {
              start: () => h(s),
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
    if (!y()) {
      if (b) {
        const s = () => y();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = s),
          void t.addEventListener("swebsy:preview-runtime-ready", s, {
            once: !0,
          })
        );
      }
      h();
    }
  }).bind(items[i])();
