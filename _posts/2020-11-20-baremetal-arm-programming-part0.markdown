---
title:  "Baremetal ARM Programming The Hard Way: Part 0 - Getting to `main()`"
date:   2020-11-20 22:22:22
description: Horror Tragedy Adventure
---

- [Startup assembler](#startup-assembler)

Join me in an adventure to understand how the hell an ARM Cortex-M0 processor starts up.

Please note that the exact hardware I will be using throughout this will be a Nordic
nRF51-DK eval board; therefore there may be some variations between the code you and I develop,
but I hope that this information proves valuable or educational to you in one way or the other.
Please also note that I am in some instances doing things the hard way (i.e. using nothing but
ARMv6-M documentation + my processor's product specification) as a forcing function to become
more comfortable with ARM and digging through firsthand source documentation; there are already
working BSPs, ARM tutorials, blogs, etc. that cover similar concepts for e.g. an STM32, but
it's also extremely easy to take those building blocks for granted and hit a wall when working
with more complex or exotic hardware. In any case, I will point to ARM and/or processor TRMs
as required to highlight the source of a concept, and if I choose to skip over something,
I'll explain why and point to the source I referenced to keep moving.

# Startup assembler

The first thing to figure out before getting to `main()` is what to do at the very first
instruction the processor executes at address `0x00000000`. Notably, this address is also
the start of the interrupt vector table, which is in essence a table of pointers to interrupt
handlers for each type of interrupt that the device may produce.

Per ARM DDI 0419E "ARMv6-M Architecture Reference Manual" (page 192), Table B1-4
"Vector Table Format," the interrupt vector table is structured as follows:

| Index  | Description                          |
|--------|--------------------------------------|
| 0      | Initial address of the stack pointer |
| 1      | Reset vector                         |
| 2      | Non-maskable interrupt (NMI)         |
| 3      | HardFault                            |
| 4-10   | Reserved                             |
| 11     | SVCall                               |
| 12-13  | Reserved                             |
| 14     | PendSV                               |
| 15     | SysTick                              |
| 16     | External Interrupt 0                 |
| 17     | External Interrupt 1                 |
| 16 + N | External Interrupt N (N <= 31)       |

The external interrupts that must be supported will vary between platforms and the peripherals
they provide. For the Nordic
nRF51, Section 9.1.6 "Interrupts" in the nRF51 Series Reference Manual (v2.1) specfies that the
external interrupt # is specified by the "peripheral ID" of the peripheral; for the nRF51422,
the peripheral table is in Section 5 "Instance Table" of the nRF51422 Product Specification (v3.1).

Also of note is index 0 (i.e. address 0x00000000), which the processor uses to initialize the
value of the stack pointer. Again, 

```arm
.text

.global connect
connect:
    mov     r3, #2              ; s->sin_family = AF_INET
    strh    r3, [sp]
    ldr     r3, =server_port    ; s->sin_port = server_port
    ldr     r3, [r3]
    strh    r3, [sp, #2]
    ldr     r3, =server_addr    ; s->sin_addr = server_addr
    ldr     r3, [r3]
    str     r3, [sp, #4]
    mov     r3, #0              ; bzero(&s->sin_zero)
    str     r3, [sp, #8]
    str     r3, [sp, #12]
    mov     r1, sp      ; const struct sockaddr *addr = sp

    ldr     r7, =connect_call
    ldr     r7, [r7]
    swi     #0

    add     sp, sp, #16
    pop     {r0}        ; pop sockfd

    pop     {r7}
    pop     {fp, ip, lr}
    mov     sp, ip
    bx      lr

.data
socket_call:   .long 281
connect_call:  .long 283

/* all addresses are network byte-order (big-endian) */
server_addr:            .long 0x0100007f ; localhost
server_port:            .hword 0x0b1a
```

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
