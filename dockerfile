FROM ubuntu:22.04 as base

# 1. Install node16
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

WORKDIR /playwright-testing
COPY ./ /playwright-testing

RUN npm install

# 2. Install WebKit dependencies
RUN npx playwright install-deps webkit

CMD ["./startup.sh"]