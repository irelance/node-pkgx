# 1. summary

- wine is need for linux or mac, since ResourceHacker only support pe
- icon option will not support for elf/mach-o
- dependencies: ResourceHacker 5.1.7, upx 3.92
- not support virtual file system, you may realize by yourself

# 2. usage

```bash
# ubuntu 18

sudo apt install wine32

sudo npm i -g pkgx

pkgx --help

pkgx -t host -d dist index.js
```

# 3. version check list

- node8-win-x86 (v)
- node8-win-x64 (v)
- node10-win-x86 (x)
- node10-win-x64 (x)
- node12-win-x86 (v)
- node12-win-x64 (v)
- node13-win-x86 (v)
- node13-win-x64 (v)
- node14-win-x86 (v)
- node14-win-x64 (v)

- node4-linux-x64 (d)
- node6-linux-x64 (d)
- node8-linux-x64 (v)
- node10-linux-x64 (v)
- node12-linux-x64 (v)
- node13-linux-x64 (v)
- node14-linux-x64 (v)

- node8-mac-x64 (v)
- node10-mac-x64 (v)
- node12-mac-x64 (v)
- node13-mac-x64 (v)
- node14-mac-x64 (v)

# 4. attention

you may change your code to es5 when use nodejs 8.

if you use babel, you may use regenerator-runtime for asycn/await/generator


you will hard to pack your application on nodejs 4/6

for example: TypeError: Object.entries is not a function


