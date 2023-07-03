import React from 'react';
import imgWater from '../img/onas1.jpg.png'
const Main = () => {
    return (
        <div id="main">
            <div className="container">
                <div className="main">
                    <div className="mainDescription">
                        <h1 className="mainTitle">Главная</h1>
                        <p>В условиях ухудшающейся экологии питьевая вода с заказом на дом или в офис -
                            единственное разумное решение для человека, заботящегося о своем здоровье, ведь
                            водопроводная вода в настоящее время не просто непригодна для питья, но иной раз даже
                            опасна.</p>


                        <p>У нас Вы можете заказать бутилированную воду с доставкой на дом или в офис в любой точке
                            города. Доставка осуществляется в кратчайшие сроки нашей собственной курьерской
                            службой, вода будет у Вас в день заказа, в любое удобное для Вас время. Обратите
                            внимание, доставка по городу - абсолютно бесплатно!</p>
                        <p>
                            На нашем сайте представлен огромный выбор бутилированной воды самого разного объема
                            5 и 19 литров, артезианская, премиальная и очищенная, от разных производителей.
                        </p>
                        <p>
                            Кроме того, у нас Вы можете приобрести расходные материалы, такие как пластиковые
                            стаканчики и помпы, а также оборудование - напольные и настольные кулеры и аппараты для
                            воды.
                        </p>
                    </div>

                    <div>
                        <img src={imgWater} alt="" className="mainImg"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;