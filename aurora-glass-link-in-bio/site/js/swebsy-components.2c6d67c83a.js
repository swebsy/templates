for (
  var items = document.querySelectorAll("#ixfqb"), i = 0, len = items.length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView,
      r = e.ownerDocument?.documentElement;
    if (!t || !r) return;
    const s = "swebsy:color-mode",
      o = e.getAttribute("data-mode");
    (e.__swebsyDarkModeSwitchUnregister?.(),
      e.__swebsyDarkModeSwitchRuntimeReady &&
        (t.removeEventListener(
          "swebsy:preview-runtime-ready",
          e.__swebsyDarkModeSwitchRuntimeReady
        ),
        delete e.__swebsyDarkModeSwitchRuntimeReady),
      e.__swebsyDarkModeSwitchCleanup?.());
    const n =
        e.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`,
      i = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      a = i();
    (a.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${n}__${t}`), (e.name = `${n}__toggle`));
    }),
      e.querySelectorAll("label[for]").forEach((e) => {
        const t = e.previousElementSibling;
        "INPUT" === t?.tagName && t.id && e.setAttribute("for", t.id);
      }));
    const c = (e) =>
        "system" === e || "light" === e || "dark" === e ? e : null,
      d = (e) => ("system" === e ? "System" : "dark" === e ? "Dark" : "Light"),
      l = (e) => ("system" === e ? "light" : "light" === e ? "dark" : "system"),
      m = (t) => {
        const r = e.querySelector("[data-theme-cycle-button]");
        if (!r) return;
        const s = l(t),
          o = `Theme: ${d(t)}. Click to switch to ${d(s)}.`;
        (r.setAttribute("aria-label", o),
          r.setAttribute("title", o),
          r.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      u = c(o) || "system",
      h = (o) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const n = [],
          d = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          h = () => {
            if (o) return c(o.getSessionValue(s));
            try {
              return c(t.localStorage?.getItem(s));
            } catch {
              return null;
            }
          };
        let y = h() || u;
        o && !h() && o.setSessionValue(s, y);
        const b = (n, a = !1) => {
            const l = c(n);
            if (!l) return;
            ((y = l),
              e.setAttribute("data-mode", l),
              i().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === l;
              }),
              m(l));
            const u = ((e) =>
              "system" === e ? (d?.matches ? "dark" : "light") : e)(l);
            (r.classList.toggle("dark", "dark" === u),
              r.classList.toggle("light", "light" === u),
              (r.style.colorScheme = u),
              o?.notifyColorMode(u),
              a &&
                ((r) => {
                  if (o) o.setSessionValue(s, r);
                  else
                    try {
                      t.localStorage?.setItem(s, r);
                    } catch {}
                  t.dispatchEvent(
                    new t.CustomEvent("swebsy:color-mode-preference", {
                      detail: { mode: r, source: e },
                    })
                  );
                })(l));
          },
          w = () => {
            "system" === y && b("system");
          };
        (d && "function" == typeof d.addEventListener
          ? (d.addEventListener("change", w),
            n.push(() => d.removeEventListener("change", w)))
          : d &&
            "function" == typeof d.addListener &&
            (d.addListener(w), n.push(() => d.removeListener?.(w))),
          a.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== y && b(t, !0);
            };
            (e.addEventListener("change", t),
              n.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                r = t?.getAttribute("data-mode");
              r && r !== y && b(r, !0);
            };
            (e.addEventListener("click", t),
              n.push(() => e.removeEventListener("click", t)));
          }));
        const g = e.querySelector("[data-theme-cycle-button]");
        if (g) {
          const e = () => b(l(y), !0);
          (g.addEventListener("click", e),
            n.push(() => g.removeEventListener("click", e)));
        }
        const f = (t) => {
          const r = t.detail;
          r?.source !== e && r?.mode && b(r.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", f),
          n.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", f)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (n.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", u),
              i().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === u;
              }),
              m(u));
          }),
          b(y));
      },
      y = () => {
        const r = t.__swebsyPreviewRuntime;
        return (
          !!r &&
          ((e.__swebsyDarkModeSwitchUnregister = r.register(
            e,
            "dark-mode-switch",
            {
              start: () => h(r),
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
        const r = () => y();
        return (
          (e.__swebsyDarkModeSwitchRuntimeReady = r),
          void t.addEventListener("swebsy:preview-runtime-ready", r, {
            once: !0,
          })
        );
      }
      h();
    }
  }).bind(items[i])();
