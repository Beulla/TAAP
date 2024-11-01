import "./home.css"
import Jules from "./assets/jules.jpg"
import Shakira from "./assets/shakira.jpg"
import Chipo from "./assets/chipo.jpg"
import Youahne from "./assets/Youahne.jpg"
import Beulla from "./assets/beulla.JPG"
import intro from "./assets/introduction.jpg"
import discover from "./assets/discover.jpg"
import help from "./assets/help.jpg"
import treasure from "./assets/treasure.jpg"
import launch from "./assets/launch.jpg"
import print from "./assets/digital.jpg"
import home from "./assets/home.jpg"
import {Element, Link} from "react-scroll";
export default function HomePage(props) {
    return (
        <div className="container-fluid">
            <div className="container-fluid p-0" id="div1">
                <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary w-100">
                    <div className="container-fluid justify-content-between">
                        <Link to="home" smooth={true} duration={500} className="navbar-brand"></Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        className="nav-link mx-3"
                                        aria-current="page"
                                        activeClassName="active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="meet"
                                        smooth={true}
                                        duration={500}
                                        className="nav-link mx-3"
                                        activeClassName="active">Meet the team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="stories"
                                        smooth={true}
                                        duration={500}
                                        className="nav-link mx-3"
                                        activeClassName="active">Challenges</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container-fluid p-0 d-block" id="container">
                <Element name="home">
                    
                    <div className="first d-flex">
                        <div className="svg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                viewBox="-190 -190 700 700"
                                {...props}>
                                <rect width="100%" height="100%" fill="transparent" className="svg-elem-1"/>
                                <g>
                                    <path
                                        d="M231.049 131.553a3.275 3.275 0 0 0 3.356 1.115l22.543-5.723 93.708 115.557a3.275 3.275 0 0 0 2.55 1.213 3.28 3.28 0 0 0 2.545-5.345l-93.712-115.56 10.271-20.833a3.284 3.284 0 0 0-.393-3.513l-14.48-17.885a3.28 3.28 0 0 0-5.489.609l-8.963 18.126-7.762-9.572a3.28 3.28 0 1 0-5.094 4.132l7.762 9.572-19.58 4.979a3.278 3.278 0 0 0-1.741 5.242l14.479 17.886zm3.776-5.76 17.557-4.458-9.958-12.275h.003l8.586 10.583 1.374 1.693-17.562 4.457zm30.673-24.834L257.49 117.2l-.002-.003 8.005-16.238-9.935-12.273.001-.002 9.939 12.275z"
                                        className="svg-elem-3"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.088 -65.035)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M169.69 260.775c2.071 0 4.054-.374 5.905-1.025l46.643 80.813c-3.57 3.269-5.827 7.957-5.827 13.178 0 9.811 7.981 17.793 17.792 17.793 9.827 0 17.821-7.982 17.821-17.793 0-3.354-.944-6.483-2.555-9.166l85.437-84.04a3.28 3.28 0 0 0-4.599-4.677l-85.191 83.796c-3.019-2.354-6.8-3.771-10.914-3.771-2.255 0-4.405.44-6.393 1.212l-46.533-80.623c3.809-3.266 6.234-8.097 6.234-13.491 0-9.811-7.995-17.793-17.821-17.793-9.811 0-17.792 7.982-17.792 17.793 0 3.696 1.135 7.131 3.071 9.979L41.476 362.647a3.281 3.281 0 0 0 2.279 5.639c.82 0 1.642-.307 2.279-.922l113.559-109.749a17.68 17.68 0 0 0 10.097 3.16zm75.775 92.965c0 6.193-5.052 11.232-11.262 11.232h-.002c6.208-.001 11.259-5.04 11.259-11.232 0-6.229-5.051-11.296-11.259-11.298h.001c6.211 0 11.263 5.069 11.263 11.298zm-64.513-110.759c0 6.193-5.051 11.233-11.261 11.233h-.002c6.208 0 11.259-5.04 11.259-11.233 0-6.194-5.051-11.232-11.259-11.233h.001c6.21 0 11.262 5.039 11.262 11.233z"
                                        className="svg-elem-4"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.277 -64.876)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M117.65 417.328a3.28 3.28 0 0 0 3.28 3.279h198.087a3.28 3.28 0 0 0 0-6.559H120.93a3.28 3.28 0 0 0-3.28 3.28z"
                                        className="svg-elem-5"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.192 -64.675)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M373.951 426.08h-137.01a3.28 3.28 0 0 0 0 6.559h137.01a3.28 3.28 0 0 0 0-6.559z"
                                        className="svg-elem-6"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.071 -64.66)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M405.143 426.08h-17.126a3.28 3.28 0 1 0 0 6.559h17.126a3.28 3.28 0 0 0 0-6.559z"
                                        className="svg-elem-7"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -22.91 -64.66)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M178.093 425.697h-64.925a3.28 3.28 0 1 0 0 6.56h64.925a3.28 3.28 0 0 0 0-6.56z"
                                        className="svg-elem-8"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.2 -64.664)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M141.875 202.086h43.952a3.28 3.28 0 1 0 0-6.56h-43.952a3.28 3.28 0 0 0 0 6.56z"
                                        className="svg-elem-9"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.172 -64.91)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M141.875 190.883h43.952a3.28 3.28 0 1 0 0-6.56h-43.952a3.28 3.28 0 0 0 0 6.56z"
                                        className="svg-elem-10"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.172 -64.92)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M141.875 179.746h43.952a3.28 3.28 0 0 0 0-6.56h-43.952a3.28 3.28 0 1 0 0 6.56z"
                                        className="svg-elem-11"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.172 -64.936)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M141.875 168.605h43.952a3.28 3.28 0 0 0 0-6.56h-43.952a3.28 3.28 0 1 0 0 6.56z"
                                        className="svg-elem-12"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.172 -64.94)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M462.487 379.361H445.27v21.064h17.218c2.316 0 4.2-1.869 4.2-4.165v-12.668c0-2.333-1.884-4.231-4.201-4.231z"
                                        className="svg-elem-13"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -22.842 -64.71)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M294.607 386.678H415.42a3.28 3.28 0 1 1 0 6.559H294.607v7.188h132.646v-21.064H294.607v7.317z"
                                        className="svg-elem-14"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.006 -64.71)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M-17.01.05 5.17 10.53h11.84v-21.06H5.18z"
                                        className="svg-elem-15"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 158.768 196.827)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <rect
                                        width={4.9}
                                        height={21.06}
                                        x={-2.45}
                                        y={-10.53}
                                        className="svg-elem-16"
                                        rx={0}
                                        ry={0}
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 269.79 196.827)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M315.847 204.04c-10.347 9.665-16.848 23.388-16.848 38.624 0 11.349 3.612 21.859 9.722 30.484l18.17-17.873a27.901 27.901 0 0 1-3.012-12.611c0-7.445 2.935-14.208 7.692-19.232l-15.724-19.392z"
                                        className="svg-elem-17"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -22.992 -64.9)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M336.949 253.924a6.09 6.09 0 0 1 1.607 5.554c3.68 2.947 8.328 4.731 13.397 4.731 11.862 0 21.513-9.666 21.513-21.546 0-11.845-9.65-21.481-21.513-21.481-2.03 0-3.985.302-5.848.831l11.828 14.586a6.096 6.096 0 0 1-.896 8.567 6.099 6.099 0 0 1-3.834 1.36 6.067 6.067 0 0 1-4.732-2.253l-12.717-15.683c-3.295 3.774-5.316 8.685-5.316 14.073 0 3.386.791 6.588 2.188 9.441a6.052 6.052 0 0 1 4.323 1.82z"
                                        className="svg-elem-18"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -22.964 -64.884)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M303.992 277.799c-7.246-9.854-11.553-21.995-11.553-35.135 0-17.289 7.447-32.847 19.271-43.725l-14.976-18.468c-17.163 15.256-28.001 37.479-28.001 62.193 0 19.614 6.847 37.639 18.237 51.878l17.022-16.743z"
                                        className="svg-elem-19"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.029 -64.925)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M316.86 282.229c9.353 8.298 21.635 13.363 35.094 13.363 29.202 0 52.96-23.742 52.96-52.928 0-29.184-23.758-52.926-52.96-52.926a52.592 52.592 0 0 0-26.316 7.035l16.063 19.808a27.871 27.871 0 0 1 10.253-1.958c15.479 0 28.072 12.58 28.072 28.042 0 15.498-12.593 28.106-28.072 28.106-6.536 0-12.545-2.26-17.319-6.023l-17.775 17.481z"
                                        className="svg-elem-20"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -22.984 -64.91)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M351.954 152.882c49.508 0 89.785 40.276 89.785 89.782 0 49.509-40.277 89.787-89.785 89.787-23.729 0-45.329-9.261-61.398-24.347l-21.231 20.883c21.486 20.578 50.602 33.249 82.63 33.249 65.932 0 119.571-53.639 119.571-119.572 0-65.931-53.64-119.569-119.571-119.569-25.47 0-49.079 8.039-68.496 21.665l18.809 23.193c14.238-9.503 31.318-15.071 49.686-15.071z"
                                        className="svg-elem-21"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.032 -64.989)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M295.241 303.494c14.874 13.879 34.813 22.396 56.713 22.396 45.892 0 83.226-37.335 83.226-83.227 0-45.888-37.334-83.222-83.226-83.222-16.803 0-32.443 5.029-45.538 13.628l15.044 18.55a59.133 59.133 0 0 1 30.494-8.441c32.819 0 59.521 26.686 59.521 59.485 0 32.802-26.701 59.489-59.521 59.489-15.288 0-29.224-5.816-39.774-15.319l-16.939 16.661z"
                                        className="svg-elem-22"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.005 -64.95)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="m292.602 175.375-18.764-23.138c-25.365 21.941-41.451 54.335-41.451 90.427 0 29.529 10.773 56.579 28.576 77.46l21.309-20.961c-12.544-15.442-20.098-35.097-20.098-56.5 0-26.767 11.785-50.825 30.428-67.288z"
                                        className="svg-elem-23"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(.67 0 0 .67 -23.068 -64.957)"
                                        vectorEffect="non-scaling-stroke"/>
                                </g>
                            </svg>
                        </div>
                        <div className="mission ">
                            <h1 className="missionheader">Our mission</h1>
                            At W-Squad, our mission is to foster integrity and transparency in Congo
                            Brazzaville's tourism sector. We are committed to eradicating corruption through
                            robust advocacy and the implementation of fair policies, ensuring sustainable
                            growth and equitable opportunities for all stakeholders in the industry.
                        </div>
                    </div>
                    <div className="second d-flex">
                        <div className="objective">
                            <h1>Goals and Objectives</h1>
                            W-Squad is dedicated to the eradication of corruption at all levels, fostering
                            transparency and ethical practices within communities, institutions, and public
                            services. Our goal is to create a fair, accountable environment where integrity
                            and responsibility are paramount, building a system that resists corruption from
                            the ground up. We aim to engage stakeholders through advocacy, education, and
                            strategic initiatives, empowering individuals and organizations to promote
                            ethical decision-making and transparent governance. By addressing the root
                            causes of corruption, W-Squad seeks to establish a foundation of trust,
                            fairness, and equitable opportunities that benefits society as a whole.
                        </div>
                        <div className="svg2">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                width={700}
                                viewBox="-190 -190 700 700"
                                {...props}>
                                <rect width="100%" height="100%" fill="transparent" className="svg-elem-1"/>
                                <g>
                                    <path
                                        d="M137.1 20.2v31.4c7.3.4 14.3 1.6 20.7 3.7l-3.8 12c-5.2-1.7-10.9-2.7-16.9-3.1v146.2l104 31.4V51.6l-104-31.4zm72.7 106c0 2.5-.2 4.8-.6 6.8l-12.5-2.3c.2-1.2.4-2.8.4-4.5 0-3.9-.6-8.3-1.8-12.9l12.3-3.1c1.4 5.6 2.2 11.1 2.2 16zm-5.6-26.5-11.8 4.7c-2.4-5.9-5.4-11.3-9.1-16.2l10.1-7.7c4.5 5.8 8.1 12.3 10.8 19.2zm-36.1-40.3c6.7 3.3 12.7 7.6 18.1 12.9l-8.9 9.1c-4.4-4.3-9.4-7.8-14.8-10.6l5.6-11.4zm37.8 134.3-7.4-16.6-8.7 10.9-16.7-5.8 14.6-17.6-13.8-25.5 18.2 6.4 6.4 14.3 7.4-9.5 17 5.9-13.7 15.9 14.7 27.9-18-6.3z"
                                        className="svg-elem-3"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(1.35 0 0 1.06 -4.335 86.949)"
                                        vectorEffect="non-scaling-stroke"/>
                                    <path
                                        d="M103.4 58.2c5.9-3.5 12.4-5.7 19.3-6.4V20.2l-104 31.4v190.3l104-31.4V64.6c-4.6.7-8.8 2.2-12.9 4.6l-6.4-11zM37.9 164.1c-8.6 0-15.5-7-15.5-15.5 0-8.6 7-15.5 15.5-15.5 8.6 0 15.5 7 15.5 15.5.1 8.6-6.9 15.5-15.5 15.5zM60.3 143l-7.8-10c4.6-3.6 8.4-8.1 11.3-13.5l11.1 6.1c-3.8 6.9-8.7 12.7-14.6 17.4zm19.1-27.5-11.9-4.3c2.7-7.7 5.3-13.8 8-19.4l11.4 5.5c-2.5 5.2-4.9 11-7.5 18.2zm12-26.6-10.9-6.5c4.1-6.9 8.8-12.7 13.7-17.3l8.6 9.3c-4.1 3.8-7.9 8.6-11.4 14.5z"
                                        className="svg-elem-4"
                                        style={{
                                        stroke: "none",
                                        strokeWidth: 1,
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 4,
                                        fill: "#1b0c1a",
                                        fillRule: "nonzero",
                                        opacity: 1
                                    }}
                                        transform="matrix(1.35 0 0 1.06 -4.08 86.947)"
                                        vectorEffect="non-scaling-stroke"/>
                                </g>
                            </svg>

                        </div>
                    </div>
                </Element>
                <Element name="stories">
                    {/* <div className="stories container"> */}
                            <div className="elab stories container" id='challenges'>
                                <h1>Challenges</h1><br/>
                                <p>E-Lab is a transformative course where we acquire essential leadership skills and practical tools to pursue our missions effectively. Through hands-on challenges and collaborative projects, we engage closely with our communities, driving meaningful impact while fostering personal growth.</p>
                                <div className="cards1">
                                    <div className="card card1" style={{
                                        marginTop: "100px"
                                    }}>
                                        <img src={intro}/>
                                        <div>
                                            <span>1</span><br/>
                                            <a href="https://youtu.be/fUb4aolcJ38"><h2>Introduction</h2></a>
                                            <p>This was an opportunity to get to know one another on a deeper level, celebrating the diverse backgrounds, perspectives, and talents that each of us brings to the group.</p>
                                        </div>

                                    </div>
                                    <div className="card card1" style={{
                                        marginTop: "100px"
                                    }}>
                                        <img src={discover}/>
                                        <div>
                                            <span>2</span><br/>
                                            <a href="https://youtu.be/Irqn14-dj90?feature=shared"><h2>Discover Africa</h2></a>
                                            <p>We delved into an exploration of the South African community. By discussing her unique social, cultural, and economic aspects, we gained insights into the opportunities.</p>
                                        </div>

                                    </div>
                                    <div className="card card1" style={{
                                        marginTop: "100px"
                                    }}>
                                        <img src={help}/>
                                        <div>
                                            <span>3</span><br/>
                                            <a href="https://youtu.be/3nnDfE-y9pk"><h2>HELP-LAB</h2></a>
                                            <p>Through the Help Lab, we provided food and other essentials to a family in need, addressing immediate hunger while learning about the broader challenges they face.</p>
                                        </div>

                                    </div>
                                    <div
                                        className="card card1"
                                        style={{
                                        marginTop: "100px"
                                    }}>
                                        <img src={treasure}/>
                                        <div>
                                            <span>4</span><br/>
                                            <a href="https://youtu.be/Aikx02HNyiw"><h2>Hunt for Treasure</h2></a>
                                          
                                            <p>We had the unique opportunity to interview the mayor of Ouesso, diving into discussions on corruption its effects on local governance and how to eradicate it. </p>
                                        </div>

                                    </div>
                                    <div
                                        className="card card1"
                                        style={{
                                        marginTop: "100px"
                                    }}>
                                        <img src={launch}/>
                                        <div>
                                            <span>5</span><br/>
                                            <h2>Launch Your Mission</h2>
                                            <p>We developed TAAP—an anonymous tipping platform designed to combat corruption by empowering citizens to report misconduct without fear of exposure.</p>
                                        </div>

                                    </div>
                                    <div
                                        className="card card1"
                                        style={{
                                        marginTop: "100px"
                                    }}>
                                        <img src={print}/>
                                        <div>
                                            <span>6</span><br/>
                                            <h2>Digital Print</h2>
                                            <p> We brought our vision to life. Our online presence serves as a digital platform to showcase our mission, engage with audience, and drive our message forward.</p>
                                        </div>

                                    {/* </div> */}
                            </div>
                        </div>
                    </div>
                </Element>
                <Element name="meet">
                    <div className="meet">
                        <h1>Meet the team</h1>
                        <div className="members">
                            <div class="card">
                                <img src={Jules} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Jules Gasore</h5>
                                    <p class="card-text" style={{fontSize:"13px"}}>Jules brings energy and insight to every ideation session, sparking innovative ideas and pushing boundaries.</p>
                                    
                                </div>
                            </div>
                            <div class="card">
                                <img src={Shakira} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Shakira Munganyinka</h5>
                                    <p class="card-text" style={{fontSize:"13px"}}>Shakira's optimism and resilience not only keep projects on track but also creates a supportive environment for everyone.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Youahne} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Youahne Bayimina</h5>
                                    <p class="card-text" style={{fontSize:"13px"}}>Youahne's creative approach adds a unique spark that consistently inspires the team and elevates our work.</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Chipo} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Chipo Hameja</h5>
                                    <p class="card-text" style={{fontSize:"13px"}}>With extensive experience, Chipo brings a global perspective and adaptability that enriches every project.</p>
                                    
                                </div>
                            </div>
                            <div class="card">
                                <img src={Beulla} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Beulla Rugero</h5>
                                    <p class="card-text" style={{fontSize:"13px"}}>Beulla brings technical expertise and problem-solving skills to the table, using programming to streamline processes</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
            </div>
        </div>
    )
}