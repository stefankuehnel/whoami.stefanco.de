# whoami.stefanco.de

[![Deta Space](../../actions/workflows/deta.yml/badge.svg)](../../actions/workflows/deta.yml)

A whoami server accessible via `$ curl -L whoami.stefanco.de` in the terminal.

## ⚙️ Get Started

You'll need [Deno](https://deno.land) installed.

### Clone Repository

First of all, you need to clone the repository:

```bash
$ git clone https://github.com/stefankuehnel/whoami.stefanco.de.git
$ cd whoami.stefanco.de
```

### Run Locally

Then you're able to run the project locally:

```bash
$ deno run --allow-env --allow-net --allow-sys index.ts
```

It will listen on [http://localhost:8080/](http://localhost:8080/) unless otherwise configured.

## 🔨 Technology

The following technologies, tools and platforms were used during development.

- **Code**: [TypeScript](https://typescriptlang.org)
- **Runtime**: [Deno](https://deno.land)
- **CI/CD**: [GitHub Actions](https://github.com/actions)
- **Deployment**: [Deta Space](https://deta.space)

## 👷‍ Error Found?

Thank you for your message! Please fill out a [bug report](../../issues/new?assignees=&labels=&template=bug_report.md&title=).

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

```
The MIT License (MIT)

Copyright © 2023 Stefan Kühnel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
