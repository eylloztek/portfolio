const projects = [
  {
    title: "STM32 BME280 PID Temperature Controller",
    category: "System / Control / GUI",
    filters: ["system", "control", "gui"],
    featured: true,
    description:
      "Temperature control system using STM32 Nucleo-F446RE, BME280 feedback, a custom PID controller, UART telemetry, OLED display, Flash-based PID storage, and a Python GUI for live monitoring and tuning.",
    tags: ["STM32", "BME280", "PID", "UART", "PWM", "Flash", "Python GUI"],
    url: "https://github.com/eylloztek/stm32-pid-temperature-controller"
  },
  {
    title: "STM32 PID Controller with Python GUI",
    category: "Control / GUI",
    filters: ["control", "gui", "system"],
    featured: true,
    description:
      "A PID control experiment where STM32 reads analog feedback over ADC, calculates the PID output, writes DAC output, and streams live data to a Python GUI for tuning and response analysis.",
    tags: ["STM32", "PID", "ADC", "DAC", "UART", "Tkinter", "Matplotlib"],
    url: "https://github.com/eylloztek/stm32-pid-controller"
  },
  {
    title: "STM32 Signal Generator",
    category: "System",
    filters: ["system"],
    featured: true,
    description:
      "Mini signal generator producing square, sine, and triangle waves using PWM, DAC, DMA, timer triggering, push buttons, and an SSD1306 OLED menu interface.",
    tags: ["STM32", "PWM", "DAC", "DMA", "Timers", "OLED", "Buttons"],
    url: "https://github.com/eylloztek/stm32-signal-generator"
  },
  {
    title: "STM32 FreeRTOS Space Shooter Game",
    category: "System / Game",
    filters: ["system", "game"],
    featured: true,
    description:
      "Hardware-controlled retro space shooter. STM32 with FreeRTOS reads ADXL345 motion and button inputs, sends UART data to a Python/Pygame interface, and receives game feedback commands.",
    tags: ["STM32", "FreeRTOS", "ADXL345", "UART", "Python", "Pygame"],
    url: "https://github.com/eylloztek/stm32-space-shooter-game"
  },
  {
    title: "SmartMotionTracker",
    category: "System",
    filters: ["system"],
    featured: false,
    description:
      "Tilt measurement and servo control project using STM32 Nucleo-F446RE, ADXL345, SSD1306 OLED, SG90 servo, and HM-10 Bluetooth control.",
    tags: ["STM32", "ADXL345", "OLED", "Servo", "HM-10", "UART", "PWM"],
    url: "https://github.com/eylloztek/SmartMotionTracker"
  },
  {
    title: "AT24C256 EEPROM Library",
    category: "Driver",
    filters: ["driver"],
    featured: false,
    description:
      "STM32 HAL I2C driver for AT24C256 EEPROM with initialization, random/sequential read, page-safe write, ACK polling, page erase, full memory erase, and range validation.",
    tags: ["STM32 HAL", "I2C", "EEPROM", "AT24C256", "Driver"],
    url: "https://github.com/eylloztek/at24c256-eeprom-library"
  },
  {
    title: "LIS302DL Accelerometer Driver",
    category: "Driver",
    filters: ["driver"],
    featured: false,
    description:
      "STM32 HAL SPI driver for LIS302DL with WHO_AM_I validation, range and data-rate configuration, raw acceleration reading, g conversion, and status checking.",
    tags: ["STM32 HAL", "SPI", "LIS302DL", "Accelerometer", "Driver"],
    url: "https://github.com/eylloztek/lis302dl-library"
  },
  {
    title: "2-Axis Joystick Driver",
    category: "Driver / Input",
    filters: ["driver"],
    featured: false,
    description:
      "Lightweight joystick module driver for STM32. Reads X/Y analog axes using ADC with DMA and provides a helper function for the joystick push button.",
    tags: ["STM32 HAL", "ADC", "DMA", "GPIO", "Joystick"],
    url: "https://github.com/eylloztek/2axis-joystick-library"
  },
  {
    title: "ADXL345 Accelerometer Driver",
    category: "Driver",
    filters: ["driver"],
    featured: false,
    description:
      "STM32 HAL I2C driver for ADXL345 with device initialization, range/data-rate configuration, raw acceleration reading, g conversion, roll/pitch calculation, and offset calibration.",
    tags: ["STM32 HAL", "I2C", "ADXL345", "Roll/Pitch", "Driver"],
    url: "https://github.com/eylloztek/adxl345-library"
  },
  {
    title: "4x4 Keypad Library",
    category: "Driver / Input",
    filters: ["driver"],
    featured: false,
    description:
      "Configurable STM32 HAL matrix keypad driver with custom key maps, software debounce, continuous read, single-detection read, blocking read, and multiple handle support.",
    tags: ["STM32 HAL", "GPIO", "Keypad", "Debounce", "Driver"],
    url: "https://github.com/eylloztek/4x4-keypad-library"
  },
  {
    title: "BME280 Environmental Sensor Driver",
    category: "Driver",
    filters: ["driver"],
    featured: false,
    description:
      "STM32 HAL I2C driver for Bosch BME280 with chip ID verification, calibration data reading, temperature/pressure/humidity compensation, forced/normal modes, and altitude calculation.",
    tags: ["STM32 HAL", "I2C", "BME280", "Sensor", "Driver"],
    url: "https://github.com/eylloztek/bme280-library"
  },
  {
    title: "A64 Bytecode VM",
    category: "Systems / Virtual Machine / Assembly",
    filters: ["system", "vm", "assembly"],
    featured: true,
    description:
      "A stack-based bytecode virtual machine with independent C reference and AArch64 assembly execution engines. Includes a static verifier, assembler, disassembler, versioned bytecode container with CRC-32, instruction tracing, and differential testing under QEMU.",
    tags: ["C", "AArch64 Assembly", "Bytecode", "Virtual Machine", "Verifier", "Python", "QEMU"],
    url: "https://github.com/eylloztek/a64-bytecode-vm"
  },
  {
    title: "ForgeRTOS",
    category: "Embedded / RTOS / Systems",
    filters: ["system", "rtos", "assembly"],
    featured: true,
    description:
      "An in-development preemptive RTOS kernel for STM32F446RE and ARM Cortex-M4, written from scratch in C and ARM Thumb assembly. Current work covers task contexts, SVC/PendSV context switching, SysTick preemption, fixed priorities, and round-robin scheduling; synchronization and IPC are on the roadmap.",
    tags: ["C", "ARM Thumb", "Cortex-M4", "STM32F446RE", "RTOS", "SysTick", "PendSV", "CMake"],
    url: "https://github.com/eylloztek/ForgeRTOS"
  },
  {
    title: "AArch64 CRC32",
    category: "Systems / Assembly",
    filters: ["system", "assembly"],
    featured: true,
    description:
      "CRC-32 implementations written in AArch64 assembly for Linux: bitwise, table-driven, and ARMv8 hardware-assisted engines. Includes streaming file I/O through Linux syscalls, reference-vector and equivalence tests, and a benchmark suite.",
    tags: ["AArch64 Assembly", "ARMv8", "CRC-32", "Linux Syscalls", "QEMU", "Benchmarks"],
    url: "https://github.com/eylloztek/aarch64-crc32"
  }
];

// This is a portfolio simulation: input is parsed in the browser, never executed by a shell.
const output = document.querySelector("#terminal-output");
let initialSession = document.querySelector("#initial-session");
const originalSession = initialSession.cloneNode(true);
const dynamicSession = document.querySelector("#dynamic-session");
const promptForm = document.querySelector("#prompt-form");
const commandInput = document.querySelector("#command-input");
const announcement = document.querySelector("#terminal-announcement");
const history = [];
let historyIndex = 0;

const commands = [
  ["help", "Show the available commands"],
  ["about / whoami", "Read the introduction"],
  ["skills", "Display the technology stack"],
  ["projects", "List all 14 repositories"],
  ["projects --type driver", "Filter by system, control, driver, game, gui, rtos, vm, or assembly"],
  ["search uart", "Search project names, descriptions, and technologies"],
  ["open 1", "Inspect a project by number or repository name"],
  ["contact", "Show email, GitHub, and LinkedIn links"],
  ["neofetch / pwd", "Display session information / current directory"],
  ["clear / home", "Clear the screen / restore the welcome session"]
];

function element(tag, className = "", text = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function appendEcho(command) {
  const line = element("div", "command-line");
  [["visitor", "user"], ["@", "at"], ["eylul", "host"], [":", "dim"], ["~", "path"], ["$", "dollar"], [command, "command-text"]]
    .forEach(([text, className]) => line.appendChild(element("span", className, text)));
  return line;
}

function appendEntry(command, buildResult) {
  const entry = element("section", "output-entry");
  entry.appendChild(appendEcho(command));
  const result = element("div", "command-result");
  buildResult(result);
  entry.appendChild(result);
  dynamicSession.appendChild(entry);
  output.scrollTop = output.scrollHeight;
  return result;
}

function appendProjectList(target, matching, context = "") {
  const count = matching.length;
  const note = element("p", "listing-note");
  note.append("total ");
  note.appendChild(element("strong", "", String(count)));
  note.append(` ${count === 1 ? "repository" : "repositories"}${context ? ` · ${context}` : ""}`);
  target.appendChild(note);

  if (!count) {
    target.appendChild(element("p", "dim", "No matching projects. Try 'projects' or 'search i2c'."));
    return;
  }

  const heading = element("div", "list-heading");
  heading.setAttribute("aria-hidden", "true");
  ["ID", "TYPE", "NAME", "GIT"].forEach((name) => heading.appendChild(element("span", "", name)));
  target.appendChild(heading);
  const list = element("div", "project-list");

  matching.forEach((project) => {
    const index = projects.indexOf(project) + 1;
    const row = element("div", "project-row");
    const button = element("button");
    button.type = "button";
    button.dataset.command = `open ${index}`;
    button.setAttribute("aria-label", `Inspect ${project.title}`);
    button.appendChild(element("span", "project-id", String(index).padStart(2, "0")));
    button.appendChild(element("span", "project-kind", project.filters.includes("driver") ? "DRIVER" : project.filters.includes("control") ? "CONTROL" : project.filters.includes("game") ? "GAME" : project.filters.includes("rtos") ? "RTOS" : project.filters.includes("vm") ? "VM" : project.filters.includes("assembly") ? "ASM" : "SYSTEM"));
    const name = element("span", "project-name", project.url.split("/").at(-1));
    name.appendChild(element("span", "row-slash", "/"));
    button.appendChild(name);
    row.appendChild(button);
    const github = element("a", "", "↗");
    github.href = project.url;
    github.target = "_blank";
    github.rel = "noopener noreferrer";
    github.setAttribute("aria-label", `Open ${project.title} on GitHub`);
    row.appendChild(github);
    list.appendChild(row);
  });

  target.appendChild(list);
  target.appendChild(element("p", "listing-hint dim", "Hint: open 1 · search pid · projects --type driver"));
}

function appendProjectDetails(target, project) {
  const index = projects.indexOf(project) + 1;
  const detail = element("div", "project-detail");
  detail.appendChild(element("div", "detail-header", `~/projects/${project.url.split("/").at(-1)}/README.md  [${String(index).padStart(2, "0")}/${projects.length}]`));
  detail.appendChild(element("h3", "", project.title));
  detail.appendChild(element("p", "", project.description));
  const tags = element("div", "detail-tags");
  project.tags.forEach((tag) => tags.appendChild(element("span", "", tag)));
  detail.appendChild(tags);
  const link = element("a", "repo-link", "↗ View source on GitHub");
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  detail.appendChild(link);
  target.appendChild(detail);
}

function cloneOriginalResult(id, target) {
  const original = document.querySelector(`#initial-session #${id} .command-result`) || originalSession.querySelector(`#${id} .command-result`);
  target.appendChild(original.cloneNode(true));
}

function writeHelp(target) {
  target.appendChild(element("p", "", "Available commands (click an example or type it below):"));
  const grid = element("div", "help-grid");
  commands.forEach(([command, explanation]) => {
    grid.appendChild(element("code", "", command));
    grid.appendChild(element("span", "", explanation));
  });
  target.appendChild(grid);
  target.appendChild(element("p", "listing-hint dim", "↑ / ↓ browse command history. All commands are simulated inside this page."));
}

function writeNeofetch(target) {
  const block = element("div", "neofetch");
  block.appendChild(element("pre", "neofetch-art", "   ┌────────┐\n   │  >_    │\n   │  STM32 │\n   │  /dev  │\n   └────────┘"));
  const info = element("div", "neofetch-info");
  [["user", "Eylül Öztek"], ["shell", "portfolio / bash-inspired UI"], ["focus", "embedded & systems software"], ["projects", `${projects.length} repositories`], ["stack", "C · STM32 · AArch64 · Python · RTOS"], ["runtime", "HTML · CSS · JavaScript"]]
    .forEach(([key, value]) => {
      const row = element("div");
      row.appendChild(element("span", "key", key));
      row.appendChild(element("span", "punct", ":"));
      row.appendChild(element("span", "", value));
      info.appendChild(row);
    });
  block.appendChild(info);
  target.appendChild(block);
}

function runCommand(rawCommand) {
  const command = rawCommand.trim();
  if (!command) return;
  history.push(command);
  historyIndex = history.length;
  commandInput.value = "";
  const lower = command.toLowerCase();
  const [name] = lower.split(/\s+/);

  if (name === "clear" && lower === "clear") {
    initialSession.replaceChildren();
    dynamicSession.replaceChildren();
    announcement.textContent = "Terminal cleared. Type home to restore the portfolio.";
    output.scrollTop = 0;
    return;
  }
  if (["home", "reset"].includes(lower)) {
    const restored = originalSession.cloneNode(true);
    initialSession.replaceWith(restored);
    initialSession = restored;
    dynamicSession.replaceChildren();
    output.scrollTop = 0;
    announcement.textContent = "Portfolio welcome session restored.";
    return;
  }

  if (lower === "help" || lower === "--help") {
    appendEntry(command, writeHelp);
    announcement.textContent = "Available commands displayed.";
  } else if (["about", "whoami", "cat about.md", "cat ~/about.md"].includes(lower)) {
    appendEntry(command, (target) => cloneOriginalResult("about", target));
    announcement.textContent = "About section displayed.";
  } else if (["skills", "stack", "cat stack.conf", "cat ~/stack.conf"].includes(lower)) {
    appendEntry(command, (target) => cloneOriginalResult("skills", target));
    announcement.textContent = "Technology stack displayed.";
  } else if (["contact", "cat contact.txt", "cat ~/contact.txt"].includes(lower)) {
    appendEntry(command, (target) => cloneOriginalResult("contact", target));
    announcement.textContent = "Contact links displayed.";
  } else if (lower === "pwd") {
    appendEntry(command, (target) => target.appendChild(element("p", "", "/home/eylul/portfolio")));
    announcement.textContent = "Current directory displayed.";
  } else if (lower === "neofetch") {
    appendEntry(command, writeNeofetch);
    announcement.textContent = "Portfolio system information displayed.";
  } else if (["projects", "ls", "ls -lah", "ls ~/projects", "ls -lah ~/projects", "ls projects", "ls -l"].includes(lower)) {
    appendEntry(command, (target) => appendProjectList(target, projects));
    announcement.textContent = `Showing ${projects.length} projects.`;
  } else if (/^projects\s+--type\s+\w+$/.test(lower)) {
    const type = lower.split(/\s+/)[2];
    if (!["system", "control", "driver", "game", "gui", "rtos", "vm", "assembly"].includes(type)) {
      appendEntry(command, (target) => target.appendChild(element("p", "error", `Unknown type '${type}'. Use system, control, driver, game, gui, rtos, vm, or assembly.`)));
      announcement.textContent = "Unknown project type.";
    } else {
      const matching = projects.filter((project) => project.filters.includes(type));
      appendEntry(command, (target) => appendProjectList(target, matching, `type=${type}`));
      announcement.textContent = `Showing ${matching.length} ${type} projects.`;
    }
  } else if (/^(search|projects\s+--search)\s+.+$/i.test(command)) {
    const query = command.replace(/^(search|projects\s+--search)\s+/i, "").trim().toLowerCase();
    const matching = projects.filter((project) => [project.title, project.category, project.url.split("/").at(-1), project.description, ...project.tags].join(" ").toLowerCase().includes(query));
    appendEntry(command, (target) => appendProjectList(target, matching, `search='${query}'`));
    announcement.textContent = `${matching.length} matching projects.`;
  } else if (/^open\s+.+$/i.test(command)) {
    const identifier = command.replace(/^open\s+/i, "").trim().toLowerCase();
    const index = Number(identifier);
    let matching = [];
    if (/^\d+$/.test(identifier)) {
      if (index >= 1 && index <= projects.length) matching = [projects[index - 1]];
    } else {
      matching = projects.filter((project) => project.url.split("/").at(-1).toLowerCase().includes(identifier) || project.title.toLowerCase().includes(identifier));
    }
    if (matching.length === 1) {
      appendEntry(command, (target) => appendProjectDetails(target, matching[0]));
      announcement.textContent = `${matching[0].title} details displayed.`;
    } else if (matching.length > 1) {
      appendEntry(command, (target) => appendProjectList(target, matching, "multiple matches · choose a number"));
      announcement.textContent = "Multiple projects matched. Choose a project number.";
    } else {
      appendEntry(command, (target) => target.appendChild(element("p", "error", `No project found for '${identifier}'. Run 'projects' to see valid IDs.`)));
      announcement.textContent = "Project not found.";
    }
  } else {
    appendEntry(command, (target) => {
      target.appendChild(element("p", "error", `Command not found: ${name}`));
      target.appendChild(element("p", "dim", "This is a portfolio interface, not a real shell. Type 'help' to see supported commands."));
    });
    announcement.textContent = "Unknown command. Type help to see supported commands.";
  }
}

promptForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runCommand(commandInput.value);
});

// Event delegation also handles dynamically generated project rows.
document.addEventListener("click", (event) => {
  const trigger = event.target.closest("button[data-command]");
  if (trigger) runCommand(trigger.dataset.command);
});

commandInput.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && history.length) {
    event.preventDefault();
    historyIndex = Math.max(0, historyIndex - 1);
    commandInput.value = history[historyIndex];
  } else if (event.key === "ArrowDown" && history.length) {
    event.preventDefault();
    historyIndex = Math.min(history.length, historyIndex + 1);
    commandInput.value = historyIndex === history.length ? "" : history[historyIndex];
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
