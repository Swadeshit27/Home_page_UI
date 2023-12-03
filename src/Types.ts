export interface NavItemType {
  name: string;
  link: string;
  href: Boolean;
}

export interface DiscoverItemType {
  title: string;
  subtitle: string;
  subtitleBG: string;
  description: string;
  imagePath: string;
  comment: {
    imgSrc: string;
    commentDescription: string;
    userDetails: string;
  };
  isReverse: boolean;
}
export interface FeaturesCardItemsType {
  cardImage: string;
  cardHeader: string;
  cardHeaderBgColor: string;
  cardDescription: string;
}
export interface ReviewCardItemsType {
  category: string;
  header: string;
  title: string;
  price: number;
  description: string;
  Trial: string;
  features: string[];
  specialComment: Boolean;
}
export interface FaqItemsType {
  question: string;
  answer: string;
}

export interface BlogItemsType {
  id: number;
  title: string;
  postImage: string;
  description: string;
  postUserImage: string;
  postUserName: string;
  postTime: string;
  moreDetails: {
    heading: string;
    details: string;
  }[];
  topBottomDetails: string[];
}

export interface FooterItemsType {
  name: string;
  link: string;
}
