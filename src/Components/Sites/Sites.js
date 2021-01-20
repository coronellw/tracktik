import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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
import { setSites, setSite, setCurrentPage } from '../../Store/actions';

import './Sites.scss'

function Sites(props) {
  const [loading, setLoading] = useState(true);
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const history = useHistory();
  const { setSites, setCurrentPage, sites } = props;

  useEffect(() => {
    // if there are sites already in store, then do not fetch again
    if(Array.isArray(sites) && sites.length) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const { data, headers } = await axios.get('https://tracktik-challenge.staffr.com/sites', { params: { _limit: 20, _page: 1 } });
        const { link } = headers;
        // TODO link contains prev, next, first and last of pagination
        console.log(link)
        setSites(data);
        setCurrentPage(1);
        const options = Array.isArray ? [...new Set(data.map(site => ({ label: site.title, value: site.id })))] : [];
        setDropdownOptions(options);
        setLoading(false);
      } catch (error) {
        // TODO add error message to Redux
        console.log(error.message);
        setSites([]);
        setCurrentPage(0);
        setLoading(false);
      }
    }

    fetchData();
  }, [setCurrentPage, setSites, sites]);

  const handleRedirect = site => {
    setSite(site);
    history.push(`/sites/${site.id}`);
  }

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

const mapStateToProps = state => {
  const { sites, currentPage, site } = state.sites;
  return { sites, currentPage, site }
}

export default connect(
  mapStateToProps,
  {
    setSite,
    setSites,
    setCurrentPage
  }
)(Sites);
