import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMapMarkerAlt, faPhoneAlt, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SiteDetails.scss';
import { Emphasis, Heading, SubTitle } from '../../Shared';
import { getAddress, getImage, getMainContact } from '../../Utils/SiteUtils';

function SiteDetails() {
  const [site, setSite] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://tracktik-challenge.staffr.com/sites', { params: { id } });
        if (data && Array.isArray(data)) {
          setSite(data[0]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="site-details">
      {loading && <Heading className="loading"><Emphasis>Fetching sites, please wait...</Emphasis></Heading>}
      {site && site.id && (
        <div>
          <SubTitle>
            <span className="site-details-title">
              <Icon icon={faChevronLeft} className="site-details-title__icon" onClick={() => history.push('/sites')} />
              <span className="site-details-title__details">
                {getImage(site.images, site.title)}
                <span className="site-details-title__data">
                  <span className="site-details-title__title">{site.title}</span>
                  {getAddress(site.address)}
                  {getMainContact(site.contacts && site.contacts.main)}
                </span>
              </span>
            </span>
          </SubTitle>
          {getImage(site.images, site.title)}
          <div className="site-details__info">
            <span className="info__field">
              <span className="info-icon" >
                <Icon icon={faUser} />
              </span>
              <span className="info__data">
                {getMainContact(site.contacts && site.contacts.main)}
                <Emphasis>{site.contacts && site.contacts.main && site.contacts.main.jobTitle}</Emphasis>
              </span>
            </span>
            <span className="info__field">
              <span className="info-icon" >
                <Icon icon={faPhoneAlt} />
              </span>
              <span className="info__data">
                {site.contacts && site.contacts.main && site.contacts.main.phoneNumber}
              </span>
            </span>
            <span className="info__field">
              <span className="info-icon" >
                <Icon icon={faEnvelope} />
              </span>
              <span className="info__data">
                {site.contacts && site.contacts.main && site.contacts.main.email}
              </span>
            </span>
            <span className="info__field">
              <span className="info-icon" >
                <Icon icon={faMapMarkerAlt} />
              </span>
              <span className="info__data">
                {getAddress(site.address)}
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SiteDetails
