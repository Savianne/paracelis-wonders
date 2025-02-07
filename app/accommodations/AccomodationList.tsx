'use client';
import styled from "styled-components";
import React from "react";
import { motion } from "motion/react";
import { IStyledFC } from "../types/IStyledFC";

interface IAccommodation {
    title: string;
    contactPerson: {name: string, contactNumber?: string};
    numberOfRooms: number;
    features: string;
}


const accommodations: IAccommodation[] = [
    {
        title: "RN LAPPON TRAVELLER INN",
        contactPerson: {
            name: "Kenneth L. Lappon",
            contactNumber: '09206031875'
        },
        numberOfRooms: 15,
        features: "Airconditoned Rooms, Free flowing drinking water, native brewed coffee, function hall with parking area, meals can be served but pre arrange"
    },
    {
        title: 'JM LODGING INN.',
        contactPerson: {
            name: "Emma Tamang",
            contactNumber: "09298441589"
        },
        numberOfRooms: 5,
        features: "Airconditioned Rooms, with flowing coffe"
    },
    {
        title: "ATLANTIS HOTEL & RESTOURANT",
        contactPerson: {
            name: 'Odeza A. Lausan'
        },
        numberOfRooms: 9,
        features: "5 Rooms with CR, function hall, 4 Rooms with common CR, Souvenir shop"
    },
    {
        title: "INN TAKO & RESTAURANT",
        contactPerson: {
            name: "Marilou E. Balong-ang",
            contactNumber: '09082023788'
        },
        numberOfRooms: 11,
        features: "Common CR and bathroom"
    },
    {
        title: "SAINT WILLIAMS LODGIN INN",
        contactPerson: {
            name: "Fr. Frenzel Piluden",
            contactNumber: '09985587169'
        },
        numberOfRooms: 12,
        features: 'Comfortable Rooms with aircon, hot shower, common CR, Sofa & Flat screen TV'
    }
];

const AccommodationsFC:React.FC<IStyledFC> = ({className}) => {
    return(
        <div className={className}>
            {
                accommodations.map((accommodation, i) => {
                    return(
                        <motion.div  
                        initial={{marginTop: '-50px'}}
                        animate={{marginTop: '0'}}
                        className="item" key={i}>
                            <h1>{accommodation.title}</h1>
                            <h3>No. of Rooms: {accommodation.numberOfRooms}</h3>
                            <h3>Contact Person: {accommodation.contactPerson.name} | {accommodation.contactPerson.contactNumber}</h3>
                            <h3>Fetures: <p>{accommodation.features}</p></h3>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

const Accommodations = styled(AccommodationsFC)`
    display: flex;
    flex: 0 1 100%;
    flex-wrap: wrap;
    gap: 10px;
    padding: 50px 20px;

    && > .item {
        display: flex;
        flex: 0 1 100%;
        padding: 20px;
        flex-direction: column;
        border-radius: 10px;
        gap: 5px;
        background-color: white;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
        /* background-color: #6bc4f82b; */

        > h1 {
            font-size: 20px;
        }

        > h3 {
            font-size: 15px;
            color: #3a3939;
            font-family: WorkSansRegular;
        }

        > h3 > p {
            display: inline;
            font-family: WorkSansThin;
        }
    }
`;

export default Accommodations;