// Particle Animation with Food Emojis (tsParticles)
(async () => {
    await tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        background: { color: "transparent" },
        detectRetina: true,
        fpsLimit: 60,
        particles: {
            number: { value: 45, density: { enable: true, area: 900 } },
            shape: {
                type: "char",
                character: [
                    { value: "🍕" }, { value: "🍔" }, { value: "🍣" },
                    { value: "🍩" }, { value: "🍦" }, { value: "☕" },
                    { value: "🌮" }, { value: "🥗" }
                ]
            },
            size: {
                value: 22,
                random: { enable: true, minimumValue: 12 }
            },
            opacity: {
                value: 0.95,
                random: { enable: true, minimumValue: 0.6 }
            },
            move: {
                enable: true,
                speed: 1.6,
                direction: "none",
                random: true,
                outModes: { default: "bounce" }
            },
            links: {
                enable: true,
                distance: 130,
                color: "#ffeb3b",
                opacity: 0.15,
                width: 1
            }
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 120, duration: 0.6 },
                push: { particles_nb: 4 }
            }
        }
    });
})();

// Menu functions
function openMenu() {
    document.getElementById("menuContainer").classList.add("open");
}

function closeMenu() {
    document.getElementById("menuContainer").classList.remove("open");
}
