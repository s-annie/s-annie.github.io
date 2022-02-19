---
layout: post
categories: [ruby, jekyll, toubleshooting]
---

### Error
```bash
Gem files will remain installed in /Library/Ruby/Gems/2.6.0/gems/commonmarker-0.21.0 for inspection.
Results logged to /Library/Ruby/Gems/2.6.0/extensions/universal-darwin-19/2.6.0/commonmarker-0.21.0/gem_make.out

An error occurred while installing commonmarker (0.16.0), and Bundler cannot continue.
Make sure that `gem install commonmarker -v '0.16.0'` succeeds before bundling.
```

### Solution
XCode's ruby framework is broken.
```bash
cd /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0
ln -sf universal-darwin20 universal-darwin19
```
Credits to https://stackoverflow.com/a/65481809.
