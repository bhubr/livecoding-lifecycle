import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
      intervalId: -1
    };
  }

  componentDidMount() {
    console.log("Le composant vient d'être inséré");
    const intervalId = setInterval(
      () => {
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        // console.log('calcul de la nouvelle date', hours, minutes, seconds);
        this.setState({
          hours, minutes, seconds
        });
      },
      1000
    );

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    console.log("Le composant va être supprimé");
    clearInterval(this.state.intervalId);
  }


  render() {
    const { hours, minutes, seconds } = this.state;
    console.log("Le composant s'affiche");
    return (
      <p>{hours}:{minutes}:{seconds}</p>
    );
  }
}

export default Clock;
