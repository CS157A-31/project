import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

const Event = props => {
  return (
    <div className='container'>
      <MUIDataTable
        title={'Category Table'}
        data={props.data}
        columns={props.columns}
        options={props.options}
      />

      <div className='row'>
        <div className='col s8'>
          <button
            style={{
              width: '200px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              marginTop: '1rem'
            }}
            type='submit'
            className='btn btn-large waves-effect waves-light hoverable blue accent-3'
          >
            Add Category
          </button>
        </div>

        <div className='col s6'>
          <button
            style={{
              width: '200px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              marginTop: '1rem'
            }}
            type='submit'
            className='btn btn-large waves-effect waves-light hoverable blue accent-3'
          >
            Calculate
          </button>
        </div>

        <div className='col s6'>
          <button
            style={{
              width: '200px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              marginTop: '1rem'
            }}
            type='submit'
            className='btn btn-large waves-effect waves-light hoverable blue accent-3'
          >
            Add new row
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
