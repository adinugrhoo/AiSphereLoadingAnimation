import { motion } from "motion/react";
import svgPaths from "./svg-w4ldd10g73";

export default function Frame() {
  return (
    <div className="relative size-full">
      {/* Background - Variable Speed Rotation - Heavily Blurred */}
      <motion.svg
        className="block size-full blur-3xl"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 597.173 597.173"
        animate={{ rotate: [0, 90, 270, 360] }}
        transition={{
          duration: 35,
          times: [0, 0.45, 0.55, 1], // Slow drift, fast spin (swoosh), slow drift
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <g id="icon-bg">
          <path d={svgPaths.pd7c7480} fill="#081939" />
          <path d={svgPaths.pd7c7480} fill="url(#paint0_radial_1_41)" fillOpacity="0.9" />
          <path d={svgPaths.pd7c7480} fill="url(#paint1_radial_1_41)" fillOpacity="0.85" />
          <path d={svgPaths.pd7c7480} fill="url(#paint2_radial_1_41)" fillOpacity="0.8" />
          <path d={svgPaths.pd7c7480} fill="url(#paint3_radial_1_41)" fillOpacity="0.88" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(201.414 98.0577) rotate(63.1327) scale(224.794 266.666)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_41" r="1">
            <stop stopColor="#7D7194" />
            <stop offset="1" stopColor="#7D7194" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(581.274 202.298) rotate(161.19) scale(298.636)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_41" r="1">
            <stop stopColor="#4A8F9F" />
            <stop offset="1" stopColor="#4A8F9F" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(397.528 581.275) rotate(-108.939) scale(190.527)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_41" r="1">
            <stop stopColor="#5C4763" />
            <stop offset="1" stopColor="#5C4763" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-26.5016 406.362) rotate(-18.3418) scale(342.488 476.067)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_41" r="1">
            <stop stopColor="#3D3041" />
            <stop offset="1" stopColor="#3D3041" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>

      {/* Pink Top - Nervous Pulse - Blurred */}
      <motion.div
        className="absolute inset-[80.85px_271.11px_287.1px_188.34px] blur-xl"
        data-name="pink-top"
        animate={{
          y: [0, -15, -15, 5, 0], // Move up quickly, hold, drop
          scale: [1, 1.15, 1, 1.05, 1], // Double heartbeat
          opacity: [0.8, 1, 0.8, 0.9, 0.8],
        }}
        transition={{
          duration: 6,
          times: [0, 0.2, 0.5, 0.8, 1], // Uneven timing for organic feel
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.72 229.218">
          <path d={svgPaths.p3072e070} fill="url(#paint0_linear_1_39)" id="pink-top" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_39" x1="4.04532e-07" x2="128.039" y1="50.1723" y2="28.9709">
              <stop stopColor="#E375A0" />
              <stop offset="1" stopColor="#E375A0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Pink Left - Swooping Orbit - Blurred */}
      <motion.div
        className="absolute inset-[166.31px_34.53px_88.1px_116.74px] blur-xl"
        data-name="pink-left"
        animate={{
          x: [0, -20, 10, 0], // Wide sway
          y: [0, 15, -5, 0],
          scale: [1, 1.2, 0.9, 1], // Inflate then shrink
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.3, 0.7, 1], // Slow start, fast middle return
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 445.908 342.754">
          <g id="pink-left">
            <path d={svgPaths.pb8bd5c0} fill="url(#paint0_radial_1_37)" />
            <path d={svgPaths.pb8bd5c0} fill="url(#paint1_linear_1_37)" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(107.772 51.2815) rotate(69.3339) scale(215.266 259.286)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_37" r="1">
              <stop stopColor="#B850C1" />
              <stop offset="1" stopColor="#DCADE0" stopOpacity="0" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_37" x1="237.19" x2="235.19" y1="-0.314945" y2="66.6851">
              <stop stopColor="#B850C1" />
              <stop offset="1" stopColor="#DCADE0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blue Middle - Erratic Pulse - Soft Blur */}
      <motion.div
        className="absolute inset-[84.71px_91.93px_114.53px_171.51px] mix-blend-hard-light blur-xl"
        data-name="blue-middle"
        animate={{
          scale: [0.95, 1.1, 1.05, 0.95],
          rotate: [0, 5, -2, 0],
          opacity: [0.7, 1, 0.6, 0.7],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.8, 1], // Fast expand, long hold, fast contract
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333.734 397.929">
          <g id="blue-middle" style={{ mixBlendMode: "hard-light" }}>
            <path d={svgPaths.p2d2b9e00} fill="url(#paint0_linear_1_29)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_29" x1="33.5694" x2="199.648" y1="295.426" y2="231.821">
              <stop stopColor="#7EA1E4" />
              <stop offset="1" stopColor="#70CBFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blue Right - Drifting Figure 8 - Blurred */}
      <motion.div
        className="absolute inset-[73.35px_39.35px_62.8px_149.94px] blur-xl"
        data-name="blue-right"
        animate={{
          x: [0, 20, 0, -10, 0],
          y: [0, -10, 0, 10, 0],
          scale: [1, 1.05, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 10,
          times: [0, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 407.888 461.024">
          <path d={svgPaths.p3012e330} fill="url(#paint0_linear_1_33)" id="blue-right" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_33" x1="407.044" x2="203.993" y1="207.847" y2="299.355">
              <stop stopColor="#5BAEEC" />
              <stop offset="1" stopColor="#5BAEEC" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Intersect - The Core Glow - Variable Spin & Pulse - Blurred */}
      <motion.div
        className="absolute inset-[76.44px_23.86px_126.64px_157.29px] blur-lg"
        data-name="Intersect"
        animate={{
          scale: [0.9, 1.25, 1.1, 0.95, 0.9], // Complex breathing pattern
          opacity: [0.5, 0.9, 0.7, 0.8, 0.5], // Flicker
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          scale: { duration: 4, times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, times: [0, 0.5, 0.8, 1], repeat: Infinity, ease: "linear" }, // Non-linear spin speed
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416.025 394.094">
          <path d={svgPaths.p28c46200} fill="url(#paint0_linear_1_27)" fillOpacity="0.78" id="Intersect" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_27" x1="64.6418" x2="333.961" y1="183.226" y2="233.297">
              <stop stopColor="#85FAFE" stopOpacity="0" />
              <stop offset="1" stopColor="#85FAFE" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Green Left (Blend) - Blurred */}
      <motion.div
        className="absolute inset-[117.57px_70.05px_150.83px_92.49px] mix-blend-color-dodge blur-xl"
        data-name="green-left"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          times: [0, 0.2, 1], // Quick move out, slow drift back
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434.633 328.774">
          <g id="green-left" style={{ mixBlendMode: "color-dodge" }}>
            <path d={svgPaths.p369dcfc0} fill="url(#paint0_radial_1_25)" fillOpacity="0.8" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(115.44 51.4277) rotate(84.3771) scale(197.07 220.104)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_25" r="1">
              <stop stopColor="#65ECE8" />
              <stop offset="1" stopColor="#8BECE9" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Green Left (Normal) - Synced with blend - Blurred */}
      <motion.div
        className="absolute inset-[117.57px_70.05px_150.83px_92.49px] blur-xl"
        data-name="green-left"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          times: [0, 0.2, 1],
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434.633 328.774">
          <path d={svgPaths.p369dcfc0} fill="url(#paint0_linear_1_23)" id="green-left" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_23" x1="353.439" x2="411.44" y1="275.428" y2="164.428">
              <stop stopColor="#7BE7F6" stopOpacity="0" />
              <stop offset="0.75" stopColor="#7BE7F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Bottom Pink - Rapid Flutter - Blurred */}
      <motion.div
        className="absolute inset-[310.06px_165.81px_69.29px_319.13px] blur-xl"
        data-name="bottom-pink"
        animate={{
          scale: [0.9, 1.2, 0.9, 1.1, 0.9],
          opacity: [0.6, 1, 0.7, 0.9, 0.6],
        }}
        transition={{
          duration: 7,
          times: [0, 0.15, 0.4, 0.55, 1], // Burst of activity then calm
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112.238 217.817">
          <g id="bottom-pink">
            <path d={svgPaths.p8728400} fill="url(#paint0_radial_1_35)" />
            <path d={svgPaths.p8728400} fill="url(#paint1_linear_1_35)" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(23.7547 197.284) rotate(-68.2079) scale(123.761 158.895)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_35" r="1">
              <stop stopColor="#E375A0" stopOpacity="0" />
              <stop offset="1" stopColor="#FF91C6" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_35" x1="11.3872" x2="20.2211" y1="25.9059" y2="85.9767">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Highlight - Flash Glare - Blurred */}
      <motion.div
        className="absolute inset-[176.4px_223.41px_229.06px_223.4px] blur-md"
        data-name="highlight"
        animate={{
          opacity: [0.1, 0.8, 0.2, 0.6, 0.1], // Bright flash
          scale: [0.9, 1.3, 1, 1.1, 0.9],
        }}
        transition={{
          duration: 4,
          times: [0, 0.1, 0.3, 0.4, 1], // Flash on, fade out slow
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-[-33.9%_-56.53%_-44.34%_-43.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300.368 341.719">
            <g filter="url(#filter0_df_1_31)" id="highlight">
              <path d={svgPaths.p2b715680} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.719" id="filter0_df_1_31" width="300.368" x="0" y="7.16049e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="10" dy="10" />
                <feGaussianBlur stdDeviation="37.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_31" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_31" mode="normal" result="shape" />
                <feGaussianBlur result="effect2_foregroundBlur_1_31" stdDeviation="18" />
              </filter>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
