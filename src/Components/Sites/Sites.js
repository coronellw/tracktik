import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SubTitle from '../../Shared/SubTitle/SubTitle';
import {
  SubHeading,
  Emphasis,
  Heading,
  SearchIcon,
  Dropdown,
} from '../../Shared';
import { getAddress, getImage, getMainContact } from '../../Utils/SiteUtils';
import './Sites.scss'

function Sites() {
  const [loading, setLoading] = useState(true);
  const [sites, setSites] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://tracktik-challenge.staffr.com/sites', { params: { _limit: 20 } });
        setSites(data);
        const options = Array.isArray ? data.map(site => ({ label: site.title, value: site.id })) : [];
        setDropdownOptions(options);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleRedirect = site => history.push(`/sites/${site.id}`);

  const sitesElement = Array.isArray(sites) && sites.map(site => (
    <li key={site.id} className="site" onClick={() => handleRedirect(site)}>
      <span className="site__image">
        {getImage(site.images, site.title)}
      </span>
      <span className="site__info">
        <span className="site__name">
          <SubHeading>
            {site.title}
          </SubHeading>
        </span>
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
      <div className="sites__content">
        {loading && <Heading className="loading"><Emphasis>Fetching sites, please wait...</Emphasis></Heading>}
        {!loading && (
          <>
            <span className="sites__bar">
              <span className="top-bar__filter">
                <Dropdown
                  // label="Site: "
                  options={dropdownOptions}
                  defaultOption={{ label: 'All Sites', value: undefined }}
                />
              </span>
              <span className="top-bar__search"><SearchIcon /></span>
            </span>

            <ul className="list">
              {sitesElement}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Sites;
