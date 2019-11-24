import React from 'react';

class Boxes extends React.Component {
  state = {
    Boxes: [
      {
        id: 1,
        src: require('../../../assets/pic2.jpg'),
        manufacture: "Toyota",
        number: "334",
        type: "Coaster"
      },
      {
        id: 2,
        src: require('../../../assets/pic2.jpg'),
        manufacture: "Honda",
        number: "89",
        type: "Honda BR-V"
      },
      {
        id: 3,
        src: require('../../../assets/pic2.jpg'),
        manufacture: "Tesla",
        number: "65",
        type: "Modal 3"
      },
      {
        id: 4,
        src: require('../../../assets/pic2.jpg'),
        manufacture: "Toyota",
        number: "98",
        type: "Audi A5"
      },
      {
        id: 5,
        src: require('../../../assets/pic2.jpg'),
        manufacture: "Toyota",
        number: "245",
        type: "Land Cruise"
      },
      {
        id: 6,
        src: require('../../../assets/pic2.jpg'),
        manufacture: "Aud",
        number: "245",
        type: "Audi A5"
      }
    ]
  }

  render() {
    return (
      <section id="boxes">
        <div className="container">
          <h1>Available Vehicle</h1>
          {this.state.Boxes.map((box) => (
            <div className="box">
              <h3><a href="#">#3. Rav4</a> </h3>
              <img src={box.src} />
              <p>Number : {box.number}</p>
              <p>{box.type}</p>
              <p>Manufacture : {box.manufacture}</p>
            </div>
          ))
          }
        </div>
      </section>
    );
  }
}

export default Boxes;
