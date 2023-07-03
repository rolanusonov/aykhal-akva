import React from 'react';
import iconAkva from '../img/Group 5.svg'

const Hero = () => {
    return (
        <div id="Hero">
            <div className="container">
                <div className="hero">
                    <h1 className="heroDesc">Закажите сейчас, наш
                        курьер доставит Вам воду
                        уже через пару часов!</h1>
                    <a href="tel:+79142550000" style={{textDecoration: 'none'}} >
                        <button className="heroBtn">Заказать <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M8.0734 8.55942L1.51487 15.2697C1.38454 15.404 1.20911 15.4853 1.02241 15.4979C0.835697 15.5106 0.650922 15.4536 0.503697 15.3381C0.411155 15.2005 0.361177 15.0388 0.36 14.873C0.358823 14.7072 0.4065 14.5448 0.497079 14.4059L6.2112 8.55942C6.35639 8.40949 6.43758 8.20895 6.43758 8.00023C6.43758 7.79151 6.35639 7.59098 6.2112 7.44104L0.499726 1.59766C0.408147 1.4593 0.359314 1.29704 0.359314 1.13112C0.359314 0.965191 0.408147 0.802935 0.499726 0.664572C0.64694 0.547774 0.832312 0.489866 1.01983 0.502095C1.20735 0.514325 1.38363 0.595819 1.51443 0.730748L8.07296 7.44104C8.21822 7.59092 8.29948 7.79143 8.29956 8.00014C8.29965 8.20886 8.21854 8.40943 8.0734 8.55942Z" fill="white"/>
                        </svg>
                        </button>
                    </a>
                    <div className="heroBlock">
                        <div className="heroBlockLogo">
                           <img src={iconAkva} alt='' className='iconAkva' />

                            <div className="heroBlockTitle">
                                <p>Обогащенная,чистая питьевая вода!</p>
                                <h1 className="heroTitle">Айхал-Аква</h1>
                            </div>
                        </div>
                        <div className="heroBlockContact">
                            <a href="tel:+79142550000" className="heroBlockPhone">

                                <svg width="25" height="25" viewBox="0 0 38 38" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M8.90691 1.82577L14.3653 8.85338L14.4363 8.95932C14.6888 9.29859 14.8743 9.68295 14.9828 10.0918C15.1033 10.5447 15.1308 11.0173 15.0637 11.4811C14.9943 11.9431 14.838 12.3877 14.6031 12.7915L14.5482 12.8724C14.3147 13.237 14.0143 13.5541 13.6629 13.807L13.572 13.863L10.9192 15.804C10.7715 16.1804 10.7273 16.5894 10.7913 16.9886C10.8553 17.3878 11.025 17.7626 11.2829 18.0739C12.4438 19.7423 13.7512 21.3038 15.1896 22.7397C16.6245 24.1825 18.1854 25.494 19.8537 26.6588C20.1679 26.9132 20.5435 27.0802 20.9428 27.1431C21.342 27.2059 21.7508 27.1623 22.1278 27.0166L24.1262 24.2819V24.2719C24.4023 23.8968 24.7488 23.5791 25.1463 23.3364C25.55 23.1013 25.9944 22.9447 26.4562 22.8746H26.5052C26.9514 22.8199 27.4039 22.8477 27.84 22.9566L27.921 22.9865C28.3395 23.1115 28.7305 23.3151 29.073 23.5863V23.5763L36.0981 29.0416L36.214 29.1316C36.561 29.4259 36.8477 29.7847 37.0583 30.1881C37.2848 30.6379 37.4141 31.1303 37.438 31.6334C37.4623 32.1364 37.376 32.6386 37.1852 33.1047C36.9922 33.5739 36.6989 33.9952 36.3259 34.3391C35.8095 34.8164 35.2457 35.2397 34.6433 35.6024L34.5624 35.6474C33.8348 36.0724 33.0645 36.4198 32.2643 36.6839C28.3586 37.8921 24.1663 37.7984 20.3183 36.417C15.9943 34.8583 12.0675 32.3642 8.81792 29.1126C5.56835 25.861 3.07615 21.9321 1.5191 17.6061C0.133219 13.7578 0.039559 9.56233 1.25232 5.65592C1.52385 4.82804 1.88643 4.03288 2.33341 3.28507V3.27907C2.6931 2.6745 3.11649 2.11022 3.59636 1.59588C3.939 1.22151 4.36046 0.927916 4.83032 0.736301L4.94123 0.700318C5.3743 0.540716 5.83515 0.47034 6.29609 0.493418C6.7993 0.514417 7.29208 0.64362 7.74088 0.872235L7.81582 0.913215L8.89192 1.83277L8.90691 1.82577ZM12.1172 10.6025L6.65979 3.57593V3.56593C6.60946 3.50501 6.55173 3.45062 6.48793 3.40401L6.45296 3.39402C6.36808 3.35132 6.27511 3.32713 6.18019 3.32305C6.10346 3.32057 6.02676 3.32898 5.95238 3.34804L5.90742 3.36803C5.82374 3.40769 5.74818 3.4626 5.68461 3.52995C5.34216 3.90094 5.04067 4.30776 4.78536 4.74336H4.77936C4.44395 5.31464 4.16966 5.91969 3.96105 6.54849C2.9424 9.87543 3.03464 13.4437 4.22383 16.7136C5.65045 20.613 7.91092 24.1538 10.8473 27.0887C13.7837 30.0235 17.3253 32.2817 21.2246 33.7054C24.4936 34.9025 28.0644 34.9969 31.3921 33.9742C31.9964 33.7716 32.5788 33.5087 33.1306 33.1896L33.1906 33.1556C33.6246 32.8939 34.031 32.5888 34.4035 32.2451C34.4721 32.1836 34.5257 32.1074 34.5604 32.0222C34.5933 31.9351 34.6075 31.8422 34.6024 31.7493C34.6 31.6556 34.5753 31.5637 34.5304 31.4814C34.5021 31.4184 34.4609 31.3619 34.4095 31.3155L34.3486 31.2785L27.3245 25.8202V25.8142C27.2685 25.7702 27.2053 25.7364 27.1376 25.7142L27.1017 25.7042C27.0258 25.686 26.9474 25.6809 26.8699 25.6892H26.8489C26.7646 25.7036 26.683 25.7309 26.6071 25.7702C26.5382 25.8184 26.4784 25.8782 26.4302 25.9471L24.282 28.8897C24.1641 29.0706 24.007 29.2226 23.8224 29.3345C22.9683 29.8537 21.9756 30.0986 20.978 30.0363C19.9805 29.9739 19.026 29.6072 18.2431 28.9856C16.4373 27.7264 14.7446 26.312 13.1843 24.7587C11.6296 23.2017 10.2159 21.5099 8.95986 19.7031C8.33802 18.9213 7.97073 17.9676 7.90748 16.9706C7.84424 15.9735 8.08809 14.981 8.60616 14.1268C8.70361 13.9615 8.83466 13.8185 8.99084 13.707L11.8964 11.5841L11.9963 11.5081C12.0536 11.4689 12.1045 11.421 12.1472 11.3662L12.1732 11.3262C12.2151 11.251 12.2425 11.1686 12.2541 11.0833C12.2673 10.9992 12.2618 10.9132 12.2381 10.8314C12.2256 10.7694 12.2001 10.7108 12.1632 10.6595L12.1232 10.6085L12.1172 10.6025Z"
                                          fill="#4388DD"/>
                                </svg>
                                <a href="tel:+79142550000">+7 914 255 00 00</a>
                            </a>
                            <p className="heroAddress">Саха (Якутя),  Миринский район, посёлок Айхал.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;