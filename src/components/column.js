export const COLUMNS = [
    {
      Header: 'Features',
     
      accessor: 'features'
      
      
    },
    {
        Header: ()=><div className="starter">
        <h1>Starter</h1>
        <p>$<span><b>0</b></span></p>
        <span> <p className="text">Per use,per month</p></span>
        <span><button className="btn"> Go Starter</button></span>
        </div>,
        
      
        accessor: 'starter'
    },
    {
        Header:  ()=><div className="starter">
        <h1>Professional</h1>
        <p>$<span><b>25</b></span></p>
        <span> <p className="text" >Per use,per month</p></span>
        <span><button className="btn"> Go Professional</button></span>
        </div>,
      
        accessor: 'Professional'
    },
    {
        Header: ()=><div className="starter">
        <h1>Organisation</h1>
        <p>$<span><b>50</b></span></p>
        <span> <p className="text">Per use,per month</p></span>
        <span><button className="btn"> Go Organisation</button></span>
        </div>,
      
        accessor: 'organisation'
      
    },
    
  ]