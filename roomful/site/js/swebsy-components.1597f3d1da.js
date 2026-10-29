for (
  var i = 0, len = (items = document.querySelectorAll("#imi4")).length;
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
          u = () => {
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
        (s.addEventListener("click", u),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", u),
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
  i = 0, len = (items = document.querySelectorAll("#ik3fyk")).length;
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
                    u = t.createElement("p");
                  (u.setAttribute("role", "status"),
                    u.setAttribute("tabindex", "-1"),
                    u.setAttribute("data-swebsy-form-done", ""),
                    (u.textContent = c),
                    e.replaceChildren(u),
                    u.focus({ preventScroll: !0 }));
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
  i = 0, len = (items = document.querySelectorAll("#imi4-2-2")).length;
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
          u = () => {
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
        (s.addEventListener("click", u),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", u),
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
  i = 0,
    len = (items = document.querySelectorAll("#i0fygfr, #ik3fyk-2-2")).length;
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
                    u = t.createElement("p");
                  (u.setAttribute("role", "status"),
                    u.setAttribute("tabindex", "-1"),
                    u.setAttribute("data-swebsy-form-done", ""),
                    (u.textContent = c),
                    e.replaceChildren(u),
                    u.focus({ preventScroll: !0 }));
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
  i = 0, len = (items = document.querySelectorAll("#imi4-2-3")).length;
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
          u = () => {
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
        (s.addEventListener("click", u),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", u),
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
  i = 0, len = (items = document.querySelectorAll("#ik3fyk-2-3")).length;
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
                    u = t.createElement("p");
                  (u.setAttribute("role", "status"),
                    u.setAttribute("tabindex", "-1"),
                    u.setAttribute("data-swebsy-form-done", ""),
                    (u.textContent = c),
                    e.replaceChildren(u),
                    u.focus({ preventScroll: !0 }));
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
  i = 0, len = (items = document.querySelectorAll("#imi4-2-4")).length;
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
          u = () => {
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
        (s.addEventListener("click", u),
          (e.__swebsyNavbarCleanup = () => {
            (s.removeEventListener("click", u),
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
var props = {
    iz2r9qw: {
      galleryId: "gal-98cb92fc",
      loop: !0,
      touchNavigation: !0,
      keyboardNavigation: !0,
      zoomable: !0,
      openEffect: "zoom",
      refreshToken: 8,
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
      i = (e) => {
        const t = e.getAttribute("src") || "",
          s = e.querySelector("img")?.getAttribute("src") || "",
          r = t || s;
        r ? e.setAttribute("href", r) : e.removeAttribute("href");
      },
      n = String(e.galleryId || t.getAttribute("data-swebsy-gallery-id") || "");
    if (!n) return;
    t.setAttribute("data-swebsy-gallery-id", n);
    const a = () => {
        t.__swebsyGalleryClickCleanups?.splice(0).forEach((e) => e());
        const e = t.__swebsyGallery;
        if (e && "function" == typeof e.destroy)
          try {
            e.destroy();
          } catch {}
        delete t.__swebsyGallery;
      },
      o = () => {
        if ((a(), "function" != typeof s.GLightbox)) return;
        (t.querySelectorAll("a[data-glightbox]").forEach(i),
          t.querySelectorAll("a[data-glightbox]").forEach((e) => {
            const s = (t) => {
              (i(e),
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
            selector: `[data-swebsy-gallery-id="${n}"] a[data-glightbox]`,
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
            stop: a,
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
    i8uzjd8: { lightboxId: "lbx-098b1812", refreshToken: 2 },
    i3kntrj: { lightboxId: "lbx-083e7b40", refreshToken: 2 },
    i1pglc2: { lightboxId: "lbx-3f02830e", refreshToken: 2 },
    ieop04b: { lightboxId: "lbx-6116b8cd", refreshToken: 2 },
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
    const i = String(
      e.lightboxId || t.getAttribute("data-swebsy-lightbox-id") || ""
    );
    if (!i) return;
    t.setAttribute("data-swebsy-lightbox-id", i);
    (() => {
      const e = t.getAttribute("src") || "",
        s = t.querySelector("img")?.getAttribute("src") || "",
        r = e || s;
      r ? t.setAttribute("href", r) : t.removeAttribute("href");
    })();
    const n = (e) => {
        const s = t.ownerDocument.querySelector(".glightbox-container");
        s && s.classList.toggle("swebsy-lightbox-single", e);
      },
      a = () => {
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
            selector: `[data-swebsy-lightbox-id="${i}"]`,
            loop: !1,
            onOpen: () => n(!0),
            onClose: () => n(!1),
          });
        }
      },
      o = () => {
        const e = s.__swebsyPreviewRuntime;
        return (
          !!e &&
          ((t.__swebsyLightboxUnregister = e.register(t, "lightbox", {
            start: a,
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
      a();
    }
  }).bind(el)(props[el.id]);
}
var items;
for (
  i = 0, len = (items = document.querySelectorAll("#ik3fyk-2-4")).length;
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
                    u = t.createElement("p");
                  (u.setAttribute("role", "status"),
                    u.setAttribute("tabindex", "-1"),
                    u.setAttribute("data-swebsy-form-done", ""),
                    (u.textContent = c),
                    e.replaceChildren(u),
                    u.focus({ preventScroll: !0 }));
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
