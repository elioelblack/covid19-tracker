/**
 * Fecha		  COV	     Nombre				      Descripcion
 * ------------	-------- ------------------- ---------------------------------------------
 * 16/04/2020	COV-1	 Eliezer Hernandez	  Inicial commit
 * LAST LINE HISTORY
 */
import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl style={{backgroundColor:'darkcyan'}} className={styles.formControl} variant="filled">
      <NativeSelect  defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
