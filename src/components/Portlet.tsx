import React, { Key, useEffect, useState } from 'react';
import { PORTLET_API_URL } from '../Constant';
import fetchData from '../api/PortletApi';
import "./Portlet.css";

const Portlet = () => {

    type portletType = {
        id: Key,
        link: URL,
        name: String
        }
    
    const [portlet, setPortlet] = useState([]);
    const [fullWidth, setFullWidth] = useState("");

    useEffect( () => {
        const callApi = async () => {
            const data = await fetchData(PORTLET_API_URL, {});
            setPortlet(data.data);
            setFullWidth((data.data.length%2==0)?"":"fullWidth");
        }
        callApi();
    });
  return (
    <>  
        <div className="container">
            {portlet?.map( (portal:portletType,i) => (
                <div key={portal?.id} className={(i==portlet.length-1)?"portletContainer " + fullWidth:"portletContainer"}>
                    <div className='portletOuterebox'>
                        <div className='portletInnerBox'></div>
                    </div>
                    <div className='portletTitle'>{portal?.name}</div>
                </div>
            ))}
        </div>
        <div><h2>Mail Change</h2></div>
    </>
  )
}

export default Portlet;