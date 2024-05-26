import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from './use-map';
import 'leaflet/dist/leaflet.css';
import {City, Point} from '../types/offer.tsx';
import pin from '../../markup/img/pin.svg';
import activePin from '../../markup/img/pin-active.svg';

type MapProps = {
  city: City;
  points: Point[];
  selectedPoint: Point | undefined;
  height: string;
  width: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: pin,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: activePin,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint, height, width} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: height, width: width, marginLeft: 'auto', marginRight: 'auto'}} ref={mapRef}></div>;
}

export default Map;
