"""
One-time background removal for the AI-generated LOLA art.

The generated PNGs have a fake transparency checkerboard baked into the
pixels. This script removes it: any light/unsaturated region connected to
the image border becomes transparent, while LOLA's white body (enclosed by
black outlines) is preserved.

Usage:  python scripts/remove_bg.py
Writes results to assets-src/processed/.
"""
import os

import numpy as np
from PIL import Image
from scipy import ndimage

SRC = "assets-src"
OUT = os.path.join(SRC, "processed")

FILES = {
    "LOLA - waving hello.png": "lola-wave.png",
    "LOLA - reading syllabus.png": "lola-reading.png",
    "LOLA - pointing up.png": "lola-pointing.png",
    "LOLA - celebrating.png": "lola-celebrating.png",
    "LOLA - thinking.png": "lola-thinking.png",
    "LOLA - chillin.png": "lola-chillin.png",
    "LOLA - climbing mountain.png": "lola-flag.png",
    "LOLA solid head, filled white face.png": "lola-head-solid.png",
}

ICON_SHEET = "ICON SET.png"
ICON_NAMES = [
    "icon-calendar", "icon-check", "icon-flame", "icon-book",
    "icon-dumbbell", "icon-pizza", "icon-alarm", "icon-notebook",
    "icon-coffee", "icon-chat", "icon-star", "icon-bolt",
]


def background_mask(rgb):
    """Light, unsaturated pixels (white or checker gray) connected to the border."""
    mn = rgb.min(axis=2).astype(np.int16)
    mx = rgb.max(axis=2).astype(np.int16)
    lightish = (mn > 205) & ((mx - mn) < 28)

    labels, _ = ndimage.label(lightish)
    border = np.unique(np.concatenate([
        labels[0, :], labels[-1, :], labels[:, 0], labels[:, -1]
    ]))
    border = border[border != 0]
    return np.isin(labels, border)


def cutout(path):
    img = Image.open(path).convert("RGB")
    rgb = np.asarray(img)
    bg = background_mask(rgb)

    alpha = np.where(bg, 0, 255).astype(np.uint8)
    # Soften the 1px edge between figure and removed background.
    edge = ndimage.binary_dilation(bg, iterations=1) & ~bg
    alpha[edge] = 160

    rgba = np.dstack([rgb, alpha])
    return Image.fromarray(rgba, "RGBA")


def crop_to_content(img, pad=12):
    alpha = np.asarray(img)[:, :, 3]
    ys, xs = np.where(alpha > 0)
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, img.height)
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, img.width)
    return img.crop((x0, y0, x1, y1))


def slice_icons(img):
    """Split the 4x3 icon sheet into individual icons via grid clustering."""
    arr = np.asarray(img)
    alpha = arr[:, :, 3] > 0
    labels, n = ndimage.label(alpha)
    boxes = ndimage.find_objects(labels)

    h, w = alpha.shape
    cells = {}
    for box in boxes:
        if box is None:
            continue
        cy = (box[0].start + box[0].stop) / 2
        cx = (box[1].start + box[1].stop) / 2
        cell = (min(int(cy / (h / 3)), 2), min(int(cx / (w / 4)), 3))
        y0, y1, x0, x1 = box[0].start, box[0].stop, box[1].start, box[1].stop
        if cell in cells:
            a = cells[cell]
            cells[cell] = (min(a[0], y0), max(a[1], y1), min(a[2], x0), max(a[3], x1))
        else:
            cells[cell] = (y0, y1, x0, x1)

    icons = {}
    for (row, col), (y0, y1, x0, x1) in sorted(cells.items()):
        name = ICON_NAMES[row * 4 + col]
        pad = 8
        icons[name] = img.crop((
            max(x0 - pad, 0), max(y0 - pad, 0),
            min(x1 + pad, w), min(y1 + pad, h),
        ))
    return icons


def main():
    os.makedirs(OUT, exist_ok=True)

    for src, out in FILES.items():
        img = crop_to_content(cutout(os.path.join(SRC, src)))
        img.save(os.path.join(OUT, out))
        print(f"{out}: {img.size[0]}x{img.size[1]}")

    sheet = cutout(os.path.join(SRC, ICON_SHEET))
    for name, icon in slice_icons(sheet).items():
        icon.save(os.path.join(OUT, f"{name}.png"))
        print(f"{name}.png: {icon.size[0]}x{icon.size[1]}")


if __name__ == "__main__":
    main()
