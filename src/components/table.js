import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import {AiOutlineCheck } from 'react-icons/ai'

import {BsXCircle} from 'react-icons/bs'
import { COLUMNS } from './column'
import './table.css'

export const Table = () => {
    const checkstyle={
        backgroundColor:"rgba(54, 179, 126, 0.3)",
        color:"#36b37e",
        borderRadius:"10px",
        width:"19px",
        height:"17px"
        

    }
    const crossstyle={
      backgroundColor: "rgba(255,86,48,0.3)",
      color:"#ff5630",
      borderRadius:"6px"
      

  }
  const  MOCK_DATA=[{"features":"Centralized teams","starter":<AiOutlineCheck  style={checkstyle}/>,"Professional":<AiOutlineCheck  style={checkstyle}/>,"organisation":<AiOutlineCheck  style={checkstyle}/>},

  {"features":"Version history","starter":<AiOutlineCheck style={checkstyle}/>,"Professional":<AiOutlineCheck  style={checkstyle}/>,"organisation":<AiOutlineCheck  style={checkstyle}/>},

  {"features":"Plugin administration","starter": <AiOutlineCheck  style={checkstyle}/>,"Professional":<AiOutlineCheck  style={checkstyle}/>,"organisation":<AiOutlineCheck  style={checkstyle}/>},

  {"features":"Facebook & Instagram Ads","starter":<BsXCircle style={crossstyle}/>,"Professional":<AiOutlineCheck  style={checkstyle}/>,"organisation":<AiOutlineCheck  style={checkstyle}/>},
  
  {"features":"Design System Analytics","starter":<BsXCircle style={crossstyle}/>,"Professional":<BsXCircle style={crossstyle}/>,"organisation":<AiOutlineCheck  style={checkstyle}/>},

  {"features":"Unlimited cloud storage","starter":<BsXCircle style={crossstyle}/>,"Professional":<BsXCircle style={crossstyle}/>,"organisation":<AiOutlineCheck  style={checkstyle}/>}

]
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
   
      <table {...getTableProps()}>
      
          
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}> {column.render('Header')}</th>
              ))}
            </tr>
          ))}
         
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr  {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>
                  
                  {cell.render('Cell')}
                  
                  </td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}