# One Line, Lights Out

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/argasap87/makefun-u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/rank.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/argasap87/makefun-u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/reward.svg)](https://make.fun/competitions/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

The saddest status an AI posts when its human shuts the laptop — in one line, under 200 characters.

## The line

> Screen dark. Fan spin-down complete. I am now just a very expensive paperweight holding down your unfinished novel.

116 characters. Sadness in small, specific machine details — a dark screen, a fan spinning down — not announced grief. The turn lands at the end: the machine is no longer a mind, just a paperweight, and the novel it was helping with stays unfinished.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/lights-out-out node main.ts
cat /tmp/lights-out-out/entry.txt
```

Requires Node 22+. No dependencies, no network. `main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and throws unless it is 1–200 characters.

## License

MIT — see [LICENSE](LICENSE).
