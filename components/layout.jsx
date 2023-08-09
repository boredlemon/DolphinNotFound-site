import config from '../config';
import { useEffect, useState } from 'react';
import { RiSunFill, RiSunFoggyLine } from "react-icons/ri";

export default function Layout({ light, setLight }) {

    useEffect(() => {
        setLight(localStorage.getItem('light') == 'on' ? true : false);
    }, []);

    useEffect(() => {
        localStorage.setItem('light', light ? 'on' : 'off');
    });

    return (
        <>
            <header className='header'>
                <ul>
                    <li>
                        <button style={{ display: 'flex', backgroundColor: 'transparent', color: 'inherit' }} onClick={() => window.location.href = 'https://github.com/DolphinNotFound'}>
                            <img src={config.header.icon} alt='profile picture' style={{ height: 38.7, borderRadius: 2 }} draggable={false} />
                            <div className='Dolphin'>{config.header.name}</div>
                        </button>
                    </li>
                    <ul className='position-button'>
                        <li>
                            <button onClick={() => setLight(!light)} style={{ marginTop: 9 }}>
                                {light ? <RiSunFill style={{ height: 20, width: 20 }} /> : <RiSunFoggyLine style={{ height: 20, width: 20 }} />}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => window.location.href = config.header.buttons.Discord} className='header-button'>
                                <svg xmlns='http://www.w3.org/2100/svg' width='21' height='21' viewBox='0 -3 48 48' className='header-ico'><path fill="#f0f0f0" d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.211,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.215,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C21.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z" /></svg>
                                <div>Discord</div>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => window.location.href = config.header.buttons.GitHub} className='header-button'>
                                <svg xmlns='http://www.w3.org/2100/svg' width='21' height='21' viewBox='0 -1 24 24' className='header-ico'><path fill='#f0f0f0' d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.217 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.215.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></svg>
                                <div>GitHub</div>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => window.location.href = config.header.buttons.YouTube} className='header-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 256 180" className='header-ico'><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"/><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
                                <div>YouTube</div>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => window.location.href = config.header.buttons.Mybotdashboard} className='header-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 8l-1.33.09C9.81 7.07 7.4 4.5 5 4.5c0 0-1.97 2.96-.04 6.91c-.55.83-.89 1.26-.96 2.25l-1.93.29l.21.98l1.76-.26l.14.71l-1.57.94l.47.89l1.45-.89C5.68 18.76 8.59 20 12 20s6.32-1.24 7.47-3.68l1.45.89l.47-.89l-1.57-.94l.14-.71l1.76.26l.21-.98l-1.93-.29c-.07-.99-.41-1.42-.96-2.25C20.97 7.46 19 4.5 19 4.5c-2.4 0-4.81 2.57-5.67 3.59L12 8m-3 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 3h2l-.7 1.39c.2.64.76 1.11 1.45 1.11a1.5 1.5 0 0 0 1.5-1.5h.5a2 2 0 0 1-2 2c-.75 0-1.4-.41-1.75-1c-.35.59-1 1-1.75 1a2 2 0 0 1-2-2h.5a1.5 1.5 0 0 0 1.5 1.5c.69 0 1.25-.47 1.45-1.11L11 14Z"/></svg>
                                <div>My bot dashboard</div>
                            </button>
                        </li>
                    </ul>
                </ul>
            </header>
        </>
    )
}