/**
 * Fecha		  COV	     Nombre				      Descripcion
 * ------------	-------- ------------------- ---------------------------------------------
 * 16/04/2020	COV-1	 Eliezer Hernandez	  Principal page
 * LAST LINE HISTORY
 */
import React from 'react';

import { Cards, CountryPicker, Chart, ChartTypeSelect, Footer } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './images/covidImage.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    chartType:'barChart'
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  handleChartTypeChange = async (chartType) => {    
    const type = chartType;
        
    const data = await fetchData(this.state.country);

    this.setState({ data, country: this.state.country, chartType:type });
  }

  render() {
    const { data, country, chartType } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {(this.state.country!=="")?
        <ChartTypeSelect handleChartTypeChange={this.handleChartTypeChange}/>:""}        
        <Chart data={data} country={country} charType={chartType}/> 
        <Footer description="Information about COVID-19" title={"COVID-19 tracker by Eliezer Hernández"}/>
      </div>
    );
  }
}

export default App;