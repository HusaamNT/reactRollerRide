import { useQuery } from "@apollo/client";
import React from "react";
import { GET_TICKETS } from "../utils/Queries";

function Tickets () {

    const { loading, data } = useQuery(GET_TICKETS)
    
    if (loading) {
        return (<p>Loading...</p>)
    } else {
        const tickets = data.getAllPackages;
        return (
        <div className="container-lg">
            <h1>Tickets</h1>
            <div className="row g-2">
            {tickets.map(it => {
                return (
                    <div key={it._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="bg-light p-2 rounded">
                            <h5>{it.ticketName} - {it.passType}</h5>
                            <p>Price: £{it.ticketPrice}</p>
                            <button className="btn btn-success">Buy</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        )
    }
}

export default Tickets;