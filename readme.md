# 1. summary

- wine is need for linux or mac, since ResourceHacker only support pe
- icon option will not support for elf/mach-o
- dependencies: ResourceHacker 5.1.7, upx 3.92
- not support virtual file system, you may realize by yourself

# 2. usage

## 2.1. simple usage

install wine
```bash
# ubuntu 18
sudo apt install wine32

# macos
brew install wine
```

install global

```bash
# you may need sudo on linux
npm i -g @irelance/pkgx
```

```bash
pkgx create pkgxproject

cd pkgxproject

npm run build
```

## 2.2. more info

you can get help from command:

```
pkgx --help

pkgx help create

pkgx help build
```

# 3. version check list

- node8-win-x86 (v)
- node8-win-x64 (v)
- node10-win-x86 (x) pkg pack crash
- node10-win-x64 (x) pkg pack crash
- node12-win-x86 (v)
- node12-win-x64 (v)
- node13-win-x86 (v)
- node13-win-x64 (v)
- node14-win-x86 (v)
- node14-win-x64 (v)

- node4-linux-x64 (d) you need to find polyfill to support new nodejs feature
- node6-linux-x64 (d) you need to find polyfill to support new nodejs feature
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

you may change your code to es5 when use nodejs 8.(This project already done for you)

if you use babel, you may use regenerator-runtime for asycn/await/generator


you will hard to pack your application on nodejs 4/6

for example: TypeError: Object.entries is not a function


