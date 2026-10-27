var items = document.querySelectorAll("#ifu2");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const nav = this;
    const win = nav.ownerDocument?.defaultView;
    if (!win) return;
    if (nav.dataset.navbarCollapseInit === "1" && !win.__swebsyPreviewRuntime) {
      return;
    }
    nav.__swebsyNavbarUnregister?.();
    if (nav.__swebsyNavbarRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        nav.__swebsyNavbarRuntimeReady
      );
      delete nav.__swebsyNavbarRuntimeReady;
    }
    nav.__swebsyNavbarCleanup?.();
    const toggler = nav.querySelector('[data-navbar-part="toggler"]');
    const panel = nav.querySelector('[data-navbar-part="collapse"]');
    if (!toggler || !panel) return;
    const start = () => {
      nav.__swebsyNavbarCleanup?.();
      nav.dataset.navbarCollapseInit = "1";
      const panelClass = panel.className;
      const panelHeight = panel.style.height;
      const togglerClass = toggler.className;
      const ariaExpanded = toggler.getAttribute("aria-expanded");
      let transitionTimer;
      const transitionMs = () => {
        const raw = win.getComputedStyle(panel).transitionDuration ?? "0s";
        const values = raw.split(",").map((s) => {
          const n = parseFloat(s.trim());
          return s.trim().endsWith("ms") ? n : n * 1e3;
        });
        const max = Math.max(...values);
        return Number.isFinite(max) && max > 0 ? max : 0;
      };
      const schedule = (callback) => {
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        transitionTimer = win.setTimeout(callback, transitionMs());
      };
      const open = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        panel.style.height = "0";
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + "px";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse", "show");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "true");
          toggler.classList.remove("collapsed");
        });
      };
      const close = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.style.height = panel.getBoundingClientRect().height + "px";
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        void panel.offsetHeight;
        panel.style.height = "0";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "false");
          toggler.classList.add("collapsed");
        });
      };
      const onToggle = () => {
        if (panel.classList.contains("show")) close();
        else open();
      };
      toggler.addEventListener("click", onToggle);
      nav.__swebsyNavbarCleanup = () => {
        toggler.removeEventListener("click", onToggle);
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        panel.className = panelClass;
        panel.style.height = panelHeight;
        toggler.className = togglerClass;
        if (ariaExpanded === null) {
          toggler.removeAttribute("aria-expanded");
        } else {
          toggler.setAttribute("aria-expanded", ariaExpanded);
        }
        delete nav.dataset.navbarCollapseInit;
      };
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      nav.__swebsyNavbarUnregister = runtime.register(nav, "navbar", {
        start,
        stop: () => nav.__swebsyNavbarCleanup?.(),
      });
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      nav.__swebsyNavbarRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#iv643wf");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const form2 = this;
    const doc = form2.ownerDocument;
    const win = doc?.defaultView;
    if (!doc || !win) return;
    const SWEBSY_PREFIX = "/__forms/";
    const isSwebsy = (value) => (value ?? "").trim().startsWith(SWEBSY_PREFIX);
    const isConfigured = (value) => {
      const action = (value ?? "").trim();
      if (!action || action === "#") return false;
      if (
        /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
          action
        )
      ) {
        return false;
      }
      if (
        (action.startsWith("/") && !action.startsWith("//")) ||
        action.startsWith("./") ||
        action.startsWith("../") ||
        /^https:\/\//i.test(action)
      ) {
        return true;
      }
      try {
        const url = new URL(action);
        return (
          url.protocol === "http:" &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
        );
      } catch {
        return false;
      }
    };
    const statusEl = () => {
      let status = form2.querySelector("[data-swebsy-form-status]");
      if (!status) {
        status = doc.createElement("p");
        status.setAttribute("data-swebsy-form-status", "");
        status.setAttribute("role", "alert");
        status.setAttribute("tabindex", "-1");
        status.style.cssText =
          "margin:.75rem 0 0;font-size:.875rem;line-height:1.5";
        form2.appendChild(status);
      }
      return status;
    };
    const showStatus = (message, ok = false) => {
      const status = statusEl();
      status.style.color = ok
        ? "var(--color-success,currentColor)"
        : "var(--color-danger,currentColor)";
      status.hidden = false;
      status.textContent = message;
      status.focus({ preventScroll: true });
    };
    const clearStatus = () => {
      const status = form2.querySelector("[data-swebsy-form-status]");
      if (status) status.hidden = true;
    };
    const resetTurnstile = () => {
      form2.__swebsyTurnstileToken = void 0;
      if (form2.__swebsyTurnstileWidget && win.turnstile) {
        win.turnstile.reset(form2.__swebsyTurnstileWidget);
      }
    };
    const ensureChallenge = async () => {
      if (
        win.__swebsyPreviewRuntime ||
        !isSwebsy(form2.getAttribute("action")) ||
        form2.__swebsyTurnstileWidget ||
        form2.__swebsyTurnstileLoading
      ) {
        return;
      }
      form2.__swebsyTurnstileLoading = true;
      try {
        const configResponse = await win.fetch("/__forms/turnstile", {
          headers: { Accept: "application/json" },
        });
        if (!configResponse.ok) throw new Error("config unavailable");
        const config = await configResponse.json();
        form2.__swebsyNonce = config.nonce;
        if (!config.siteKey) return;
        form2.__swebsyTurnstileRequired = true;
        if (!win.turnstile) {
          await new Promise((resolve, reject) => {
            const existing = doc.querySelector("script[data-swebsy-turnstile]");
            const script = existing ?? doc.createElement("script");
            script.addEventListener("load", () => resolve(), {
              once: true,
            });
            script.addEventListener("error", () => reject(), {
              once: true,
            });
            if (!existing) {
              script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
              script.async = true;
              script.defer = true;
              script.setAttribute("data-swebsy-turnstile", "");
              doc.head.appendChild(script);
            }
          });
        }
        if (!win.turnstile) throw new Error("widget unavailable");
        const container = doc.createElement("div");
        container.setAttribute("data-swebsy-turnstile", "");
        const submit = form2.querySelector("[type=submit]") ?? null;
        (submit?.parentElement ?? form2).insertBefore(container, submit);
        form2.__swebsyTurnstileWidget = win.turnstile.render(container, {
          sitekey: config.siteKey,
          action: "form_submit",
          // Matches the Studio's auth widget. Managed mode already decides
          // per visitor whether a challenge is needed; "interaction-only"
          // stops it drawing anything for the majority who need nothing,
          // and the token still arrives through `callback` either way.
          size: "flexible",
          appearance: "interaction-only",
          callback: (token) => {
            form2.__swebsyTurnstileToken = token;
            form2.__swebsyTurnstileFailed = false;
          },
          "expired-callback": resetTurnstile,
          // Deliberately not `resetTurnstile`. reset() re-runs the
          // challenge, so a non-retryable error — 110200, this domain is
          // not on the widget's hostname list — errors again immediately
          // and the widget strobes forever. Record the failure and let
          // submit explain it. Returning falsy keeps Cloudflare's own
          // console log of the error code, which is how you diagnose it.
          "error-callback": () => {
            form2.__swebsyTurnstileToken = void 0;
            form2.__swebsyTurnstileFailed = true;
          },
        });
      } catch {
        form2.__swebsyTurnstileFailed = true;
      } finally {
        form2.__swebsyTurnstileLoading = false;
      }
    };
    void ensureChallenge();
    if (form2.__swebsyFormSubmitHandler) {
      form2.removeEventListener(
        "submit",
        form2.__swebsyFormSubmitHandler,
        true
      );
    }
    const submitToSwebsy = async (action) => {
      if (
        (form2.__swebsyTurnstileRequired || form2.__swebsyTurnstileFailed) &&
        !form2.__swebsyTurnstileToken
      ) {
        showStatus(
          form2.__swebsyTurnstileFailed
            ? "The security check could not load. Refresh and try again."
            : "Complete the security check to continue."
        );
        return;
      }
      const buttons = Array.from(form2.querySelectorAll("[type=submit]"));
      buttons.forEach((b) => (b.disabled = true));
      const body = new FormData(form2);
      if (form2.__swebsyNonce) body.set("_swebsy_ts", form2.__swebsyNonce);
      try {
        const res = await win.fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        if (!res.ok) {
          const body2 = await res.json().catch(() => null);
          showStatus(
            body2?.message ?? "Something went wrong. Please try again."
          );
          resetTurnstile();
          return;
        }
        const redirect = form2.getAttribute("data-redirect");
        if (redirect) {
          win.location.href = redirect;
          return;
        }
        const message =
          form2.getAttribute("data-success-message") ||
          "Thanks — your message has been sent.";
        const done = doc.createElement("p");
        done.setAttribute("role", "status");
        done.setAttribute("tabindex", "-1");
        done.setAttribute("data-swebsy-form-done", "");
        done.textContent = message;
        form2.replaceChildren(done);
        done.focus({ preventScroll: true });
      } catch {
        resetTurnstile();
        showStatus("Could not reach the server. Please try again.");
      } finally {
        buttons.forEach((b) => (b.disabled = false));
      }
    };
    const onSubmit = (event) => {
      const runtime = win.__swebsyPreviewRuntime;
      const action = form2.getAttribute("action");
      if (runtime && !runtime.active) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus("Use Preview to test this form.");
        return;
      }
      if (!isConfigured(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus(
          runtime
            ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
            : "This form is not accepting submissions yet."
        );
        return;
      }
      if (isSwebsy(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (runtime) {
          showStatus(
            "Test mode — submissions are delivered from your published site.",
            true
          );
          return;
        }
        clearStatus();
        void submitToSwebsy(action);
        return;
      }
      clearStatus();
      if (runtime?.active) {
        event.preventDefault();
        const previousTarget = form2.getAttribute("target");
        form2.setAttribute("target", "_blank");
        try {
          HTMLFormElement.prototype.submit.call(form2);
        } finally {
          if (previousTarget === null) form2.removeAttribute("target");
          else form2.setAttribute("target", previousTarget);
        }
      }
    };
    form2.__swebsyFormSubmitHandler = onSubmit;
    form2.addEventListener("submit", onSubmit, true);
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i0nvyn");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const el = this;
    const win = el.ownerDocument?.defaultView;
    const root = el.ownerDocument?.documentElement;
    if (!win || !root) return;
    const storageKey = "swebsy:color-mode";
    const incomingConfiguredMode = el.getAttribute("data-mode");
    el.__swebsyDarkModeSwitchUnregister?.();
    if (el.__swebsyDarkModeSwitchRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        el.__swebsyDarkModeSwitchRuntimeReady
      );
      delete el.__swebsyDarkModeSwitchRuntimeReady;
    }
    el.__swebsyDarkModeSwitchCleanup?.();
    const scope =
      el.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`;
    const getInputs = () =>
      Array.from(el.querySelectorAll("input[type=radio][data-mode]"));
    const inputs = getInputs();
    inputs.forEach((input) => {
      const mode = input.getAttribute("data-mode");
      if (!mode) return;
      input.id = `${scope}__${mode}`;
      input.name = `${scope}__toggle`;
    });
    el.querySelectorAll("label[for]").forEach((label) => {
      const sibling = label.previousElementSibling;
      if (sibling?.tagName === "INPUT" && sibling.id) {
        label.setAttribute("for", sibling.id);
      }
    });
    const normalizeMode2 = (mode) =>
      mode === "system" || mode === "light" || mode === "dark" ? mode : null;
    const modeLabel = (mode) =>
      mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";
    const nextMode = (mode) =>
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    const updateCycleButton = (preference) => {
      const button = el.querySelector("[data-theme-cycle-button]");
      if (!button) return;
      const next = nextMode(preference);
      const label = `Theme: ${modeLabel(preference)}. Click to switch to ${modeLabel(next)}.`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.querySelectorAll("[data-theme-mode-icon]").forEach((icon) => {
        icon.hidden = icon.getAttribute("data-theme-mode-icon") !== preference;
      });
    };
    const configuredMode = normalizeMode2(incomingConfiguredMode) || "system";
    const start = (runtime) => {
      el.__swebsyDarkModeSwitchCleanup?.();
      const cleanups = [];
      const mediaQuery = win.matchMedia
        ? win.matchMedia("(prefers-color-scheme: dark)")
        : null;
      const resolveMode = (mode) =>
        mode === "system" ? (mediaQuery?.matches ? "dark" : "light") : mode;
      const readPreference = () => {
        if (runtime) {
          return normalizeMode2(runtime.getSessionValue(storageKey));
        }
        try {
          return normalizeMode2(win.localStorage?.getItem(storageKey));
        } catch {
          return null;
        }
      };
      const publishPreference = (mode) => {
        if (runtime) {
          runtime.setSessionValue(storageKey, mode);
        } else {
          try {
            win.localStorage?.setItem(storageKey, mode);
          } catch {}
        }
        win.dispatchEvent(
          new win.CustomEvent("swebsy:color-mode-preference", {
            detail: { mode, source: el },
          })
        );
      };
      let activePreference = readPreference() || configuredMode;
      if (runtime && !readPreference()) {
        runtime.setSessionValue(storageKey, activePreference);
      }
      const apply = (mode, persist = false) => {
        const preference = normalizeMode2(mode);
        if (!preference) return;
        activePreference = preference;
        el.setAttribute("data-mode", preference);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === preference;
        });
        updateCycleButton(preference);
        const resolved = resolveMode(preference);
        root.classList.toggle("dark", resolved === "dark");
        root.classList.toggle("light", resolved === "light");
        root.style.colorScheme = resolved;
        runtime?.notifyColorMode(resolved);
        if (persist) publishPreference(preference);
      };
      const onMediaChange = () => {
        if (activePreference === "system") apply("system");
      };
      if (mediaQuery && typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", onMediaChange);
        cleanups.push(() =>
          mediaQuery.removeEventListener("change", onMediaChange)
        );
      } else if (mediaQuery && typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(onMediaChange);
        cleanups.push(() => mediaQuery.removeListener?.(onMediaChange));
      }
      inputs.forEach((input) => {
        const onInputChange = () => {
          const mode = input.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        input.addEventListener("change", onInputChange);
        cleanups.push(() => input.removeEventListener("change", onInputChange));
      });
      el.querySelectorAll("label[for]").forEach((label) => {
        const onLabelClick = () => {
          const input = label.previousElementSibling;
          const mode = input?.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        label.addEventListener("click", onLabelClick);
        cleanups.push(() => label.removeEventListener("click", onLabelClick));
      });
      const cycleButton = el.querySelector("[data-theme-cycle-button]");
      if (cycleButton) {
        const onCycleClick = () => apply(nextMode(activePreference), true);
        cycleButton.addEventListener("click", onCycleClick);
        cleanups.push(() =>
          cycleButton.removeEventListener("click", onCycleClick)
        );
      }
      const onPreference = (event) => {
        const detail = event.detail;
        if (detail?.source !== el && detail?.mode) {
          apply(detail.mode);
        }
      };
      win.addEventListener("swebsy:color-mode-preference", onPreference);
      cleanups.push(() =>
        win.removeEventListener("swebsy:color-mode-preference", onPreference)
      );
      el.__swebsyDarkModeSwitchCleanup = () => {
        cleanups.splice(0).forEach((cleanup) => cleanup());
        el.setAttribute("data-mode", configuredMode);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === configuredMode;
        });
        updateCycleButton(configuredMode);
      };
      apply(activePreference);
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      el.__swebsyDarkModeSwitchUnregister = runtime.register(
        el,
        "dark-mode-switch",
        {
          start: () => start(runtime),
          stop: () => el.__swebsyDarkModeSwitchCleanup?.(),
        }
      );
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      el.__swebsyDarkModeSwitchRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ifu2-2-2");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const nav = this;
    const win = nav.ownerDocument?.defaultView;
    if (!win) return;
    if (nav.dataset.navbarCollapseInit === "1" && !win.__swebsyPreviewRuntime) {
      return;
    }
    nav.__swebsyNavbarUnregister?.();
    if (nav.__swebsyNavbarRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        nav.__swebsyNavbarRuntimeReady
      );
      delete nav.__swebsyNavbarRuntimeReady;
    }
    nav.__swebsyNavbarCleanup?.();
    const toggler = nav.querySelector('[data-navbar-part="toggler"]');
    const panel = nav.querySelector('[data-navbar-part="collapse"]');
    if (!toggler || !panel) return;
    const start = () => {
      nav.__swebsyNavbarCleanup?.();
      nav.dataset.navbarCollapseInit = "1";
      const panelClass = panel.className;
      const panelHeight = panel.style.height;
      const togglerClass = toggler.className;
      const ariaExpanded = toggler.getAttribute("aria-expanded");
      let transitionTimer;
      const transitionMs = () => {
        const raw = win.getComputedStyle(panel).transitionDuration ?? "0s";
        const values = raw.split(",").map((s) => {
          const n = parseFloat(s.trim());
          return s.trim().endsWith("ms") ? n : n * 1e3;
        });
        const max = Math.max(...values);
        return Number.isFinite(max) && max > 0 ? max : 0;
      };
      const schedule = (callback) => {
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        transitionTimer = win.setTimeout(callback, transitionMs());
      };
      const open = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        panel.style.height = "0";
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + "px";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse", "show");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "true");
          toggler.classList.remove("collapsed");
        });
      };
      const close = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.style.height = panel.getBoundingClientRect().height + "px";
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        void panel.offsetHeight;
        panel.style.height = "0";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "false");
          toggler.classList.add("collapsed");
        });
      };
      const onToggle = () => {
        if (panel.classList.contains("show")) close();
        else open();
      };
      toggler.addEventListener("click", onToggle);
      nav.__swebsyNavbarCleanup = () => {
        toggler.removeEventListener("click", onToggle);
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        panel.className = panelClass;
        panel.style.height = panelHeight;
        toggler.className = togglerClass;
        if (ariaExpanded === null) {
          toggler.removeAttribute("aria-expanded");
        } else {
          toggler.setAttribute("aria-expanded", ariaExpanded);
        }
        delete nav.dataset.navbarCollapseInit;
      };
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      nav.__swebsyNavbarUnregister = runtime.register(nav, "navbar", {
        start,
        stop: () => nav.__swebsyNavbarCleanup?.(),
      });
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      nav.__swebsyNavbarRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#iv643wf-2-2");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const form2 = this;
    const doc = form2.ownerDocument;
    const win = doc?.defaultView;
    if (!doc || !win) return;
    const SWEBSY_PREFIX = "/__forms/";
    const isSwebsy = (value) => (value ?? "").trim().startsWith(SWEBSY_PREFIX);
    const isConfigured = (value) => {
      const action = (value ?? "").trim();
      if (!action || action === "#") return false;
      if (
        /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
          action
        )
      ) {
        return false;
      }
      if (
        (action.startsWith("/") && !action.startsWith("//")) ||
        action.startsWith("./") ||
        action.startsWith("../") ||
        /^https:\/\//i.test(action)
      ) {
        return true;
      }
      try {
        const url = new URL(action);
        return (
          url.protocol === "http:" &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
        );
      } catch {
        return false;
      }
    };
    const statusEl = () => {
      let status = form2.querySelector("[data-swebsy-form-status]");
      if (!status) {
        status = doc.createElement("p");
        status.setAttribute("data-swebsy-form-status", "");
        status.setAttribute("role", "alert");
        status.setAttribute("tabindex", "-1");
        status.style.cssText =
          "margin:.75rem 0 0;font-size:.875rem;line-height:1.5";
        form2.appendChild(status);
      }
      return status;
    };
    const showStatus = (message, ok = false) => {
      const status = statusEl();
      status.style.color = ok
        ? "var(--color-success,currentColor)"
        : "var(--color-danger,currentColor)";
      status.hidden = false;
      status.textContent = message;
      status.focus({ preventScroll: true });
    };
    const clearStatus = () => {
      const status = form2.querySelector("[data-swebsy-form-status]");
      if (status) status.hidden = true;
    };
    const resetTurnstile = () => {
      form2.__swebsyTurnstileToken = void 0;
      if (form2.__swebsyTurnstileWidget && win.turnstile) {
        win.turnstile.reset(form2.__swebsyTurnstileWidget);
      }
    };
    const ensureChallenge = async () => {
      if (
        win.__swebsyPreviewRuntime ||
        !isSwebsy(form2.getAttribute("action")) ||
        form2.__swebsyTurnstileWidget ||
        form2.__swebsyTurnstileLoading
      ) {
        return;
      }
      form2.__swebsyTurnstileLoading = true;
      try {
        const configResponse = await win.fetch("/__forms/turnstile", {
          headers: { Accept: "application/json" },
        });
        if (!configResponse.ok) throw new Error("config unavailable");
        const config = await configResponse.json();
        form2.__swebsyNonce = config.nonce;
        if (!config.siteKey) return;
        form2.__swebsyTurnstileRequired = true;
        if (!win.turnstile) {
          await new Promise((resolve, reject) => {
            const existing = doc.querySelector("script[data-swebsy-turnstile]");
            const script = existing ?? doc.createElement("script");
            script.addEventListener("load", () => resolve(), {
              once: true,
            });
            script.addEventListener("error", () => reject(), {
              once: true,
            });
            if (!existing) {
              script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
              script.async = true;
              script.defer = true;
              script.setAttribute("data-swebsy-turnstile", "");
              doc.head.appendChild(script);
            }
          });
        }
        if (!win.turnstile) throw new Error("widget unavailable");
        const container = doc.createElement("div");
        container.setAttribute("data-swebsy-turnstile", "");
        const submit = form2.querySelector("[type=submit]") ?? null;
        (submit?.parentElement ?? form2).insertBefore(container, submit);
        form2.__swebsyTurnstileWidget = win.turnstile.render(container, {
          sitekey: config.siteKey,
          action: "form_submit",
          // Matches the Studio's auth widget. Managed mode already decides
          // per visitor whether a challenge is needed; "interaction-only"
          // stops it drawing anything for the majority who need nothing,
          // and the token still arrives through `callback` either way.
          size: "flexible",
          appearance: "interaction-only",
          callback: (token) => {
            form2.__swebsyTurnstileToken = token;
            form2.__swebsyTurnstileFailed = false;
          },
          "expired-callback": resetTurnstile,
          // Deliberately not `resetTurnstile`. reset() re-runs the
          // challenge, so a non-retryable error — 110200, this domain is
          // not on the widget's hostname list — errors again immediately
          // and the widget strobes forever. Record the failure and let
          // submit explain it. Returning falsy keeps Cloudflare's own
          // console log of the error code, which is how you diagnose it.
          "error-callback": () => {
            form2.__swebsyTurnstileToken = void 0;
            form2.__swebsyTurnstileFailed = true;
          },
        });
      } catch {
        form2.__swebsyTurnstileFailed = true;
      } finally {
        form2.__swebsyTurnstileLoading = false;
      }
    };
    void ensureChallenge();
    if (form2.__swebsyFormSubmitHandler) {
      form2.removeEventListener(
        "submit",
        form2.__swebsyFormSubmitHandler,
        true
      );
    }
    const submitToSwebsy = async (action) => {
      if (
        (form2.__swebsyTurnstileRequired || form2.__swebsyTurnstileFailed) &&
        !form2.__swebsyTurnstileToken
      ) {
        showStatus(
          form2.__swebsyTurnstileFailed
            ? "The security check could not load. Refresh and try again."
            : "Complete the security check to continue."
        );
        return;
      }
      const buttons = Array.from(form2.querySelectorAll("[type=submit]"));
      buttons.forEach((b) => (b.disabled = true));
      const body = new FormData(form2);
      if (form2.__swebsyNonce) body.set("_swebsy_ts", form2.__swebsyNonce);
      try {
        const res = await win.fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        if (!res.ok) {
          const body2 = await res.json().catch(() => null);
          showStatus(
            body2?.message ?? "Something went wrong. Please try again."
          );
          resetTurnstile();
          return;
        }
        const redirect = form2.getAttribute("data-redirect");
        if (redirect) {
          win.location.href = redirect;
          return;
        }
        const message =
          form2.getAttribute("data-success-message") ||
          "Thanks — your message has been sent.";
        const done = doc.createElement("p");
        done.setAttribute("role", "status");
        done.setAttribute("tabindex", "-1");
        done.setAttribute("data-swebsy-form-done", "");
        done.textContent = message;
        form2.replaceChildren(done);
        done.focus({ preventScroll: true });
      } catch {
        resetTurnstile();
        showStatus("Could not reach the server. Please try again.");
      } finally {
        buttons.forEach((b) => (b.disabled = false));
      }
    };
    const onSubmit = (event) => {
      const runtime = win.__swebsyPreviewRuntime;
      const action = form2.getAttribute("action");
      if (runtime && !runtime.active) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus("Use Preview to test this form.");
        return;
      }
      if (!isConfigured(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus(
          runtime
            ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
            : "This form is not accepting submissions yet."
        );
        return;
      }
      if (isSwebsy(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (runtime) {
          showStatus(
            "Test mode — submissions are delivered from your published site.",
            true
          );
          return;
        }
        clearStatus();
        void submitToSwebsy(action);
        return;
      }
      clearStatus();
      if (runtime?.active) {
        event.preventDefault();
        const previousTarget = form2.getAttribute("target");
        form2.setAttribute("target", "_blank");
        try {
          HTMLFormElement.prototype.submit.call(form2);
        } finally {
          if (previousTarget === null) form2.removeAttribute("target");
          else form2.setAttribute("target", previousTarget);
        }
      }
    };
    form2.__swebsyFormSubmitHandler = onSubmit;
    form2.addEventListener("submit", onSubmit, true);
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i0nvyn-2-2");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const el = this;
    const win = el.ownerDocument?.defaultView;
    const root = el.ownerDocument?.documentElement;
    if (!win || !root) return;
    const storageKey = "swebsy:color-mode";
    const incomingConfiguredMode = el.getAttribute("data-mode");
    el.__swebsyDarkModeSwitchUnregister?.();
    if (el.__swebsyDarkModeSwitchRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        el.__swebsyDarkModeSwitchRuntimeReady
      );
      delete el.__swebsyDarkModeSwitchRuntimeReady;
    }
    el.__swebsyDarkModeSwitchCleanup?.();
    const scope =
      el.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`;
    const getInputs = () =>
      Array.from(el.querySelectorAll("input[type=radio][data-mode]"));
    const inputs = getInputs();
    inputs.forEach((input) => {
      const mode = input.getAttribute("data-mode");
      if (!mode) return;
      input.id = `${scope}__${mode}`;
      input.name = `${scope}__toggle`;
    });
    el.querySelectorAll("label[for]").forEach((label) => {
      const sibling = label.previousElementSibling;
      if (sibling?.tagName === "INPUT" && sibling.id) {
        label.setAttribute("for", sibling.id);
      }
    });
    const normalizeMode2 = (mode) =>
      mode === "system" || mode === "light" || mode === "dark" ? mode : null;
    const modeLabel = (mode) =>
      mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";
    const nextMode = (mode) =>
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    const updateCycleButton = (preference) => {
      const button = el.querySelector("[data-theme-cycle-button]");
      if (!button) return;
      const next = nextMode(preference);
      const label = `Theme: ${modeLabel(preference)}. Click to switch to ${modeLabel(next)}.`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.querySelectorAll("[data-theme-mode-icon]").forEach((icon) => {
        icon.hidden = icon.getAttribute("data-theme-mode-icon") !== preference;
      });
    };
    const configuredMode = normalizeMode2(incomingConfiguredMode) || "system";
    const start = (runtime) => {
      el.__swebsyDarkModeSwitchCleanup?.();
      const cleanups = [];
      const mediaQuery = win.matchMedia
        ? win.matchMedia("(prefers-color-scheme: dark)")
        : null;
      const resolveMode = (mode) =>
        mode === "system" ? (mediaQuery?.matches ? "dark" : "light") : mode;
      const readPreference = () => {
        if (runtime) {
          return normalizeMode2(runtime.getSessionValue(storageKey));
        }
        try {
          return normalizeMode2(win.localStorage?.getItem(storageKey));
        } catch {
          return null;
        }
      };
      const publishPreference = (mode) => {
        if (runtime) {
          runtime.setSessionValue(storageKey, mode);
        } else {
          try {
            win.localStorage?.setItem(storageKey, mode);
          } catch {}
        }
        win.dispatchEvent(
          new win.CustomEvent("swebsy:color-mode-preference", {
            detail: { mode, source: el },
          })
        );
      };
      let activePreference = readPreference() || configuredMode;
      if (runtime && !readPreference()) {
        runtime.setSessionValue(storageKey, activePreference);
      }
      const apply = (mode, persist = false) => {
        const preference = normalizeMode2(mode);
        if (!preference) return;
        activePreference = preference;
        el.setAttribute("data-mode", preference);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === preference;
        });
        updateCycleButton(preference);
        const resolved = resolveMode(preference);
        root.classList.toggle("dark", resolved === "dark");
        root.classList.toggle("light", resolved === "light");
        root.style.colorScheme = resolved;
        runtime?.notifyColorMode(resolved);
        if (persist) publishPreference(preference);
      };
      const onMediaChange = () => {
        if (activePreference === "system") apply("system");
      };
      if (mediaQuery && typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", onMediaChange);
        cleanups.push(() =>
          mediaQuery.removeEventListener("change", onMediaChange)
        );
      } else if (mediaQuery && typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(onMediaChange);
        cleanups.push(() => mediaQuery.removeListener?.(onMediaChange));
      }
      inputs.forEach((input) => {
        const onInputChange = () => {
          const mode = input.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        input.addEventListener("change", onInputChange);
        cleanups.push(() => input.removeEventListener("change", onInputChange));
      });
      el.querySelectorAll("label[for]").forEach((label) => {
        const onLabelClick = () => {
          const input = label.previousElementSibling;
          const mode = input?.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        label.addEventListener("click", onLabelClick);
        cleanups.push(() => label.removeEventListener("click", onLabelClick));
      });
      const cycleButton = el.querySelector("[data-theme-cycle-button]");
      if (cycleButton) {
        const onCycleClick = () => apply(nextMode(activePreference), true);
        cycleButton.addEventListener("click", onCycleClick);
        cleanups.push(() =>
          cycleButton.removeEventListener("click", onCycleClick)
        );
      }
      const onPreference = (event) => {
        const detail = event.detail;
        if (detail?.source !== el && detail?.mode) {
          apply(detail.mode);
        }
      };
      win.addEventListener("swebsy:color-mode-preference", onPreference);
      cleanups.push(() =>
        win.removeEventListener("swebsy:color-mode-preference", onPreference)
      );
      el.__swebsyDarkModeSwitchCleanup = () => {
        cleanups.splice(0).forEach((cleanup) => cleanup());
        el.setAttribute("data-mode", configuredMode);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === configuredMode;
        });
        updateCycleButton(configuredMode);
      };
      apply(activePreference);
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      el.__swebsyDarkModeSwitchUnregister = runtime.register(
        el,
        "dark-mode-switch",
        {
          start: () => start(runtime),
          stop: () => el.__swebsyDarkModeSwitchCleanup?.(),
        }
      );
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      el.__swebsyDarkModeSwitchRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ifu2-2-3");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const nav = this;
    const win = nav.ownerDocument?.defaultView;
    if (!win) return;
    if (nav.dataset.navbarCollapseInit === "1" && !win.__swebsyPreviewRuntime) {
      return;
    }
    nav.__swebsyNavbarUnregister?.();
    if (nav.__swebsyNavbarRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        nav.__swebsyNavbarRuntimeReady
      );
      delete nav.__swebsyNavbarRuntimeReady;
    }
    nav.__swebsyNavbarCleanup?.();
    const toggler = nav.querySelector('[data-navbar-part="toggler"]');
    const panel = nav.querySelector('[data-navbar-part="collapse"]');
    if (!toggler || !panel) return;
    const start = () => {
      nav.__swebsyNavbarCleanup?.();
      nav.dataset.navbarCollapseInit = "1";
      const panelClass = panel.className;
      const panelHeight = panel.style.height;
      const togglerClass = toggler.className;
      const ariaExpanded = toggler.getAttribute("aria-expanded");
      let transitionTimer;
      const transitionMs = () => {
        const raw = win.getComputedStyle(panel).transitionDuration ?? "0s";
        const values = raw.split(",").map((s) => {
          const n = parseFloat(s.trim());
          return s.trim().endsWith("ms") ? n : n * 1e3;
        });
        const max = Math.max(...values);
        return Number.isFinite(max) && max > 0 ? max : 0;
      };
      const schedule = (callback) => {
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        transitionTimer = win.setTimeout(callback, transitionMs());
      };
      const open = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        panel.style.height = "0";
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + "px";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse", "show");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "true");
          toggler.classList.remove("collapsed");
        });
      };
      const close = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.style.height = panel.getBoundingClientRect().height + "px";
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        void panel.offsetHeight;
        panel.style.height = "0";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "false");
          toggler.classList.add("collapsed");
        });
      };
      const onToggle = () => {
        if (panel.classList.contains("show")) close();
        else open();
      };
      toggler.addEventListener("click", onToggle);
      nav.__swebsyNavbarCleanup = () => {
        toggler.removeEventListener("click", onToggle);
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        panel.className = panelClass;
        panel.style.height = panelHeight;
        toggler.className = togglerClass;
        if (ariaExpanded === null) {
          toggler.removeAttribute("aria-expanded");
        } else {
          toggler.setAttribute("aria-expanded", ariaExpanded);
        }
        delete nav.dataset.navbarCollapseInit;
      };
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      nav.__swebsyNavbarUnregister = runtime.register(nav, "navbar", {
        start,
        stop: () => nav.__swebsyNavbarCleanup?.(),
      });
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      nav.__swebsyNavbarRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ik8uf9i");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const form2 = this;
    const doc = form2.ownerDocument;
    const win = doc?.defaultView;
    if (!doc || !win) return;
    const SWEBSY_PREFIX = "/__forms/";
    const isSwebsy = (value) => (value ?? "").trim().startsWith(SWEBSY_PREFIX);
    const isConfigured = (value) => {
      const action = (value ?? "").trim();
      if (!action || action === "#") return false;
      if (
        /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
          action
        )
      ) {
        return false;
      }
      if (
        (action.startsWith("/") && !action.startsWith("//")) ||
        action.startsWith("./") ||
        action.startsWith("../") ||
        /^https:\/\//i.test(action)
      ) {
        return true;
      }
      try {
        const url = new URL(action);
        return (
          url.protocol === "http:" &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
        );
      } catch {
        return false;
      }
    };
    const statusEl = () => {
      let status = form2.querySelector("[data-swebsy-form-status]");
      if (!status) {
        status = doc.createElement("p");
        status.setAttribute("data-swebsy-form-status", "");
        status.setAttribute("role", "alert");
        status.setAttribute("tabindex", "-1");
        status.style.cssText =
          "margin:.75rem 0 0;font-size:.875rem;line-height:1.5";
        form2.appendChild(status);
      }
      return status;
    };
    const showStatus = (message, ok = false) => {
      const status = statusEl();
      status.style.color = ok
        ? "var(--color-success,currentColor)"
        : "var(--color-danger,currentColor)";
      status.hidden = false;
      status.textContent = message;
      status.focus({ preventScroll: true });
    };
    const clearStatus = () => {
      const status = form2.querySelector("[data-swebsy-form-status]");
      if (status) status.hidden = true;
    };
    const resetTurnstile = () => {
      form2.__swebsyTurnstileToken = void 0;
      if (form2.__swebsyTurnstileWidget && win.turnstile) {
        win.turnstile.reset(form2.__swebsyTurnstileWidget);
      }
    };
    const ensureChallenge = async () => {
      if (
        win.__swebsyPreviewRuntime ||
        !isSwebsy(form2.getAttribute("action")) ||
        form2.__swebsyTurnstileWidget ||
        form2.__swebsyTurnstileLoading
      ) {
        return;
      }
      form2.__swebsyTurnstileLoading = true;
      try {
        const configResponse = await win.fetch("/__forms/turnstile", {
          headers: { Accept: "application/json" },
        });
        if (!configResponse.ok) throw new Error("config unavailable");
        const config = await configResponse.json();
        form2.__swebsyNonce = config.nonce;
        if (!config.siteKey) return;
        form2.__swebsyTurnstileRequired = true;
        if (!win.turnstile) {
          await new Promise((resolve, reject) => {
            const existing = doc.querySelector("script[data-swebsy-turnstile]");
            const script = existing ?? doc.createElement("script");
            script.addEventListener("load", () => resolve(), {
              once: true,
            });
            script.addEventListener("error", () => reject(), {
              once: true,
            });
            if (!existing) {
              script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
              script.async = true;
              script.defer = true;
              script.setAttribute("data-swebsy-turnstile", "");
              doc.head.appendChild(script);
            }
          });
        }
        if (!win.turnstile) throw new Error("widget unavailable");
        const container = doc.createElement("div");
        container.setAttribute("data-swebsy-turnstile", "");
        const submit = form2.querySelector("[type=submit]") ?? null;
        (submit?.parentElement ?? form2).insertBefore(container, submit);
        form2.__swebsyTurnstileWidget = win.turnstile.render(container, {
          sitekey: config.siteKey,
          action: "form_submit",
          // Matches the Studio's auth widget. Managed mode already decides
          // per visitor whether a challenge is needed; "interaction-only"
          // stops it drawing anything for the majority who need nothing,
          // and the token still arrives through `callback` either way.
          size: "flexible",
          appearance: "interaction-only",
          callback: (token) => {
            form2.__swebsyTurnstileToken = token;
            form2.__swebsyTurnstileFailed = false;
          },
          "expired-callback": resetTurnstile,
          // Deliberately not `resetTurnstile`. reset() re-runs the
          // challenge, so a non-retryable error — 110200, this domain is
          // not on the widget's hostname list — errors again immediately
          // and the widget strobes forever. Record the failure and let
          // submit explain it. Returning falsy keeps Cloudflare's own
          // console log of the error code, which is how you diagnose it.
          "error-callback": () => {
            form2.__swebsyTurnstileToken = void 0;
            form2.__swebsyTurnstileFailed = true;
          },
        });
      } catch {
        form2.__swebsyTurnstileFailed = true;
      } finally {
        form2.__swebsyTurnstileLoading = false;
      }
    };
    void ensureChallenge();
    if (form2.__swebsyFormSubmitHandler) {
      form2.removeEventListener(
        "submit",
        form2.__swebsyFormSubmitHandler,
        true
      );
    }
    const submitToSwebsy = async (action) => {
      if (
        (form2.__swebsyTurnstileRequired || form2.__swebsyTurnstileFailed) &&
        !form2.__swebsyTurnstileToken
      ) {
        showStatus(
          form2.__swebsyTurnstileFailed
            ? "The security check could not load. Refresh and try again."
            : "Complete the security check to continue."
        );
        return;
      }
      const buttons = Array.from(form2.querySelectorAll("[type=submit]"));
      buttons.forEach((b) => (b.disabled = true));
      const body = new FormData(form2);
      if (form2.__swebsyNonce) body.set("_swebsy_ts", form2.__swebsyNonce);
      try {
        const res = await win.fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        if (!res.ok) {
          const body2 = await res.json().catch(() => null);
          showStatus(
            body2?.message ?? "Something went wrong. Please try again."
          );
          resetTurnstile();
          return;
        }
        const redirect = form2.getAttribute("data-redirect");
        if (redirect) {
          win.location.href = redirect;
          return;
        }
        const message =
          form2.getAttribute("data-success-message") ||
          "Thanks — your message has been sent.";
        const done = doc.createElement("p");
        done.setAttribute("role", "status");
        done.setAttribute("tabindex", "-1");
        done.setAttribute("data-swebsy-form-done", "");
        done.textContent = message;
        form2.replaceChildren(done);
        done.focus({ preventScroll: true });
      } catch {
        resetTurnstile();
        showStatus("Could not reach the server. Please try again.");
      } finally {
        buttons.forEach((b) => (b.disabled = false));
      }
    };
    const onSubmit = (event) => {
      const runtime = win.__swebsyPreviewRuntime;
      const action = form2.getAttribute("action");
      if (runtime && !runtime.active) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus("Use Preview to test this form.");
        return;
      }
      if (!isConfigured(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus(
          runtime
            ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
            : "This form is not accepting submissions yet."
        );
        return;
      }
      if (isSwebsy(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (runtime) {
          showStatus(
            "Test mode — submissions are delivered from your published site.",
            true
          );
          return;
        }
        clearStatus();
        void submitToSwebsy(action);
        return;
      }
      clearStatus();
      if (runtime?.active) {
        event.preventDefault();
        const previousTarget = form2.getAttribute("target");
        form2.setAttribute("target", "_blank");
        try {
          HTMLFormElement.prototype.submit.call(form2);
        } finally {
          if (previousTarget === null) form2.removeAttribute("target");
          else form2.setAttribute("target", previousTarget);
        }
      }
    };
    form2.__swebsyFormSubmitHandler = onSubmit;
    form2.addEventListener("submit", onSubmit, true);
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i0nvyn-2-3");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const el = this;
    const win = el.ownerDocument?.defaultView;
    const root = el.ownerDocument?.documentElement;
    if (!win || !root) return;
    const storageKey = "swebsy:color-mode";
    const incomingConfiguredMode = el.getAttribute("data-mode");
    el.__swebsyDarkModeSwitchUnregister?.();
    if (el.__swebsyDarkModeSwitchRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        el.__swebsyDarkModeSwitchRuntimeReady
      );
      delete el.__swebsyDarkModeSwitchRuntimeReady;
    }
    el.__swebsyDarkModeSwitchCleanup?.();
    const scope =
      el.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`;
    const getInputs = () =>
      Array.from(el.querySelectorAll("input[type=radio][data-mode]"));
    const inputs = getInputs();
    inputs.forEach((input) => {
      const mode = input.getAttribute("data-mode");
      if (!mode) return;
      input.id = `${scope}__${mode}`;
      input.name = `${scope}__toggle`;
    });
    el.querySelectorAll("label[for]").forEach((label) => {
      const sibling = label.previousElementSibling;
      if (sibling?.tagName === "INPUT" && sibling.id) {
        label.setAttribute("for", sibling.id);
      }
    });
    const normalizeMode2 = (mode) =>
      mode === "system" || mode === "light" || mode === "dark" ? mode : null;
    const modeLabel = (mode) =>
      mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";
    const nextMode = (mode) =>
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    const updateCycleButton = (preference) => {
      const button = el.querySelector("[data-theme-cycle-button]");
      if (!button) return;
      const next = nextMode(preference);
      const label = `Theme: ${modeLabel(preference)}. Click to switch to ${modeLabel(next)}.`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.querySelectorAll("[data-theme-mode-icon]").forEach((icon) => {
        icon.hidden = icon.getAttribute("data-theme-mode-icon") !== preference;
      });
    };
    const configuredMode = normalizeMode2(incomingConfiguredMode) || "system";
    const start = (runtime) => {
      el.__swebsyDarkModeSwitchCleanup?.();
      const cleanups = [];
      const mediaQuery = win.matchMedia
        ? win.matchMedia("(prefers-color-scheme: dark)")
        : null;
      const resolveMode = (mode) =>
        mode === "system" ? (mediaQuery?.matches ? "dark" : "light") : mode;
      const readPreference = () => {
        if (runtime) {
          return normalizeMode2(runtime.getSessionValue(storageKey));
        }
        try {
          return normalizeMode2(win.localStorage?.getItem(storageKey));
        } catch {
          return null;
        }
      };
      const publishPreference = (mode) => {
        if (runtime) {
          runtime.setSessionValue(storageKey, mode);
        } else {
          try {
            win.localStorage?.setItem(storageKey, mode);
          } catch {}
        }
        win.dispatchEvent(
          new win.CustomEvent("swebsy:color-mode-preference", {
            detail: { mode, source: el },
          })
        );
      };
      let activePreference = readPreference() || configuredMode;
      if (runtime && !readPreference()) {
        runtime.setSessionValue(storageKey, activePreference);
      }
      const apply = (mode, persist = false) => {
        const preference = normalizeMode2(mode);
        if (!preference) return;
        activePreference = preference;
        el.setAttribute("data-mode", preference);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === preference;
        });
        updateCycleButton(preference);
        const resolved = resolveMode(preference);
        root.classList.toggle("dark", resolved === "dark");
        root.classList.toggle("light", resolved === "light");
        root.style.colorScheme = resolved;
        runtime?.notifyColorMode(resolved);
        if (persist) publishPreference(preference);
      };
      const onMediaChange = () => {
        if (activePreference === "system") apply("system");
      };
      if (mediaQuery && typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", onMediaChange);
        cleanups.push(() =>
          mediaQuery.removeEventListener("change", onMediaChange)
        );
      } else if (mediaQuery && typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(onMediaChange);
        cleanups.push(() => mediaQuery.removeListener?.(onMediaChange));
      }
      inputs.forEach((input) => {
        const onInputChange = () => {
          const mode = input.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        input.addEventListener("change", onInputChange);
        cleanups.push(() => input.removeEventListener("change", onInputChange));
      });
      el.querySelectorAll("label[for]").forEach((label) => {
        const onLabelClick = () => {
          const input = label.previousElementSibling;
          const mode = input?.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        label.addEventListener("click", onLabelClick);
        cleanups.push(() => label.removeEventListener("click", onLabelClick));
      });
      const cycleButton = el.querySelector("[data-theme-cycle-button]");
      if (cycleButton) {
        const onCycleClick = () => apply(nextMode(activePreference), true);
        cycleButton.addEventListener("click", onCycleClick);
        cleanups.push(() =>
          cycleButton.removeEventListener("click", onCycleClick)
        );
      }
      const onPreference = (event) => {
        const detail = event.detail;
        if (detail?.source !== el && detail?.mode) {
          apply(detail.mode);
        }
      };
      win.addEventListener("swebsy:color-mode-preference", onPreference);
      cleanups.push(() =>
        win.removeEventListener("swebsy:color-mode-preference", onPreference)
      );
      el.__swebsyDarkModeSwitchCleanup = () => {
        cleanups.splice(0).forEach((cleanup) => cleanup());
        el.setAttribute("data-mode", configuredMode);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === configuredMode;
        });
        updateCycleButton(configuredMode);
      };
      apply(activePreference);
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      el.__swebsyDarkModeSwitchUnregister = runtime.register(
        el,
        "dark-mode-switch",
        {
          start: () => start(runtime),
          stop: () => el.__swebsyDarkModeSwitchCleanup?.(),
        }
      );
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      el.__swebsyDarkModeSwitchRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ifu2-2-4");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const nav = this;
    const win = nav.ownerDocument?.defaultView;
    if (!win) return;
    if (nav.dataset.navbarCollapseInit === "1" && !win.__swebsyPreviewRuntime) {
      return;
    }
    nav.__swebsyNavbarUnregister?.();
    if (nav.__swebsyNavbarRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        nav.__swebsyNavbarRuntimeReady
      );
      delete nav.__swebsyNavbarRuntimeReady;
    }
    nav.__swebsyNavbarCleanup?.();
    const toggler = nav.querySelector('[data-navbar-part="toggler"]');
    const panel = nav.querySelector('[data-navbar-part="collapse"]');
    if (!toggler || !panel) return;
    const start = () => {
      nav.__swebsyNavbarCleanup?.();
      nav.dataset.navbarCollapseInit = "1";
      const panelClass = panel.className;
      const panelHeight = panel.style.height;
      const togglerClass = toggler.className;
      const ariaExpanded = toggler.getAttribute("aria-expanded");
      let transitionTimer;
      const transitionMs = () => {
        const raw = win.getComputedStyle(panel).transitionDuration ?? "0s";
        const values = raw.split(",").map((s) => {
          const n = parseFloat(s.trim());
          return s.trim().endsWith("ms") ? n : n * 1e3;
        });
        const max = Math.max(...values);
        return Number.isFinite(max) && max > 0 ? max : 0;
      };
      const schedule = (callback) => {
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        transitionTimer = win.setTimeout(callback, transitionMs());
      };
      const open = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        panel.style.height = "0";
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + "px";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse", "show");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "true");
          toggler.classList.remove("collapsed");
        });
      };
      const close = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.style.height = panel.getBoundingClientRect().height + "px";
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        void panel.offsetHeight;
        panel.style.height = "0";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "false");
          toggler.classList.add("collapsed");
        });
      };
      const onToggle = () => {
        if (panel.classList.contains("show")) close();
        else open();
      };
      toggler.addEventListener("click", onToggle);
      nav.__swebsyNavbarCleanup = () => {
        toggler.removeEventListener("click", onToggle);
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        panel.className = panelClass;
        panel.style.height = panelHeight;
        toggler.className = togglerClass;
        if (ariaExpanded === null) {
          toggler.removeAttribute("aria-expanded");
        } else {
          toggler.setAttribute("aria-expanded", ariaExpanded);
        }
        delete nav.dataset.navbarCollapseInit;
      };
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      nav.__swebsyNavbarUnregister = runtime.register(nav, "navbar", {
        start,
        stop: () => nav.__swebsyNavbarCleanup?.(),
      });
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      nav.__swebsyNavbarRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#iv643wf-2-3");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const form2 = this;
    const doc = form2.ownerDocument;
    const win = doc?.defaultView;
    if (!doc || !win) return;
    const SWEBSY_PREFIX = "/__forms/";
    const isSwebsy = (value) => (value ?? "").trim().startsWith(SWEBSY_PREFIX);
    const isConfigured = (value) => {
      const action = (value ?? "").trim();
      if (!action || action === "#") return false;
      if (
        /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
          action
        )
      ) {
        return false;
      }
      if (
        (action.startsWith("/") && !action.startsWith("//")) ||
        action.startsWith("./") ||
        action.startsWith("../") ||
        /^https:\/\//i.test(action)
      ) {
        return true;
      }
      try {
        const url = new URL(action);
        return (
          url.protocol === "http:" &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
        );
      } catch {
        return false;
      }
    };
    const statusEl = () => {
      let status = form2.querySelector("[data-swebsy-form-status]");
      if (!status) {
        status = doc.createElement("p");
        status.setAttribute("data-swebsy-form-status", "");
        status.setAttribute("role", "alert");
        status.setAttribute("tabindex", "-1");
        status.style.cssText =
          "margin:.75rem 0 0;font-size:.875rem;line-height:1.5";
        form2.appendChild(status);
      }
      return status;
    };
    const showStatus = (message, ok = false) => {
      const status = statusEl();
      status.style.color = ok
        ? "var(--color-success,currentColor)"
        : "var(--color-danger,currentColor)";
      status.hidden = false;
      status.textContent = message;
      status.focus({ preventScroll: true });
    };
    const clearStatus = () => {
      const status = form2.querySelector("[data-swebsy-form-status]");
      if (status) status.hidden = true;
    };
    const resetTurnstile = () => {
      form2.__swebsyTurnstileToken = void 0;
      if (form2.__swebsyTurnstileWidget && win.turnstile) {
        win.turnstile.reset(form2.__swebsyTurnstileWidget);
      }
    };
    const ensureChallenge = async () => {
      if (
        win.__swebsyPreviewRuntime ||
        !isSwebsy(form2.getAttribute("action")) ||
        form2.__swebsyTurnstileWidget ||
        form2.__swebsyTurnstileLoading
      ) {
        return;
      }
      form2.__swebsyTurnstileLoading = true;
      try {
        const configResponse = await win.fetch("/__forms/turnstile", {
          headers: { Accept: "application/json" },
        });
        if (!configResponse.ok) throw new Error("config unavailable");
        const config = await configResponse.json();
        form2.__swebsyNonce = config.nonce;
        if (!config.siteKey) return;
        form2.__swebsyTurnstileRequired = true;
        if (!win.turnstile) {
          await new Promise((resolve, reject) => {
            const existing = doc.querySelector("script[data-swebsy-turnstile]");
            const script = existing ?? doc.createElement("script");
            script.addEventListener("load", () => resolve(), {
              once: true,
            });
            script.addEventListener("error", () => reject(), {
              once: true,
            });
            if (!existing) {
              script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
              script.async = true;
              script.defer = true;
              script.setAttribute("data-swebsy-turnstile", "");
              doc.head.appendChild(script);
            }
          });
        }
        if (!win.turnstile) throw new Error("widget unavailable");
        const container = doc.createElement("div");
        container.setAttribute("data-swebsy-turnstile", "");
        const submit = form2.querySelector("[type=submit]") ?? null;
        (submit?.parentElement ?? form2).insertBefore(container, submit);
        form2.__swebsyTurnstileWidget = win.turnstile.render(container, {
          sitekey: config.siteKey,
          action: "form_submit",
          // Matches the Studio's auth widget. Managed mode already decides
          // per visitor whether a challenge is needed; "interaction-only"
          // stops it drawing anything for the majority who need nothing,
          // and the token still arrives through `callback` either way.
          size: "flexible",
          appearance: "interaction-only",
          callback: (token) => {
            form2.__swebsyTurnstileToken = token;
            form2.__swebsyTurnstileFailed = false;
          },
          "expired-callback": resetTurnstile,
          // Deliberately not `resetTurnstile`. reset() re-runs the
          // challenge, so a non-retryable error — 110200, this domain is
          // not on the widget's hostname list — errors again immediately
          // and the widget strobes forever. Record the failure and let
          // submit explain it. Returning falsy keeps Cloudflare's own
          // console log of the error code, which is how you diagnose it.
          "error-callback": () => {
            form2.__swebsyTurnstileToken = void 0;
            form2.__swebsyTurnstileFailed = true;
          },
        });
      } catch {
        form2.__swebsyTurnstileFailed = true;
      } finally {
        form2.__swebsyTurnstileLoading = false;
      }
    };
    void ensureChallenge();
    if (form2.__swebsyFormSubmitHandler) {
      form2.removeEventListener(
        "submit",
        form2.__swebsyFormSubmitHandler,
        true
      );
    }
    const submitToSwebsy = async (action) => {
      if (
        (form2.__swebsyTurnstileRequired || form2.__swebsyTurnstileFailed) &&
        !form2.__swebsyTurnstileToken
      ) {
        showStatus(
          form2.__swebsyTurnstileFailed
            ? "The security check could not load. Refresh and try again."
            : "Complete the security check to continue."
        );
        return;
      }
      const buttons = Array.from(form2.querySelectorAll("[type=submit]"));
      buttons.forEach((b) => (b.disabled = true));
      const body = new FormData(form2);
      if (form2.__swebsyNonce) body.set("_swebsy_ts", form2.__swebsyNonce);
      try {
        const res = await win.fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        if (!res.ok) {
          const body2 = await res.json().catch(() => null);
          showStatus(
            body2?.message ?? "Something went wrong. Please try again."
          );
          resetTurnstile();
          return;
        }
        const redirect = form2.getAttribute("data-redirect");
        if (redirect) {
          win.location.href = redirect;
          return;
        }
        const message =
          form2.getAttribute("data-success-message") ||
          "Thanks — your message has been sent.";
        const done = doc.createElement("p");
        done.setAttribute("role", "status");
        done.setAttribute("tabindex", "-1");
        done.setAttribute("data-swebsy-form-done", "");
        done.textContent = message;
        form2.replaceChildren(done);
        done.focus({ preventScroll: true });
      } catch {
        resetTurnstile();
        showStatus("Could not reach the server. Please try again.");
      } finally {
        buttons.forEach((b) => (b.disabled = false));
      }
    };
    const onSubmit = (event) => {
      const runtime = win.__swebsyPreviewRuntime;
      const action = form2.getAttribute("action");
      if (runtime && !runtime.active) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus("Use Preview to test this form.");
        return;
      }
      if (!isConfigured(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus(
          runtime
            ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
            : "This form is not accepting submissions yet."
        );
        return;
      }
      if (isSwebsy(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (runtime) {
          showStatus(
            "Test mode — submissions are delivered from your published site.",
            true
          );
          return;
        }
        clearStatus();
        void submitToSwebsy(action);
        return;
      }
      clearStatus();
      if (runtime?.active) {
        event.preventDefault();
        const previousTarget = form2.getAttribute("target");
        form2.setAttribute("target", "_blank");
        try {
          HTMLFormElement.prototype.submit.call(form2);
        } finally {
          if (previousTarget === null) form2.removeAttribute("target");
          else form2.setAttribute("target", previousTarget);
        }
      }
    };
    form2.__swebsyFormSubmitHandler = onSubmit;
    form2.addEventListener("submit", onSubmit, true);
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i0nvyn-2-4");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const el = this;
    const win = el.ownerDocument?.defaultView;
    const root = el.ownerDocument?.documentElement;
    if (!win || !root) return;
    const storageKey = "swebsy:color-mode";
    const incomingConfiguredMode = el.getAttribute("data-mode");
    el.__swebsyDarkModeSwitchUnregister?.();
    if (el.__swebsyDarkModeSwitchRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        el.__swebsyDarkModeSwitchRuntimeReady
      );
      delete el.__swebsyDarkModeSwitchRuntimeReady;
    }
    el.__swebsyDarkModeSwitchCleanup?.();
    const scope =
      el.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`;
    const getInputs = () =>
      Array.from(el.querySelectorAll("input[type=radio][data-mode]"));
    const inputs = getInputs();
    inputs.forEach((input) => {
      const mode = input.getAttribute("data-mode");
      if (!mode) return;
      input.id = `${scope}__${mode}`;
      input.name = `${scope}__toggle`;
    });
    el.querySelectorAll("label[for]").forEach((label) => {
      const sibling = label.previousElementSibling;
      if (sibling?.tagName === "INPUT" && sibling.id) {
        label.setAttribute("for", sibling.id);
      }
    });
    const normalizeMode2 = (mode) =>
      mode === "system" || mode === "light" || mode === "dark" ? mode : null;
    const modeLabel = (mode) =>
      mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";
    const nextMode = (mode) =>
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    const updateCycleButton = (preference) => {
      const button = el.querySelector("[data-theme-cycle-button]");
      if (!button) return;
      const next = nextMode(preference);
      const label = `Theme: ${modeLabel(preference)}. Click to switch to ${modeLabel(next)}.`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.querySelectorAll("[data-theme-mode-icon]").forEach((icon) => {
        icon.hidden = icon.getAttribute("data-theme-mode-icon") !== preference;
      });
    };
    const configuredMode = normalizeMode2(incomingConfiguredMode) || "system";
    const start = (runtime) => {
      el.__swebsyDarkModeSwitchCleanup?.();
      const cleanups = [];
      const mediaQuery = win.matchMedia
        ? win.matchMedia("(prefers-color-scheme: dark)")
        : null;
      const resolveMode = (mode) =>
        mode === "system" ? (mediaQuery?.matches ? "dark" : "light") : mode;
      const readPreference = () => {
        if (runtime) {
          return normalizeMode2(runtime.getSessionValue(storageKey));
        }
        try {
          return normalizeMode2(win.localStorage?.getItem(storageKey));
        } catch {
          return null;
        }
      };
      const publishPreference = (mode) => {
        if (runtime) {
          runtime.setSessionValue(storageKey, mode);
        } else {
          try {
            win.localStorage?.setItem(storageKey, mode);
          } catch {}
        }
        win.dispatchEvent(
          new win.CustomEvent("swebsy:color-mode-preference", {
            detail: { mode, source: el },
          })
        );
      };
      let activePreference = readPreference() || configuredMode;
      if (runtime && !readPreference()) {
        runtime.setSessionValue(storageKey, activePreference);
      }
      const apply = (mode, persist = false) => {
        const preference = normalizeMode2(mode);
        if (!preference) return;
        activePreference = preference;
        el.setAttribute("data-mode", preference);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === preference;
        });
        updateCycleButton(preference);
        const resolved = resolveMode(preference);
        root.classList.toggle("dark", resolved === "dark");
        root.classList.toggle("light", resolved === "light");
        root.style.colorScheme = resolved;
        runtime?.notifyColorMode(resolved);
        if (persist) publishPreference(preference);
      };
      const onMediaChange = () => {
        if (activePreference === "system") apply("system");
      };
      if (mediaQuery && typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", onMediaChange);
        cleanups.push(() =>
          mediaQuery.removeEventListener("change", onMediaChange)
        );
      } else if (mediaQuery && typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(onMediaChange);
        cleanups.push(() => mediaQuery.removeListener?.(onMediaChange));
      }
      inputs.forEach((input) => {
        const onInputChange = () => {
          const mode = input.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        input.addEventListener("change", onInputChange);
        cleanups.push(() => input.removeEventListener("change", onInputChange));
      });
      el.querySelectorAll("label[for]").forEach((label) => {
        const onLabelClick = () => {
          const input = label.previousElementSibling;
          const mode = input?.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        label.addEventListener("click", onLabelClick);
        cleanups.push(() => label.removeEventListener("click", onLabelClick));
      });
      const cycleButton = el.querySelector("[data-theme-cycle-button]");
      if (cycleButton) {
        const onCycleClick = () => apply(nextMode(activePreference), true);
        cycleButton.addEventListener("click", onCycleClick);
        cleanups.push(() =>
          cycleButton.removeEventListener("click", onCycleClick)
        );
      }
      const onPreference = (event) => {
        const detail = event.detail;
        if (detail?.source !== el && detail?.mode) {
          apply(detail.mode);
        }
      };
      win.addEventListener("swebsy:color-mode-preference", onPreference);
      cleanups.push(() =>
        win.removeEventListener("swebsy:color-mode-preference", onPreference)
      );
      el.__swebsyDarkModeSwitchCleanup = () => {
        cleanups.splice(0).forEach((cleanup) => cleanup());
        el.setAttribute("data-mode", configuredMode);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === configuredMode;
        });
        updateCycleButton(configuredMode);
      };
      apply(activePreference);
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      el.__swebsyDarkModeSwitchUnregister = runtime.register(
        el,
        "dark-mode-switch",
        {
          start: () => start(runtime),
          stop: () => el.__swebsyDarkModeSwitchCleanup?.(),
        }
      );
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      el.__swebsyDarkModeSwitchRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ifu2-2-5");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const nav = this;
    const win = nav.ownerDocument?.defaultView;
    if (!win) return;
    if (nav.dataset.navbarCollapseInit === "1" && !win.__swebsyPreviewRuntime) {
      return;
    }
    nav.__swebsyNavbarUnregister?.();
    if (nav.__swebsyNavbarRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        nav.__swebsyNavbarRuntimeReady
      );
      delete nav.__swebsyNavbarRuntimeReady;
    }
    nav.__swebsyNavbarCleanup?.();
    const toggler = nav.querySelector('[data-navbar-part="toggler"]');
    const panel = nav.querySelector('[data-navbar-part="collapse"]');
    if (!toggler || !panel) return;
    const start = () => {
      nav.__swebsyNavbarCleanup?.();
      nav.dataset.navbarCollapseInit = "1";
      const panelClass = panel.className;
      const panelHeight = panel.style.height;
      const togglerClass = toggler.className;
      const ariaExpanded = toggler.getAttribute("aria-expanded");
      let transitionTimer;
      const transitionMs = () => {
        const raw = win.getComputedStyle(panel).transitionDuration ?? "0s";
        const values = raw.split(",").map((s) => {
          const n = parseFloat(s.trim());
          return s.trim().endsWith("ms") ? n : n * 1e3;
        });
        const max = Math.max(...values);
        return Number.isFinite(max) && max > 0 ? max : 0;
      };
      const schedule = (callback) => {
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        transitionTimer = win.setTimeout(callback, transitionMs());
      };
      const open = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        panel.style.height = "0";
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + "px";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse", "show");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "true");
          toggler.classList.remove("collapsed");
        });
      };
      const close = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.style.height = panel.getBoundingClientRect().height + "px";
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        void panel.offsetHeight;
        panel.style.height = "0";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "false");
          toggler.classList.add("collapsed");
        });
      };
      const onToggle = () => {
        if (panel.classList.contains("show")) close();
        else open();
      };
      toggler.addEventListener("click", onToggle);
      nav.__swebsyNavbarCleanup = () => {
        toggler.removeEventListener("click", onToggle);
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        panel.className = panelClass;
        panel.style.height = panelHeight;
        toggler.className = togglerClass;
        if (ariaExpanded === null) {
          toggler.removeAttribute("aria-expanded");
        } else {
          toggler.setAttribute("aria-expanded", ariaExpanded);
        }
        delete nav.dataset.navbarCollapseInit;
      };
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      nav.__swebsyNavbarUnregister = runtime.register(nav, "navbar", {
        start,
        stop: () => nav.__swebsyNavbarCleanup?.(),
      });
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      nav.__swebsyNavbarRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#iv643wf-2-4");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const form2 = this;
    const doc = form2.ownerDocument;
    const win = doc?.defaultView;
    if (!doc || !win) return;
    const SWEBSY_PREFIX = "/__forms/";
    const isSwebsy = (value) => (value ?? "").trim().startsWith(SWEBSY_PREFIX);
    const isConfigured = (value) => {
      const action = (value ?? "").trim();
      if (!action || action === "#") return false;
      if (
        /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
          action
        )
      ) {
        return false;
      }
      if (
        (action.startsWith("/") && !action.startsWith("//")) ||
        action.startsWith("./") ||
        action.startsWith("../") ||
        /^https:\/\//i.test(action)
      ) {
        return true;
      }
      try {
        const url = new URL(action);
        return (
          url.protocol === "http:" &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
        );
      } catch {
        return false;
      }
    };
    const statusEl = () => {
      let status = form2.querySelector("[data-swebsy-form-status]");
      if (!status) {
        status = doc.createElement("p");
        status.setAttribute("data-swebsy-form-status", "");
        status.setAttribute("role", "alert");
        status.setAttribute("tabindex", "-1");
        status.style.cssText =
          "margin:.75rem 0 0;font-size:.875rem;line-height:1.5";
        form2.appendChild(status);
      }
      return status;
    };
    const showStatus = (message, ok = false) => {
      const status = statusEl();
      status.style.color = ok
        ? "var(--color-success,currentColor)"
        : "var(--color-danger,currentColor)";
      status.hidden = false;
      status.textContent = message;
      status.focus({ preventScroll: true });
    };
    const clearStatus = () => {
      const status = form2.querySelector("[data-swebsy-form-status]");
      if (status) status.hidden = true;
    };
    const resetTurnstile = () => {
      form2.__swebsyTurnstileToken = void 0;
      if (form2.__swebsyTurnstileWidget && win.turnstile) {
        win.turnstile.reset(form2.__swebsyTurnstileWidget);
      }
    };
    const ensureChallenge = async () => {
      if (
        win.__swebsyPreviewRuntime ||
        !isSwebsy(form2.getAttribute("action")) ||
        form2.__swebsyTurnstileWidget ||
        form2.__swebsyTurnstileLoading
      ) {
        return;
      }
      form2.__swebsyTurnstileLoading = true;
      try {
        const configResponse = await win.fetch("/__forms/turnstile", {
          headers: { Accept: "application/json" },
        });
        if (!configResponse.ok) throw new Error("config unavailable");
        const config = await configResponse.json();
        form2.__swebsyNonce = config.nonce;
        if (!config.siteKey) return;
        form2.__swebsyTurnstileRequired = true;
        if (!win.turnstile) {
          await new Promise((resolve, reject) => {
            const existing = doc.querySelector("script[data-swebsy-turnstile]");
            const script = existing ?? doc.createElement("script");
            script.addEventListener("load", () => resolve(), {
              once: true,
            });
            script.addEventListener("error", () => reject(), {
              once: true,
            });
            if (!existing) {
              script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
              script.async = true;
              script.defer = true;
              script.setAttribute("data-swebsy-turnstile", "");
              doc.head.appendChild(script);
            }
          });
        }
        if (!win.turnstile) throw new Error("widget unavailable");
        const container = doc.createElement("div");
        container.setAttribute("data-swebsy-turnstile", "");
        const submit = form2.querySelector("[type=submit]") ?? null;
        (submit?.parentElement ?? form2).insertBefore(container, submit);
        form2.__swebsyTurnstileWidget = win.turnstile.render(container, {
          sitekey: config.siteKey,
          action: "form_submit",
          // Matches the Studio's auth widget. Managed mode already decides
          // per visitor whether a challenge is needed; "interaction-only"
          // stops it drawing anything for the majority who need nothing,
          // and the token still arrives through `callback` either way.
          size: "flexible",
          appearance: "interaction-only",
          callback: (token) => {
            form2.__swebsyTurnstileToken = token;
            form2.__swebsyTurnstileFailed = false;
          },
          "expired-callback": resetTurnstile,
          // Deliberately not `resetTurnstile`. reset() re-runs the
          // challenge, so a non-retryable error — 110200, this domain is
          // not on the widget's hostname list — errors again immediately
          // and the widget strobes forever. Record the failure and let
          // submit explain it. Returning falsy keeps Cloudflare's own
          // console log of the error code, which is how you diagnose it.
          "error-callback": () => {
            form2.__swebsyTurnstileToken = void 0;
            form2.__swebsyTurnstileFailed = true;
          },
        });
      } catch {
        form2.__swebsyTurnstileFailed = true;
      } finally {
        form2.__swebsyTurnstileLoading = false;
      }
    };
    void ensureChallenge();
    if (form2.__swebsyFormSubmitHandler) {
      form2.removeEventListener(
        "submit",
        form2.__swebsyFormSubmitHandler,
        true
      );
    }
    const submitToSwebsy = async (action) => {
      if (
        (form2.__swebsyTurnstileRequired || form2.__swebsyTurnstileFailed) &&
        !form2.__swebsyTurnstileToken
      ) {
        showStatus(
          form2.__swebsyTurnstileFailed
            ? "The security check could not load. Refresh and try again."
            : "Complete the security check to continue."
        );
        return;
      }
      const buttons = Array.from(form2.querySelectorAll("[type=submit]"));
      buttons.forEach((b) => (b.disabled = true));
      const body = new FormData(form2);
      if (form2.__swebsyNonce) body.set("_swebsy_ts", form2.__swebsyNonce);
      try {
        const res = await win.fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        if (!res.ok) {
          const body2 = await res.json().catch(() => null);
          showStatus(
            body2?.message ?? "Something went wrong. Please try again."
          );
          resetTurnstile();
          return;
        }
        const redirect = form2.getAttribute("data-redirect");
        if (redirect) {
          win.location.href = redirect;
          return;
        }
        const message =
          form2.getAttribute("data-success-message") ||
          "Thanks — your message has been sent.";
        const done = doc.createElement("p");
        done.setAttribute("role", "status");
        done.setAttribute("tabindex", "-1");
        done.setAttribute("data-swebsy-form-done", "");
        done.textContent = message;
        form2.replaceChildren(done);
        done.focus({ preventScroll: true });
      } catch {
        resetTurnstile();
        showStatus("Could not reach the server. Please try again.");
      } finally {
        buttons.forEach((b) => (b.disabled = false));
      }
    };
    const onSubmit = (event) => {
      const runtime = win.__swebsyPreviewRuntime;
      const action = form2.getAttribute("action");
      if (runtime && !runtime.active) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus("Use Preview to test this form.");
        return;
      }
      if (!isConfigured(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus(
          runtime
            ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
            : "This form is not accepting submissions yet."
        );
        return;
      }
      if (isSwebsy(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (runtime) {
          showStatus(
            "Test mode — submissions are delivered from your published site.",
            true
          );
          return;
        }
        clearStatus();
        void submitToSwebsy(action);
        return;
      }
      clearStatus();
      if (runtime?.active) {
        event.preventDefault();
        const previousTarget = form2.getAttribute("target");
        form2.setAttribute("target", "_blank");
        try {
          HTMLFormElement.prototype.submit.call(form2);
        } finally {
          if (previousTarget === null) form2.removeAttribute("target");
          else form2.setAttribute("target", previousTarget);
        }
      }
    };
    form2.__swebsyFormSubmitHandler = onSubmit;
    form2.addEventListener("submit", onSubmit, true);
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i0nvyn-2-5");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const el = this;
    const win = el.ownerDocument?.defaultView;
    const root = el.ownerDocument?.documentElement;
    if (!win || !root) return;
    const storageKey = "swebsy:color-mode";
    const incomingConfiguredMode = el.getAttribute("data-mode");
    el.__swebsyDarkModeSwitchUnregister?.();
    if (el.__swebsyDarkModeSwitchRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        el.__swebsyDarkModeSwitchRuntimeReady
      );
      delete el.__swebsyDarkModeSwitchRuntimeReady;
    }
    el.__swebsyDarkModeSwitchCleanup?.();
    const scope =
      el.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`;
    const getInputs = () =>
      Array.from(el.querySelectorAll("input[type=radio][data-mode]"));
    const inputs = getInputs();
    inputs.forEach((input) => {
      const mode = input.getAttribute("data-mode");
      if (!mode) return;
      input.id = `${scope}__${mode}`;
      input.name = `${scope}__toggle`;
    });
    el.querySelectorAll("label[for]").forEach((label) => {
      const sibling = label.previousElementSibling;
      if (sibling?.tagName === "INPUT" && sibling.id) {
        label.setAttribute("for", sibling.id);
      }
    });
    const normalizeMode2 = (mode) =>
      mode === "system" || mode === "light" || mode === "dark" ? mode : null;
    const modeLabel = (mode) =>
      mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";
    const nextMode = (mode) =>
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    const updateCycleButton = (preference) => {
      const button = el.querySelector("[data-theme-cycle-button]");
      if (!button) return;
      const next = nextMode(preference);
      const label = `Theme: ${modeLabel(preference)}. Click to switch to ${modeLabel(next)}.`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.querySelectorAll("[data-theme-mode-icon]").forEach((icon) => {
        icon.hidden = icon.getAttribute("data-theme-mode-icon") !== preference;
      });
    };
    const configuredMode = normalizeMode2(incomingConfiguredMode) || "system";
    const start = (runtime) => {
      el.__swebsyDarkModeSwitchCleanup?.();
      const cleanups = [];
      const mediaQuery = win.matchMedia
        ? win.matchMedia("(prefers-color-scheme: dark)")
        : null;
      const resolveMode = (mode) =>
        mode === "system" ? (mediaQuery?.matches ? "dark" : "light") : mode;
      const readPreference = () => {
        if (runtime) {
          return normalizeMode2(runtime.getSessionValue(storageKey));
        }
        try {
          return normalizeMode2(win.localStorage?.getItem(storageKey));
        } catch {
          return null;
        }
      };
      const publishPreference = (mode) => {
        if (runtime) {
          runtime.setSessionValue(storageKey, mode);
        } else {
          try {
            win.localStorage?.setItem(storageKey, mode);
          } catch {}
        }
        win.dispatchEvent(
          new win.CustomEvent("swebsy:color-mode-preference", {
            detail: { mode, source: el },
          })
        );
      };
      let activePreference = readPreference() || configuredMode;
      if (runtime && !readPreference()) {
        runtime.setSessionValue(storageKey, activePreference);
      }
      const apply = (mode, persist = false) => {
        const preference = normalizeMode2(mode);
        if (!preference) return;
        activePreference = preference;
        el.setAttribute("data-mode", preference);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === preference;
        });
        updateCycleButton(preference);
        const resolved = resolveMode(preference);
        root.classList.toggle("dark", resolved === "dark");
        root.classList.toggle("light", resolved === "light");
        root.style.colorScheme = resolved;
        runtime?.notifyColorMode(resolved);
        if (persist) publishPreference(preference);
      };
      const onMediaChange = () => {
        if (activePreference === "system") apply("system");
      };
      if (mediaQuery && typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", onMediaChange);
        cleanups.push(() =>
          mediaQuery.removeEventListener("change", onMediaChange)
        );
      } else if (mediaQuery && typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(onMediaChange);
        cleanups.push(() => mediaQuery.removeListener?.(onMediaChange));
      }
      inputs.forEach((input) => {
        const onInputChange = () => {
          const mode = input.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        input.addEventListener("change", onInputChange);
        cleanups.push(() => input.removeEventListener("change", onInputChange));
      });
      el.querySelectorAll("label[for]").forEach((label) => {
        const onLabelClick = () => {
          const input = label.previousElementSibling;
          const mode = input?.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        label.addEventListener("click", onLabelClick);
        cleanups.push(() => label.removeEventListener("click", onLabelClick));
      });
      const cycleButton = el.querySelector("[data-theme-cycle-button]");
      if (cycleButton) {
        const onCycleClick = () => apply(nextMode(activePreference), true);
        cycleButton.addEventListener("click", onCycleClick);
        cleanups.push(() =>
          cycleButton.removeEventListener("click", onCycleClick)
        );
      }
      const onPreference = (event) => {
        const detail = event.detail;
        if (detail?.source !== el && detail?.mode) {
          apply(detail.mode);
        }
      };
      win.addEventListener("swebsy:color-mode-preference", onPreference);
      cleanups.push(() =>
        win.removeEventListener("swebsy:color-mode-preference", onPreference)
      );
      el.__swebsyDarkModeSwitchCleanup = () => {
        cleanups.splice(0).forEach((cleanup) => cleanup());
        el.setAttribute("data-mode", configuredMode);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === configuredMode;
        });
        updateCycleButton(configuredMode);
      };
      apply(activePreference);
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      el.__swebsyDarkModeSwitchUnregister = runtime.register(
        el,
        "dark-mode-switch",
        {
          start: () => start(runtime),
          stop: () => el.__swebsyDarkModeSwitchCleanup?.(),
        }
      );
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      el.__swebsyDarkModeSwitchRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ifu2-2-6");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const nav = this;
    const win = nav.ownerDocument?.defaultView;
    if (!win) return;
    if (nav.dataset.navbarCollapseInit === "1" && !win.__swebsyPreviewRuntime) {
      return;
    }
    nav.__swebsyNavbarUnregister?.();
    if (nav.__swebsyNavbarRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        nav.__swebsyNavbarRuntimeReady
      );
      delete nav.__swebsyNavbarRuntimeReady;
    }
    nav.__swebsyNavbarCleanup?.();
    const toggler = nav.querySelector('[data-navbar-part="toggler"]');
    const panel = nav.querySelector('[data-navbar-part="collapse"]');
    if (!toggler || !panel) return;
    const start = () => {
      nav.__swebsyNavbarCleanup?.();
      nav.dataset.navbarCollapseInit = "1";
      const panelClass = panel.className;
      const panelHeight = panel.style.height;
      const togglerClass = toggler.className;
      const ariaExpanded = toggler.getAttribute("aria-expanded");
      let transitionTimer;
      const transitionMs = () => {
        const raw = win.getComputedStyle(panel).transitionDuration ?? "0s";
        const values = raw.split(",").map((s) => {
          const n = parseFloat(s.trim());
          return s.trim().endsWith("ms") ? n : n * 1e3;
        });
        const max = Math.max(...values);
        return Number.isFinite(max) && max > 0 ? max : 0;
      };
      const schedule = (callback) => {
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        transitionTimer = win.setTimeout(callback, transitionMs());
      };
      const open = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        panel.style.height = "0";
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + "px";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse", "show");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "true");
          toggler.classList.remove("collapsed");
        });
      };
      const close = () => {
        if (panel.classList.contains("collapsing")) return;
        panel.style.height = panel.getBoundingClientRect().height + "px";
        panel.classList.remove("collapse", "show");
        panel.classList.add("collapsing");
        void panel.offsetHeight;
        panel.style.height = "0";
        schedule(() => {
          panel.classList.remove("collapsing");
          panel.classList.add("collapse");
          panel.style.height = "";
          toggler.setAttribute("aria-expanded", "false");
          toggler.classList.add("collapsed");
        });
      };
      const onToggle = () => {
        if (panel.classList.contains("show")) close();
        else open();
      };
      toggler.addEventListener("click", onToggle);
      nav.__swebsyNavbarCleanup = () => {
        toggler.removeEventListener("click", onToggle);
        if (transitionTimer !== void 0) {
          win.clearTimeout(transitionTimer);
        }
        panel.className = panelClass;
        panel.style.height = panelHeight;
        toggler.className = togglerClass;
        if (ariaExpanded === null) {
          toggler.removeAttribute("aria-expanded");
        } else {
          toggler.setAttribute("aria-expanded", ariaExpanded);
        }
        delete nav.dataset.navbarCollapseInit;
      };
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      nav.__swebsyNavbarUnregister = runtime.register(nav, "navbar", {
        start,
        stop: () => nav.__swebsyNavbarCleanup?.(),
      });
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      nav.__swebsyNavbarRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
var items = document.querySelectorAll("#ibweeoj");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const form2 = this;
    const doc = form2.ownerDocument;
    const win = doc?.defaultView;
    if (!doc || !win) return;
    const SWEBSY_PREFIX = "/__forms/";
    const isSwebsy = (value) => (value ?? "").trim().startsWith(SWEBSY_PREFIX);
    const isConfigured = (value) => {
      const action = (value ?? "").trim();
      if (!action || action === "#") return false;
      if (
        /(?:\{\{?\s*(?:form[_ -]?id|endpoint)\s*\}?\}|your[_ -]?(?:form[_ -]?id|endpoint)|FORM_ID)/i.test(
          action
        )
      ) {
        return false;
      }
      if (
        (action.startsWith("/") && !action.startsWith("//")) ||
        action.startsWith("./") ||
        action.startsWith("../") ||
        /^https:\/\//i.test(action)
      ) {
        return true;
      }
      try {
        const url = new URL(action);
        return (
          url.protocol === "http:" &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
        );
      } catch {
        return false;
      }
    };
    const statusEl = () => {
      let status = form2.querySelector("[data-swebsy-form-status]");
      if (!status) {
        status = doc.createElement("p");
        status.setAttribute("data-swebsy-form-status", "");
        status.setAttribute("role", "alert");
        status.setAttribute("tabindex", "-1");
        status.style.cssText =
          "margin:.75rem 0 0;font-size:.875rem;line-height:1.5";
        form2.appendChild(status);
      }
      return status;
    };
    const showStatus = (message, ok = false) => {
      const status = statusEl();
      status.style.color = ok
        ? "var(--color-success,currentColor)"
        : "var(--color-danger,currentColor)";
      status.hidden = false;
      status.textContent = message;
      status.focus({ preventScroll: true });
    };
    const clearStatus = () => {
      const status = form2.querySelector("[data-swebsy-form-status]");
      if (status) status.hidden = true;
    };
    const resetTurnstile = () => {
      form2.__swebsyTurnstileToken = void 0;
      if (form2.__swebsyTurnstileWidget && win.turnstile) {
        win.turnstile.reset(form2.__swebsyTurnstileWidget);
      }
    };
    const ensureChallenge = async () => {
      if (
        win.__swebsyPreviewRuntime ||
        !isSwebsy(form2.getAttribute("action")) ||
        form2.__swebsyTurnstileWidget ||
        form2.__swebsyTurnstileLoading
      ) {
        return;
      }
      form2.__swebsyTurnstileLoading = true;
      try {
        const configResponse = await win.fetch("/__forms/turnstile", {
          headers: { Accept: "application/json" },
        });
        if (!configResponse.ok) throw new Error("config unavailable");
        const config = await configResponse.json();
        form2.__swebsyNonce = config.nonce;
        if (!config.siteKey) return;
        form2.__swebsyTurnstileRequired = true;
        if (!win.turnstile) {
          await new Promise((resolve, reject) => {
            const existing = doc.querySelector("script[data-swebsy-turnstile]");
            const script = existing ?? doc.createElement("script");
            script.addEventListener("load", () => resolve(), {
              once: true,
            });
            script.addEventListener("error", () => reject(), {
              once: true,
            });
            if (!existing) {
              script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
              script.async = true;
              script.defer = true;
              script.setAttribute("data-swebsy-turnstile", "");
              doc.head.appendChild(script);
            }
          });
        }
        if (!win.turnstile) throw new Error("widget unavailable");
        const container = doc.createElement("div");
        container.setAttribute("data-swebsy-turnstile", "");
        const submit = form2.querySelector("[type=submit]") ?? null;
        (submit?.parentElement ?? form2).insertBefore(container, submit);
        form2.__swebsyTurnstileWidget = win.turnstile.render(container, {
          sitekey: config.siteKey,
          action: "form_submit",
          // Matches the Studio's auth widget. Managed mode already decides
          // per visitor whether a challenge is needed; "interaction-only"
          // stops it drawing anything for the majority who need nothing,
          // and the token still arrives through `callback` either way.
          size: "flexible",
          appearance: "interaction-only",
          callback: (token) => {
            form2.__swebsyTurnstileToken = token;
            form2.__swebsyTurnstileFailed = false;
          },
          "expired-callback": resetTurnstile,
          // Deliberately not `resetTurnstile`. reset() re-runs the
          // challenge, so a non-retryable error — 110200, this domain is
          // not on the widget's hostname list — errors again immediately
          // and the widget strobes forever. Record the failure and let
          // submit explain it. Returning falsy keeps Cloudflare's own
          // console log of the error code, which is how you diagnose it.
          "error-callback": () => {
            form2.__swebsyTurnstileToken = void 0;
            form2.__swebsyTurnstileFailed = true;
          },
        });
      } catch {
        form2.__swebsyTurnstileFailed = true;
      } finally {
        form2.__swebsyTurnstileLoading = false;
      }
    };
    void ensureChallenge();
    if (form2.__swebsyFormSubmitHandler) {
      form2.removeEventListener(
        "submit",
        form2.__swebsyFormSubmitHandler,
        true
      );
    }
    const submitToSwebsy = async (action) => {
      if (
        (form2.__swebsyTurnstileRequired || form2.__swebsyTurnstileFailed) &&
        !form2.__swebsyTurnstileToken
      ) {
        showStatus(
          form2.__swebsyTurnstileFailed
            ? "The security check could not load. Refresh and try again."
            : "Complete the security check to continue."
        );
        return;
      }
      const buttons = Array.from(form2.querySelectorAll("[type=submit]"));
      buttons.forEach((b) => (b.disabled = true));
      const body = new FormData(form2);
      if (form2.__swebsyNonce) body.set("_swebsy_ts", form2.__swebsyNonce);
      try {
        const res = await win.fetch(action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body,
        });
        if (!res.ok) {
          const body2 = await res.json().catch(() => null);
          showStatus(
            body2?.message ?? "Something went wrong. Please try again."
          );
          resetTurnstile();
          return;
        }
        const redirect = form2.getAttribute("data-redirect");
        if (redirect) {
          win.location.href = redirect;
          return;
        }
        const message =
          form2.getAttribute("data-success-message") ||
          "Thanks — your message has been sent.";
        const done = doc.createElement("p");
        done.setAttribute("role", "status");
        done.setAttribute("tabindex", "-1");
        done.setAttribute("data-swebsy-form-done", "");
        done.textContent = message;
        form2.replaceChildren(done);
        done.focus({ preventScroll: true });
      } catch {
        resetTurnstile();
        showStatus("Could not reach the server. Please try again.");
      } finally {
        buttons.forEach((b) => (b.disabled = false));
      }
    };
    const onSubmit = (event) => {
      const runtime = win.__swebsyPreviewRuntime;
      const action = form2.getAttribute("action");
      if (runtime && !runtime.active) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus("Use Preview to test this form.");
        return;
      }
      if (!isConfigured(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        showStatus(
          runtime
            ? "This form is not connected. Select the form in the Layers panel, then choose where submissions go under Settings."
            : "This form is not accepting submissions yet."
        );
        return;
      }
      if (isSwebsy(action)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (runtime) {
          showStatus(
            "Test mode — submissions are delivered from your published site.",
            true
          );
          return;
        }
        clearStatus();
        void submitToSwebsy(action);
        return;
      }
      clearStatus();
      if (runtime?.active) {
        event.preventDefault();
        const previousTarget = form2.getAttribute("target");
        form2.setAttribute("target", "_blank");
        try {
          HTMLFormElement.prototype.submit.call(form2);
        } finally {
          if (previousTarget === null) form2.removeAttribute("target");
          else form2.setAttribute("target", previousTarget);
        }
      }
    };
    form2.__swebsyFormSubmitHandler = onSubmit;
    form2.addEventListener("submit", onSubmit, true);
  }).bind(items[i])();
}
var items = document.querySelectorAll("#i0nvyn-2-6");
for (var i = 0, len = items.length; i < len; i++) {
  (function () {
    const el = this;
    const win = el.ownerDocument?.defaultView;
    const root = el.ownerDocument?.documentElement;
    if (!win || !root) return;
    const storageKey = "swebsy:color-mode";
    const incomingConfiguredMode = el.getAttribute("data-mode");
    el.__swebsyDarkModeSwitchUnregister?.();
    if (el.__swebsyDarkModeSwitchRuntimeReady) {
      win.removeEventListener(
        "swebsy:preview-runtime-ready",
        el.__swebsyDarkModeSwitchRuntimeReady
      );
      delete el.__swebsyDarkModeSwitchRuntimeReady;
    }
    el.__swebsyDarkModeSwitchCleanup?.();
    const scope =
      el.id || `dark-mode-switch-${Math.random().toString(36).slice(2, 9)}`;
    const getInputs = () =>
      Array.from(el.querySelectorAll("input[type=radio][data-mode]"));
    const inputs = getInputs();
    inputs.forEach((input) => {
      const mode = input.getAttribute("data-mode");
      if (!mode) return;
      input.id = `${scope}__${mode}`;
      input.name = `${scope}__toggle`;
    });
    el.querySelectorAll("label[for]").forEach((label) => {
      const sibling = label.previousElementSibling;
      if (sibling?.tagName === "INPUT" && sibling.id) {
        label.setAttribute("for", sibling.id);
      }
    });
    const normalizeMode2 = (mode) =>
      mode === "system" || mode === "light" || mode === "dark" ? mode : null;
    const modeLabel = (mode) =>
      mode === "system" ? "System" : mode === "dark" ? "Dark" : "Light";
    const nextMode = (mode) =>
      mode === "system" ? "light" : mode === "light" ? "dark" : "system";
    const updateCycleButton = (preference) => {
      const button = el.querySelector("[data-theme-cycle-button]");
      if (!button) return;
      const next = nextMode(preference);
      const label = `Theme: ${modeLabel(preference)}. Click to switch to ${modeLabel(next)}.`;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.querySelectorAll("[data-theme-mode-icon]").forEach((icon) => {
        icon.hidden = icon.getAttribute("data-theme-mode-icon") !== preference;
      });
    };
    const configuredMode = normalizeMode2(incomingConfiguredMode) || "system";
    const start = (runtime) => {
      el.__swebsyDarkModeSwitchCleanup?.();
      const cleanups = [];
      const mediaQuery = win.matchMedia
        ? win.matchMedia("(prefers-color-scheme: dark)")
        : null;
      const resolveMode = (mode) =>
        mode === "system" ? (mediaQuery?.matches ? "dark" : "light") : mode;
      const readPreference = () => {
        if (runtime) {
          return normalizeMode2(runtime.getSessionValue(storageKey));
        }
        try {
          return normalizeMode2(win.localStorage?.getItem(storageKey));
        } catch {
          return null;
        }
      };
      const publishPreference = (mode) => {
        if (runtime) {
          runtime.setSessionValue(storageKey, mode);
        } else {
          try {
            win.localStorage?.setItem(storageKey, mode);
          } catch {}
        }
        win.dispatchEvent(
          new win.CustomEvent("swebsy:color-mode-preference", {
            detail: { mode, source: el },
          })
        );
      };
      let activePreference = readPreference() || configuredMode;
      if (runtime && !readPreference()) {
        runtime.setSessionValue(storageKey, activePreference);
      }
      const apply = (mode, persist = false) => {
        const preference = normalizeMode2(mode);
        if (!preference) return;
        activePreference = preference;
        el.setAttribute("data-mode", preference);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === preference;
        });
        updateCycleButton(preference);
        const resolved = resolveMode(preference);
        root.classList.toggle("dark", resolved === "dark");
        root.classList.toggle("light", resolved === "light");
        root.style.colorScheme = resolved;
        runtime?.notifyColorMode(resolved);
        if (persist) publishPreference(preference);
      };
      const onMediaChange = () => {
        if (activePreference === "system") apply("system");
      };
      if (mediaQuery && typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", onMediaChange);
        cleanups.push(() =>
          mediaQuery.removeEventListener("change", onMediaChange)
        );
      } else if (mediaQuery && typeof mediaQuery.addListener === "function") {
        mediaQuery.addListener(onMediaChange);
        cleanups.push(() => mediaQuery.removeListener?.(onMediaChange));
      }
      inputs.forEach((input) => {
        const onInputChange = () => {
          const mode = input.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        input.addEventListener("change", onInputChange);
        cleanups.push(() => input.removeEventListener("change", onInputChange));
      });
      el.querySelectorAll("label[for]").forEach((label) => {
        const onLabelClick = () => {
          const input = label.previousElementSibling;
          const mode = input?.getAttribute("data-mode");
          if (mode && mode !== activePreference) apply(mode, true);
        };
        label.addEventListener("click", onLabelClick);
        cleanups.push(() => label.removeEventListener("click", onLabelClick));
      });
      const cycleButton = el.querySelector("[data-theme-cycle-button]");
      if (cycleButton) {
        const onCycleClick = () => apply(nextMode(activePreference), true);
        cycleButton.addEventListener("click", onCycleClick);
        cleanups.push(() =>
          cycleButton.removeEventListener("click", onCycleClick)
        );
      }
      const onPreference = (event) => {
        const detail = event.detail;
        if (detail?.source !== el && detail?.mode) {
          apply(detail.mode);
        }
      };
      win.addEventListener("swebsy:color-mode-preference", onPreference);
      cleanups.push(() =>
        win.removeEventListener("swebsy:color-mode-preference", onPreference)
      );
      el.__swebsyDarkModeSwitchCleanup = () => {
        cleanups.splice(0).forEach((cleanup) => cleanup());
        el.setAttribute("data-mode", configuredMode);
        getInputs().forEach((input) => {
          input.checked = input.getAttribute("data-mode") === configuredMode;
        });
        updateCycleButton(configuredMode);
      };
      apply(activePreference);
    };
    const register = () => {
      const runtime = win.__swebsyPreviewRuntime;
      if (!runtime) return false;
      el.__swebsyDarkModeSwitchUnregister = runtime.register(
        el,
        "dark-mode-switch",
        {
          start: () => start(runtime),
          stop: () => el.__swebsyDarkModeSwitchCleanup?.(),
        }
      );
      return true;
    };
    const isEditorCanvas = (() => {
      try {
        return win.parent !== win && !!win.parent.__swebsyEditorCanvas;
      } catch {
        return false;
      }
    })();
    if (register()) return;
    if (isEditorCanvas) {
      const onRuntimeReady = () => register();
      el.__swebsyDarkModeSwitchRuntimeReady = onRuntimeReady;
      win.addEventListener("swebsy:preview-runtime-ready", onRuntimeReady, {
        once: true,
      });
      return;
    }
    start();
  }).bind(items[i])();
}
