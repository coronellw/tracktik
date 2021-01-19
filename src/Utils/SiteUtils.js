import { Emphasis, Paragraph } from '../Shared';

export const getAddress = ({ street='' } = {}) => <Emphasis classes={["site-address"]}>{street}</Emphasis>;

export const getMainContact = ({ firstName, lastName } = {}) => (firstName || lastName) && <Paragraph classes="site-contact">{firstName} {lastName}</Paragraph>;

export const getImage = (images, alt) => {
  let src = '';
  if (Array.isArray(images) && images.length) {
    // if there is any image grab it!
    src = images[0];
  }

  //TODO support image for firefox, look for workaround
  return src ? <img className="thumbnail" src={src} alt={alt} width="100%" /> : null;
}