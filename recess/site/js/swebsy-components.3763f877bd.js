var items = document.querySelectorAll("#idra");
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
var items = document.querySelectorAll("#ivzgzr");
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
