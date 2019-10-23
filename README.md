This is a simple github action to run git submodule update --init --recursive
so that your repository has all its submodules.

This action was written in javascript, which allows it to work on both linux and
windows (and hopefully macos too but I didn't test that).

usage sample:
```
uses: snickerbockers/submodules-init@v4
```
