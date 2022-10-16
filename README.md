# Code Voice Assistant>

## 💻 Requirements

-   pNPM (https://pnpm.io/pt/)[https://pnpm.io/pt/]
-   NodeJs (v16) (https://nodejs.org/en/)[https://nodejs.org/en/]
-   Python (v3.10) (https://www.python.org/downloads/)[https://www.python.org/downloads/]
-   Docker (v20) (https://docs.docker.com/engine/install/)[https://docs.docker.com/engine/install/]

## 🚀 Development Setup

install **docker** following the instructions at

```bash
# https://docs.docker.com/desktop/install/
```

install **NodeJs** using a NodeJs Version Manager (NVM).

```bash
# installing nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

# inserting pnpm in PATH
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # this loads nvm

# install NodeJs version 16
nvm install v16
```

install **pNPM** to manage JavaScript packages

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -

# inserting pNPM in PATH
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
```

install **python** following the instructions at

```bash
https://www.python.org/downloads
```

install JavaScript dependencies

```bash
pnpm i
```

install python dependencies

```bash
# create a local virtual python environment
python3 -m venv ./.pvenv
# activate the environment
source ./.pvenv/bin/activate
# install python required packages
pip install -r requirements.txt
```

## ☕ VSCode development

...
