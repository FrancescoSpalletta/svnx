// ╔══════════════════════════════════════════════════════╗
// ║         ACID DEVASTATION  —  Techno Hardcore        ║
// ║                    ~175 BPM                         ║
// ║                                                     ║
// ║  Paste this code into https://strudel.cc            ║
// ╚══════════════════════════════════════════════════════╝

setcps(175 / 60 / 4)

stack(

  // ═══ KICK — 4/4 puro ═══
  s("bd:5*4")
    .gain(1.5)
    .distort(0.7)
    .shape(0.4),

  // ═══ CLAP ═══
  s("cp cp")
    .gain(1.2)
    .room(0.12)
    .distort(0.35),

  // ═══ HI-HAT — in levare (ottavi in controtempo) ═══
  s("~ hh ~ hh ~ hh ~ hh")
    .gain(0.75)
    .pan(sine.range(0.3, 0.7))
    .hpf(8000),

  // ═══ OPEN HI-HAT — accento ogni due battute sul levare di 4 ═══
  s("~ ~ ~ ~  ~ ~ ~ <oh ~>")
    .gain(0.8)
    .room(0.15),

  // ═══ DISTORTED KICK BASS (sub) — in levare ═══
  note("~ c1 ~ c1 ~ c1 ~ c1")
    .s("sawtooth")
    .gain(1.3)
    .distort(0.97)
    .shape(0.5)
    .lpf(400)
    .lpq(8),

  // ═══ ACID BASSLINE — in levare ═══
  // 303-style: filter sweeps up over 8 bars then resets
  note("~ c2 ~ [eb2 ~] ~ c2 ~ [bb1 c2]")
    .s("sawtooth")
    .gain(0.95)
    .distort(0.65)
    .lpf(sine.range(250, 3500).slow(8))
    .lpq(22)
    .room(0.05),

  // ═══ LEAD — stile italo dance (frase di 4 battute in Do minore) ═══
  note("<[c5 ~ eb5 ~ g4 eb5 ~ ~] [c5 ~ bb4 ~ g4 ~ f4 ~] [g4 ~ eb5 ~ g4 eb5 c5 ~] [bb4 ~ g4 ~ f4 g4 eb4 ~]>")
    .s("sawtooth")
    .gain(0.75)
    .lpf(5000)
    .lpq(3)
    .detune(8)
    .room(0.45)
    .delay(0.4)
    .delaytime(0.1875)
    .pan(0.55),

  // ═══ DARK INDUSTRIAL STAB ═══
  // Detuned square chords, hit every 2 bars
  note("<[c3,eb3,g3] ~ ~ ~ ~ ~ ~ ~  [bb2,db3,f3] ~ ~ ~ ~ ~ ~ ~>")
    .s("square")
    .gain(0.65)
    .distort(0.8)
    .lpf(2200)
    .room(0.55)
    .delay(0.35)
    .delaytime(0.125)
    .pan(rand.range(0.2, 0.8)),

  // ═══ METAL PERCUSSION (industrial hits) ═══
  s("metal*8")
    .gain("0.2 0.05 0.15 0.1  0.3 0.05 0.2 0.15")
    .speed(rand.range(2, 6))
    .pan(rand),

  // ═══ NOISE BURST (distorted perc) ═══
  s("~ ~ ~ [perc:5 ~]")
    .gain(0.6)
    .distort(0.92)
    .speed(rand.range(0.5, 1.5))
    .hpf(3000),

  // ═══ DARK DRONE (atmosphere) ═══
  // Slow descending bass note, heavy reverb
  note("<c1 ~ bb0 ~ ab0 ~ g0 ~>")
    .s("sine")
    .gain(0.35)
    .room(0.9)
    .delay(0.5)
    .delaytime(0.5)
    .slow(2)

)
