# [Choice] Node.js version: 16, 14, 12, 10
ARG VARIANT=16
FROM mcr.microsoft.com/devcontainers/javascript-node:${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# ARG CHROMIUM_VERSION="105.0.5195.102-1~deb11u1"
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
   && apt-get -y install --no-install-recommends chromium \
# Clean up
   && apt-get autoremove -y \
   && apt-get clean -y \
   && rm -rf /var/lib/apt/lists/*

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install gauge and gauge plugins
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN curl -SsL https://downloads.gauge.org/stable | sh \
    && su node -c "gauge install html-report" \
    && su node -c "gauge install screenshot" \
    && su node -c "gauge install js"
