---
title: QIDI X-CF Pro OrcaSlicer support
date: 2024-04-09
tags: ['3D printing']
canonical_url: false
description: "OrcaSlicer support for QIDI X-CF Pro 3D printers"
published: true
---

If you have one of these bad boys:

![QIDI X CF Pro](/img/x_cf_pro_front.webp)

Then you understand my plight with using the dinosaur that is QIDI Print:

![QIDI Print](/img/QIDI_Print.png)

It's Cura-based, which is nice because Cura has always been pretty friendly, but the QIDI proprietary modules
haven't kept up with open-source slicers including Cura itself and [OrcaSlicer](https://github.com/SoftFever/OrcaSlicer).
Understandable, but a somewhat sad state of affairs.

It would be better to adapt the X-CF Pro profiles to be used in 3rd-party slicers. Luckily,
OrcaSlicer brings in most of QIDI's filament profiles and base models for
the X-CF Pro, which is excellent, however the [Marlin-based G Code](https://marlinfw.org/meta/gcode/) at the start
and end of prints does not properly bias the nozzle Z offset, which results in my printer printing in midair.

To get around this I had to take QIDI Print's default start/end G Code and adapt it to OrcaSlicer's syntax.
Below are the modifications I had to make to get the printer properly integrated into OrcaSlicer.

## Pre-Print

| Original G Code (QIDI Print)                 | New G Code (OrcaSlicer)                    |
|----------------------------------------------|--------------------------------------------|
| `G28`                                        | `G28`                                      |
| `G0 X{machine_width} Y5 Z50 F3600`           | `G0 X300 Y5 F2400`                         |
|                                              | `M140 S[hot_plate_temp_initial_layer]`     |
| `M190 S{material_bed_temperature_layer_0}`   | `M190 S[hot_plate_temp_initial_layer]`     |
| `M109 S{material_print_temperature_layer_0}` | `M109 S[nozzle_temperature_initial_layer]` |
| `G92 E-19`                                   | `G92 E-19`                                 |
| `G0 Y5 Z0.3 F3600`                           | `G0 Y5 Z0.3 F3600`                         |
| `G1 X5 E0 F2400`                             | `G1 X5 E0 F2400`                           |

## Post-Print

| Original G Code (QIDI Print) | New G Code (OrcaSlicer)      |
|------------------------------|------------------------------|
| `M104 S0`                    | `M104 S0`                    |
| `M140 S0`                    | `M140 S0`                    |
| `;Retract the filament`      | `;Retract the filament`      |
| `G92 E0`                     | `G92 E0`                     |
| `G1 E-3 F300`                | `G1 E-3 F300`                |
| `G28`                        | `G28`                        |
| `M84`                        | `M84`                        |


## Bonus: Retraction modifications

I found that the retraction distance was way too low in OrcaSlicer. I had to bump up the retraction to 6mm at
50 mm/s -- at least for Hatchbox PETG. I printed at 240-245 deg. C. 