for (
  var items = document.querySelectorAll("#ijmb2w"), i = 0, len = items.length;
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
