import React, { useState} from 'react';
import { GET_NEAR_STARLINKS } from "../apollo"
import Globe from '../assets/javascripts/react-globe.gl.min';
import { useQuery } from 'react-apollo'
import '../assets/stylesheets/App.scss'


const Starlinks = () => {
    const [places, setPlaces] = useState([]);
    const [variables, setVariables] = useState({
        latitude: 11.11111,
        longitude: 11.11111,
        amount: 20
    })
    console.log(places)
    const updateState = (event) => {
        setVariables({
            ...variables,
            [event.target.name]: event.target.value
        });
    };

    const useImperativeQuery = (query) => {
        const { refetch } = useQuery(query,
            {
                skip: true,
                variables: {
                    latitude: Number(variables.latitude),
                    longitude: Number(variables.longitude),
                    amount: Number(variables.amount)
                }
            });

        const imperativelyCallQuery = (variables) => {
            return refetch(variables);
        }
        return imperativelyCallQuery;
    }

    const callQuery = useImperativeQuery(GET_NEAR_STARLINKS);

    const getStarlinks = async () => {
        const{ data, error } = await callQuery();
        setPlaces(data.nearStarlinks)
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (variables.latitude === '' || variables.longitude === '' || variables.amount === '' ) {
            return;
        }
        getStarlinks();
    }

    return <>
        <form onSubmit={submitForm} className="form">
            <label htmlFor="latitude">Latitude</label>
            <input
                name="latitude"
                value={variables.latitude}
                onChange={updateState}
                type='number'
                step="any"
                onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() }
            />
            <label htmlFor="longitude">longitude</label>
            <input
                name="longitude"
                value={variables.longitude}
                onChange={updateState}
                type='number'
                step="any"
                onKeyDown={ (evt) => evt.key === 'e' && evt.preventDefault() }
            />
            <label htmlFor="longitude">number of satellites</label>
            <input
                name="amount"
                value={variables.amount}
                onChange={updateState}
                type='number'
                min="1"
            />
            <button type='submit'>enviar</button>
        </form>
        <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

            showGraticules={true}
            labelsData={places}
            labelText={() => ''}
            labelLat="latitude"
            labelLng="longitude"
            labelSize={0.4}
            labelDotRadius={0.4}
            labelDotOrientation={d => 'to   p'}
            labelColor={d => 'yellow'}
            labelLabel={d => d.name}
        />
    </>;
};

export default Starlinks;