for (
  var i = 0, len = (items = document.querySelectorAll("#ipgfk7")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument,
      s = t?.defaultView;
    if (!t || !s) return;
    const r = (e) => (e ?? "").trim().startsWith("/__forms/"),
      i = (s, r = !1) => {
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
        ((i.style.color = r
          ? "var(--color-success,currentColor)"
          : "var(--color-danger,currentColor)"),
          (i.hidden = !1),
          (i.textContent = s),
          i.focus({ preventScroll: !0 }));
      },
      n = () => {
        const t = e.querySelector("[data-swebsy-form-status]");
        t && (t.hidden = !0);
      },
      o = () => {
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
          const i = await r.json();
          if (((e.__swebsyNonce = i.nonce), !i.siteKey)) return;
          if (
            ((e.__swebsyTurnstileRequired = !0),
            s.turnstile ||
              (await new Promise((e, s) => {
                const r = t.querySelector("script[data-swebsy-turnstile]"),
                  i = r ?? t.createElement("script");
                (i.addEventListener("load", () => e(), { once: !0 }),
                  i.addEventListener("error", () => s(), { once: !0 }),
                  r ||
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
          const n = t.createElement("div");
          n.setAttribute("data-swebsy-turnstile", "");
          const a = e.querySelector("[type=submit]") ?? null;
          ((a?.parentElement ?? e).insertBefore(n, a),
            (e.__swebsyTurnstileWidget = s.turnstile.render(n, {
              sitekey: i.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: (t) => {
                ((e.__swebsyTurnstileToken = t),
                  (e.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": o,
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
    const a = (a) => {
      const c = s.__swebsyPreviewRuntime,
        l = e.getAttribute("action");
      if (c && !c.active)
        return (
          a.preventDefault(),
          a.stopImmediatePropagation(),
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
        })(l)
      )
        return (
          a.preventDefault(),
          a.stopImmediatePropagation(),
          void i(
            c
              ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
              : "This form is not accepting submissions yet."
          )
        );
      if (r(l))
        return (
          a.preventDefault(),
          a.stopImmediatePropagation(),
          c
            ? void i(
                "Test mode — submissions are delivered from your published site.",
                !0
              )
            : (n(),
              void (async (r) => {
                if (
                  (e.__swebsyTurnstileRequired || e.__swebsyTurnstileFailed) &&
                  !e.__swebsyTurnstileToken
                )
                  return void i(
                    e.__swebsyTurnstileFailed
                      ? "The security check could not load. Refresh and try again."
                      : "Complete the security check to continue."
                  );
                const n = Array.from(e.querySelectorAll("[type=submit]"));
                n.forEach((e) => (e.disabled = !0));
                const a = new FormData(e);
                e.__swebsyNonce && a.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const n = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: a,
                  });
                  if (!n.ok) {
                    const e = await n.json().catch(() => null);
                    return (
                      i(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void o()
                    );
                  }
                  const c = e.getAttribute("data-redirect");
                  let l = !1;
                  try {
                    l = /^https?:$/.test(
                      new URL(c || "", "https://base.invalid/").protocol
                    );
                  } catch {
                    l = !1;
                  }
                  if (c && l) return void (s.location.href = c);
                  const d =
                      e.getAttribute("data-success-message") ||
                      "Thanks — your message has been sent.",
                    u = t.createElement("p");
                  (u.setAttribute("role", "status"),
                    u.setAttribute("tabindex", "-1"),
                    u.setAttribute("data-swebsy-form-done", ""),
                    (u.textContent = d),
                    e.replaceChildren(u),
                    u.focus({ preventScroll: !0 }));
                } catch {
                  (o(), i("Could not reach the server. Please try again."));
                } finally {
                  n.forEach((e) => (e.disabled = !1));
                }
              })(l))
        );
      if ((n(), c?.active)) {
        a.preventDefault();
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
    ((e.__swebsyFormSubmitHandler = a), e.addEventListener("submit", a, !0));
  }).bind(items[i])();
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#ir6cmu")).length;
  i < len;
  i++
)
  (function () {
    const e = this,
      t = e.ownerDocument?.defaultView,
      s = e.ownerDocument?.documentElement;
    if (!t || !s) return;
    const r = "swebsy:color-mode",
      i = e.getAttribute("data-mode");
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
      o = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      a = o();
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
      l = (e) => ("system" === e ? "System" : "dark" === e ? "Dark" : "Light"),
      d = (e) => ("system" === e ? "light" : "light" === e ? "dark" : "system"),
      u = (t) => {
        const s = e.querySelector("[data-theme-cycle-button]");
        if (!s) return;
        const r = d(t),
          i = `Theme: ${l(t)}. Click to switch to ${l(r)}.`;
        (s.setAttribute("aria-label", i),
          s.setAttribute("title", i),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      m = c(i) || "system",
      y = (i) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const n = [],
          l = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (i) return c(i.getSessionValue(r));
            try {
              return c(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let b = y() || m;
        i && !y() && i.setSessionValue(r, b);
        const h = (n, a = !1) => {
            const d = c(n);
            if (!d) return;
            ((b = d),
              e.setAttribute("data-mode", d),
              o().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (l?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              i?.notifyColorMode(m),
              a &&
                ((s) => {
                  if (i) i.setSessionValue(r, s);
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
          w = () => {
            "system" === b && h("system");
          };
        (l && "function" == typeof l.addEventListener
          ? (l.addEventListener("change", w),
            n.push(() => l.removeEventListener("change", w)))
          : l &&
            "function" == typeof l.addListener &&
            (l.addListener(w), n.push(() => l.removeListener?.(w))),
          a.forEach((e) => {
            const t = () => {
              const t = e.getAttribute("data-mode");
              t && t !== b && h(t, !0);
            };
            (e.addEventListener("change", t),
              n.push(() => e.removeEventListener("change", t)));
          }),
          e.querySelectorAll("label[for]").forEach((e) => {
            const t = () => {
              const t = e.previousElementSibling,
                s = t?.getAttribute("data-mode");
              s && s !== b && h(s, !0);
            };
            (e.addEventListener("click", t),
              n.push(() => e.removeEventListener("click", t)));
          }));
        const _ = e.querySelector("[data-theme-cycle-button]");
        if (_) {
          const e = () => h(d(b), !0);
          (_.addEventListener("click", e),
            n.push(() => _.removeEventListener("click", e)));
        }
        const f = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && h(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", f),
          n.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", f)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (n.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              o().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === m;
              }),
              u(m));
          }),
          h(b));
      },
      b = () => {
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
      h = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!b()) {
      if (h) {
        const s = () => b();
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
