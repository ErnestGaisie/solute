import React from 'react'

// Reusable Dropdown
class Dropdown extends React.Component {
    // selectValue => current selected value
    // filterData => choices in the dropdown
    // setFilteredData => function to change the selectValue
    handleChange = e => {
     this.props.setFilteredData(e.target.value);
    };
    render() {
       const { selectValue, filterData } = this.props;
       
       return (
          <div className='ddown'>
             <select 
                value={selectValue} 
                onChange={this.handleChange}
             >
               <option hidden>Select your option</option>
                  {filterData.map(data => {
                    return (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    );
                  })}
             </select>
          </div>
        );
     }
   };

   export default Dropdown