import React from 'react'
import data from '../data/data'
import Footer from './Footer'

function Quote() {
    return (
        <>
            {
                data.map((item, index) => {
                    return <div key={index} style={{ textAlign: "center", maxWidth: '90%', border: "1px solid grey", padding: "1rem", borderRadius: "10px", margin: "10px", marginRight: "auto", marginLeft: "auto" }}>
                        <div className="rounded-lg flex flex-col justify-center items-center h-full">
                            <h1 style={{ fontSize: "20px" }}>{item.quote}</h1>
                            <p style={{ marginTop: "1rem" }}>{item.author}</p>
                        </div>
                    </div>
                })
            }
            <Footer />
        </>
    )
}

export default Quote