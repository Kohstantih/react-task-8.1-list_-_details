import { useEffect, useState } from 'react';
import getUserDetails from '../../funcs/getUserDetails';
import { TDetails } from '../../types/TDetails';
import './Details.css';

export default function Details({ id }: { id: number }) {
    const [objDet, setObjDet] = useState<TDetails | null>(null);

    useEffect(() => {
        getUserDetails(import.meta.env.VITE_APP_DETAILS, id)
            .then((response) => response.json())
            .then((data) => setObjDet(data));
    }, [id])

    if (!objDet) return;

    return (
        <div className="details_box">
            <img src={objDet.avatar} className="avatar"/>
            <p className="name details_item">{objDet.name}</p>
            <p className="city details_item">City: {objDet.details.city}</p>
            <p className="company details_item">Company: {objDet.details.company}</p>
            <p className="position details_item">Position: {objDet.details.position}</p>
        </div>
    )
}