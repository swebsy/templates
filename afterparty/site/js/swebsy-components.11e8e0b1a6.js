for (
  var items = document.querySelectorAll("#iun309"), i = 0, len = items.length;
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
      const l = s.__swebsyPreviewRuntime,
        c = e.getAttribute("action");
      if (l && !l.active)
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
        })(c)
      )
        return (
          a.preventDefault(),
          a.stopImmediatePropagation(),
          void i(
            l
              ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
              : "This form is not accepting submissions yet."
          )
        );
      if (r(c))
        return (
          a.preventDefault(),
          a.stopImmediatePropagation(),
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
                  (o(), i("Could not reach the server. Please try again."));
                } finally {
                  n.forEach((e) => (e.disabled = !1));
                }
              })(c))
        );
      if ((n(), l?.active)) {
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
