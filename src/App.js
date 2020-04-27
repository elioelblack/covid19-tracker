/**
 * Fecha		  COV	     Nombre				      Descripcion
 * ------------	-------- ------------------- ---------------------------------------------
 * 16/04/2020	COV-1	 Eliezer Hernandez	  Principal page
 * 26/04/2020	COV-2	 Eliezer Hernandez	  Table Coutries
 * LAST LINE HISTORY
 */
import React from 'react';

import { Cards, CountryPicker, Chart, ChartTypeSelect, Footer, TableCountries } from './components';
import { fetchData, fetchConfirmed } from './api/';
import styles from './App.module.css';
import image from './images/covidImage.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
    chartType:'barChart',
    tableData:[]
  }

  async componentDidMount() {
    const data = await fetchData();
    const tableData = await fetchConfirmed();
    //console.log(tableData)

    this.setState({ data, tableData });
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
    const { data, country, chartType, tableData } = this.state;
    //console.log(this.state.tableData)
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {(this.state.country!=="")?
        <ChartTypeSelect handleChartTypeChange={this.handleChartTypeChange}/>:""}        
        <Chart data={data} country={country} charType={chartType}/>
        
        <TableCountries data={tableData}/>
        <Footer description="Information about COVID-19" title={"COVID-19 tracker by Eliezer Hernández"}/>
        
      
      </div>
    );
  }
}

export default App;