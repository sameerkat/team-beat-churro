'use strict';

angular.module('teamChurroApp')
  .factory('Categories', function () {

    var categories = [
      {
        id: 'email',
        name: 'Email',
        vendors: [
          {id: 'fishbowl', name: 'Fishbowl', image: 'assets/images/logos/fishbowl.png', features:['email_sending']},
          {id: 'exacttarget', name: 'Exact Target', image: 'assets/images/logos/exacttarget.png'},
          {id: 'mailchimp', name: 'MailChimp', image: 'assets/images/logos/mailchimp.png'},
          {id: 'constantcontact', name: 'Constant Contact', image: 'assets/images/logos/constantcontact.png'}
        ]
      },
      {
        id: 'loyalty',
        name: 'Loyalty',
        vendors: [
          {id: 'punchh', name: 'Punchh', image: 'assets/images/logos/punchh.png'},
          {id: 'paytronix', name: 'Paytronix', image: 'assets/images/logos/paytronix.png'},
          {id: 'fivestars', name: 'Fivestars', image: 'assets/images/logos/fivestars.png'}
        ]
      },
      {
        id: 'pos',
        name: 'POS',
        vendors: [
          {id: 'micros', name: 'Micros', image: 'assets/images/logos/micros.png'},
          {id: 'aloha', name: 'Aloha', image: 'assets/images/logos/ncraloha.png'},
          {id: 'positouch', name: 'Positouch', image: 'assets/images/logos/positouch.png'}
        ]
      },
      {
        id: 'data_insights',
        name: 'Data Insights',
        vendors: [
          {id: 'beanstalk', name: 'Beanstalk', image: ''},
          {id: 'marketingvitals', name: 'Marketing Vitals', image: 'assets/images/logos/marketingvitals.png'},
          {id: 'acxiom', name: 'Acxiom', image: 'assets/images/logos/acxiom.png'},
          {id: 'zipscene', name: 'ZipScene', image: ''},
          {id: 'dunnhumby', name: 'DunnHumby', image: ''}
        ]
      }
    ];

    var features = [
        { id: "email_sending", name: "Email Sending", weight: 1,
          pos: "You're able to deliver optimized emails to your entire customer database.",
          neg: "Email marketing is still the most effective channel for marketing campaigns."},
        { id: "ab_testing", name: "A/B testing", weight: 1,
          pos: "You're able to run A/B tests on all of your marketing campaigns.",
          neg: "A/B testing will help you iterate and improve on all of your marketing campaigns."},
        { id: "personalized_messaging", name: "Personalized messaging", weight: 2,
          pos: "You're able to deliver personalized messages to specific customers segments.",
          neg: "Adding personalization to your email messaging would boost campaign results."},
        { id: "campaign_automation", name: "Campaign Automation", weight: 2,
          pos: "You're able saving time and money with fully automated marketing campaigns.",
          neg: "You could be saving time and money with automated marketing campaigns."},
        { id: "loyalty_tracking", name: "Loyalty Tracking", weight: 1,
          pos: "You have a rich customer database thanks to your loyalty program.",
          neg: "Implementing a loyalty program will help you build a richer customer database."},
        { id: "coupons_rewards", name: "Coupons and Rewards", weight: 1,
          pos: "You're using coupons and rewards to help bolster customer loyalty.",
          neg: "Coupons and rewards are a great way of improving customer loyalty."},
        { id: "website_customization", name: "Website customization", weight: 1,
          pos: "Your website is optimized for customer database growth.",
          neg: "Your website could be better optimized for customer database growth."},
        { id: "customer_db_building", name: "Customer database building", weight: 1,
          pos: "You're capturing customer data both from both in-store and online traffic",
          neg: "Improving in-store and online capture would dramatically improve database growth."},
        { id: "segmentation", name: "Segmentation", weight: 3,
          pos: "You're customer data is organized into specific customer segments.",
          neg: "Sorting your customers into segments would allow for more intelligent marketing campaigns."},
        { id: "predict", name: "Predictive Technology", weight: 3,
          pos: "You're leveraging predictive technology to make more intelligent business decisions",
          neg: "By leveraging predictive technology you could improve your business decision making."},
        { id: "pos", name: "POS integration", weight: 2,
          pos: "You have easy access to your customer transaction data.",
          neg: "POS software will give you access to all of your customer transaction data."},
        { id: "roi", name: "ROI Reports on Marketing Campaigns", weight: 2,
          pos: "You can connect each of your marketing campaigns to a real sales result.",
          neg: "Real-time ROI reporting would allow you to connect each campaign a real sales result."} 
    ];

    var defaultSelections = [
      {category:'email', vendor: 'fishbowl'},
      {category:'loyalty', vendor: 'punchh'},
      {category:'pos', vendor: 'micros'},
      {category:'data_insights', vendor: 'acxiom'}
    ];


    // Public API here
    return {

      get: function () {
        return categories;
      },

      default: function () {
        return defaultSelections;
      }

    };
  });
