for (
  var i = 0, len = (items = document.querySelectorAll("#ZWnndFWf")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = r.className,
          n = r.style.height,
          a = s.className,
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
              (r.className = i),
              (r.style.height = n),
              (s.className = a),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      n = () => {
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
      a = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!n()) {
      if (a) {
        const s = () => n();
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
  i = 0, len = (items = document.querySelectorAll("#ib7snf8")).length;
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
      a = () => {
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
          const o = e.querySelector("[type=submit]") ?? null;
          ((o?.parentElement ?? e).insertBefore(n, o),
            (e.__swebsyTurnstileWidget = s.turnstile.render(n, {
              sitekey: i.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: (t) => {
                ((e.__swebsyTurnstileToken = t),
                  (e.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": a,
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
          o.preventDefault(),
          o.stopImmediatePropagation(),
          void i(
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
                const o = new FormData(e);
                e.__swebsyNonce && o.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const n = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: o,
                  });
                  if (!n.ok) {
                    const e = await n.json().catch(() => null);
                    return (
                      i(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void a()
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
                  (a(), i("Could not reach the server. Please try again."));
                } finally {
                  n.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((n(), l?.active)) {
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
  i = 0, len = (items = document.querySelectorAll("#i41cil")).length;
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
      a = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = a();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${n}__${t}`), (e.name = `${n}__toggle`));
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
          i = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", i),
          s.setAttribute("title", i),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      m = l(i) || "system",
      y = (i) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const n = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (i) return l(i.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let b = y() || m;
        i && !y() && i.setSessionValue(r, b);
        const h = (n, o = !1) => {
            const d = l(n);
            if (!d) return;
            ((b = d),
              e.setAttribute("data-mode", d),
              a().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              i?.notifyColorMode(m),
              o &&
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
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", w),
            n.push(() => c.removeEventListener("change", w)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(w), n.push(() => c.removeListener?.(w))),
          o.forEach((e) => {
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
        const p = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && h(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", p),
          n.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", p)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (n.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              a().forEach((e) => {
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
for (
  i = 0, len = (items = document.querySelectorAll("#ZWnndFWf-2-2")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = r.className,
          n = r.style.height,
          a = s.className,
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
              (r.className = i),
              (r.style.height = n),
              (s.className = a),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      n = () => {
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
      a = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!n()) {
      if (a) {
        const s = () => n();
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
  i = 0, len = (items = document.querySelectorAll("#ib7snf8-2-2")).length;
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
      a = () => {
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
          const o = e.querySelector("[type=submit]") ?? null;
          ((o?.parentElement ?? e).insertBefore(n, o),
            (e.__swebsyTurnstileWidget = s.turnstile.render(n, {
              sitekey: i.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: (t) => {
                ((e.__swebsyTurnstileToken = t),
                  (e.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": a,
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
          o.preventDefault(),
          o.stopImmediatePropagation(),
          void i(
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
                const o = new FormData(e);
                e.__swebsyNonce && o.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const n = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: o,
                  });
                  if (!n.ok) {
                    const e = await n.json().catch(() => null);
                    return (
                      i(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void a()
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
                  (a(), i("Could not reach the server. Please try again."));
                } finally {
                  n.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((n(), l?.active)) {
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
  i = 0, len = (items = document.querySelectorAll("#i41cil-2-2")).length;
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
      a = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = a();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${n}__${t}`), (e.name = `${n}__toggle`));
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
          i = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", i),
          s.setAttribute("title", i),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      m = l(i) || "system",
      y = (i) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const n = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (i) return l(i.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let b = y() || m;
        i && !y() && i.setSessionValue(r, b);
        const h = (n, o = !1) => {
            const d = l(n);
            if (!d) return;
            ((b = d),
              e.setAttribute("data-mode", d),
              a().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              i?.notifyColorMode(m),
              o &&
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
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", w),
            n.push(() => c.removeEventListener("change", w)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(w), n.push(() => c.removeListener?.(w))),
          o.forEach((e) => {
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
        const p = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && h(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", p),
          n.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", p)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (n.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              a().forEach((e) => {
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
for (
  i = 0, len = (items = document.querySelectorAll("#ZWnndFWf-2-3")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = r.className,
          n = r.style.height,
          a = s.className,
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
              (r.className = i),
              (r.style.height = n),
              (s.className = a),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      n = () => {
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
      a = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!n()) {
      if (a) {
        const s = () => n();
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
  i = 0, len = (items = document.querySelectorAll("#ib7snf8-2-3")).length;
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
      a = () => {
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
          const o = e.querySelector("[type=submit]") ?? null;
          ((o?.parentElement ?? e).insertBefore(n, o),
            (e.__swebsyTurnstileWidget = s.turnstile.render(n, {
              sitekey: i.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: (t) => {
                ((e.__swebsyTurnstileToken = t),
                  (e.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": a,
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
          o.preventDefault(),
          o.stopImmediatePropagation(),
          void i(
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
                const o = new FormData(e);
                e.__swebsyNonce && o.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const n = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: o,
                  });
                  if (!n.ok) {
                    const e = await n.json().catch(() => null);
                    return (
                      i(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void a()
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
                  (a(), i("Could not reach the server. Please try again."));
                } finally {
                  n.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((n(), l?.active)) {
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
  i = 0, len = (items = document.querySelectorAll("#i41cil-2-3")).length;
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
      a = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = a();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${n}__${t}`), (e.name = `${n}__toggle`));
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
          i = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", i),
          s.setAttribute("title", i),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      m = l(i) || "system",
      y = (i) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const n = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (i) return l(i.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let b = y() || m;
        i && !y() && i.setSessionValue(r, b);
        const h = (n, o = !1) => {
            const d = l(n);
            if (!d) return;
            ((b = d),
              e.setAttribute("data-mode", d),
              a().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              i?.notifyColorMode(m),
              o &&
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
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", w),
            n.push(() => c.removeEventListener("change", w)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(w), n.push(() => c.removeListener?.(w))),
          o.forEach((e) => {
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
        const p = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && h(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", p),
          n.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", p)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (n.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              a().forEach((e) => {
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
for (
  i = 0, len = (items = document.querySelectorAll("#ZWnndFWf-2-4")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = r.className,
          n = r.style.height,
          a = s.className,
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
              (r.className = i),
              (r.style.height = n),
              (s.className = a),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      n = () => {
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
      a = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!n()) {
      if (a) {
        const s = () => n();
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
  i = 0, len = (items = document.querySelectorAll("#ib7snf8-2-4")).length;
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
      a = () => {
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
          const o = e.querySelector("[type=submit]") ?? null;
          ((o?.parentElement ?? e).insertBefore(n, o),
            (e.__swebsyTurnstileWidget = s.turnstile.render(n, {
              sitekey: i.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: (t) => {
                ((e.__swebsyTurnstileToken = t),
                  (e.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": a,
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
          o.preventDefault(),
          o.stopImmediatePropagation(),
          void i(
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
                const o = new FormData(e);
                e.__swebsyNonce && o.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const n = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: o,
                  });
                  if (!n.ok) {
                    const e = await n.json().catch(() => null);
                    return (
                      i(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void a()
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
                  (a(), i("Could not reach the server. Please try again."));
                } finally {
                  n.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((n(), l?.active)) {
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
  i = 0, len = (items = document.querySelectorAll("#i41cil-2-4")).length;
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
      a = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = a();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${n}__${t}`), (e.name = `${n}__toggle`));
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
          i = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", i),
          s.setAttribute("title", i),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      m = l(i) || "system",
      y = (i) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const n = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (i) return l(i.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let b = y() || m;
        i && !y() && i.setSessionValue(r, b);
        const h = (n, o = !1) => {
            const d = l(n);
            if (!d) return;
            ((b = d),
              e.setAttribute("data-mode", d),
              a().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              i?.notifyColorMode(m),
              o &&
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
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", w),
            n.push(() => c.removeEventListener("change", w)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(w), n.push(() => c.removeListener?.(w))),
          o.forEach((e) => {
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
        const p = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && h(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", p),
          n.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", p)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (n.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              a().forEach((e) => {
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
for (
  i = 0, len = (items = document.querySelectorAll("#ZWnndFWf-2-5")).length;
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
    const i = () => {
        (e.__swebsyNavbarCleanup?.(), (e.dataset.navbarCollapseInit = "1"));
        const i = r.className,
          n = r.style.height,
          a = s.className,
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
              (r.className = i),
              (r.style.height = n),
              (s.className = a),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      n = () => {
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
      a = (() => {
        try {
          return t.parent !== t && !!t.parent.__swebsyEditorCanvas;
        } catch {
          return !1;
        }
      })();
    if (!n()) {
      if (a) {
        const s = () => n();
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
  i = 0, len = (items = document.querySelectorAll("#ib7snf8-2-5")).length;
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
      a = () => {
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
          const o = e.querySelector("[type=submit]") ?? null;
          ((o?.parentElement ?? e).insertBefore(n, o),
            (e.__swebsyTurnstileWidget = s.turnstile.render(n, {
              sitekey: i.siteKey,
              action: "form_submit",
              size: "flexible",
              appearance: "interaction-only",
              callback: (t) => {
                ((e.__swebsyTurnstileToken = t),
                  (e.__swebsyTurnstileFailed = !1));
              },
              "expired-callback": a,
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
          o.preventDefault(),
          o.stopImmediatePropagation(),
          void i(
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
                const o = new FormData(e);
                e.__swebsyNonce && o.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const n = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: o,
                  });
                  if (!n.ok) {
                    const e = await n.json().catch(() => null);
                    return (
                      i(
                        e?.message ?? "Something went wrong. Please try again."
                      ),
                      void a()
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
                  (a(), i("Could not reach the server. Please try again."));
                } finally {
                  n.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((n(), l?.active)) {
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
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#i41cil-2-5")).length;
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
      a = () => Array.from(e.querySelectorAll("input[type=radio][data-mode]")),
      o = a();
    (o.forEach((e) => {
      const t = e.getAttribute("data-mode");
      t && ((e.id = `${n}__${t}`), (e.name = `${n}__toggle`));
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
          i = `Theme: ${c(t)}. Click to switch to ${c(r)}.`;
        (s.setAttribute("aria-label", i),
          s.setAttribute("title", i),
          s.querySelectorAll("[data-theme-mode-icon]").forEach((e) => {
            e.hidden = e.getAttribute("data-theme-mode-icon") !== t;
          }));
      },
      m = l(i) || "system",
      y = (i) => {
        e.__swebsyDarkModeSwitchCleanup?.();
        const n = [],
          c = t.matchMedia
            ? t.matchMedia("(prefers-color-scheme: dark)")
            : null,
          y = () => {
            if (i) return l(i.getSessionValue(r));
            try {
              return l(t.localStorage?.getItem(r));
            } catch {
              return null;
            }
          };
        let b = y() || m;
        i && !y() && i.setSessionValue(r, b);
        const h = (n, o = !1) => {
            const d = l(n);
            if (!d) return;
            ((b = d),
              e.setAttribute("data-mode", d),
              a().forEach((e) => {
                e.checked = e.getAttribute("data-mode") === d;
              }),
              u(d));
            const m = ((e) =>
              "system" === e ? (c?.matches ? "dark" : "light") : e)(d);
            (s.classList.toggle("dark", "dark" === m),
              s.classList.toggle("light", "light" === m),
              (s.style.colorScheme = m),
              i?.notifyColorMode(m),
              o &&
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
        (c && "function" == typeof c.addEventListener
          ? (c.addEventListener("change", w),
            n.push(() => c.removeEventListener("change", w)))
          : c &&
            "function" == typeof c.addListener &&
            (c.addListener(w), n.push(() => c.removeListener?.(w))),
          o.forEach((e) => {
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
        const p = (t) => {
          const s = t.detail;
          s?.source !== e && s?.mode && h(s.mode);
        };
        (t.addEventListener("swebsy:color-mode-preference", p),
          n.push(() =>
            t.removeEventListener("swebsy:color-mode-preference", p)
          ),
          (e.__swebsyDarkModeSwitchCleanup = () => {
            (n.splice(0).forEach((e) => e()),
              e.setAttribute("data-mode", m),
              a().forEach((e) => {
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
