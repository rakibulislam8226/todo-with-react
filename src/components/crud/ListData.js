import React from 'react'
import { useState } from 'react'

import AddData from '../AddData';


export default function Data() {
  const [data, setData] = useState(
    [
      {
        "id": 1,
        "name": "rakib",
        "dob": "20/8/2018"
      },
      {
        "id": 2,
        "name": "mossadek",
        "dob": "30/8/2018"
      },
      {
        "id": 3,
        "name": "samin",
        "dob": "15/8/2022"
      },
    ]
  );

  const [showModal, setShowModal] = useState(false)

  const deleteData = (id) => {
    const filterData = data.filter(data => data.id !== id)
    setData(filterData)
  }

  return (
    <div>
      <div className='container'>
        {
          data.length > 0 ? data.map(data => (
            <div className="card" key={data.id} onClick={() => deleteData(data.id)}>
              <h2>{data.name}</h2>
              <h4>{data.dob}</h4>
            </div>
          )) : <h3 style={{ color: "red",  }}>No data in the list.</h3>
        }
      </div >

      <div className="add-button">
        <button onClick={() => setShowModal(true)}>Add</button>
        <button >Test</button>

        {showModal && <AddData setShowModal={setShowModal} setData={setData} />}
      </div>
    </div>
  )
}
