# Embedded Portfolio · Terminal Edition

A single-page, Linux-terminal-inspired portfolio for my projects. Built with **plain HTML, CSS, and JavaScript**; no frameworks, build process, API keys, trackers, or backend.

## What the interface does

The entire site is designed as a terminal window rather than a conventional portfolio with a terminal-themed hero. The welcome session shows the introduction, technology stack, all projects, and contact links. The command prompt, quick-command toolbar, and file explorer let visitors navigate the same content interactively.

Supported commands:

```text
help                        List commands
about / whoami              Introduction
skills                      Technologies and tools
projects                    List all repositories
projects --type driver      Filter: system, control, driver, game, gui, rtos, vm, assembly
search uart                 Search by title, description, or technology
open 1                      Inspect project #1 (or use a repository name)
contact                     Email, GitHub, and LinkedIn
neofetch                    Portfolio summary
pwd                         Show simulated current directory
clear                       Clear the terminal
home                        Restore the welcome session
```

Use **↑ / ↓** for command history. Select a project row for details or use its ↗ link to open the actual GitHub repository. Commands are simulated in the page. **Nothing is executed on the visitor's machine.**

## Files

```text
index.html    Accessible static content and terminal layout
styles.css    Terminal window, responsive layout, dark color system
script.js     Project data, interactive commands, filtering, command history
README.md     This guide
```
