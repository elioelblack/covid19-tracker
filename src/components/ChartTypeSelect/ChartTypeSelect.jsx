/**
 * Fecha		  COV	     Nombre				      Descripcion
 * ------------	-------- ------------------- ---------------------------------------------
 * 16/04/2020	COV-1	 Eliezer Hernandez	    Types of charts to visualize.
 * LAST LINE HISTORY
 */
import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './ChartTypeSelect.module.css';

const ChartTypeSelect = ({ handleChartTypeChange }) => {
  return (
    <FormControl style={{backgroundColor:'darkcyan'}} className={styles.formControl}  variant="filled">
      <NativeSelect  defaultValue="" onChange={(e) => handleChartTypeChange(e.target.value)}>
        <option value="barChart">Bar Chart</option>
        <option value="pieChart">Pie Chart</option>        
      </NativeSelect>
    </FormControl>
  );
};

export default ChartTypeSelect;
