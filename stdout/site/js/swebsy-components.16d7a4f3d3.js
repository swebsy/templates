for (
  var i = 0, len = (items = document.querySelectorAll("#ipji")).length;
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
          a = r.style.height,
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
              (r.className = i),
              (r.style.height = a),
              (s.className = n),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      a = () => {
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
    if (!a()) {
      if (n) {
        const s = () => a();
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
  i = 0, len = (items = document.querySelectorAll("#ioseh, #icjibw")).length;
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
        let r = e.getElementById("swebsy-live");
        r ||
          ((r = e.createElement("div")),
          (r.id = "swebsy-live"),
          r.setAttribute("role", "status"),
          r.setAttribute("aria-live", "polite"),
          (r.style.cssText =
            "position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0"),
          e.body.appendChild(r));
        const i = r;
        ((i.textContent = ""),
          t.setTimeout(() => {
            i.textContent = s;
          }, 60));
      },
      r = (t) => {
        const s = e.createElement("textarea");
        ((s.value = t),
          s.setAttribute("readonly", ""),
          (s.style.cssText =
            "position:fixed;top:0;left:0;opacity:0;pointer-events:none"),
          e.body.appendChild(s),
          s.select(),
          s.setSelectionRange(0, t.length));
        let r = !1;
        try {
          r = e.execCommand("copy");
        } catch {
          r = !1;
        }
        return (
          s.remove(),
          r ? Promise.resolve() : Promise.reject(new Error("copy-unavailable"))
        );
      },
      i = (i) => {
        const a = i.target,
          n = a?.closest?.("[data-swebsy-copy]");
        if (!n) return;
        const o = ((t) => {
          const s = t.getAttribute("data-swebsy-copy-text");
          if (s) return s.trim();
          const r = t.getAttribute("data-swebsy-copy-from"),
            i = t.parentElement ?? e.body,
            a = (e, t) => {
              try {
                return e.querySelector(t);
              } catch {
                return null;
              }
            },
            n = r
              ? (a(i, r) ?? a(e, r))
              : ((e, s) => {
                  const r = Array.from(e.querySelectorAll("*")),
                    i = r.indexOf(t);
                  if (i < 0) return null;
                  let a = null,
                    n = Number.POSITIVE_INFINITY;
                  for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    if (!t.matches(s)) continue;
                    const o = Math.abs(e - i);
                    o < n && ((a = t), (n = o));
                  }
                  return a;
                })(i, "pre,code,kbd,input,textarea");
          if (!n) return "";
          const o = n.value;
          return "string" == typeof o
            ? o.trim()
            : (n.innerText ?? n.textContent ?? "").trim();
        })(n);
        o &&
          ((e) => {
            const s = t.navigator?.clipboard;
            return s?.writeText ? s.writeText(e).catch(() => r(e)) : r(e);
          })(o).then(
            () => {
              (((e) => {
                const s = e.querySelector('[data-copy-icon="idle"]'),
                  r = e.querySelector('[data-copy-icon="done"]');
                (e.setAttribute("data-copied", ""),
                  s && (s.hidden = !0),
                  r && (r.hidden = !1));
                const i = e;
                (t.clearTimeout(i.__copyTimer),
                  (i.__copyTimer = t.setTimeout(() => {
                    (e.removeAttribute("data-copied"),
                      s && (s.hidden = !1),
                      r && (r.hidden = !0));
                  }, 1400)));
              })(n),
                s("Copied to clipboard"));
            },
            () => s("Copy failed")
          );
      };
    ((t.__swebsyCopyHandler = i), e.addEventListener("click", i));
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#ipji-2-2")).length;
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
          a = r.style.height,
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
              (r.className = i),
              (r.style.height = a),
              (s.className = n),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      a = () => {
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
    if (!a()) {
      if (n) {
        const s = () => a();
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
  i = 0, len = (items = document.querySelectorAll("#icjibw-3")).length;
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
        let r = e.getElementById("swebsy-live");
        r ||
          ((r = e.createElement("div")),
          (r.id = "swebsy-live"),
          r.setAttribute("role", "status"),
          r.setAttribute("aria-live", "polite"),
          (r.style.cssText =
            "position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0"),
          e.body.appendChild(r));
        const i = r;
        ((i.textContent = ""),
          t.setTimeout(() => {
            i.textContent = s;
          }, 60));
      },
      r = (t) => {
        const s = e.createElement("textarea");
        ((s.value = t),
          s.setAttribute("readonly", ""),
          (s.style.cssText =
            "position:fixed;top:0;left:0;opacity:0;pointer-events:none"),
          e.body.appendChild(s),
          s.select(),
          s.setSelectionRange(0, t.length));
        let r = !1;
        try {
          r = e.execCommand("copy");
        } catch {
          r = !1;
        }
        return (
          s.remove(),
          r ? Promise.resolve() : Promise.reject(new Error("copy-unavailable"))
        );
      },
      i = (i) => {
        const a = i.target,
          n = a?.closest?.("[data-swebsy-copy]");
        if (!n) return;
        const o = ((t) => {
          const s = t.getAttribute("data-swebsy-copy-text");
          if (s) return s.trim();
          const r = t.getAttribute("data-swebsy-copy-from"),
            i = t.parentElement ?? e.body,
            a = (e, t) => {
              try {
                return e.querySelector(t);
              } catch {
                return null;
              }
            },
            n = r
              ? (a(i, r) ?? a(e, r))
              : ((e, s) => {
                  const r = Array.from(e.querySelectorAll("*")),
                    i = r.indexOf(t);
                  if (i < 0) return null;
                  let a = null,
                    n = Number.POSITIVE_INFINITY;
                  for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    if (!t.matches(s)) continue;
                    const o = Math.abs(e - i);
                    o < n && ((a = t), (n = o));
                  }
                  return a;
                })(i, "pre,code,kbd,input,textarea");
          if (!n) return "";
          const o = n.value;
          return "string" == typeof o
            ? o.trim()
            : (n.innerText ?? n.textContent ?? "").trim();
        })(n);
        o &&
          ((e) => {
            const s = t.navigator?.clipboard;
            return s?.writeText ? s.writeText(e).catch(() => r(e)) : r(e);
          })(o).then(
            () => {
              (((e) => {
                const s = e.querySelector('[data-copy-icon="idle"]'),
                  r = e.querySelector('[data-copy-icon="done"]');
                (e.setAttribute("data-copied", ""),
                  s && (s.hidden = !0),
                  r && (r.hidden = !1));
                const i = e;
                (t.clearTimeout(i.__copyTimer),
                  (i.__copyTimer = t.setTimeout(() => {
                    (e.removeAttribute("data-copied"),
                      s && (s.hidden = !1),
                      r && (r.hidden = !0));
                  }, 1400)));
              })(n),
                s("Copied to clipboard"));
            },
            () => s("Copy failed")
          );
      };
    ((t.__swebsyCopyHandler = i), e.addEventListener("click", i));
  }).bind(items[i])();
for (
  i = 0, len = (items = document.querySelectorAll("#ipji-2-3")).length;
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
          a = r.style.height,
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
              (r.className = i),
              (r.style.height = a),
              (s.className = n),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      a = () => {
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
    if (!a()) {
      if (n) {
        const s = () => a();
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
  i = 0, len = (items = document.querySelectorAll("#itqbfa5")).length;
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
      a = () => {
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
          const a = t.createElement("div");
          a.setAttribute("data-swebsy-turnstile", "");
          const o = e.querySelector("[type=submit]") ?? null;
          ((o?.parentElement ?? e).insertBefore(a, o),
            (e.__swebsyTurnstileWidget = s.turnstile.render(a, {
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
            : (a(),
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
                const a = Array.from(e.querySelectorAll("[type=submit]"));
                a.forEach((e) => (e.disabled = !0));
                const o = new FormData(e);
                e.__swebsyNonce && o.set("_swebsy_ts", e.__swebsyNonce);
                try {
                  const a = await s.fetch(r, {
                    method: "POST",
                    headers: { Accept: "application/json" },
                    body: o,
                  });
                  if (!a.ok) {
                    const e = await a.json().catch(() => null);
                    return (
                      i(
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
                  (n(), i("Could not reach the server. Please try again."));
                } finally {
                  a.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((a(), l?.active)) {
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
  i = 0, len = (items = document.querySelectorAll("#icjibw-4")).length;
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
        let r = e.getElementById("swebsy-live");
        r ||
          ((r = e.createElement("div")),
          (r.id = "swebsy-live"),
          r.setAttribute("role", "status"),
          r.setAttribute("aria-live", "polite"),
          (r.style.cssText =
            "position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0"),
          e.body.appendChild(r));
        const i = r;
        ((i.textContent = ""),
          t.setTimeout(() => {
            i.textContent = s;
          }, 60));
      },
      r = (t) => {
        const s = e.createElement("textarea");
        ((s.value = t),
          s.setAttribute("readonly", ""),
          (s.style.cssText =
            "position:fixed;top:0;left:0;opacity:0;pointer-events:none"),
          e.body.appendChild(s),
          s.select(),
          s.setSelectionRange(0, t.length));
        let r = !1;
        try {
          r = e.execCommand("copy");
        } catch {
          r = !1;
        }
        return (
          s.remove(),
          r ? Promise.resolve() : Promise.reject(new Error("copy-unavailable"))
        );
      },
      i = (i) => {
        const a = i.target,
          n = a?.closest?.("[data-swebsy-copy]");
        if (!n) return;
        const o = ((t) => {
          const s = t.getAttribute("data-swebsy-copy-text");
          if (s) return s.trim();
          const r = t.getAttribute("data-swebsy-copy-from"),
            i = t.parentElement ?? e.body,
            a = (e, t) => {
              try {
                return e.querySelector(t);
              } catch {
                return null;
              }
            },
            n = r
              ? (a(i, r) ?? a(e, r))
              : ((e, s) => {
                  const r = Array.from(e.querySelectorAll("*")),
                    i = r.indexOf(t);
                  if (i < 0) return null;
                  let a = null,
                    n = Number.POSITIVE_INFINITY;
                  for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    if (!t.matches(s)) continue;
                    const o = Math.abs(e - i);
                    o < n && ((a = t), (n = o));
                  }
                  return a;
                })(i, "pre,code,kbd,input,textarea");
          if (!n) return "";
          const o = n.value;
          return "string" == typeof o
            ? o.trim()
            : (n.innerText ?? n.textContent ?? "").trim();
        })(n);
        o &&
          ((e) => {
            const s = t.navigator?.clipboard;
            return s?.writeText ? s.writeText(e).catch(() => r(e)) : r(e);
          })(o).then(
            () => {
              (((e) => {
                const s = e.querySelector('[data-copy-icon="idle"]'),
                  r = e.querySelector('[data-copy-icon="done"]');
                (e.setAttribute("data-copied", ""),
                  s && (s.hidden = !0),
                  r && (r.hidden = !1));
                const i = e;
                (t.clearTimeout(i.__copyTimer),
                  (i.__copyTimer = t.setTimeout(() => {
                    (e.removeAttribute("data-copied"),
                      s && (s.hidden = !1),
                      r && (r.hidden = !0));
                  }, 1400)));
              })(n),
                s("Copied to clipboard"));
            },
            () => s("Copy failed")
          );
      };
    ((t.__swebsyCopyHandler = i), e.addEventListener("click", i));
  }).bind(items[i])();
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#ipji-2-4")).length;
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
          a = r.style.height,
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
              (r.className = i),
              (r.style.height = a),
              (s.className = n),
              null === o
                ? s.removeAttribute("aria-expanded")
                : s.setAttribute("aria-expanded", o),
              delete e.dataset.navbarCollapseInit);
          }));
      },
      a = () => {
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
    if (!a()) {
      if (n) {
        const s = () => a();
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
