import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SubTitle from '../../Shared/SubTitle/SubTitle';
import Heading from '../../Shared/Heading/Heading';
import SubHeading from '../../Shared/SubHeading/SubHeading';
import './Sites.scss'

function Sites() {
  const [loading, setLoading] = useState(true);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const { data } = await axios.get('https://tracktik-challenge.staffr.com/sites', {params: {_limit: 20}});
        setSites(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getAddress = ({street}) => <span className="site__address">{street}</span>;

  const getMainContact = ({firstName, lastName}) => (firstName || lastName) && <span className="site__contact">{firstName} {lastName}</span>;
  
  const getImage = (images, alt) => {
    let src='';
    if(Array.isArray(images) && images.length) {
      // if there is any image grab it!
      src = images[0];
    }

    return src ? <img className="thumbnail" src={src} alt={alt} /> : null;
  }

  const sitesElement = Array.isArray(sites) && sites.map(site => (
    <li key={site.id} className="site">
      <span className="site__image">
        {getImage(site.images, site.title)}
      </span>
      <span className="site__info">
        <span className="site__name">{site.title}</span>
        {getAddress(site.address)}
        {getMainContact(site.contacts && site.contacts.main)}
      </span>
      <span className="site__link">
        <Icon icon={faChevronRight} />
      </span>
    </li>
  ));

  return (
    <div className="sites">
      <SubTitle>Sites</SubTitle>
      {loading && <span className="sites__loading">Fetching sites, please wait...</span>}
      {!loading &&(
        <>
          <span className="sites__bar top-bar">
            <span className="top-bar__filter">filter</span>
            <span className="top-bar__search">search</span>
          </span>

          <Heading>Heading example</Heading>
          <SubHeading>Subheading example</SubHeading>
          <ul className="list">
            {sitesElement}
          </ul>
        </>
      )}
    </div>
  );
}

export default Sites;
