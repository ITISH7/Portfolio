import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 

const ParticleLoading= () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value:  '#f5f5f5',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "bubble",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.04,
                        },
                    },
                },
                particles: {
                    color: {
                        value:["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363",'#0047AB','#FFFF00','#800000']

                    },
                    // links: {
                    //     color:{ 
                    //         value:['#000000'],
                    // },
                    //     distance: 150,
                    //     enable: true,
                    //     opacity: 1,
                    //     width: 1,
                    // },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1500,
                        },
                        value: 90,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 16, max: 20 },
                    },
                },
                detectRetina: true,
                style:{
                    width:'100%',
                    height:'100%',
                    position:'absolute'
                }
            }}
        />
    );
};
export default ParticleLoading;