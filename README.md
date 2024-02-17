# maintest
 
Unable to resolve these errors:

# npm audit report

braces  <=2.3.0
Regular Expression Denial of Service in braces - https://github.com/advisories/GHSA-g95f-p29q-9xw4
Regular Expression Denial of Service (ReDoS) in braces - https://github.com/advisories/GHSA-cwfw-4gq5-mrqx
No fix available
node_modules/micromatch/node_modules/braces
  micromatch  0.2.0 - 2.3.11
  Depends on vulnerable versions of braces
  Depends on vulnerable versions of parse-glob
  node_modules/micromatch
    anymatch  1.2.0 - 1.3.2
    Depends on vulnerable versions of micromatch
    node_modules/babel-cli/node_modules/anymatch
      chokidar  1.0.0-rc1 - 2.1.8
      Depends on vulnerable versions of anymatch
      Depends on vulnerable versions of glob-parent
      node_modules/babel-cli/node_modules/chokidar
        babel-cli  *
        Depends on vulnerable versions of babel-core
        Depends on vulnerable versions of babel-register
        Depends on vulnerable versions of chokidar
        node_modules/babel-cli

glob-parent  <5.1.2
Severity: high
glob-parent vulnerable to Regular Expression Denial of Service in enclosure regex - https://github.com/advisories/GHSA-ww39-953v-wcq6        
No fix available
node_modules/babel-cli/node_modules/glob-parent
node_modules/glob-base/node_modules/glob-parent
  glob-base  *
  Depends on vulnerable versions of glob-parent
  node_modules/glob-base
    parse-glob  >=2.1.0
    Depends on vulnerable versions of glob-base
    node_modules/parse-glob

json5  <1.0.2
Severity: high
Prototype Pollution in JSON5 via Parse Method - https://github.com/advisories/GHSA-9c47-m6qq-7p4h
No fix available
node_modules/babel-core/node_modules/json5
  babel-core  5.8.20 - 7.0.0-beta.3
  Depends on vulnerable versions of babel-register
  Depends on vulnerable versions of json5
  node_modules/babel-core
    babel-register  *
    Depends on vulnerable versions of babel-core
    node_modules/babel-register

11 vulnerabilities (2 low, 9 high)
