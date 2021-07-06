# Docsify Plugin Footer

A simple plugin to add page footer to [docsify](https://github.com/docsifyjs/docsify/)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sujaykumarh/docsify-plugin-footer/Build%20&%20Publish%20package)](https://github.com/Sujaykumarh/docsify-plugin-footer/actions)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/sujaykumarh/docsify-plugin-footer)](https://www.npmjs.com/package/@sujaykumarh/docsify-plugin-footer)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/@sujaykumarh/docsify-plugin-footer)](https://www.jsdelivr.com/package/npm/@sujaykumarh/docsify-plugin-footer)

<br>

# 📥 Download

- Locally

    ```bash
    npm install @sujaykumarh/docsify-plugin-footer
    ```
- CDN

    ```html
    <script src="//cdn.jsdelivr.net/npm/@sujaykumarh/docsify-plugin-footer@1.x/dist/plugin.min.js"></script>

   <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@sujaykumarh/docsify-plugin-footer@1.x/dist/plugin.min.css">
    ```

<br>

# 🧰 Configuration

Available options

```js
window.$docsify.customPageFooter = {
    debug: false,                   // for debugging

    showPoweredBy: true,            // should show powered by docsify at right
    copyrightYear: '',              // show copyright year, default current year.
    showCopyright: true,            // set to false to hide default copyright
    copyright: undefined,           // set this to html string to use custom copyrihgt section
    copyrightOwnerName: '',         // copyright owner name
    copyrightOwnerLink: undefined,  // copyright owner link if any
    copyrightExtra: undefined,      // any exta text to show below copyright owner section

    useLocalStorage: true,          // build and store footer in localstorage for quick access
}
```

generates footer

```

        |      content here
        |      ....
sidebar |      ....
        |
        |
        |      ___________________________________________________________________
        |
        |      copyright (c) 2021 copyrightOwner.              Powered by docsify.
        |      [---copyrightExtra---]

```

Example:

```html
<script>
    ...

    window.$docsify.customPageFooter = {
      copyrightOwnerName: 'Sujaykumar Hublikar',
      copyrightOwnerLink: 'https://github.com/sujaykumarh',
    }

    ...
</script>
```

**Colors**

set `a` link colors set `--primary` & `--primary-dark` in `:root`

* `--primary` is used default link color

* `--primary-dark` is used when link:hover

Example:

```css
...


:root {
    --primary: #0f5d9c;
    --pirmary-dark: #0a4677;
}


...
```

<br>

# 🛠️ Development

Clone

```bash
git clone https://github.com/Sujaykumarh/docsify-plugin-footer.git
```

install resources

```bash
npm install
```

minify `src/plugin.js` and `src/plugin.css` generate minified files in `dist` folder

```bash
npm run minify      # generate minified resources in ./dist

npm run minify:css  # generate minified css resources in ./dist
npm run minify:js   # generate minified js resources in ./dist
```

<br>

# 📄 License

```
Copyright (c) 2021 Sujaykumar.Hublikar <hello@sujaykumarh.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
